<template>
    <div id="chart" class="chart1">
        <p>일일 판매량</p>
        <apexchart type="line" width='100%' :series="seriesLineChart" :options="LineChartOptions" class="apexchart"></apexchart>
        <span> * 판매량은 실시간으로 반영된 결과 입니다.</span>
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
    height: fit-content;
    width: 50%;
    display: flex;
    margin: 10px;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
}
.chart1 > p {
    font-size: 20px;
    width: fit-content;
    margin: 30px 0px 20px 20px;
    font-weight: bold;
}
.chart1 > span {
    font-size: 16px;
    width: 95%;
    margin: 20px 0px 20px 20px;
    font-weight: bold;
    color: red;
    text-align: right;
}
.apexchart{
    padding: 10px;
    width: 100%;
    border: 0.5px solid #eeeeee;
    display: flex;
    font-family: 'Gowun Dodum', sans-serif;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>