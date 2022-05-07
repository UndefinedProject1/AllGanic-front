<template>
    <div class="order_wrapper">
        <div class="order_container">
            <div class="client_info_container">
                <p>Order / Payment</p>
                <div class="client_order_box">
                    <!-- 배송지 정보 영역 -->
                    <div class="client_address_box">
                        <div class="client_address_box_title">
                            <p>배송정보</p>
                            <div class="box_title_section">
                                <span> * </span> <p> 는 필수 입력 항목입니다. </p>
                            </div>
                        </div>

                        <div class="client_address_table">
                            <table>
                                <colgroup>
                                    <col class="th_area">
                                    <col class="td_area">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th style="display:inline-flex; width: 90%;">
                                            <span>*</span>
                                            <p>수령인</p>
                                        </th>
                                        <td>
                                            <input type="text" v-model="orderList[0].USERNAME" readonly id="usernameinput">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style="display:inline-flex; width: 90%;">
                                            <span>*</span>
                                            <p>연락처</p>
                                        </th>
                                        <td>
                                            <input type="text" v-model="orderList[0].USERTEL" readonly id="usertelinput">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style="display:inline-flex; width: 90%;">
                                            <span>*</span>
                                            <p>배송지</p>
                                        </th>
                                        <td style="padding:10px 0px;">
                                            <div style="display:inline-flex; width:98%; justify-content: space-between; align-items: center;">
                                                <input type="text" readonly style="width:30%;" v-model="postcode">
                                                <span> / </span>
                                                <input type="text" readonly style="width:60%;" v-model="roadAddress">
                                            </div>
                                            <div style="display:inline-flex; width:98%; justify-content: space-between; margin:10px 0px;">
                                                <input type="text" style="width:56%;" v-model="detailAddress">
                                                <button type="button" 
                                                        style="width:20%; border:none;     font-family: 'Hahmlet', serif; background-color:#715036; color:white;
                                                                font-weight:bold; border-radius:3px; "
                                                        @click="handlePostCode"
                                                >우편번호검색</button>
                                                <button type="button" 
                                                        style="width:20%; border:none;     font-family: 'Hahmlet', serif; background-color:white; color:#715036;
                                                                font-weight:bold; border-radius:3px; border:0.5px solid #715036; "
                                                        @click="handleAddUpdate"
                                                >변경 배송지 저장</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style="display:inline-flex; width: 100%;">배송메세지</th>
                                        <td>
                                            <el-select v-model="option" placeholder="배송메세지를 선택해주세요" class="form-select">
                                                <el-option v-for="option in msgOptions"  :key="option.value" :label="option.label" :value="option.value"></el-option>
                                            </el-select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- 주문시 유의사항 영역 -->
                    <div class="client_warning_box">
                        <div class="warning_info">
                            <p @click="openModal1">품절 취소 시 환불 안내 <i class="el-icon-arrow-right bold"></i></p>
                            <p @click="openModal2">신용카드 무이자 할부 안내 <i class="el-icon-arrow-right bold"></i></p>  
                        </div>
                    </div>
                </div>
            </div>
            <!-- 주문할 물품 정보 -->
            <div class="order_product_info_container">
                <p>Product Info</p>
                <div class="order_product_info_summary">
                    <div class="order_product_info" v-for="item in orderList" v-bind:key="item">
                        <table>
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <th>
                                    <img :src="`REST/api/select_productimage?no=${item.PRODUCTCODE}`">
                                </th>
                                <td>
                                    <p><small>[ {{item.BRANDNAME}} ]</small></p>
                                    <span>{{item.PRODUCTNAME}}</span>
                                    <span>수량 : {{item.QUANTITY}}개</span>
                                    <span>쿠폰적용 불가상품</span>
                                </td>
                            </tbody>
                        </table>
                    </div>
                    <div class="order_price_summary">
                        <table>
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>총 상품금액</th>
                                    <td>
                                        <span @change="handleTotalPrice">{{totalPriceF}} 원</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>쿠폰사용</th>
                                    <td>
                                        <span>- 0 원</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>총 배송비</th>
                                    <td>
                                        <span @change="handleTotalShippingPrice">+ {{totalShippingPriceF}} 원</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>총 결제금액</th>
                                    <td>
                                        <span>{{totalOrderPriceF}} 원</span>
                                    </td>
                                </tr>
                            </tbody>

                        </table>  
                    </div>
                    <div class="order_policy_section">
                        <p>이용약관 및 개인정보 제3자 제공사항에 대해 확인하였으며 결제에 동의합니다.</p>
                        <span>개인정보 수집/이용 동의</span>
                        <span>개인정보 제3자 제공 동의</span>
                        <div class="policy_small_section">
                            <span>결제대행 서비스 이용약관</span>
                            <el-link type="info" 
                                    style="width:fit-content; margirn:0; color: rgb(104, 104, 104); font-weight:bold; font-size:13px;"
                                    href="https://www.inicis.com/terms"
                            >(주)KG이니시스</el-link>
                        </div>
                    </div>
                    <!-- 결제하기 버튼 영역-->
                    <div class="orderBtnContainer">
                        <button type="button" @click="handleOrder2">CHECK OUT</button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div id="wrap"
    style="display: none; border: 1px solid; width: 500px; height: 300px; margin: 5px 0; position: relative;">
        <img
            src="//t1.daumcdn.net/postcode/resource/images/close.png"
            id="btnFoldWrap"
            style="
            cursor: pointer;
            position: absolute;
            right: 0px;
            top: -1px;
            z-index: 1;
            "
            @click="foldDaumPostcode"
            alt="접기 버튼"
        />
    </div>

    <!-- 결제 정책 모달1 -->
    <el-dialog v-model="handleModal1" title="Notice" width="30%" center destroy-on-close>
        <p>- 상품이 부득이하게 품절된 경우 알림톡 안내와 함께, 주문하신 결제수단으로 환불 처리해드립니다.</p>
        <p>- 품절로 인한 현금 환불의 경우, 빠른 환불 절차 진행을 위해 고객님께 별도 연락을 드릴 수 있습니다.</p>
    </el-dialog>

    <!-- 결제 정책 모달2 -->
    <el-dialog v-model="handleModal2" title="Notice" width="30%" center destroy-on-close>
        <p>- 법인(기업), 체크, 선불, 기프트, 은행계열카드 (BC마크가 없는 NON BC카드 불가)제외 (EX>수협카드 등)</p>
        <p>직계약 가맹점, 상점부담 무이자 가맹점, 특별제휴가맹점,오프라인 가맹점, 신규 가맹점 등 일부 제외</p>
        <p>- 본 행사는 카드사 사정에 따라 변경 또는 중단될 수 있음</p>
        <p>- 무이자 할부 결제시 포인트, 마일리지 적립 제외</p>
        <p>- 개인간 안전거래 이니 P2P 서비스 제외</p>
        <p>- TASF 취급 수수료 거래 하나카드 제외</p>
        <p>- 온라인 PG업종 해당하는 무이자로 이 외 업종은 적용 불가 (제약, 등록금, 도시가스 등)</p>
    </el-dialog>

