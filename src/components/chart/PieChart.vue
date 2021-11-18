<template>
  <div id="chart" class="chart1">
    <p>PieChart 자식 컴포넌트</p>
    <apexchart type="polarArea" width='100%' :series="seriesPieChart" :options="chartOptions"></apexchart>
  </div>
</template>

<script>
  export default {
    props : ['series', 'options'],
    data(){
        return{
          seriesPieChart : this.series,
          chartOptions : this.options
        }
    },
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




