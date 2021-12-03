<template>
    <div class="cart_wrapper">
        <div class="cart_container">
            <div class="product_info">
                <div class="product_info_title">
                    <p id="product_info_title">Cart</p>
                    <p id="product_info_warning">장바구니에 담긴 상품은 30일 동안만 보관됩니다.</p>
                </div>
                <div class="product_info_section">
                    <el-table ref="multipleTable" :data="itemList" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="100" align="center" v-model="chks"/>
                        <el-table-column label="상품정보" width="430" align="center">
                            <template #default="scope">
                                <el-image style="width: 135px; height: 150px;" :src="`REST/api/select_productimage?no=${scope.row.PRODUCTCODE}`" :fit="cover"></el-image>
                                <div class="product_detail_info" style="width: 60%; float:right;  text-align:left; padding:5px 10px;">
                                    <span style="font-size:14px; color:#333; font-weight:bold">[ {{scope.row.BRANDNAME}} ]</span>
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.PRODUCTNAME}}</p>
                                    <p style="font-size:14px; color:#E6A23C; margin:0;">쿠폰적용 불가상품</p>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="수량" width="170" align="center">
                            <template #default="scope">
                                <el-input-number v-model="scope.row.QUANTITY" :min="1" :max="10" @change="handleQuantityChange" size="mini"/>
                                <p type="primary" @click="saveQuantity(scope.row.QUANTITY, scope.row.CARTITEMCODE)" style="font-size:13px; color:black; margin:10px 0px; cursor:pointer;">변경수량 저장</p>
                            </template>
                        </el-table-column>
                        <el-table-column property="finalPrice" label="상품 금액" width="135" align="center">
                            <template #default="scope">
                                <p style="font-size:14px; color:black; margin:0;">{{scope.row.PRODUCTPRICE}} 원</p>
                            </template>
                        </el-table-column>
                        <el-table-column property="shippingCost" label="배송비"  width="200" align="center">
                            <template #default="scope">
                                <p style="font-size:13px; color:#333; font-weight:bold; margin:5px 0px;">[{{ scope.row.BRANDNAME }}]</p>
                                <span style="font-size:13px; color:black; letter: spacing 0.06em;">상품으로만 30,000원 이상 주문시 배송비 무료</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="button_container">
                    <button type="button" id="allDeleteBtn" @click="allDeleteBtn"><i class="el-icon-delete"></i>전체삭제</button>
                    <button type="button" id="someDeleteBtn" @click="someDeleteBtn"><i class="el-icon-delete"></i>선택항목 삭제</button>
                </div>
            </div>
            <div class="cart_summary">
                <p id="amountTitle">Summary</p>
                <div class="cart_summary_container">
                    <div class="check_out_amount">
                        <table>
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>총 주문 금액 : </th>
                                    <td @change="handleTotalPrice">{{totalPriceF}} 원</td>
                                </tr>
                                <tr>
                                    <th>+</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>총 배송 금액 : </th>
                                    <td @change="handleTotalShippingPrice">{{totalShippingPriceF}} 원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="totalAmount">
                        <table>
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th><mark>총 주문 금액</mark> : </th>
                                    <td>{{totalOrderPriceF}} 원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button type="button" id="checkoutBtn" @click="handlePayment">
                        CHECK OUT
                        <!-- <router-link :to="`/order_page?chks=${this.chks}`" id="checkoutBtnlink">CHECK OUT</router-link> -->
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import vegan_soap_img2 from '@/assets/vegan_soap_img2.jpg';
import { ElMessageBox, ElMessage } from 'element-plus'
    export default {
        setup(){
            const deleteConfirm = () => {
                ElMessageBox.confirm(
                    '삭제하시겠습니까?',
                    'Warning',
                    {
                    confirmButtonText: '삭제',
                    cancelButtonText: '취소',
                    type: 'warning',
                    }
                )
                .then(() => {
                    ElMessage({
                        type: 'success',
                        message: '해당 제품이 삭제되었습니다.',
                    })
                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: '삭제 취소',
                    })
                })
            }
            const failAlertMSG = () => {
                ElMessage.error('삭제 실패')
            }
            const failAlertMSG1 = () => {
                ElMessage.error('error')
            }
            const infoAlertMSG = () => {
                ElMessage.message('장바구니가 비어있습니다.')
            }
            const warningAlertMSG = () => {
                ElMessage.error('주문하실 제품들을 체크해주세요.')
            }
            const warningAlertMSG1 = () => {
                ElMessage.error('주문하실 제품들을 체크해주세요.')
            }
            const successAlertMSG = () => {
                ElMessage.success('물품수량 변경완료')
            }
            const successAlertMSG1 = () => {
                ElMessage.success('삭제 완료')
            }
            const infoAlertMSG1 = () => {
                ElMessage.message('물품정보가 없습니다.')
            }
            return {
                deleteConfirm,
                failAlertMSG,
                failAlertMSG1,
                infoAlertMSG,
                warningAlertMSG,
                warningAlertMSG1,
                successAlertMSG,
                successAlertMSG1,
                infoAlertMSG1
            }
        },
        data(){
            return{
                token : sessionStorage.getItem("token"),
                vegan_soap_img2 : vegan_soap_img2,
                productQuantity : 1,
                itemList : [],
                cartCode : 0,
                eachPrice : [],
                totalPrice : 0,
                totalShippingPrice : 0,
                totalOrderPrice : 0,
                selectionArr : [],
                chks : [],
                totalPriceF : 0,
                totalShippingPriceF : 0,
                totalOrderPriceF : 0
            }
        },
        async created(){
            await this.getCartItem();
        },
        methods : {
            handleSelectionChange(val){
                console.log(val);
                this.selectionArr = val; 

                for(var i=0; i<this.selectionArr.length; i++){
                    this.chks[i] = this.selectionArr[i].CARTITEMCODE;
                    console.log(this.chks);
                }
            },
            async handleQuantityChange(){
                console.log(this.productQuantity);
                await this.getTotalPirce();
            }, 
            async saveQuantity(cnt, no){
                const url = `REST/api/cartitem/quantity/update?cnt=${cnt}&no=${no}`;
                const response = await axios.put(url);
                if(response.data.result === 1){
                    this.successAlertMSG();
                }
                else {
                this.warningAlertMSG1();
                }
            },
            async getCartItem(){
                const url=`REST/api/cartitem/member/list`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.get(url, {headers});
                console.log(response);
                if(response.data.result === 1){
                    this.itemList = response.data.list;
                    this.cartCode = response.data.cart;
                }

                await this.getTotalPirce();
            },
            getTotalPirce(){
                this.totalPrice = 0; 
                this.totalShippingPrice = 0;

                for(var i=0; i<this.itemList.length; i++){
                    this.eachPrice[i] = this.itemList[i].PRODUCTPRICE * this.itemList[i].QUANTITY;
                    this.totalPrice += this.eachPrice[i];

                    // 최종가격 -> 금액단위 표시
                    this.totalPriceF = this.totalPrice.toLocaleString();

                    if(this.itemList[i].PRODUCTPRICE * this.itemList[i].QUANTITY < 30000){
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
            async someDeleteBtn(){
                if(confirm('삭제 하시겠습니까?')){
                    const url = `REST/api/cartitem/delete/check?chks=${this.chks}`;
                    const response = await axios.delete(url);
                    // console.log(response);
                    if(response.data.result === 1){
                        await this.getCartItem();
                        this.successAlertMSG1();
                    }
                    else if(response.data === 0){
                        this.infoAlertMSG1(); // 물품정보가 없습니다.
                    }
                    else {
                        this.failAlertMSG();
                    }
                }
            },
            async allDeleteBtn(){
                if(confirm('전체삭제 하시겠습니까?')) {
                    const url = `REST/api/cartitem/delete/all?code=${this.cartCode}`;
                    const response = await axios.delete(url);
                    if(response.data.result >= 1){
                        await this.getCartItem();
                        this.successAlertMSG1();
                    }
                    else if(response.data.result === 0){
                        this.infoAlertMSG1(); // 물품정보가 없습니다.
                    }
                    else {
                        this.failAlertMSG1();
                    }

                }
            },
            handlePayment(){
                if(this.chks.length == 0){
                    this.warningAlertMSG();
                }
                else{
                    this.$router.push({
                        path:'/order_page', 
                        query:{ chks : this.chks }
                    });
                }
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
router-link{
    text-decoration-color: none;
    text-decoration-line: none;
    text-decoration: none;
}
.cart_wrapper{
    /* height: 100vh; */
    margin: 0;
    height: fit-content;
    /* overflow-y: scroll; */
    padding: 30px;
    background-color: white;
    overflow-x: hidden;
    font-family: 'Playfair Display', serif;
    margin-top: 4.5%;
}
.cart_container{
    /* border: 1px solid black; */
    width: 90%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    padding: 30px;
    flex-direction: row;
}
.product_info{
    margin-right: 10px;
    /* border: 1px solid black; */
    width: 75%;
    height: fit-content;
    padding: 0px 0px 90px 0px
}
.product_info .product_info_title{
    border-bottom: 3px solid black;
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
}
.product_info #product_info_title{
    /* border: 1px solid black; */
    font-size: 30px;
    font-weight: 700;
    color: #715036;
    margin: 10px;
    width: fit-content;  
}
.product_info #product_info_warning{
    /* border: 1px solid black; */
    font-size: 14px;
    font-family: 'Hahmlet', serif;
    color: #715036;
    margin: 10px;
    font-weight: bold;
    letter-spacing: 0.2px;
    width: fit-content;
    height: fit-content;
}
.product_info_section{
    border-bottom:3px solid #715036;
    font-family: 'Hahmlet', serif;
    width: 100%;
    height: fit-content;
    /* border: 1px solid black; */
}
.product_detail{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
}
.cart_summary{
    width: 20%;
    height: 70%;
    right : 7%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cart_summary_container{
    background-color: white;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    border: 3px solid #715036;
    width: 100%;
    height : 100%;
    align-items: center;
    padding: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
#amountTitle{
    width: fit-content;
    font-size: 30px;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
    color: #715036;
    width: 100%;
    margin-bottom: 10px;
}
.check_out_amount{
    /* border-top: 0.5px solid black;
    border-bottom: 0.5px solid black; */
    width: 100%;
    padding: 30px 0px;
    font-family: 'Hahmlet', serif;
}
.check_out_amount table,
.totalAmount table{
    margin: 0 auto;
    width : 100%;
}
.check_out_amount table th,
.totalAmount table th{
    /* border: 1px solid black; */
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    width: 50%;
    line-height: 2.8;
}
.check_out_amount table td,
.totalAmount table td{
    /* border: 1px solid black; */
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
.totalAmount{
    display: inline-flex;
    font-family: 'Hahmlet', serif;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    height: 150px;
    align-content: space-between;
    margin: 15px auto;
    border-top: 0.5px solid black;
    border-bottom: 0.5px solid black;
}
#checkoutBtn{
    border-radius: 3px;
    width: 100%;
    height: 15%;
    font-size: 20px;
    color: white;
    font-family: 'Gowun Batang', serif;
    font-weight: bold;
    padding: 3px;
    margin: 10px 0px;
    background-color: #715036e3;
}
#checkoutBtnlink{
    color: white;
    text-decoration-line: none;
}
#checkoutBtn:hover{
    cursor: pointer;
    opacity: 0.8;
}
.button_container{
    justify-content: flex-end;
    width: 100%;
    /* border: 1px solid black; */
    height: fit-content;
    display: inline-flex;
}
.button_container button{
    height: 30px;
    margin: 10px;
    border-radius: 3px;
    background-color: #715036e3;
    color: white;
    border: none;
    width: 120px;
    padding: 5px;
}
#allDeleteBtn{

}
#someDeleteBtn{

}
</style>