<template>
  <div id="chart" class="chart1">
    <p>현 브랜드 점유율</p>
    <apexchart type="polarArea" width='100%' :series="seriesPieChart" :options="chartOptions" class="apexchart"></apexchart>
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




