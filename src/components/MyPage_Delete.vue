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
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="handle_pw_modal">비밀번호인증</button>
                        <!-- <button type="button" id="del_pw_btn" @click="handleDelPw">비밀번호인증</button> -->
                    </div>
                </div>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Membership withdrawal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>탈퇴 하시겠습니까?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button">확인</button>
                        <button type="button">취소</button>
                    </div>
                    </div>
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
                showModal : false,
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
    padding: 40px;
    display: inline-flex;
    font-family: 'Gowun Dodum', sans-serif;
}
.delete_box {
    width: 100%;
}
.delete_name {
    width: 100%;
    display: flex;
    color: #715036;
    font-weight: 500;
    font-size: 18px;
    font-weight: bold;
}
.delete_insert {
    border: 2px solid black;
    width: 100%;
    height: 530px;
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
    height: 40px;
    border: none;
    border-bottom: 2px solid black;
    background-color: #eeeeee;
}
.delete_password > img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 15px;
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
    width: 110px;
    height: 30px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>