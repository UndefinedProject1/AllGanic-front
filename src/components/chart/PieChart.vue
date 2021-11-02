<script>
// import axios from 'axios';
import {Pie} from 'vue3-chart-v2';
    export default {
        name : 'PieChart',
        extends : Pie,

        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart({
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [
                    {
                    label: 'GitHub Commits',
                    backgroundColor: ['#f87979', '#CCA53F', '#17341C', '#49654E','#715036'],
                    data: [40, 20, 12, 39, 10]
                    }
                ]
            })
        }
    }

</script>
