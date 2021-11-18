<template>
            <div class="info_list">
                <div class="delete_name">
                    <p>회원탈퇴</p>
                </div>
                <div class="delete_insert">
                    <div class="delete_password">
                        <img :src="mypage_pw">
                        <p>비밀번호</p>
                        <input type="password" v-model="userpw">
                    </div>
                    <div class="delete_password_btn">
                        <button type="text" @click="handleModal">회원 탈퇴</button>
                    </div>
                </div>
            </div>
        <el-dialog v-model="showModal" title="회원 탈퇴" width="30%" center id="modal_content">
            <p>탈퇴하시면 기존의 고객정보는 사라집니다.</p>
            <p>탈퇴 하시겠습니까?</p>
            <template #footer>
                <div class="delete_modal_btn">
                    <button @click="leave">확인</button>
                    <button @click="showModal=false">취소</button>
                </div>
            </template>
        </el-dialog>
</template>

<script>
import axios from "axios";
// import MyPage_Info from '@/components/MyPage_Info.vue';
import mypage_pw from '@/assets/mypage_pw.png';
import { ElMessage } from 'element-plus';
    export default {
         setup() {
            const failpwMSG = () => {
                ElMessage.error('비밀번호를 다시 입력하세요.')
            }
            return{
                failpwMSG,
            }
        },
        data() {
            return {
                token: sessionStorage.getItem("token"),
                mypage_pw : mypage_pw,
                showModal : false,
                modalokay : false,
                modalfalse : false,
                userpw : '',
            }
        },
        // components : {
        //     MyPage_Info : MyPage_Info,
        // },
        methods : {
            handleModal() {
                this.showModal = true;
            },
            async leave() {
                const url = `REST/api/member/leave`;
                const body = {
                    userpw : this.userpw
                }
                console.log(body);
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.delete(url, {
                    headers:headers,
                    data : body
                });
                console.log(response);
                if(response.data.result === 1) {
                    alert("회원탈퇴 완료");    
                    this.$router.push({ path: "/" });
                }
                else if(response.data.result === 0){
                    this.failpwMSG();
                }
                // else alert("error");
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.info_list {
    /* border: 1px solid black; */
    width: 98.5%;
    height: 100%;
    margin-left: 30px;
}
.delete_name {
    color: #715036;
    font-weight: bold;
    display: flex;    
}
.delete_name > p {
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 20px;
}
.delete_insert {
    border: 1px solid black;
    width: 100%;
    height: 545px;
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
    height: 35px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-family: 'Gowun Dodum', sans-serif;
}
.el-dialog__body > p {
    text-align: initial;
    /* padding: 25px calc(var(--el-dialog-padding-primary) + 5px) 30px; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.delete_modal_btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.delete_modal_btn > button {
    background-color: #715036;
    color: white;
    border-radius: 5px;
    width: 80px;
    height: 30px;
    border: none;
    margin-left: 8px;
    font-family: 'Gowun Dodum', sans-serif;
}
</style>