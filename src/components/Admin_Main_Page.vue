<template>
    <div class="chartWrapper">
        <PieChart></PieChart>
    </div>
</template>

<script>
import PieChart from '@/components/chart/PieChart.vue'
    export default {
        data(){

        },
        components : {
            PieChart : PieChart,
        }
    }
</script>

<style scoped>
.chartWrapper{
    width : 50%;
    height : 50%;
}
</style>