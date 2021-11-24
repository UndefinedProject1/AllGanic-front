<template>
    <div class="chart_wrapper">
        <div class="chart_header">
            <p>통계</p>
            <span> > </span>
            <p id="chosen">브랜드별 누적판매율</p>
        </div>
        <div class="chart_divider"></div>
        <div id="chart">
            <apexchart type="bar" height="530" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script>
import {getCurrentInstance} from '@vue/runtime-core';
import axios from 'axios';
    export default {
        data(){
            return{
                token: sessionStorage.getItem("token"),
                $socket : '',
                series: [{
                    name: '판매율',
                    data: []
                }],
                chartOptions: {
                    annotations: {
                        points: [{
                            x: 'Pomegranates',
                            seriesIndex: 0,
                            label: {
                                offsetY: 0,
                                style: {
                                    color: '#fff',
                                    background: '#0965A2',
                                },
                                text: 'top',
                            }
                        }]
                    },
                    chart: {
                        height: 350,
                        type: 'bar',
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 5,
                            columnWidth: '50%',
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    // stroke: {
                    //     width: 1
                    // },
                    grid: {
                        row: {
                            colors: ['#eee', '#f2f2f2']
                        }
                    },
                    xaxis: {
                        labels: {
                            rotate: -45,
                            style :{
                                color : '#49654E',
                                fontFamily : 'Gowun Dodum, sans-serif',
                                fontWeight : 700,
                                
                            }
                        },
                        categories: [0],
                        tickPlacement: 'on',
                        title: {
                            text: '브랜드 현황',
                            style :{
                                color : '#010925',
                                fontFamily : 'Gowun Dodum, sans-serif',
                                fontWeight : 700,
                                fontSize: '14px'
                            }
                        },
                    },
                    yaxis: {
                        title: {
                            text: '누적판매율',
                            style :{
                                color : '#010925',
                                fontFamily : 'Gowun Dodum, sans-serif',
                                fontWeight : 700,
                                fontSize: '14px'
                            }
                        },
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'light',
                            type: "vertical",
                            shadeIntensity: 1,
                            gradientToColors: ['#33ACFF'],
                            // inverseColors: true,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [50, 80, 100]
                        },
                    }
                },
            }
        },
        async created(){
            await this.getBrandTotalSales();
            const app = getCurrentInstance();
            this.$socket = app.appContext.config.globalProperties.$socket;
            console.log(this.$socket);
        },
        mounted() {
            this.$socket.on("sell", async (recv) => {
                console.log(recv);
                await this.getBrandTotalSales();
            })
        },
        methods : {
            async getBrandTotalSales(){
                const url = `REST/api/admin/brand/sell`;
                const headers = {"token" : this.token};
                const response = await axios.get(url, {headers});
                // console.log(response);
                if(response.data.result === 1){
                    for(var i=0; i<response.data.list.length; i++){
                        this.chartOptions.xaxis.categories[i] = response.data.list[i].BRANDNAME;
                        this.series[0].data[i] = response.data.list[i].CNT;
                    }
                }
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500&display=swap');
.chart_wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    font-family: 'Gowun Dodum', sans-serif;
}
.chart_header {
    height : 14%;
    width : 100%;
    display : flex;
    flex-direction: row;
    align-items: center;
}
.chart_header p, span {
    width : fit-content;
    margin : 0 0px 0px 40px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight : 400;
}
.chart_header > span {
    margin-left : 20px;
}
#chosen {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: 700;
    color: black;
    margin : 0 0px 0px 20px;
}
.chart_divider{
    border: 0.3px solid black;
    height: 0px;
    width: 100%;
}
#chart{
    width : 100%;
    padding: 30px;
}
</style>