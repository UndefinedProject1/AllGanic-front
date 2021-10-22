<template>
    <div class=join_wrapper>
        <div class="join_container">
            <div class="join_title">
                <p>회원가입</p>
                <div class="float-end">
                    <span>*</span>
                    <p>표시는 필수 입력사항입니다.</p>
                </div>
            </div>
            <div class="divider"></div>
            <div class="join_form">
                <div class="join_info">
                    <div class="join_email">
                        <div class="email_info">
                            <div class="email_ad">
                                <img :src="login_email">
                                <input type="text" placeholder="이메일">
                            </div>
                            <div class="email_domain_selector">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>직접입력</option>
                                    <option value="1">직접입력</option>
                                    <option value="2">naver.com</option>
                                    <option value="3">hanmail.net</option>
                                </select>
                                <span>*</span>
                            </div>
                        </div>
                        <div class="chk_email">
                            유효성체크
                        </div>
                    </div>

                    <div class="join_password">
                        <div class="password_info">
                            <img :src="login_password">
                            <input type="password" placeholder="비밀번호">
                            <span>*</span>
                        </div>
                        <div class="chk_password">
                            유효성 체크
                        </div>
                    </div>

                    <div class="join_name">
                        <div class="password_info">
                            <img :src="join_profile">
                            <input type="password" placeholder="이름">
                            <span>*</span>
                        </div>
                        <div class="chk_password">
                            유효성 체크
                        </div>
                    </div>

                    <div class="join_tel">
                        <div class="password_info">
                            <img :src="join_call">
                            <input type="password" placeholder="연락처">
                            <span>*</span>
                        </div>
                        <div class="chk_password">
                            유효성 체크
                        </div>
                    </div>

                    <div class="join_address">
                        <div class="address_info1">
                            <div class="address_postcode">
                                <img :src="join_location">
                                <input type="text">
                            </div>
                            <p> / </p>
                            <div class="address_main">
                                <input type="text">
                            </div>
                        </div>
                        <div class="address_info2">
                            <input type="text">
                            <button type="button" id="postcode_btn">우편번호검색</button>
                        </div>
                    </div>
                </div>
                <div class="join_btn"></div>
                <div class="footer_section">
                    
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
import join_profile from '@/assets/join_profile.png';
import join_call from '@/assets/join_call.png';
import join_location from '@/assets/join_location.png';
    export default {
        data(){
            return{
                login_email : login_email,
                login_password : login_password,
                join_profile : join_profile,
                join_call : join_call,
                join_location : join_location
            }
        },
        components : {
            Footer : Footer
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
.join_wrapper{
    width: 100%;
    height: fit-content;
    overflow-y: scroll;
    font-family: 'Gowun Dodum', sans-serif;
    display: flex;
    flex-direction: column;
}
.join_container{
    /* border: 1px solid black; */
    width: 1180px;
    height: fit-content;
    margin: 0 auto;
    font-family: 'Gowun Dodum', sans-serif;
    display: flex;
    flex-direction: column;
}


 /* 회원가입 타이틀 부분 */
.join_title{
    /* border: 1px solid black; */
    width: 100%;
    height : fit-content;
    margin: 0 auto;
    display: inline-block;
}
.join_title p{
    width: fit-content;
    font-size: 30px;
    font-weight : bold;
    margin: 80px auto;
}
.float-end{
    display: flex;
    width: fit-content;
}
span{
    width: fit-content;
    height : fit-content;
    font-size: 15px;
    margin : 2px 5px 2px 0px;
    color : #C30000;
    font-weight: bold;
}
.float-end > p{
    width: fit-content;
    font-size: 18px;
    letter-spacing: -0.1rem;
    color : #49654E;
    margin : 0;
    margin: 0px 5px 5px 0px;
}


/* 구분선 */
.divider{
    border : 0.3px solid #49654E;
    height: 0.3px;
    width : 100%;
}

/* 회원가입 정보 입력부분 */
.join_form{
    /* border: 1px solid black; */
    width : 100%;
    height: 100%;
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.join_info{
    /* border: 1px solid black; */
    width : 75%;
    height : fit-content;
    display : flex;
    flex-direction: column;
    margin-top: 50px;
    padding : 20px;
}
.join_email, .join_password, .join_name, .join_tel, .join_address{
    /* border: 1px solid black; */
    width: 100%;
    height: fit-content;
    display: block;
    padding: 10px;
    margin : 15px;
}
.email_info{
    display : inline-flex;
    width : 100%;
    height : 100%;
}
.email_ad {
    border-bottom: 1px solid #49654E;
    width : 600px;
    height : 100%;
    display: flex;
    align-items: center;
    margin-right: 30px;
}
.chk_email, .chk_password{
    /* border : 1px solid black; */
    width : fit-content;
    float : right !important;
    margin : 10px 0px 0px 0px;
}
img {
    width : 30px;
    height : 30px;
    margin: 8px;
}
.email_ad input { 
    border : none;
    width : 575px;
    height : 100%;
}
.email_domain_selector {
    /* border: 1px solid black; */
    width : 200px;
    height : 47.33px;
    display: flex;
    align-items: center;
}
.form-select{
    width : 100px;
    height : 100%;
}

/* 비밀번호 */
.password_info{
    border-bottom : 1px solid black;
    width : 100%;
    height : 60%;
    display : inline-flex;
    align-items: center;
}
.password_info input{
    width : 100%;
    height : 100%;
    border : none;
}

.address_info1 {
    /* border : 1px solid black; */
    width : 100%;
    height : 50%;
    display : inline-flex;
    align-items: flex-end;
    margin-bottom : 20px;
}
.address_postcode{
    border-bottom: 1px solid black;
    width : 30%;
    height : 100%;
    display : inline-flex;
    align-items: flex-end;
}
.address_postcode > img{
    width : 28px;
    height : 30px;
}
.address_postcode input, .address_info2 input {
    border : none;
    width: 100%;
    height : 48.5px;
}
.address_info1 > p{
    /* border: 1px solid black; */
    width: fit-content;
    height: 48.5px;
    font-weight: bold;
    font-size: 30px;
    color : #49654E;
    margin : 0;
}
.address_main {
    border-bottom : 1px solid black;
    width : 80%;
    height : 48.5px;
}
.address_main >input {
    border : none;
    width: 100%;
    height: 100%;
}
.address_info2{
    border-bottom : 1px solid black;
    width : 100%;
    height : 48.5px;
    display : inline-flex;
    align-items: flex-end;
}
#postcode_btn{
    width: 110px;
    height: 40px;
    border:none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    background-color: #715036;
    margin-bottom : 5px;
}


.join_btn{
    /* border: 1px solid black; */
    width : 75%;
    height : 100px;
    margin-top : 30px
}

/* .footer_section{
    width: 100%;
    height : fit-content;
} */
</style>