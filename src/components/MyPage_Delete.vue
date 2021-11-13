<template>
    <div class="info_wapper">
        <MyPage_Info></MyPage_Info>
            <div class="info_list">
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
                    <el-button type="text" @click="centerDialogVisible = true">
                    비밀번호인증</el-button>
                    </div>
                <el-dialog v-model="centerDialogVisible" title="회원 탈퇴" width="30%" center id="modal_content">
                    <p>All_ganic의 혜택들을 잃게 됩니다.</p>
                    <p>그래도 탈퇴 하시겠습니까?</p>
                    <template #footer>
                        <span class="dialog-footer">
                            <button type="primary" @click="centerDialogVisible = false">확인</button>
                            <button @click="centerDialogVisible = false">취소</button>
                        </span>
                    </template>
                </el-dialog>
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
                centerDialogVisible: false,
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
.info_wapper {
    display: flex;
    padding: 40px;
    font-family: 'Gowun Dodum', sans-serif;
}
.info_list {
    width: 100%;
}
.delete_name > p {
    margin-top: 0px;
    color: #715036;
    font-weight: bold;
}
.delete_insert {
    border: 2px solid black;
    width: 100%;
    height: 475px;
    border-radius: 5px;
}
.delete_password {
    display: flex;
    justify-content: center;
    margin-top: 185px;
    margin-bottom: 50px;
}
.delete_password > input {
    width: 30%;
    height: 40px;
    border: none;
    border-bottom: 2px solid black;
    background-color: white;
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
    font-family: 'Gowun Dodum', sans-serif;
}
.el-dialog__body > p {
    text-align: initial;
    /* padding: 25px calc(var(--el-dialog-padding-primary) + 5px) 30px; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.dialog-footer > button {
    background-color: #715036;
    color: white;
    border-radius: 5px;
    border: none;
    height: 32px;
}
</style>