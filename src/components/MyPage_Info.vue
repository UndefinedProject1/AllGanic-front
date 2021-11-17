<template>
    <div class="info_box">
        <div class="info_container">
            <div class="info_name">
                <p type="text">{{member.USERNAME}}</p>
                <p>님</p>
            </div>
            <div class="info_info">
                <div class="info_email">
                    <img :src="mypage_mail"/>
                    <p type="text">{{member.USEREMAIL}}</p>
                </div>
                <div class="info_ad_icon">
                    <img :src="mypage_address"/>
                    <div class="m_address">
                        <div class="m_update_postcode">
                            <p type="text">{{postcode}}</p>
                            <p >/</p>
                            <p type="text">{{roadAddress}}</p>
                        </div>
                        <div class="m_update_detailAddress">
                            <p type="text">{{detailAddress}}</p>
                        </div>
                    </div> 
               </div>
                <div class="btn_box">
                    <button type="button" @click="handleAddressUpdate">기본주소 수정</button>
                </div>
                
            </div>
        </div>

        <hr class="solid" />

        <div class="info_menu">
            <div class="info_mypage_home">
                <p @click="hadleClickUrl(0)">[MyPage Home]</p>
            </div>
            <div class="info_member">
                <span>Member</span>
                <p @click="hadleClickUrl(1)">회원정보변경</p>
                <p @click="hadleClickUrl(2)">회원탈퇴</p>
            </div>
            <div class="info_order">
                <span>Order</span>
                <p @click="hadleClickUrl(3)">교환내역</p>
                <p @click="hadleClickUrl(4)">주문내역</p>
            </div>
            <div class="info_qa">
                <span>QnA</span>
                <p @click="hadleClickUrl(5)">문의내역</p>
            </div>
        </div>
    </div>
    <div class="admin_content" >
        <component v-bind:is="MainPage"></component>
    </div>
</template>

