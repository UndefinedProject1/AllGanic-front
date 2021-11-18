<template>
    <div class="info_wapper">
        <MyPage_Info></MyPage_Info>
    </div>
</template>

<script>
// import axios from 'axios';
// import mypage_mail from '@/assets/mypage_mail.png';
// import mypage_address from '@/assets/mypage_address.png';
// import mypage from '@/assets/mypage.png';
import MyPage_Info from '@/components/MyPage_Info.vue';
    export default {
         data() {
            return {
            }
        },
        components : {
            MyPage_Info : MyPage_Info
        },
        async created() {
            await this.handleMypageInfo();
        },
        methods : {
            handleMypageInfo(){
                this.$emit('changeLogged', true);
            }
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