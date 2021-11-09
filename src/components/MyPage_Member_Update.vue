<template>
    <div class="mp_m_update">
        <MyPage_Info></MyPage_Info>
            <div class="m_update_box">
                <div class="m_update_title">
                    <p>회원정보 변경</p>
                </div>
                <div class="m_update_insert">
                    <div class="m_update_mail">
                        <img :src="mypage_mail"/>
                        <p>이메일</p>
                        <span style="color:black">sksmsdiWkd!@naver.com</span>
                    </div>
                    <div class="m_password">
                        <div class="m_update_pw">
                            <img :src="mypage_pw"/>
                            <p>비밀번호</p>
                        </div>
                        <div class="chk_password" v-bind:style="doublecheck">
                            {{chk_pw}}
                        </div>
                        <div class="u_pw_box">
                            <input type="password" v-model="u_password_text">
                            <!-- <button type="button" @click="handle_pw_modal">비밀번호변경</button> -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="handle_pw_modal">비밀번호변경</button>
                        </div>
                    </div>
                    <div class="m_name">
                        <div class="m_update_name">
                            <img :src="mypage_profile"/>
                            <p>이름</p>
                        </div>
                        <div class="u_name_box">
                            <input type="text" v-model="u_name_text">
                        </div>
                        <div class="chk_password" v-bind:style="doublecheck">
                            {{chk_name}}
                        </div>
                    </div>
                    <div class="m_phone">
                        <div class="m_update_phone">
                            <img :src="mypage_phone"/>
                            <p>연락처</p>
                        </div>
                        <div class="u_phone_box">
                            <input type="text" v-model="u_phone_text">
                        </div>
                        <div class="chk_password" v-bind:style="doublecheck">
                            {{chk_phone}}
                        </div>
                    </div>
                    <div class="m_address">
                        <div class="m_update_address">
                            <img :src="mypage_address" />
                            <p>주소</p>
                        </div>
                        <div class="m_update_postcode">
                            <input type="text" v-model="update_postcode" readonly value>
                            <p>  /  </p>
                            <input type="text" v-model="update_roadaddress" readonly value style="margin-left:5px;">
                        </div>
                    </div>
                    <div class="u_address_box">
                        <input type="text" v-model="u_address_text">
                        <button type="button" id="chage_address_btn" @click="handle_ad_btn">우편번호검색</button>
                    </div>
                    <div id="wrap" style="display:none;border:1px solid;width:500px;height:300px;margin:5px 0;position:relative">
                        <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1" @click="foldDaumPostcode" alt="접기 버튼">
                    </div>
                </div>
            </div>
        <!-- 비밀번호 변경 Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">비밀번호변경</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="update_modal_pw_box">
                    <div class="update_modal_pw_oldpw">
                        <p>기존 비밀번호</p>
                        <span>*</span>
                    </div>
                    <div class="updatemodal_input_pw_oldpw">
                        <input type="password">
                    </div>
                    <div class="update_modal_pw_newpw">
                        <p>새 비밀번호</p>
                        <span>*</span>
                    </div>
                    <div class="updatemodal_input_pw_newpw">
                        <input type="password">
                    </div>
                    <div class="update_modal_pw_newpw_check">
                        <p>새 비밀번호 확인</p>
                        <span>*</span>
                    </div>
                    <div class="updatemodal_input_pw_newpw">
                        <input type="password">
                    </div>
                    <!-- <button type="button" id="update_modal_pw_box_btn" @click="" -->
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">비밀번호변경</button>
            </div>
            </div>
        </div>
    </div>
</div>
<Footer></Footer>
</template>

<script>
//import axios from 'axios';
import MyPage_Info from '@/components/MyPage_Info.vue';
import Footer from '@/components/Footer.vue';
import mypage_mail from '@/assets/mypage_mail.png';
import mypage_pw from '@/assets/mypage_pw.png';
import mypage_profile from '@/assets/mypage_profile.png';
import mypage_phone from '@/assets/mypage_phone.png';
import mypage_address from '@/assets/mypage_address.png';
import axios from 'axios';

export default {
    data() {
        return {
            token : sessionStorage.getItem("token"),
            mypage_mail : mypage_mail,
            mypage_pw : mypage_pw,
            mypage_profile : mypage_profile,
            mypage_phone : mypage_phone,
            mypage_address : mypage_address,
            showModal : false,
            member : '',
        }
    },
    mounted() {
        let daumPostCode = document.createElement('script')
        daumPostCode.setAttribute('src', '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')
        document.head.appendChild(daumPostCode);
    },
    components : {
        Footer : Footer,
        MyPage_Info : MyPage_Info
    },
    async created() {
        await this.handleMemberGet();
    },
    methods : {
        async handleMemberGet() {
            const url = `REST/api/member/find`;
            const header = {"token" : this.token};
            console.log(header);
            const response = await axios.get(url, header);

            if(response.data.result === 1) {
                this.member = response.data.member;
                console.log(this.member);
            }
            else alert("정보를 받아오지 못하였습니다.");
        }
    }
}
</script>