</template>

<script>
import {getCurrentInstance} from '@vue/runtime-core';
import vegan_soap_img2 from '@/assets/vegan_soap_img2.jpg';
import axios from 'axios';
require("dotenv").config();
import { ElMessage } from 'element-plus';
    export default {
        setup() {
            const successAlertMSG = () => {
                ElMessage.success('주소 업데이트 성공')
            }
            const successAlertMSG2 = () => {
                ElMessage.success('주문이 성공적으로 완료되었습니다.')
            }
            const addProductAlertMSG = () => {
                ElMessage.message('상품 리스트 추가')
            }
            const failAlertMSG = () => {
                ElMessage.error('위조된 결제금액입니다.')
            }
            const failAlertMSG2 = () => {
                ElMessage.error('결제번호 및 주문번호가 제대로 넘어오지않았습니다.')
            }
            const addProductAlertMSG1 = () => {
                ElMessage.message('필수입력사항으로 마이페이지로 이동합니다.')
            }
            const failAlertMSG3 = () => {
                ElMessage.error('배송지는 필수입력사항입니다')
            }
            return{
                successAlertMSG,
                successAlertMSG2,
                addProductAlertMSG,
                failAlertMSG,
                failAlertMSG2,
                addProductAlertMSG1,
                failAlertMSG3
            }
        },
        data(){
            return{
                chks : this.$route.query.chks,
                token: sessionStorage.getItem("token"),
                msgOptions : [
                    {value : 1, label : '직접입력'},
                    {value : 2, label : '현관 문 앞에 놔주세요.'},
                    {value : 3, label : '빠른 배송 부탁드립니다.'},
                    {value : 4, label : '안전한 배송 부탁드립니다.'},
                ],
                option : '',
                handleModal1 : false,
                handleModal2 : false,
                vegan_soap_img2: vegan_soap_img2,
                member : '',
                username : '',
                usertel : '',
                postcode : 0,
                roadAddress : '',
                detailAddress : '',
                orderList : [],
                productCodeList : [],
                eachPrice : [],
                totalPrice : 0,
                totalShippingPrice : 0,
                totalOrderPrice : 0,
                totalPriceF : 0,
                totalShippingPriceF : 0,
                totalOrderPriceF : 0,
                $socket : '',
            }
        },
        async created(){
            await this.getOrderInfo();
            const app = getCurrentInstance();
            this.$socket = app.appContext.config.globalProperties.$socket;
            console.log(this.$socket);
        },
        methods : {
            // async handleMemberGet() {
            //     const url = `REST/api/member/find`;
            //     const headers = { token: this.token };
            //     // console.log(header);
            //     const response = await axios.get(url, { headers });
            //     console.log(response);
            //     if (response.data.result === 1) {
            //         this.member = response.data.member;

            //         this.postcode = response.data.member.POST;
            //         this.roadAddress = response.data.member.ADDRESS;
            //         this.detailAddress = response.data.member.DETAILEADDRESS;
            //         console.log(this.member);
            //     } else alert("정보를 받아오지 못하였습니다.");
            // },
            handlePostCode() {
                new window.daum.Postcode({
                    oncomplete: (data) => {
                        // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                        let addr = data.query; // 주소 변수
                        let postcode = data.zonecode;
                        let extraRoadAddr = "";

                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                            extraRoadAddr += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if (data.buildingName !== "" && data.apartment === "Y") {
                            extraRoadAddr +=
                            extraRoadAddr !== ""
                                ? ", " + data.buildingName
                                : data.buildingName;
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if (extraRoadAddr !== "") {
                            extraRoadAddr = " (" + extraRoadAddr + ")";
                        }

                        // 우편번호와 주소 정보를 해당 필드에 넣는다.
                        // document.getElementById('address').value = addr
                        this.postcode = postcode;
                        this.roadAddress = addr;

                        // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
                        if (addr !== "") {
                            this.detailAddress = extraRoadAddr;
                        } else {
                            this.detailAddress = "";
                        }
                    },
                    theme: {
                        searchBgColor: "#1B1B1C",
                        queryTextColor: "#FFFFFF",
                    },
                }).open();
            },
            async handleOrder2(){

                const productCodeList1 = this.productCodeList;
                const token1 = this.token;
                const router1 = this.$router;
                const socket1 = this.$socket;

                if(this.orderList[0].USERTEL === ''){
                    alert('필수입력사항으로 마이페이지로 이동합니다.');
                    // this.addProductAlertMSG1();
                    return this.$router.push({ path: "/mypage_info" });
                }

                if(this.orderList[0].ADDRESS == '' || this.orderList[0].DETAILEADDRESS == ''){
                    alert('배송지는 필수입력사항입니다');
                    // this.failAlertMSG3();
                    return;
                }
                
                else{
                    //가맹점 식별코드
                    const IMP = window.IMP;
                    const init = process.env.PAY_INIT;
                    IMP.init(init);
                    IMP.request_pay({
                        pg: "kcp",
                        pay_method: "card",
                        merchant_uid: "ORD_" + new Date().getTime(),
                        name: this.orderList[0].PRODUCTNAME + '외..',
                        amount: this.productCodeList.length * 100,
                        buyer_email: process.env.BUYER_EMAIL,
                        buyer_name: this.orderList[0].USERNAME,
                        buyer_tel: this.orderList[0].USERTEL,
                        buyer_addr: this.roadAddress,
                        buyer_postcode: this.postcode,
                        custom_data : {
                            token : this.token,
                            chks : this.chks,
                            product : this.productCodeList
                        }

                    }, async function(rsp) {
                        // console.log(rsp);
                        if ( rsp.success ) {
                            // var msg = '결제가 완료되었습니다.';
                            msg += '고유ID : ' + rsp.imp_uid;
                            msg += '상점 거래ID : ' + rsp.merchant_uid;
                            msg += '결제 금액 : ' + rsp.paid_amount;
                            msg += '카드 승인번호 : ' + rsp.apply_num;

                            const url = `REST/api/payments/complete`;
                            const body = {
                                imp_uid: rsp.imp_uid,
                                merchant_uid: rsp.merchant_uid,
                                chks : rsp.custom_data.chks,
                                product : rsp.custom_data.product,
                            }
                            // console.log(body);
                            const headers = {"Content-Type" : "application/json" , "token" : rsp.custom_data.token};
                            // console.log(headers);
                            const response = await axios.post(url, body, {headers});
                            // console.log(response);

                            if(response.data.result === 1){
                                // 결제 성공시
                                // console.log(socket1);
                                socket1.emit('payment', {data : {sell : 1}});

                                // alert(response.data.state);
                                router1.push({ path: "/complete_order_page" });

                                const url1 = `REST/api/add/recommended?no=${productCodeList1}`;
                                const headers = {"token" : token1};
                                // console.log(productCodeList1);
                                // console.log(headers);
                                const response1 = await axios.put(url1, {}, {headers});
                                // console.log(response1);
                            }
                            else if(response.data.result === 4){
                                alert(response.data.state);
                            }
                            else if(response.data.result === 0){
                                alert(response.data.state);
                            }
                        } else {
                            var msg = '결제에 실패하였습니다.';
                            msg += '에러내용 : ' + rsp.error_msg;
                        }
                        alert(msg);
                    });
                }
            },
            openModal1(){
                this.handleModal1 = true;
            },
            openModal2(){
                this.handleModal2 = true;
            },
            async getOrderInfo(){
                const url = `REST/api/cartitem/payment?chks=` + this.chks;
                const headers = {"Content-Type" : "application/json" };
                const response = await axios.get(url, headers);
                // console.log(response);
                if(response.data.result === 1){
                    this.orderList = response.data.list;
                    this.postcode = response.data.list[0].POST;
                    this.roadAddress = response.data.list[0].ADDRESS;
                    this.detailAddress = response.data.list[0].DETAILEADDRESS;
                    // console.log(this.orderList);
                    // console.log(this.chks);

                    await this.getTotalPirce();
                    await this.handleProductCode();
                }else if(response.data.result === 0) {
                    alert(response.data.state);
                }else alert("error");

            },
            getTotalPirce(){
                this.totalPrice = 0; 
                this.totalShippingPrice = 0;

                for(var i=0; i<this.orderList.length; i++){
                    this.eachPrice[i] = this.orderList[i].PRODUCTPRICE * this.orderList[i].QUANTITY;
                    this.totalPrice += this.eachPrice[i];

                    // 최종가격 -> 금액단위 표시
                    this.totalPriceF = this.totalPrice.toLocaleString();

                    if(this.orderList[i].PRODUCTPRICE * this.orderList[i].QUANTITY < 30000){
                        this.totalShippingPrice += 2500;

                        // 최종가격 -> 금액단위 표시
                        this.totalShippingPriceF = this.totalShippingPrice.toLocaleString();
                    }
                }

                this.totalOrderPrice = this.totalPrice + this.totalShippingPrice;

                // 최종가격 -> 금액단위 표시
                this.totalOrderPriceF = this.totalOrderPrice.toLocaleString();
            },
            async handleTotalPrice(){
                await this.getCartItem();
            },
            async handleAddUpdate(){
                const url = `REST/api/member/address/update`;
                const headers = {"Content-Type" : "application/json" , "token" : this.token};
                const body = {
                    post : this.postcode,
                    address : this.roadAddress,
                    detailaddress : this.detailAddress, 
                };
                // console.log(body);
                const response = await axios.put(url, body, {headers});
                // console.log(response);
                if(response.data.result === 1){
                    this.successAlertMSG();
                    await this.getOrderInfo();
                }
            },
            handleProductCode(){
                for(var i=0; i<this.orderList.length; i++){
                    this.productCodeList[i] = this.orderList[i].PRODUCTCODE;
                    // console.log(this.productCodeList);
                }
            }          
        }
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap");
input[type="text"]{
    border : 1px solid rgb(185, 185, 185);
    border-radius: 3px;
    font-weight: bold;
    color: rgb(104, 104, 104);
}
#usernameinput:focus,
#usertelinput:focus {
    outline: none;
}
button:hover{
    cursor: pointer;
    opacity: 0.9;
}
p{
    font-family: 'Hahmlet', serif;
}
.order_wrapper{
    /* border: 1px solid black; */
    font-family: 'Hahmlet', serif;
    padding: 35px 40px 35px 30px;
    height: 100vh;
    background-color: white;
    margin-top: 4.5%;
}
.order_container{
    /* border: 1px solid red; */
    /* margin: 0 auto; */
    width: 100%;
    height: 100%;
    display: inline-flex;
    margin : 10px 0px;
}
.order_top_nav{
    /* border: 1px solid black; */
    width: fit-content;
    height: fit-content;
    padding: 0px 20px;
    flex-direction: column;
    font-size: 30px;
    margin: 0 auto;
}
.order_container .client_info_container{
    /* border: 1px solid black; */
    width: 55%;
    height: 500px;
    display: flex;
    padding: 0px 20px;
    flex-direction: column;
}
.client_info_container > p,
.order_product_info_container >p{
    /* border: 1px solid black; */
    font-size: 25px;
    width: fit-content;
    height: fit-content;
    color: #715036;
    font-weight: 800;
    margin: 10px 0px;
    font-family: 'Playfair Display', sans-serif;
}
.client_info_container .client_order_box{
    border-top: 3px solid #715036;
    border-bottom: 3px solid #715036;
    /* border: 1px solid black; */
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
}
.client_info_container .client_order_box .client_address_box{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.client_address_box .client_address_box_title > p{
    /* border: 1px solid black; */
    font-size: 17px;
    width: fit-content;
    height: fit-content;
    color: #715036;
    font-weight: bold;
    margin: 10px 0px;
    margin-left: 10px;
}
.client_address_box .client_address_box_title{
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
}
.client_address_box .client_address_box_title .box_title_section{
    width: fit-content;
    display: inline-flex;
    align-items: flex-end;
    margin-bottom: 5px;
    margin-right: 10px;
}
.box_title_section > span{
    /* border: 1px solid black; */
    width: fit-content;
    height: fit-content;
    color: red;
    font-weight: bold;
}
.box_title_section > p{
    /* border: 1px solid black; */
    font-size: 13px;
    width: fit-content;
    height: fit-content;
    color: #715036;
    font-weight: bold;
    margin: 0;
}
.client_address_table {
    margin: 0px;
    border-top: 0.5px solid black;
    /* border-bottom : 0.5px solid black */
}
.client_address_box .client_address_table table input{
    /* border: 1px solid black; */
    width: 35%;
    height: 30px;
    padding-left: 5px;
    font-family: 'Hahmlet', serif;
    font-size: 13px;
    padding-left:10px;
}
.form-select{
    width: 98%;
}
.client_address_box .client_address_table table{
    /* border: 1px solid black; */
    width: 100%;
}
.client_address_box .client_address_table table th{
    /* border: 1px solid black; */
    width: 15%;
    align-items: center;
    padding-left: 5px;
}
.client_address_box .client_address_table table th span{
    /* border: 1px solid black; */
    width: fit-content;
    height: fit-content;
    color: red;
    font-weight: bold;
    margin-right: 5px;
}
.client_address_box .client_address_table table th p{
    /* border: 1px solid black; */
    width: fit-content;
    height: fit-content;
    font-weight: bold;
}
.client_address_box .client_address_table table td{
    /* border: 1px solid black; */
    width: 88%;
}

.client_warning_box{
    /* border: 1px solid black; */
    width: 92%;
    height: fit-content;
    background-color: rgba(51, 51, 51, 0.151);
    color: white;
    padding: 10px 20px;
    margin: 25px 10px;
}
.warning_info{
    width: 100%;
    color: black;
}
.warning_info p:hover{
    opacity: 0.9;
    cursor: pointer;
    font-weight: bold;
}
.order_container .order_product_info_container{
    /* border: 1px solid black; */
    width: 40%;
    height: 600px;
    margin: 0px 10px;
}
table{
    margin: 10px;
}
.order_product_info_summary{
    width : 100%;
    height: fit-content;
    border: 3px solid #715036;
    padding: 10px;
}
.order_product_info {
    width: 100%;
    /* border: 1px solid black; */
}
.order_product_info table th img {
    /* border: 1px solid black; */
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 3px;
}
.order_product_info table td {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    padding-left: 10px;
}
.order_product_info table td > p,
.order_product_info table td > span{
    font-family: 'Hahmlet', serif;
    margin: 0px;
    /* border: 1px solid black; */
}
.order_product_info table td > p {
    font-family: 'Hahmlet', serif;
    font-size: 15px;
    font-weight: bold;
    color: rgb(104, 104, 104);
    margin: 5px 0px;
}
.order_product_info table td > span {
    font-family: 'Hahmlet', serif;
    font-size: 15px;
    color: black;
    margin: 3px 0px;
}
.order_product_info table td > span:nth-child(2) {
    font-family: 'Hahmlet', serif;
    font-size: 15px;
    color: black;
    font-weight: bold;
    margin: 3px 0px;
}
.order_product_info table td > span:last-child {
    font-family: 'Hahmlet', serif;
    font-size: 13.5px;
    color: #E6A23C;
    margin: 3px 0px;
}

.order_price_summary {
    border-top: 0.3px solid black;
    border-bottom: 0.3px solid black;
    padding : 10px 0px;
    width: 100%;
    height: fit-content;
}
.order_price_summary table {
    width: 96%;
    height: fit-content;
}
.order_price_summary table tr th {
    /* border: 1px solid black; */
    font-family: 'Hahmlet', serif;
    color: rgb(104, 104, 104);
    font-size: 14px;
    width: 30%;
    height: 40px;

    text-align: left;
}
.order_price_summary table tr:last-child th{
    /* border: 1px solid black; */
    font-family: 'Hahmlet', serif;
    color: black;
    font-size: 15px;
    width: 30%;
    height: 40px;
    font-weight: bold;
    text-align: left;
}
.order_price_summary table tr td {
    /* border: 1px solid black; */
    font-family: 'Hahmlet', serif;
    color: black;
    font-size: 16px;
    font-weight: bold;
    width: 70%;
    height: 40px;
    text-align: right;
}
.order_price_summary table tr:last-child td {
    /* border: 1px solid black; */
    font-family: 'Hahmlet', serif;
    color: #E6A23C;
    font-size: 30px;
    font-weight: bold;
    width: 70%;
    height: 40px;
    text-align: right;
}

.order_policy_section, .orderBtnContainer{
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.order_policy_section > p{
    /* border: 1px solid black; */
    width: fit-content;
    font-family: 'Hahmlet', serif;
    color: black;
    font-size: 15px;
    font-weight: bold;
}
.order_policy_section span{
    /* border: 1px solid black; */
    width: fit-content;
    font-family: 'Hahmlet', serif;
    color: rgb(104, 104, 104);
    font-size: 14px;
    font-weight: bold;
}
.policy_small_section{
    display: inline-flex;
}
.policy_small_section > span{
    margin-right: 7px;
}

.orderBtnContainer button{
    width: 97%;
    padding: 20px;
    margin: 10px 0px;
    font-size: 30px;
    font-family: 'Playfair Display', sans-serif;
    background-color: #715036;
    color: white;
    border: none;
    border-radius: 5px;
}
.orderBtnContainer button:hover{
    cursor: pointer;
    opacity: 0.9;
}
</style>