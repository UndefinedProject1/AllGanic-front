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
                            <i class="el-icon-message" :size="50"></i>
                            <!-- <img :src="login_email" style="right" class="logo_email"/> -->
                            <input type="text" placeholder="이메일" id="id" v-model="userid">
                        </div>
                    </div>
                    <div class="password">
                        <div class="password_input">
                            <i class="el-icon-lock" :size="50"></i>
                            <!-- <img :src="login_password" style="right" class="logo_password"/> -->
                            <input type="password" placeholder="비밀번호" id="password" v-model="userpw">
                        </div>
                    </div>
                    <div class="login_nav">
                        <span onclick="location.href='http://127.0.0.1:9090/join'">회원가입</span>
                        <el-divider direction="vertical"></el-divider>
                        <span onclick="location.href='http://127.0.0.1:9090/forgotpassword'">비밀번호찾기</span>
                    </div>
                    <div class="btn_box">
                        <button type="button" id="login_btn" @click="handleLogin">로그인</button>
                        <img class="kakao_btn" src="@/assets/kakao_login_medium_narrow.png" @click="loginWithKakao"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import login_email from '@/assets/login_email.png';
import login_password from '@/assets/login_password.png';
import { ElMessage } from 'element-plus'
    export default {
        setup() {
            const successAlertMSG = () => {
                ElMessage.success('로그인 되었습니다.')
            }
            const validateSuccessMSG = () => {
                ElMessage.success('이미 가입이 된 회원입니다.')
            }
            const validateErrorMSG = () => {
                ElMessage.error('해당 이메일에 대한 회원정보가 없습니다.')
            }
            const addProductAlertMSG = () => {
                ElMessage.message('상품 리스트 추가')
            }
            const failAlertMSG = () => {
                ElMessage.error('카카오 유저입니다. 카카오 로그인에서 로그인을 시도하여 주십시오.')
            }
            const failAlertMSG1 = () => {
                ElMessage.error('토큰값이 유효하지 않습니다')
            }
            return{
                successAlertMSG,
                validateSuccessMSG,
                validateErrorMSG,
                addProductAlertMSG,
                failAlertMSG,
                failAlertMSG1
            }
        },
        data() {
            return {
                login_email : login_email,
                login_password : login_password,
                userid : '',
                userpw : '',
                key   : '123456_',
                login : false,
                page :'',
                name : '',
            }
        },
        watch : {
            async userid(val){
                const url = `REST/api/member/checkemail`;
                const body = { useremail: val };
                const header = { "Content-Type": "application/json" };
                const response = await axios.post(url, body, header);
                if(val.length >= 14){
                    if(response.data.result === 1){
                        this.validateSuccessMSG();
                    }
                    else if(response.data.result === 0){
                        this.validateErrorMSG();
                    }
                }
            }
        },
        methods :{
            loginWithKakao() {
                const params = {
                    redirectUri: "http://localhost:9090/login_callback",
                };
                window.Kakao.Auth.authorize(params);
            },
            async handleLogin(){
                const header = {"Content-Type" : "application/json"};
                const body = {
                    useremail : this.userid,
                    userpw : this.userpw
                }
                // console.log(body);
                const url =  `REST/api/member/login?sns=false`;
                const response = await axios.post(url, body, header);
                console.log(response);
                if(response.data.result === 1){
                    sessionStorage.setItem("token", this.key + response.data.token);
                    this.successAlertMSG();
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
                        this.failAlertMSG1();
                    }
                    var urlbox = sessionStorage.getItem("URL");
                    // console.log(urlbox); 
                
                    urlbox = JSON.parse(urlbox);

                    // console.log(typeof(urlbox));
                    // console.log(urlbox);

                    if(urlbox !== null){
                        this.$router.push({
                            path : urlbox.path, 
                            query : {
                                code : urlbox.query.code,
                                name : urlbox.query.name
                            }
                        });
                        console.log(this.$router);
                    }
                    else{
                        this.$router.push({path:"/"});
                    }
                }
                else if(response.data.result === 0) {
                    this.failAlertMSG();
                }
                this.$emit('changeLogged', true);
            },
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
input:focus{
    outline: none;
}
.login_wrapper{
    /* border: 1px solid black; */
    width: 100%;
    height: 100vh;
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    justify-content: center;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
    /* margin-top: 4.5%; */
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
/* body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Gowun Dodum', sans-serif;
} */
.inner_container {
    /* border: 1px solid black; */
    width: 50%;
}
.insert_center {
    /* border: 1px solid black; */
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login {
    /* border: 1px solid black; */
    width : 100%;
    height: 20%;
    justify-content: flex-end;
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
    margin-bottom: 15px;
}
.divider {
    border : 0.3px solid #49654E;
    height: 0.1px;
    width : 100%;
}
.login_box {
    /* border: 1px solid black; */
    width: 70%;
    height: 100%;
    margin: 40px auto;
    display : flex;
    flex-direction: column;
    align-items: center;
}
.email {
    display: block;
    width : 100%;
}
.email_input {
    border: 0.5px solid #eee;
    padding-left: 10px;
    display: flex;
    align-items: center;
    border-radius: 4px;
}
.email_input > img {
    width: 25px;
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
    border: 0.5px solid #eee;
    margin: 20px;
    width : 100%;
}
.password_input {
    /* border: 1px solid black; */
    padding-left: 10px;
    display: flex;
    align-items: center;
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
    width: 100%;
    display: inline-flex;
    justify-content: center;
    margin : 10px;
    font-size: 13px;
}
.login_nav:hover {
    cursor: pointer;
}
.breadcrumb {
    /* border: 1px solid black; */
    width: fit-content;
    display: flex;
    font-size: 15px;
    padding-top: 5px;
}
.breadcrumb-item  {
    font-family: 'Gowun Dodum', sans-serif;
    color: black;
    text-decoration-line: none;
}

#id, #password {
    border: none;
    width: 88%;
    height: 48.5px;
    font-size: 15px;
    font-weight :300;
    padding : 0px 0px 0px 15px;
    font-family: 'Gowun Dodum', sans-serif;
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
.btn_box{
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    align-items: center;
    height: fit-content;
    /* margin: 20px; */
    flex-direction: column;
    justify-content: center;
}
#login_btn{
    /* border: 1px solid black; */
    width: 55%;
    height: 40px;
    margin: 20px;
    border: none;
    font-size: 15px;
    background-color: #715036;
    color: white;
    border-radius: 4px;
    font-family: 'Gowun Dodum', sans-serif;   
}
.kakao_btn{
    width: 55%;
    height: 45px;
}
#login_btn:hover, .kakao_btn:hover{
    cursor: pointer;
    opacity: 0.8;
}
</style>}
