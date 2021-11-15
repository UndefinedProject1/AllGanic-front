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
                        <el-table-column type="selection" width="50" align="center" v-model="chks"/>
                        <el-table-column label="상품정보" width="400" align="center">
                            <template #default="scope">
                                <el-image style="width: 135px; height: 150px;" :src="`REST/api/select_productimage?no=${scope.row.PRODUCTCODE}`" :fit="cover"></el-image>
                                <div class="product_detail_info" style="width: 60%; float:right;  text-align:left; padding:5px 10px;">
                                    <span style="font-size:14px; color:#333; font-weight:bold">[ {{scope.row.BRANDNAME}} ]</span>
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.PRODUCTNAME}}</p>
                                    <p style="font-size:14px; color:#E6A23C; margin:0;">쿠폰적용 불가상품</p>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="수량" width="150" align="center">
                            <template #default="scope">
                                <el-input-number v-model="scope.row.QUANTITY" :min="1" :max="10" @change="handleQuantityChange" size="mini"/>
                                <p type="primary" @click="saveQuantity(scope.row.QUANTITY, scope.row.CARTITEMCODE)" style="font-size:13px; color:black; margin:10px 0px;">변경수량 저장</p>
                            </template>
                        </el-table-column>
                        <el-table-column property="finalPrice" label="상품 금액" width="125" align="center">
                            <template #default="scope">
                                <p style="font-size:14px; color:black; margin:0;">{{scope.row.PRODUCTPRICE}} 원</p>
                            </template>
                        </el-table-column>
                        <el-table-column property="shippingCost" label="배송비"  width="155" align="center">
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
                <div class="cart_summary_container">
                    <p id="amountTitle">주문하기</p>
                    <div class="check_out_amount">
                        <table>
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>총 주문 금액 : </th>
                                    <td @change="handleTotalPrice">{{totalPrice}} 원</td>
                                </tr>
                                <tr>
                                    <th>+</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>총 배송 금액 : </th>
                                    <td @change="handleTotalShippingPrice">{{totalShippingPrice}} 원</td>
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
                                    <th>총 주문 금액 : </th>
                                    <td>{{totalOrderPrice}} 원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button type="button" id="checkoutBtn" @click="handlePayment">
                    <router-link :to="`/order_page?chks=${this.chks}`">CHECK OUT</router-link>
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import vegan_soap_img2 from '@/assets/vegan_soap_img2.jpg';
    export default {
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
                chks : []
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
                if(response.data.resulf === 1){
                    alert(response.data.state);
                }else alert(response.data.state);
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

                    if(this.itemList[i].PRODUCTPRICE * this.itemList[i].QUANTITY < 30000){
                        this.totalShippingPrice += 2500;
                    }
                }

                this.totalOrderPrice = this.totalPrice + this.totalShippingPrice;
            },
            async handleTotalPrice(){
                await this.getCartItem();
            },
            async someDeleteBtn(){
                // for(var i=0; i<this.selectionArr.length; i++){
                //     this.chks[i] = this.selectionArr[i].CARTITEMCODE;
                //     console.log(this.chks);
                // }
                
                const url = `REST/api/cartitem/delete/check?chks=${this.chks}`;
                const response = await axios.delete(url);
                if(response.data.result === 1){
                    alert("삭제쓰");
                    await this.getCartItem();
                }else alert("아니야..");
            },
            async allDeleteBtn(){
                const url = `REST/api/cartitem/delete/all?code=${this.cartCode}`;
                const response = await axios.delete(url);
                if(response.data.result >= 1){
                    alert("전체 삭제 성공");
                    alert("장바구니에 물품이 없습니다.");
                    await this.getCartItem();
                }else if(response.data.result === 0){
                    alert("전체 삭제에 실패했습니다.");
                }
                else alert("error");
            },
            // async handlePayment(){
            //     this.$router.push({
            //         path:'/order_page', 
            //         params:{ chks : this.chks }
            //     });
            // }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.cart_wrapper{
    /* height: 100vh; */
    margin: 0;
    height: fit-content;
    /* overflow-y: scroll; */
    padding: 30px;
    background-color: white;
    overflow-x: hidden;
    font-family: 'Playfair Display', serif;
}
.cart_container{
    /* border: 1px solid black; */
    width: 85%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    padding: 30px;
    flex-direction: row;
}
.product_info{
    margin-right: 10px;
    /* border: 1px solid black; */
    width: 69%;
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
    font-family: 'Gowun Dodum', sans-serif;
    color: #715036;
    margin: 10px;
    font-weight: bold;
    letter-spacing: 0.2px;
    width: fit-content;
    height: fit-content;
}
.product_info_section{
    border-bottom:3px solid #715036;
    font-family: 'Gowun Dodum', sans-serif;
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
    right : 10%;
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
    font-size: 20px;
    font-weight: bold;
    font-family: 'Gowun Dodum', sans-serif;
}
.check_out_amount{
    border-top: 0.5px solid black;
    border-bottom: 0.5px solid black;
    width: 100%;
    padding: 30px 0px;
    font-family: 'Gowun Dodum', sans-serif;
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
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    align-content: space-between;
    margin: 15px auto;
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
#checkoutBtn:hover{
    cursor: pointer;
    opacity: 0.8;
}
.button_container{
    justify-content: flex-end;
    width: 100%;
    border: 1px solid black;
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