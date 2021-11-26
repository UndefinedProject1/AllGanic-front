<template>
    <div style="display: none">
        test
    </div>
</template>
    
<script>
import { getKakaoToken, getKakaoUserInfo } from "@/services/Kakao_login";
import axios from "axios";

export default {
    data(){
        return{
            key   : '123456_',
            kakao_login_pw : "kakao_login_pw",
            userrole: "MEMBER",
        }
    },
    created() {
        if (this.$route.query.code) {
            this.setKakaoToken();
        }
    },
    methods: {
        async setKakaoToken () {
            console.log('카카오 인증 코드', this.$route.query.code);
            const { data } = await getKakaoToken(this.$route.query.code);
            console.log('카카오 인증코드로 받은 토큰으로 넘어온 data', data);
            if (data.error) {
                alert('카카오톡 로그인 오류입니다.');
                this.$router.push({ path: "/login" });
                return;
            }
            window.Kakao.Auth.setAccessToken(data.access_token);
            await this.setUserInfo();
            // this.$router.push({ path: "/" });
        },
        async setUserInfo () {
            const res = await getKakaoUserInfo();

            const url = `REST/api/member/checkemail`;
            const header = {"Content-Type" : "application/json"};
            const body = {
                useremail : res.kakao_account.email,
            }
            console.log('이메일 중복체크용으로 보내는 body',body);
            const response = await axios.post(url, body, header);
            if(response.data.result === 1){
                await this.handleKakaoLogin();
            }
            else if(response.data.result === 0) {
                await this.handleKakaoJoin();
            }
            else {
                alert("error");
            }
        },
        async handleKakaoLogin(){
            const res = await getKakaoUserInfo();

            const url =  `REST/api/member/login`;
            const header = {"Content-Type" : "application/json"};
            const body = {
                useremail : res.kakao_account.email,
                userpw : this.kakao_login_pw
            }
            const response = await axios.post(url, body, header);
            if(response.data.result === 1){
                sessionStorage.setItem("token", this.key + response.data.token);
                const headers = {"Content-Type" : "application/json", "token" : this.key + response.data.token};
                const url1 = `REST/api/member/role`;

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
                this.$router.push({ path: "/" });
            }
            else {
                alert('로그인 실패');
                this.$router.push({ path: "/login" });
            }

            this.$emit('changeLogged', true);
        },
        async handleKakaoJoin(){
            const res = await getKakaoUserInfo();

            const url = `REST/api/member/join`;
            const header = { "Content-Type": "application/json" };
            const body = {
                useremail: res.kakao_account.email,
                userpw: this.kakao_login_pw,
                username: res.kakao_account.profile.nickname,
                userrole: this.userrole,
                usertel: '',
                post: '',
                address: '',
                detaileaddress: '',
            };
            const response = await axios.post(url, body, header);
            if (response.data.result === 1) {
                await this.handleKakaoLogin();
            }
        }
    }
}
</script>