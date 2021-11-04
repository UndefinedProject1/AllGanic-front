<template>
    <div class="mp_m_update">
        <MyPage_Info></MyPage_Info>
        <div class="m_update_box">
            <p>회원정보 변경</p>
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
                    <input type="password" >
                    <button type="button" id="chage_pw_btn" @click="handle_chang_btn">비밀번호 변경</button>
                </div>
            </div>
            <div class="m_update_name">
                <img :src="mypage_profile"/>
                <p>이름</p>
                <hr class="solid_name" />
            </div>
            <div class="m_update_phone">
                <img :src="mypage_phone"/>
                <p>연락처</p>
                <hr class="solid_phone" />
            </div>
            <div class="m_update_address">
                <img :src="mypage_address" />
                <p>주소</p>

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
    display: flex;
    flex-direction: row;
    font-family: 'Gowun Dodum', sans-serif;
}
.m_update_box {
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
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
.m_update_mail > img {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    margin-right: 5px;
}
.m_password {
    width: 100%;
    display: inline-flex;
    align-items: flex-end;
}
.m_update_pw {
    /* border: 1px solid black; */
    /* width: 100%;
    display: inline-flex;
    align-items: flex-end; */
    
    /* border-width: 300px; */
}
.u_pw_box {
    width: 70%;
    text-transform: lowercase;
    border-bottom : 1px solid black ; 
}
.m_update_pw > p {
    width: fit-content;
    margin-right: 10px;
    margin-bottom: 5px;
}
.m_update_pw > input {
    border : none;
    margin-right: 5px;
    height: 100%;
}
.m_update_pw > img {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    margin-right: 5px;
    margin-bottom: 5px;
}
.m_update_pw > button {
    width: 100px;
    height: 25px;
    background-color: #715036;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    margin-bottom: 3.5px;
}
.m_update_name {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
}
.m_update_name > img {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    margin-right: 5px;
}
.m_update_name > p {
margin-right: 10px;
text-align: center;
}
.m_update_phone {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
}
.m_update_phone > img {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    margin-right: 5px;
}
.m_update_address {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
}
.m_update_address > img {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    margin-right: 5px;
}
.m_update_address > p {
margin-right: 10px;
}
</style>