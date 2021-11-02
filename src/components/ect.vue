<template>
    <div>

        <div class="form-group" v-for="(input,k) in inputs" :key="k">
            <input type="text" class="form-control" v-model="input.name">
            <span>
                <i class="fas fa-minus-circle" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)"></i>
                <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1"></i>
            </span>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
             inputs : [
                    {
                        name : ''
                    }
                ]
            }
        },
        methods : {
            add() {
                this.inputs.push({ name: '' });
            },
            remove(index) {
                this.inputs.splice(index, 1);
            },
        }
    }
</script>

<style scoped>
input.form-control {
    width: 300px;
    height: 30px;
}
/* #input_box.form-control {
    width: 300px;
    height: 30px;
} */


</style>