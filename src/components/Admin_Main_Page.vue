<template>
    <div class="chartWrapper">
        <LineChart :options="LineChartOptions" :series="seriesLineChart"></LineChart>
        <PieChart :options="chartOptions" :series="seriesPieChart"></PieChart>
    </div>

</template>

<script>
import {getCurrentInstance} from '@vue/runtime-core';
import axios from 'axios';
import PieChart from '@/components/chart/PieChart.vue';
import LineChart from '@/components/chart/LineChart.vue';
export default {
    data(){
        return{
            token: sessionStorage.getItem("token"),
            $socket : '',
            // PieChart.vue 자식 컴포넌트에 보내는 데이터
            seriesPieChart: [],
            chartOptions: {
                chart: {
                    type: 'polarArea',
                    height: 450,
                },
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                },
                labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"],
            },

            // LineChart.vue 자식 컴포넌트에 보내는 데이터
            seriesLineChart: [{
                name: "하루 판매량",
                data: []
            }],
            LineChartOptions :{
                chart: {
                    height: 650,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    lineCap : 'round'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: [1],
                    labels: {
                        rotate: -45,
                        style :{
                            color : '#49654E',
                            fontFamily : 'Gowun Dodum, sans-serif',
                            fontWeight : 700
                        }
                    },
                }
                
            }
        }
    },
    components : {
        PieChart : PieChart,
        LineChart : LineChart
    },
    async created(){
        await this.getDailySalesRate();
        await this.getBrandPercentage();
        const app = getCurrentInstance();
        this.$socket = app.appContext.config.globalProperties.$socket;
        // console.log(this.$socket);
    },
    mounted() {
        this.$socket.on("sell", async (recv) => {
            console.log(recv);
            await this.getDailySalesRate();
        })
    },
    methods : {
        async getDailySalesRate(){
            const url = `REST/api/admin/payhistory/list`;
            const headers = {"token" : this.token};
            const response = await axios.get(url, {headers});
            // console.log(response);
            if(response.data.result === 1){
                for(var i=0; i<response.data.list.length; i++){
                    this.LineChartOptions.xaxis.categories[i] = response.data.list[i].DUAL_DATE;
                    this.seriesLineChart[0].data[i] = response.data.list[i].CNT;
                }
            }
        },
        async getBrandPercentage(){
            const url = `REST/api/admin/brand/share`;
            const headers = {"token" : this.token};
            const response = await axios.get(url, {headers});
            // console.log(response);
            if(response.data.result === 1){
                for(var i=0; i<5; i++){
                    this.seriesPieChart[i] = response.data.list[i].PERCENTAGE;
                    this.chartOptions.labels[i] = response.data.list[i].BRANDNAME;
                }
                // console.log(this.seriesPieChart);
                // console.log(this.chartOptions.labels);
            }
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.chartWrapper{
    width: 100%;
    height: 100%;
    display: inline-flex;
}
.chart1{
    width: 60%;
    display: flex;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
}
.chart1 > p {
    font-size: 20px;
    width: fit-content;
    margin: 30px;
    font-weight: bold;
}
</style>