<script>
import axios from "axios";
import mypage_mail from '@/assets/mypage_mail.png';
import mypage_address from '@/assets/mypage_address.png';
import MyPage from '@/components/MyPage.vue';
import MyPage_Member_Update from '@/components/MyPage_Member_Update.vue';
import MyPage_Delete from '@/components/MyPage_Delete.vue';
import MyPage_Cancle from '@/components/MyPage_Cancle.vue';
import MyPage_Order_List from '@/components/MyPage_Order_List.vue';
import MyPage_QA_List from '@/components/MyPage_QA_List.vue';
import MyPage_Near_List from '@/components/MyPage_Near_List.vue';
    export default {
        data() {
            return {
                token: sessionStorage.getItem("token"),
                mypage_mail : mypage_mail,
                mypage_address : mypage_address,

                postcode: '',
                roadAddress: '',
                detailAddress: '',
                member : [],
                // USERNAME : '',
                // USEREMAIL :'',
                // POST : '',
                // ADDRESS : '',
                // DETAILEADDRESS : '',

                MainPage : 'MyPageNearList',
                pages : ['MyPageNearList', 'MyPageMemberUpdate', 'MyPageDelete', 'MyPageCancle','MyPageOrderList','MyPageQAList']
            }
        },
        components : {
            'MyPage' : MyPage,
            'MyPageMemberUpdate' : MyPage_Member_Update,
            'MyPageDelete' : MyPage_Delete,
            'MyPageCancle' : MyPage_Cancle,
            'MyPageOrderList' : MyPage_Order_List,
            'MyPageQAList' : MyPage_QA_List,
            'MyPageNearList' : MyPage_Near_List,
        },
        methods : {
            hadleClickUrl(val){
                this.MainPage = this.pages[val];
            },
            async handleMemberGet() {
                const url = `REST/api/member/find`;
                const headers = { token: this.token };
                // console.log(headers);
                const response = await axios.get(url, { headers });
                // console.log(response);
                if (response.data.result === 1) {
                    this.member = response.data.member;

                    this.postcode = response.data.member.POST;
                    this.roadAddress = response.data.member.ADDRESS;
                    this.detailAddress = response.data.member.DETAILEADDRESS;
                    console.log(this.member);
                } 
                else alert("정보를 받아오지 못하였습니다.");
            },
            // handleAddressUpdate() {
            //     window.location.href = 'http://127.0.0.1:9090/mypage_member_update';
            // },
            // handleUpdate() {
            //     window.location.href = 'http://127.0.0.1:9090/mypage_member_update';
            // },
            // handleDelete() {
            //     window.location.href = 'http://127.0.0.1:9090/mypage_delete';
            // },
            // handleCancle() {
            //     window.location.href = 'http://127.0.0.1:9090/mypage_cancle';
            // },
            // handleOrder() {
            //     window.location.href = 'http://127.0.0.1:9090/mypage_order_list';
            // },
            // handleQA() {
            //     window.location.href = 'http://127.0.0.1:9090/mypage_qa_list';
            // }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.info_box {
    border: 1px solid black;
    width: 28%;
    height: 100%;
    border-radius: 3px;
    font-family: 'Gowun Dodum', sans-serif;
}
.info_container {
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
    height: fit-content;
    padding: 10px;
    margin-top: 10px;
}
.info_info {
    /* border: 1px solid black; */
    padding: 5px;
    width: 80%;
    margin: 0 auto;
}
.info_name {
    width: 100%;
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
}
.info_name > p:first-child {
    border: 1px solid black;
    color: #49654E;
    font-size: 25px;
    font-weight: 300;
    margin: 5px 0px 0px 0px;
    width: 50%;
    height: 15px;
    /* height: fit-content; */
    font-family: 'Gowun Dodum', sans-serif;
}
.info_name > p:last-child {
    border: 1px solid black;
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 15px;
    color: black;
    margin-left: 5px;
    height: fit-content;
    margin: 5px 0px 0px 3px;
}
.info_email {
    border: 1px solid black;
    width: 100%;
    display: flex;
    align-items: center;
}
.info_email > p {
    border: 1px solid black;
    font-size: 14px;
    font-family: 'Gowun Dodum', sans-serif;
    margin-left: 8px;
}
img {
    border: 1px solid black;
    width: 20px;
    height: 20px;
}
.info_ad_icon {
    border: 1px solid black;
    width: 100%;
    display: flex;
    align-items: center;
}
.solid {
    width : 100%;
    height: 1px;
}
.info_address {
    border: 1px solid black;
    display: flex;
    justify-content: center;
}
.btn_box {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.btn_box > button {
    border-radius: 5px;
    justify-content: center;
    background-color: #715036;
    color: white;
    border: none;
    width: 90px;
    height: 22px;
    margin: 3px 0px 0px 0px;
    float: right;
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 12px;
}
.info_ad_icon > p {
    width: 80%;
    margin-bottom: 2px;
}
.m_address {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 8px;
}
.m_update_postcode {
    display: flex;
    font-size: 14px;
    font-family: 'Gowun Dodum', sans-serif;
    height: fit-content;
    width: 100%;
    margin-top: 10px;
    /* border: 1px solid black; */
}
.m_update_postcode > p:first-child {
    height: 25px;
    width: fit-content;
    font-size: 14px;
    font-family: 'Gowun Dodum', sans-serif;
    border: 1px solid black;
    margin: 0;
}
.m_update_postcode > p:nth-child(2) {
    height: 25px;
    width: fit-content;
    font-size: 14px;
    font-family: 'Gowun Dodum', sans-serif;
    border: 1px solid black;
    margin: 0;
}
.m_update_postcode > p:last-child {
    height: 25px;
    width: fit-content;
    font-size: 14px;
    font-family: 'Gowun Dodum', sans-serif;
    border: 1px solid black;
    margin: 0;
}
.m_update_detailAddress {
    /* border: 1px solid black; */
    width: 100%;
    height: fit-content;
}
.m_update_detailAddress > p {
    /* border: 1px solid black; */
    height: fit-content;
    width: fit-content;
    font-size: 14px;
    font-family: 'Gowun Dodum', sans-serif;
    border: none;
    margin: 0;
    word-wrap: break-word;
    word-break: keep-all;
}
.info_menu {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40PX;
}
.info_member, .info_order, .info_qa {
    /* border: 1px solid black; */
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.info_mypage_home {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
}
.info_member > span, .info_order > span, .info_qa > span {
    color: #715036;
    font-weight: 550;
    font-size: 20px;
    margin-bottom: 5px;
}
.info_mypage_home > p {
    color: #715036;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
}
.info_member > p, .info_order > p, .info_qa > p {
    margin-bottom: 0;
    margin-top: 5px;
    cursor: pointer;
    opacity: 0.8;
}
.info_member > p:last-child, .info_order > p:last-child {
    margin-bottom: 10px;
}
.admin_content {
    width: 100%;
}
</style>