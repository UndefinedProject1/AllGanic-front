<template>
    <div id="chart" class="chart1">
        <p>PieChart 자식 컴포넌트</p>
        <apexchart type="line" width='100%' :series="seriesLineChart" :options="LineChartOptions"></apexchart>
    </div>
</template>

<script>
    export default {
        // props : ['자식쪽에서 지정한 받을 데이터 변수명']
        props : ['series', 'options'],
        data(){
            return{
                // 부모쪽에서 오는 데이터명 : this.props에 지정한 변수명
                seriesLineChart : this.series,
                LineChartOptions : this.options
            }
        }
        
    }
</script>

<style scoped>
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