<style scoped>
.mp_m_update {
    width: 100%;
    height: 100%;
    padding: 40px;
    display: inline-flex;
    font-family: 'Gowun Dodum', sans-serif;
}
.mp_m_update > p {
    display:  flex;
}
.m_update_box {
    width: 100%;
}
.m_update_title {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    color: #715036;
    font-weight: 500;
    font-size: 18px;
    font-weight: bold;
}
/* .mp_m_update > p {
    height: fit-content;
} */
.m_update_insert {
    border: 2px solid black;
    width: 100%;
    height: 530px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.m_update_mail {
    /* border: 1px solid black; */
    display: flex;
    width: 100%;
    justify-content: center;
}
.m_update_mail > p {
    margin-right: 20px;
    margin-top: 3px;
}
.m_update_mail > span {
    width: 50%;
    font-weight: bold;
}
.m_password {
    width: 100%;
    display: inline-flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 10px;
}
.m_update_pw {
    /* border: 1px solid black; */
    display: flex;
    width: fit-content;
}
.m_update_pw > p {
    width: fit-content;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 3px;
}
.u_name_box, .u_phone_box {
    border-bottom: 2px solid black;
    width: 50%;
}
.u_pw_box {
    display: flex;
    border-bottom: 2px solid black;
    width: 50%;
}
.u_pw_box > input, .u_name_box > input, .u_phone_box > input {
    border : none;
    margin-right: 5px;
    height: 100%;
    width: 70%;
    background-color: #eeeeee;
}
.m_update_mail > img, .m_update_pw > img, .m_update_name > img, .m_update_phone > img {
    /* border: 1px solid black; */
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-bottom: 5px;
    margin-top: 8px;
}
.u_pw_box > button {
    /* width: 110px; */
    height: 25px;
    background-color: #715036;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 2px;
}
.m_name {
    width: 100%;
    display: flex;
    margin-top: 30px;
    justify-content: center;
}
.m_update_name {
    display: flex;
}
.m_update_name > p {
    width: fit-content;
    margin-right: 35px;
    margin-bottom: 5px;
    margin-top: 3px;
}
.m_phone {
    width: 100%;
    display: flex;
    margin-top: 30px;
    justify-content: center;
}
.m_update_phone {
    /* border: 1px solid black; */
    display: flex;
}
.m_update_phone > p {
    margin-right: 22px;
    width: fit-content;
    margin-bottom: 5px;
    margin-top: 3px;
}
.m_address {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
}
.m_update_address > img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 5px;
}
.m_update_address {
    /* border: 1px solid black; */
    display: flex;
    height: 30px;
}
.m_update_postcode {
    display: flex;
    border-bottom: 2px solid black;
    width: 50%;
    margin-left: 33px;
    height: 35px;
    margin-top: 30px;
}
.m_update_postcode > input {
    /* border: 1px solid black; */
    border : none;
    margin-right: 5px;
    width: 40%;
    height: 32px;
    background-color: #eeeeee;
}
.u_address_box {
    /* border: 1px solid black; */
    display: flex;
    border-bottom: 2px solid black;
    width: 50%;
    margin-left: 94px;
    margin-top: 20px;
}
.u_address_box > input {
    border: none;
    background-color: #eeeeee;
    width: 80%;
}
.u_address_box > button {
    width: 110px;
    height: 25px;
    background-color: #715036;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 15px;
}
/* Modal */
.modal-body {
    font-family: 'Gowun Dodum', sans-serif;
    display: flex;
    justify-content: center;
    width: 100%;
}
.update_modal_pw_oldpw {
    display: flex;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 0px;
}
.update_modal_pw_newpw, .update_modal_pw_newpw_check {
    display: flex;
    width: 80%;
    margin-top: 30px;
    margin-bottom: 0px;
}
.updatemodal_input_pw_oldpw > input, .updatemodal_input_pw_newpw > input, .updatemodal_input_pw_newpw > input  {
    border: none;
    border-bottom: 2px solid black;
    width: 250px;
}
.update_modal_pw_oldpw > p, .update_modal_pw_newpw > p, .update_modal_pw_newpw_check > p {
    margin-bottom: 0px;
}
span{
    width: fit-content;
    height : fit-content;
    font-size: 15px;
    margin : 2px 5px 2px 0px;
    color : #C30000;
    font-weight: bold;
}   
</style>