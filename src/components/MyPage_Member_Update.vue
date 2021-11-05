<template>
    <div class="mp_m_update">
        <MyPage_Info></MyPage_Info>
            <div class="m_update_insert">
                <p>회원정보 변경</p>
            </div>
            <div class="m_update_box">
               
                <div class="m_update_mail">
                    <img :src="mypage_mail"/>
                    <p>이메일</p>
                    <sapn>sksmsdiWkd!@naver.com</sapn>
                </div>
                <div class="m_password">
                    <div class="m_update_pw">
                        <img :src="mypage_pw"/>
                        <p>비밀번호</p>
                    </div>
                    <div class="u_pw_box">
                        <input type="password" v-model="u_password_text">
                        <button type="button" id="change_pw_btn" @click="handle_pw_btn">비밀번호변경</button>
                    </div>
                </div>
                <div class="m_name">
                    <div class="m_update_name">
                        <img :src="mypage_profile"/>
                        <p>이름</p>
                    </div>
                    <div class="u_name_box">
                        <input type="text" v-model="u_name_text">
                    </div>
                </div>
                <div class="m_phone">
                    <div class="m_update_phone">
                        <img :src="mypage_phone"/>
                        <p>연락처</p>
                    </div>
                    <div class="u_phone_box">
                        <input type="text" v-model="u_phone_text">
                    </div>
                </div>
                <div class="m_address">
                    <div class="m_update_address">
                        <img :src="mypage_address" />
                        <p>주소</p>
                    </div>
                    <div class="m_update_postcode">
                        <input type="text" v-model="update_postcode" readonly value>
                        <p>  /  </p>
                        <input type="text" v-model="update_roadaddress" readonly value style="margin-left:5px;">
                    </div>
                </div>
                <div class="u_address_box">
                    <input type="text" v-model="u_address_text">
                    <button type="button" id="chage_address_btn" @click="handle_ad_btn">우편번호검색</button>
                </div>
                <div id="wrap" style="display:none;border:1px solid;width:500px;height:300px;margin:5px 0;position:relative">
                    <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1" @click="foldDaumPostcode" alt="접기 버튼">
                </div>
            </div>
        </div>
    <Footer></Footer>
</template>

<script>
import MyPage_Info from '@/components/MyPage_Info.vue';
import Footer from '@/components/Footer.vue';
import mypage_mail from '@/assets/mypage_mail.png';
import mypage_pw from '@/assets/mypage_pw.png';
import mypage_profile from '@/assets/mypage_profile.png';
import mypage_phone from '@/assets/mypage_phone.png';
import mypage_address from '@/assets/mypage_address.png';
    export default {
        data() {
            return {
                mypage_mail : mypage_mail,
                mypage_pw : mypage_pw,
                mypage_profile : mypage_profile,
                mypage_phone : mypage_phone,
                mypage_address : mypage_address
            }
        },
        components : {
            Footer : Footer,
            MyPage_Info : MyPage_Info
        },
        methods : {
        }
    }
</script>

<style scoped>
.mp_m_update {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: inline-flex;
    /*  */
    /* width: 100%;
    display: flex;
    border: none; */
    font-family: 'Gowun Dodum', sans-serif;
}
.mp_m_update > p {
    display:  flex;
}
.m_update_box {
    width: 100%;
    border-bottom: 1px solid black;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
}
.m_update_insert {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    border: none;
}
.m_update_insert > p {
    /* border: 1px solid black; */
    color: #715036;
    font-weight: 500;
    margin-bottom: 100px;
    font-size: 18px;
    font-weight: bold;
    width: 110px;
}
.mp_m_update > p {
    height: fit-content;
}
.m_update_mail {
    /* border: 1px solid black; */
    display: flex;
    width: 100%;
    height: fit-content;
}
.m_update_mail > p {
    margin-right: 10px;
}
.m_password {
    width: 100%;
    display: inline-flex;
    align-items: flex-end;
    margin-top: 10px;
}
.m_update_pw {
    /* border: 1px solid black; */
    display: flex;
    width: fit-content;
}
.m_update_pw > p {
    width: fit-content;
    margin-right: 10px;
    margin-bottom: 5px;
}
.u_pw_box, .u_name_box, .u_phone_box {
    border-bottom: 2px solid black;
    width: 50%;
}
.u_pw_box > input, .u_name_box > input, .u_phone_box > input {
    border : none;
    margin-right: 5px;
    height: 100%;
    width: 70%;
  background-color: #eeeeee;
}
.m_update_mail > img, .m_update_pw > img, .m_update_name > img, .m_update_phone > img {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    margin-right: 5px;
    margin-bottom: 5px;
}
.u_pw_box > button {
    width: 100px;
    height: 25px;
    background-color: #715036;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    margin-left: 55px;
}
.m_name {
    width: 100%;
    display: flex;
    margin-top: 30px;
}
.m_update_name {
    display: flex;
}
.m_update_name > p {
    width: fit-content;
    margin-right: 35px;
    margin-bottom: 5px;
}
.m_phone {
    width: 100%;
    display: flex;
    margin-top: 30px;
}
.m_update_phone {
    /* border: 1px solid black; */
    display: flex;
}
.m_update_phone > p {
    margin-right: 22px;
    width: fit-content;
    margin-bottom: 5px;
}
.m_address {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    margin-top: 30px;
}
.m_update_address > img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
}
.m_update_address {
    /* border: 1px solid black; */
    display: flex;
    height: 30px;
}
.m_update_postcode {
    display: flex;
    border-bottom: 2px solid black;
    width: 50%;
    margin-left: 33px;
    height: 35px;
    margin-top: 30px;
}
.m_update_postcode > input {
    /* border: 1px solid black; */
    border : none;
    margin-right: 5px;
    width: 40%;
    height: 32px;
    background-color: #eeeeee;
}
.u_address_box {
    /* border: 1px solid black; */
    display: flex;
    border-bottom: 2px solid black;
    width: 50%;
    margin-left: 94px;
    margin-top: 10px;
}
.u_address_box > input {
    border: none;
    background-color: #eeeeee;
    width: 80%;
}
.u_address_box > button {
    width: 100px;
    height: 25px;
    background-color: #715036;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    margin-left: 5px;
}
</style>