<template>
    <div class="chart_wrapper">
        <div class="chart_container">
            <p>카테고리별 누적판매율</p>
            <div id="chart">
                <apexchart type="bar" height="530" :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                series: [{
                    name: 'Servings',
                    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
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
                        categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
                            'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
                        ],
                        tickPlacement: 'on',
                        title: {
                            text: '카테고리 현황',
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
                            gradientToColors: ['#4299D3'],
                            // inverseColors: true,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [50, 80, 100]
                        },
                    }
                },
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500&display=swap');
.chart_wrapper{
    width: 100%;
    display: flex;
    padding: 30px;
}
.chart_container{
    /* border: 1px solid black; */
    width: 98%;
    display: flex;
    flex-direction: column;
}
.chart_container > p{
    /* border: 1px solid black; */
    width: fit-content;
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 30px;
    font-weight: bold;
    margin: 0px 0px 20px 20px;
}
#chart{
    width : 100%;
}
</style>