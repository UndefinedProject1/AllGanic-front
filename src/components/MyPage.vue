<template>
    <div class="info_wapper">
        <div class="info_box">
            <div class="info_name">
                <span>정지희</span>
                <p>님</p>
            </div>
                <div class="info_info">
                    <div class="info_email">
                        <img :src="login_email"/>
                        <p>sksmsdiWkd!@naver.com</p>
                    </div>
                    <div class="info_address">
                        <img :src="mypage_address"/>
                        <p>Address: 43 Oxford Road M13 4GR Manchester, UK</p>
                        <!-- <div class="info_adupdate_btn"> -->
                            <button type="button" @click="handleAdUpdate">기본주소 수정</button>
                        <!-- </div> -->
                    </div>
                </div>
            <hr class="solid" />
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import login_email from '@/assets/login_email.png';
import mypage_address from '@/assets/mypage_address.png';

    export default {
        data() {
            return {
                login_email : login_email,
                mypage_address : mypage_address,
            }
        },
        components : {
            Footer : Footer
        },
        methods : {

        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.info_wapper {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    padding: 20px;
}
.info_box {
    border: 1px solid black;
    width: 400px;
    height: 100%;
    border-radius: 10px;
}
.info_info {
    border: 1px solid black;
    margin-left: 14px;
}
.info_name {
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.info_name > span {
    color: #49654E;
    font-size: 30px;
    font-weight: 300;
    font-family: 'Gowun Dodum', sans-serif;
}
.info_name > p {
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 20px;
    color: black;
    margin-left: 5px;
    margin-top: 10px;
}
.info_email {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.info_email > img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
}
.info_address {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 5px;
}
.info_address >img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    margin-top: 12px;
}
.solid {
    width : 100%;
    height: 1px;
}
.info_address > button {
    border: 1px solid black;
    width: 125px;
    height: 25px;
    border-radius: 5px;
    font-size: 13px;
}
</style>