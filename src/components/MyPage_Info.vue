<template>
    <div class="info_wapper" id="wrap">
        <div class="info_box" id="info_box">
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
                        <button type="button" @click="hadleClickUrl(1)">기본주소 수정</button>
                    </div>
                </div>
            </div>

            <hr class="solid" />

            <div class="info_menu">
                <div class="info_mypage_home">
                    <span @click="hadleClickUrl(0)">Main</span>
                </div>
                <div class="info_member">
                    <span>Member</span>
                    <p @click="hadleClickUrl(1)">회원정보변경</p>
                    <p @click="hadleClickUrl(2)">회원탈퇴</p>
                </div>
                <div class="info_order">
                    <span>Order</span>
                    <p @click="hadleClickUrl(3)">환불내역</p>
                    <p @click="hadleClickUrl(4)">주문내역</p>
                </div>
                <div class="info_qa">
                    <span>QnA</span>
                    <p @click="hadleClickUrl(5)">문의내역</p>
                </div>
            </div>
        </div>
        <div class="admin_content" >
            <component v-bind:is="MainPage" @hadleClickUrl="hadleClickUrl"></component>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import $ from 'jquery';
import mypage_mail from '@/assets/mypage_mail.png';
import mypage_address from '@/assets/mypage_address.png';
import MyPage_Member_Update from '@/components/MyPage_Member_Update.vue';
import MyPage_Delete from '@/components/MyPage_Delete.vue';
import MyPage_Cancle from '@/components/MyPage_Cancle.vue';
import MyPage_Order_List from '@/components/MyPage_Order_List.vue';
import MyPage_QA_List from '@/components/MyPage_QA_List.vue';
import MyPage_Near_List from '@/components/MyPage_Near_List.vue';
import { ElMessage } from 'element-plus'

    export default {
        setup() {
            const failAlertMSG = () => {
                ElMessage.error('정보를 받아오지 못하였습니다.')
            }
            return {
                failAlertMSG
            }
        },
        data() {
            return {
                token: sessionStorage.getItem("token"),
                mypage_mail : mypage_mail,
                mypage_address : mypage_address,

                postcode: '',
                roadAddress: '',
                detailAddress: '',
                member : [],

                MainPage : 'MyPageNearList',
                pages : ['MyPageNearList', 'MyPageMemberUpdate', 'MyPageDelete', 'MyPageCancle','MyPageOrderList','MyPageQAList']
            }
        },
        components : {
            'MyPageMemberUpdate' : MyPage_Member_Update,
            'MyPageDelete' : MyPage_Delete,
            'MyPageCancle' : MyPage_Cancle,
            'MyPageOrderList' : MyPage_Order_List,
            'MyPageQAList' : MyPage_QA_List,
            'MyPageNearList' : MyPage_Near_List,
            
        },
        async mounted() {
                $(document).ready(function(){
        var currentPosition = parseInt($("#info_box").css("top"));
        $(window).scroll(function() {
            var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
            $("#info_box").stop().animate({"top":position+currentPosition+"px"},1000);
        });
    });
        }, 
        async created() {
            await this.handleMemberGet();
        },
        methods : {
            handleMypageInfo(){
                this.$emit('changeLogged', true);
            },
            hadleClickUrl(val){
                this.MainPage = this.pages[val];
                console.log(this.MainPage);
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

                    this.$emit('changeLogged', true);
                } 
                else {
                    this.failAlertMSG();
                }
            },
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500&display=swap');

.info_box {
    border: 3px solid #715036;
    width: 28%;
    height: 90%;
    border-radius: 3px;
    font-family: 'Hahmlet', serif;
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
    width: 100%;
    margin: 0 auto;
}
.info_name {
    width: 100%;
    display: flex;
    /* border: 1px solid black; */
    justify-content: center;
    align-items: center;
}
.info_name > p:first-child {
    /* border: 1px solid black; */
    color: #49654E;
    font-size: 25px;
    font-weight: 300;
    margin: 5px 0px 0px 0px;
    /* width: 50%; */
    /* height: 15px; */
    height: fit-content;
    font-family: 'Hahmlet', serif;
}
.info_name > p:last-child {
    /* border: 1px solid black; */
    font-family: 'Hahmlet', serif;
    font-size: 15px;
    color: black;
    margin-left: 5px;
    height: fit-content;
    margin: 5px 0px 0px 3px;
}
.info_email {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    align-items: center;
}
.info_email > p {
    /* border: 1px solid black; */
    font-size: 14px;
    font-family: 'Hahmlet', serif;
    margin-left: 8px;
}
img {
    /* border: 1px solid black; */
    width: 20px;
    height: 20px;
}
.info_ad_icon {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    align-items: center;
}
.solid {
    /* border: 2px solid #715036; */
    width : 100%;
    height: 2px;
    color: #715036;
}
.info_address {
    /* border: 1px solid black; */
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
    font-family: 'Hahmlet', serif;
    font-size: 12px;
    cursor: pointer;
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
    font-family: 'Hahmlet', serif;
    height: fit-content;
    width: 100%;
    margin-top: 10px;
    /* border: 1px solid black; */
}
.m_update_postcode > p:first-child {
    height: 25px;
    width: fit-content;
    font-size: 14px;
    font-family: 'Hahmlet', serif;
    /* border: 1px solid black; */
    margin: 0;
}
.m_update_postcode > p:nth-child(2) {
    height: 25px;
    width: fit-content;
    font-size: 14px;
    font-family: 'Hahmlet', serif;
    /* border: 1px solid black; */
    margin: 0;
}
.m_update_postcode > p:last-child {
    height: 25px;
    width: fit-content;
    font-size: 14px;
    font-family: 'Hahmlet', serif;
    /* border: 1px solid black; */
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
    font-family: 'Hahmlet', serif;
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
    margin-bottom: 20px;
}
.info_member > span, .info_order > span, .info_qa > span {
    color: #715036;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Playfair Display', sans-serif;
}
.info_mypage_home > span {
    color: #715036;
    font-weight: bold;
    font-size: 23px;
    font-family: 'Playfair Display', sans-serif;
}
.info_mypage_home > span:hover {
    color: rgb(80, 80, 80);
    font-weight: bold;
    font-size: 23.5px;
    cursor : pointer;
    opacity: 0.9;
}
.info_menu p{
    margin-bottom: 0;
    margin-top: 5px;

}
.info_menu p:hover{
    cursor: pointer;
    opacity: 0.8;
}
.info_member > p:last-child, .info_order > p:last-child {
    margin-bottom: 10px;
}
.admin_content {
    width: 100%;
    height: 88%;
    /* border: 1px solid black; */
}
.info_wapper {
    /* border: 1px solid black; */
    display: flex;
    padding: 40px;
    font-family: 'Hahmlet', serif;
    margin-top: 2%;
    height: 100vh;
    align-items: center;
}

</style>