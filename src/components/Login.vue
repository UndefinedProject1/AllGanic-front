<template>
    <div class="login_wrapper">
        <div class="login_container">
            <div class="insert_center">
                <div class="login">
                    <p>로그인</p>
                    <div class="divider"></div>
                </div>
                <div class="login_box">
                    <div class="email">
                        <div class="email_input">
                            <img :src="login_email" style="right" class="logo_email"/>
                            <input type="text" placeholder="이메일" id="id" v-model="userid">
                        </div>
                    </div>
                    <div class="password">
                        <div class="password_input">
                            <img :src="login_password" style="right" class="logo_password"/>
                            <input type="password" placeholder="비밀번호" id="password" v-model="userpw">
                        </div>
                    </div>
                    <div class="login_nav">
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/join">회원가입</a></li>
                            <li class="breadcrumb-item"><a href="#">비밀번호 찾기</a></li>
                        </ol>
                        </nav>
                    </div>
                    <button type="button" id="login_btn" @click="handleLogin" >Login</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    
</template>

<script>
import axios from 'axios';
import Footer from '@/components/Footer.vue';
import login_email from '@/assets/login_email.png';
import login_password from '@/assets/login_password.png';
    export default {
        data() {
            return {
                login_email : login_email,
                login_password : login_password,
                userid : '',
                userpw : '',
                key   : '123456_',
                login : false
            }
        },
        components :{
            Footer : Footer
        },
        methods :{
            async handleLogin(){
                const header = {"Content-Type" : "application/json"};
                const body = {
                    useremail : this.userid,
                    userpw : this.userpw
                }
                console.log(body);
                const url =  `REST/api/member/login`;
                const response = await axios.post(url, body, header);
                console.log(response);
                if(response.data.result === 1){
                    sessionStorage.setItem("token", this.key + response.data.token);
                    alert("로그인성공");
                    const headers = {"Content-Type" : "application/json", "token" : this.key + response.data.token};
                    const url1 = `REST/api/member/role`;
                    console.log(headers);

                    const response1 = await axios.get(url1, {headers});
                    if(response1.data.result === 1){
                        if(response1.data.role === "MEMBER"){
                            sessionStorage.setItem("role", 1);
                        }
                        else sessionStorage.setItem("role", 2);
                    }
                    else{
                        alert("토큰값이 유효하지 않습니다");
                    }
                }
                else {
                    alert('로그인실패');
                }
            },
        }

    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.login_wrapper{
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    justify-content: center;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
}
.login_container{
    /* border: 1px solid black; */
    width: 40%;
    height : 100%;
    display: inline-flex;
    margin: 0 auto;
    padding:40px;
    justify-content: center;
    align-items: center;
}
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login {
    /* border: 1px solid black; */
    width : 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login p {
    width: fit-content;
    text-align: center;
    font-size: 30px;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: bold;
}
.divider {
    border : 0.3px solid #49654E;
    height: 0.3px;
    width : 100%;
}
.login_box {
    /* border: 1px solid black; */
    width: 70%;
    margin: 40px auto;
    display : flex;
    flex-direction: column;
    align-items: center;
}
.email {
    border-bottom: 1px solid black;
    display: block;
    width : 100%;
}
.email_input {
    /* border: 1px solid black; */
    padding-left: 10px;
}
.email_input > img {
    width: 30px;
    height: 25px;
    padding-right: 5px;
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
    margin: 20px;
    width : 100%;
}
.password_input {
    /* border: 1px solid black; */
    padding-left: 10px;
}
.password_input > img {
    margin-right: 5px;

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
    margin : 10px;
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

#id, #password {
    border: none;
    width: 90%;
    height: 48.5px;
    font-size: 15px;
    font-weight :300;
    background-color: #eeeeee;
    padding : 0px 0px 0px 15px;
} 
#img.logo_email, img.logo_password {
    width: 25px;
    height: 25px;
    margin-bottom: 5px;
}
#input {
    background-color: white;
    font-size: 15px;
}
#login_btn{
    /* border: 1px solid black; */
    width: 20%;
    height: 45px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    background-color: #715036;
    color: white;
    border-radius: 4px;
    font-family: 'Playfair Display', serif;
    margin: 30px;
}
#login_btn:hover{
    cursor: pointer;
    opacity: 0.8;
}
</style>