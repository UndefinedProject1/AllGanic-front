<template>
    <div class="main_wrapper">
         <div class="inner_container">
                <div class="insert_center">
                    <div class="login">
                        <p>로그인</p>
                    </div>
                    <div class="line">
                    </div>
                    <div class="login_box">
                        <div class="email">
                            <div class="login_title">
                                <p>이메일</p>
                            </div>
                            <div class="email_input">
                                <img :src="login_email" style="right"/>
                                <input type="text">
                            </div>
                        </div>
                        <div class="password">
                            <div class="password_title">
                                <p>비밀번호</p>
                            </div>
                            <div class="password_input">
                                <img :src="login_password" style="right"/>
                                <input type="password">
                            </div>
                        </div>
                        <div class="login_nav">
                            <p>회원가입 | 이메일 찾기 | 비밀번호 찾기</p>
                        </div>
                    </div>
                </div>
             </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import login_email from '@/assets/login_email.png';
import login_password from '@/assets/login_password.png';
    export default {
        data() {
            return {
                login_email : login_email,
                login_password : login_password
            }
        },
        components :{
            Footer : Footer
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;800&display=swap');

body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Playfair Display', serif;
}
.inner_container {
    border: 1px solid black;
    width: 50%;
}
.insert_center {
    border: 1px solid black;
    position: relative;
    top: 20%;
}
.login {
    border: 1px solid black;
    text-align: center;
    font-family: 'Playfair Display', serif;
    color: rgba(73, 101, 78, 1);
    font-weight: 500;
}
.line {
    border: 10px;
    color: rgba(113, 80, 54, 1);
    width: 90%;
}
.login_box {
    border: 1px solid black;
}
.email {
    border: 1px solid black;
    display: block;
}
.email_input {
    border: 1px solid black;
    padding-left: 10px;
}
.email_input > img {
    width: 25px;
    height: 25px;
}
.login_text {
    border: 1px solid black;
    display: inline-block;
    border: none;
    width: 80%;
}
.icon_email {
    border: 1px solid black;
    width: 25px;
    height: 25px;
    display: inline-block;
    background-color: white;
}
.password {
    border: 1px solid black;
}
.password_input {
    border: 1px solid black;
    padding-left: 10px;
}
.password_input > img {
    width: 25px;
    height: 25px;
}
.icon_password {
    border: 1px solid black;
}
.email p, .password p {
    width: fit-content;
    padding-top: 10px ;
    padding-left: 10px;
    padding-bottom: 1px;
    margin: 0%;
}
.login_nav {
    display: block;
    align-content: flex-start;
}


</style>