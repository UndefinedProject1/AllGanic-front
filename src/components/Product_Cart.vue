<template>
    <div class="cart_wrapper">
        <div class="cart_container">
            <div class="product_info">
                <div class="product_info_title">
                    <p id="product_info_title">Cart</p>
                    <p id="product_info_warning">장바구니에 담긴 상품은 30일 동안만 보관됩니다.</p>
                </div>
                <div class="product_info_section">
                    <el-table ref="multipleTable" :data="tableData" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="60" align="center" />
                        <el-table-column label="상품정보" width="400" align="center">
                            <template #default="scope">
                                <el-image style="width: 135px; height: 150px;"  :src="vegan_soap_img2" :fit="fit"></el-image>
                                <div class="product_detail_info" style="width: 60%; float:right;  text-align:left; padding:5px 10px;">
                                    <span style="font-size:14px; color:#333; font-weight:bold">[ {{scope.row.brandName}} ]</span>
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}</p>
                                    <p style="font-size:14px; color:black; margin:0;">{{scope.row.productPrice}} 원</p>
                                    <p style="font-size:14px; color:black; margin:0;">옵션 : {{scope.row.option}}</p>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="수량" width="150" align="center">
                            <template #default="scope">
                                <el-input-number v-model="scope.row.productQuantity" :min="1" :max="10" @change="handleQuantityChange" size="mini"/>
                            </template>
                        </el-table-column>
                        <el-table-column property="finalPrice" label="주문금액" width="127" align="center"/>
                        <el-table-column property="shippingCost" label="배송비"  width="125" align="center"/>
                    </el-table>
                </div>
                <div class="button_container">
                    <button type="button"></button>
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
                                    <td>15,000 원</td>
                                </tr>
                                <tr>
                                    <th>+</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>총 배송 금액 : </th>
                                    <td>15,000 원</td>
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
                                    <td>15,000 원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button type="button" id="checkoutBtn">CHECK OUT</button>
            </div>
        </div>

    </div>
</template>

<script>
import vegan_soap_img2 from '@/assets/vegan_soap_img2.jpg';
    export default {
        data(){
            return{
                tableData : [
                    {brandName : '멜릭서', productName : '에리제론 올인원 비건 뷰티볼 - 단호박 (모든피부적합, 영양)', productPrice : 2000, option : '블랙', productQuantity : 3, finalPrice : 6000, shippingCost : 2500},
                    {brandName : '멜릭서', productName : '에리제론 올인원 비건 뷰티볼 - 단호박 (모든피부적합, 영양)', productPrice : 2000, option : '블랙', productQuantity : 3, finalPrice : 6000, shippingCost : 2500},
                    {brandName : '멜릭서', productName : '에리제론 올인원 비건 뷰티볼 - 단호박 (모든피부적합, 영양)', productPrice : 2000, option : '블랙', productQuantity : 3, finalPrice : 6000, shippingCost : 2500},
                    {brandName : '멜릭서', productName : '에리제론 올인원 비건 뷰티볼 - 단호박 (모든피부적합, 영양)', productPrice : 2000, option : '블랙', productQuantity : 3, finalPrice : 6000, shippingCost : 2500},
                    {brandName : '멜릭서', productName : '에리제론 올인원 비건 뷰티볼 - 단호박 (모든피부적합, 영양)', productPrice : 2000, option : '블랙', productQuantity : 3, finalPrice : 6000, shippingCost : 2500},
                    {brandName : '멜릭서', productName : '에리제론 올인원 비건 뷰티볼 - 단호박 (모든피부적합, 영양)', productPrice : 2000, option : '블랙', productQuantity : 3, finalPrice : 6000, shippingCost : 2500},
                ],
                vegan_soap_img2 : vegan_soap_img2,
                productQuantity : 0
            }
        },
        methods : {
            handleQuantityChange(){
                console.log(this.productQuantity);
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.cart_wrapper{
    /* height: 100vh; */
    margin: 0;
    height: 100%;
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
    width: 70%;
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
    border-radius: 7px;
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
    border-radius: 5px;
    width: 100%;
    height: 15%;
    font-size: 20px;
    color: white;
    font-family: 'Gowun Batang', serif;
    font-weight: bold;
    padding: 3px;
    margin: 10px 0px;
    background-color: #715036;
}
#checkoutBtn:hover{
    cursor: pointer;
    opacity: 0.9;
}
.button_container{
    /* border: 1px solid black; */
    height: 200px;
}
</style>