<template>
    <div class="mypage_delete">
        <MyPage_Info></MyPage_Info>
        <div class="delete_box">
            <div class="delete_name">
                <p>회원탈퇴</p>
            </div>
            <div class="delete_insert">
                <div class="delete_password">
                    <img :src="mypage_pw">
                    <p>비밀번호</p>
                    <input type="password" v-model="input_pw">
               </div>
                <div class="delete_password_btn">
                    <button type="button" id="del_pw_btn" @click="handleDelPw">비밀번호인증</button>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import MyPage_Info from '@/components/MyPage_Info.vue';
import Footer from '@/components/Footer.vue';
import mypage_pw from '@/assets/mypage_pw.png';
    export default {
        data() {
            return {
                mypage_pw : mypage_pw,
            }
        },
        components : {
            MyPage_Info : MyPage_Info,
            Footer : Footer,
        },
        methods : {

        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.mypage_delete {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: inline-flex;
    font-family: 'Gowun Dodum', sans-serif;
}
.delete_box {
    width: 100%;
}
.delete_name {
    width: 100%;
    display: flex;
}
.delete_insert {
    border: 2px solid black;
    width: 100%;
    height: 570px;
    border-radius: 5px;
}
.delete_password {
    display: flex;
    justify-content: center;
    margin-top: 240px;
    margin-bottom: 50px;
}
.delete_password > input {
    width: 30%;
    border: none;
    border-bottom: 2px solid black;
    background-color: #eeeeee;
}
.delete_password > img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    margin-top: 10px;
}
.delete_password > p {
    margin-right: 10px;
    margin-top: 10px;
}
.delete_password_btn {
    display: flex;
    justify-content: center;
}
.delete_password_btn > button {
    background-color: #715036;
    color: white;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    border: none;

}
    /* width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; */

</style>