<template>
    <div class="info_box">
            <div class="info_name">
                <input type="text" v-model="member.USERNAME" readonly value />
                <!-- <span>정지희</span> -->
                <p>님</p>
            </div>
            <div class="info_info">
                <div class="info_email">
                    <img :src="mypage_mail"/>
                    <input type="text" v-model="member.USEREMAIL" readonly value />
                    <!-- <p>sksmsdiWkd!@naver.com</p> -->
                </div>
                <div class="info_ad_icon">
                    <img :src="mypage_address"/>
                    <!-- <div class="info_address"> -->
                        <!-- <p>43 Oxford Road M13 4GR Manchester, UK</p> -->
                        <!-- <input type="text" v-model="member.ADDRESS" readonly value img :src="mypage_address"> -->
                        <div class="m_address">
                            <div class="m_update_postcode">
                                <input type="text" v-model="postcode" readonly value style="width:60px;" />
                                <p style="margin-top:9px;">/</p>
                                <input type="text" v-model="roadAddress" readonly value style="width:210px;"  />
                            </div>
                            <div class="m_update_detailAddress">
                                <input type="text" v-model="detailAddress" readonly value  />
                            </div>
                        </div>
                        
                    <!-- </div> -->
                </div>
                <button type="button" @click="handleAddressUpdate">기본주소 수정</button>
            </div>
            <hr class="solid" />
            <div class="info_menu">
                <span>Member</span>
                <p @click="handleUpdate">회원정보변경</p>
                <p @click="handleDelete">회원탈퇴</p>
                <span>Order</span>
                <p @click="handleCancle">취소/교환/반품 내역</p>
                <p @click="handleOrder">주문내역</p>
                <span>QnA</span>
                <p @click="handleQA">문의내역</p>
            </div>
        </div>
</template>

<script>
import axios from "axios";
import mypage_mail from '@/assets/mypage_mail.png';
import mypage_address from '@/assets/mypage_address.png';
    export default {
        data() {
            return {
                token: sessionStorage.getItem("token"),
                mypage_mail : mypage_mail,
                mypage_address : mypage_address,
                member : '',
                USERNAME : '',
                USEREMAIL :'',
                POST : '',
                ADDRESS : '',
                DETAILEADDRESS : '',
            }
        },
        async created() {
            await this.handleMemberGet();
        },
        components : {

        },
        methods : {
            async handleMemberGet() {
                const url = `REST/api/member/find`;
                const headers = { token: this.token };
                // console.log(headers);
                const response = await axios.get(url, { headers });
                console.log(response);
                if (response.data.result === 1) {
                    this.member = response.data.member;
                    console.log(this.member);
                } 
                else alert("정보를 받아오지 못하였습니다.");
            },
            handleAddressUpdate() {
                window.location.href = 'http://127.0.0.1:9090/mypage_member_update';
            },
            handleUpdate() {
                window.location.href = 'http://127.0.0.1:9090/mypage_member_update';
            },
            handleDelete() {
                window.location.href = 'http://127.0.0.1:9090/mypage_delete';
            },
            // handleCancle() {
            //     window.location.href =
            // },
            handleOrder() {
                window.location.href = 'http://127.0.0.1:9090/mypage_order_list';
            },
            handleQA() {
                window.location.href = 'http://127.0.0.1:9090/mypage_qa_list';
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.info_box {
    border: 1px solid black;
    width: 450px;
    height: 515px;
    border-radius: 10px;
    margin-right: 20px;
    font-family: 'Gowun Dodum', sans-serif;
}
.info_info {
    /* border: 1px solid black; */
    padding: 5px;
}
.info_name {
    display: flex;
    /* flex-direction: row;
    justify-content: center; */
    margin-top: 20px;
    /* align-items: flex-start; */
}
.info_name > input {
    /* border: 1px solid black; */
    border: none;
    color: #49654E;
    font-size: 30px;
    font-weight: 300;
    font-family: 'Gowun Dodum', sans-serif;
}
.info_name > p {
    /* border: 1px solid black; */
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 20px;
    color: black;
    margin-left: 5px;
    margin-top: 10px;
}
.info_email {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.info_email > input {
    border: none;
    height: 30px;
    font-size: 16px;
    font-family: 'Gowun Dodum', sans-serif;
    margin-top: -20px;
}
.info_email > p {
    margin-top: 0px;
}
.info_email > img {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-bottom: 15px;
}
.info_ad_icon {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: flex-end;
    margin-top: 0px;
    margin-bottom: 10px; */
}
.info_ad_icon > input {
    border: none;
    width: 100%;
    height: 70px;
    font-size: 16px;
    font-family: 'Gowun Dodum', sans-serif;
    margin-bottom: 10px;
    white-space: normal;
    word-wrap: break-word;
}
.info_ad_icon > img {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-bottom: 5px;
}
.info_ad_icon > button {
    display: flex;
}
.solid {
    width : 100%;
    height: 1px;
}
.info_address {
    display: flex;
    justify-content: center;
}
.info_info > button {
    border-radius: 5px;
    font-size: 13px;
    justify-content: center;
    background-color: #715036;
    color: white;
    border: none;
    display: flex;
    width: 100px;
    margin-top: 3px;
    height: 22px;
    font-family: 'Gowun Dodum', sans-serif;
}
.info_ad_icon > p {
    width: 80%;
    margin-bottom: 2px;
}
.info_menu {
    /* border: 1px solid black; */
    width: auto 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
}
.info_menu > p {
    margin-top: 10px;
    margin-bottom: 10px;
    /* line-height: 100%; */
}
.info_menu > span {
    color: #715036;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
    /* line-height: 100%; */
}
.m_address {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.m_update_postcode {
    display: flex;
}
.m_update_postcode > input {
    height: 25px;
    width: 80%;
}
.m_update_detailAddress {
    width: 100%;
}
.m_update_detailAddress > input {
    height: 25px;
    width: 80%;
}
</style>