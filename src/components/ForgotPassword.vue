<template>
    <div class="forgotpassword_wrapper">
        <div class="forgotpassword_container">
            <div class="forgotpassword_insert">
                <div class="forgotpassword">
                    <p>비밀번호 찾기</p>
                    <div class="divider"></div>
                </div>
                <div class="forgotpassword_box">
                    <div class="name">
                        <div class="name_input">
                            <i class="el-icon-user" :size="50"></i>
                            <input type="text" placeholder="이름" id="name" v-model="username">
                        </div>
                    </div>
                    <div class="email">
                        <div class="email_input">
                            <i class="el-icon-message" :size="50"></i> 
                            <input type="text" placeholder="이메일" id="id" v-model="userid">
                        </div>
                    </div>
                    <p>* 임시비밀번호는 발급 후 '마이페이지'에서 변경하실 수 있습니다.</p>
                    <button type="button" id="forgotpassword_btn" @click="handleForgotpassword">비밀번호찾기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        methods : {

        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
input:focus{
    outline: none;
}
.forgotpassword_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    justify-content: center;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
    margin-top: 4.5%;
}
.forgotpassword_container {
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
.forgotpassword_insert {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.forgotpassword > p:first-child {
    width: fit-content;
    text-align: center;
    font-size: 30px;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: bold;
    margin-bottom: 15px;
}
.forgotpassword {
    /* border: 1px solid black; */
    width : 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.forgotpassword > p {
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
.forgotpassword_box {
    /* border: 1px solid black; */
    width: 70%;
    margin: 40px auto;
    display : flex;
    flex-direction: column;
    align-items: center;    
}
.forgotpassword_box p {
    /* border: 1px solid black; */
    width: 100%;
    height: fit-content;
    font-size: 12px;    
    color: #c30000;
    font-weight: bold;
    text-align: end;
}
.name {
    display: block;
    width : 100%;    
}
.name_input {
    border: 0.5px solid #eee;
    padding-left: 10px;
    display: flex;
    align-items: center;
    border-radius: 4px;
}
.name_text {
    /* border: 1px solid black; */
    display: inline-block;
    border: none;
    width: 80%;    
}
.icon_name {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    display: inline-block;
    background-color: white;    
}
.email {
    border: 0.5px solid #eee;
    margin-top: 20px;
    margin-bottom: 5px;
    width : 100%;    
}
.email_input {
    /* border: 1px solid black; */
    padding-left: 10px;
    display: flex;
    align-items: center;  
}
/* .email_input > img {
    width: 25px;
    height: 25px;
    padding-right: 5px;    
} */
.name p, .email p {
    width: fit-content;
    padding-top: 10px ;
    padding-left: 10px;
    padding-bottom: 1px;
    margin: 0%;
    font-family: 'Gowun Dodum', sans-serif;    
}
#id, #name {
    border: none;
    width: 88%;
    height: 48.5px;
    font-size: 15px;
    font-weight :300;
    padding : 0px 0px 0px 15px;
    font-family: 'Gowun Dodum', sans-serif;    
}
#input {
    background-color: white;
    font-size: 15px;    
}
#forgotpassword_btn {
    /* border: 1px solid black; */
    width: 35%;
    height: 35px;
    margin: 70px;
    border: none;
    font-size: 15px;
    /* font-weight: bold; */
    background-color: #715036;
    color: white;
    border-radius: 4px;
    font-family: 'Gowun Dodum', sans-serif;   
}
#forgotpassword_btn:hover {
    cursor: pointer;
    opacity: 0.8;
}
</style>