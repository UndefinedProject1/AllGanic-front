<template>
    <div class="info_wapper">
        <MyPage_Info></MyPage_Info>
    </div>
</template>

<script>
import MyPage_Info from '@/components/MyPage_Info.vue';
    export default {
         data() {
            return {
            }
        },
        components : {
            MyPage_Info : MyPage_Info
        },
        methods : {
        }
    }
</script>

<style scoped>
.info_wapper {
    /* border: 1px solsid black; */
    display: flex;
    padding: 40px;
    font-family: 'Gowun Dodum', sans-serif;
    margin-top: 4.5%;
}
</style>