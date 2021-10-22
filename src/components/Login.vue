<template>
    <div class="main_wrapper">
         <div class="inner_container">
                <div class="insert_center">
                    <div class="login">
                        <p>로그인</p>
                        <hr class="line" />
                    </div>
                    <div class="login_box">
                        <div class="email">
                            <div class="login_title">
                                <p>이메일</p>
                            </div>
                            <div class="email_input">
                                <img :src="login_email" style="right" class="logo_email"/>
                                <input type="text" id="id">
                            </div>
                        </div>
                        <div class="password">
                            <div class="password_title">
                                <p>비밀번호</p>
                            </div>
                            <div class="password_input">
                                <img :src="login_password" style="right" class="logo_password"/>
                                <input type="password" id="password">
                            </div>
                        </div>
                        <div class="login_nav">
                            <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">회원가입</a></li>
                                <li class="breadcrumb-item"><a href="#">아이디 찾기</a></li>
                                <li class="breadcrumb-item"><a href="#">비밀번호 찾기</a></li>
                            </ol>
                            </nav>
                        </div>
                        <div class="login_btn">
                            <button type="button" id="login_btn" >Login</button>
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
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');

body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Gowun Dodum', sans-serif;
}
.inner_container {
    /* border: 1px solid black; */
    width: 50%;
}
.insert_center {
    /* border: 1px solid black; */
    position: relative;
    top: 20%;
}
.login {
    /* border: 1px solid black; */
    text-align: center;
    font-size: 30px;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: bold;
    color: rgba(73, 101, 78, 1);
    font-weight: 500;
}
.line {
    border: 10px;
    color: #715036;
    width: 100%;
}
.login_box {
    /* border: 1px solid black; */
    width: 70%;
    margin: 0 auto;
}
.email {
    border-bottom: 1px solid black;
    display: block;
}
.email_input {
    /* border: 1px solid black; */
    padding-left: 10px;
}
.email_input > img {
    width: 25px;
    height: 25px;
}
.login_text {
    /* border: 1px solid black; */
    display: inline-block;
    border: none;
    width: 80%;
}
.icon_email {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    display: inline-block;
    background-color: white;
}
.password {
    border-bottom: 1px solid black;
    padding-top: 20px;
}
.password_input {
    /* border: 1px solid black; */
    padding-left: 10px;
}
.password_input > img {
    width: 25px;
    height: 25px;
}

.email p, .password p {
    width: fit-content;
    padding-top: 10px ;
    padding-left: 10px;
    padding-bottom: 1px;
    margin: 0%;
    font-family: 'Gowun Dodum', sans-serif;
}
.login_nav {
    padding-top: 20px;
    display: table;
    margin-left: auto;
    margin-right: auto;
}
.breadcrumb {
    /* border: 1px solid black; */
    width: fit-content;
    display: flex;
    font-size: 15px;
    padding-top: 5px;
}
.breadcrumb-item > a {
    font-family: 'Gowun Dodum', sans-serif;
    color: black;
    text-decoration-line: none;
}
.login_btn{
    padding-top: 40px;
    /* border: 1px solid black; */
    /* display: flex; */
}
#login_btn{
    width: 80px;
    height: 30px;
    display: block;
    margin: 0 auto;
    border:none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    background-color: #715036;
}
#id, #password {
    border: none;
    width: 80%;
} 
img.logo_email, img.logo_password {
    margin-bottom: 5px;
}



</style>