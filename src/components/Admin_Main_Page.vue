<template>
    <div class="chartWrapper">
        <div id="chart" class="chart1">
            <p>브랜드 점유율</p>
            <apexchart type="polarArea" :options="chartOptions" :series="series" width='100%'></apexchart>
        </div>
        <div id="chart" class="chart1">
            <p>브랜드 점유율</p>
            <apexchart type="polarArea" :options="chartOptions" :series="series" width='100%'></apexchart>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            // polarArea -> data 는 series[], 해당 항목명은 labels []
            series: [23, 11, 54, 72, 12],
            labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"],
            chartOptions: {
                chart: {
                    type: 'polarArea',
                },
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                },
                // responsive: [{
                //     breakpoint: 480,
                //     options: {
                //         chart: {
                //             width : 200,
                //             height : 200},
                //         legend: {
                //             position: 'bottom'
                //         }
                //     }
                // }]
            },
        }
    },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.chartWrapper{
    width: 100%;
    height: 100%;
    border: 1px solid red;
    display: inline-flex;
}
.chart1{
    width: 60%;
    border: 1px solid black;
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