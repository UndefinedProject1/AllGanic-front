<template>
    <el-drawer v-model="drawer" title="ADD CART LIST" :direction="rtl" :before-close="handleClose" >
        <div class="cart_wrapper">
            <div class="cart_popup_container">
                <div class="cart_product_container">
                    <div class="cart_product1" v-for="item in itemList" v-bind:key="item">
                        <div class="cart_productbox1">
                            <img :src="`REST/api/select_productimage?no=${item.PRODUCTCODE}`" />
                        </div>
                        <div class="cart_productbox2">
                            <div class="cart_content1">
                                <span>{{item.BRANDNAME}}</span>
                                <p>{{item.PRODUCTNAME}}</p>
                                <p>[수량] : {{item.QUANTITY}} 개</p>
                            </div>
                        </div>
                        <div class="cart_productbox3">
                            <div class="cart_price">
                                <p>{{item.PRODUCTPRICE}} 원</p>
                                <p>삭제하기</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart_subtotal">
                    <div class="subtotal_inner">
                        <p>SUBTOTAL</p>
                        <p>{{totalPriceF}} 원</p>
                    </div>
                    <div class="subtotal_btn">
                        <button type="button" id="gocart_btn" @click="goCart()" >장바구니로 이동</button>
                        <button type="button" id="keepshopping_btn" @click="handleDrawer()" >계속 쇼핑</button>
                    </div>
                </div>
            </div>   
        </div>
    </el-drawer>

</template>

<script>
import axios from 'axios';
import cart_popup_img1 from '@/assets/cart_popup_img1.png';
import cart_popup_img2 from '@/assets/cart_popup_img2.png';
import cart_minus from '@/assets/cart_minus.png';
import cart_plus from '@/assets/cart_plus.png';
    export default {
        data() {
            return {
                token : sessionStorage.getItem("token"),
                drawer : true,
                cart_popup_img1 : cart_popup_img1,
                cart_popup_img2 : cart_popup_img2,
                cart_minus :cart_minus,
                cart_plus : cart_plus,
                number : 0,
                number1 : 0,
                itemList : [],
                cartCode : 0,
                eachPrice : [],
                totalPrice : 0,
                totalPriceF : 0,
            }
        },
        async created(){
            await this.getCartItem();
        },
        methods : {
            handleDrawer(){
                this.$emit('addEvent');
            },
            goCart(){
                this.$emit('handleEvent')
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

                for(var i=0; i<this.itemList.length; i++){
                    this.eachPrice[i] = this.itemList[i].PRODUCTPRICE * this.itemList[i].QUANTITY;
                    this.totalPrice += this.eachPrice[i];
                    this.totalPriceF = this.totalPrice.toLocaleString();
                }
            },
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@300&family=Gowun+Dodum&family=Hahmlet&display=swap');
button{
    cursor: pointer;
    opacity: 0.9;
}
.cart_wrapper {
    border-top: 3px solid #715036;
    width: 100%;
    height: 100%;
}
.cart_popup_container {
    /* border: 1px solid red; */
    display: inline-block;
    height : 100vh;
    width: 97%;
    padding : 8px;
    position: relative;
}
.cart_product_container{
    /* border: 1px solid black; */
    overflow-y: scroll;
    height: 70%;
}

/*  */
.cart_product1 {
    border-bottom: 0.5px solid #715036;
    display: flex;
    width : 97%;
    height : fit-content;
    margin: 5px 0px;
    padding: 5px;
}
.cart_productbox1 > img {
    width: 140px;
    height: 140px;
    object-fit: cover;
}
.cart_productbox1 {
    /* border: 1px solid black; */
    width: fit-content;
    height: fit-content;
}
.cart_content2 {
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
}
.cart_content4 {
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
}
.cart_content1 {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 10px;
}
.cart_content1 > span {
    /* border: 1px solid black; */
    width: fit-content;
    font-size: 13px;
    color: #333;
    font-weight: bold;
}
.cart_content1 > p {
    /* border: 1px solid black; */
    width: fit-content;
    margin: 5px 0px;
    font-weight: bold;
    font-size: 14px;
}
.cart_productbox2 {
    /* border: 1px solid black; */
    width: 45%;
    height: 100%;
    font-family: 'Gowun Dodum', sans-serif;
}
.cart_productbox5 {
    /* border: 1px solid black; */
    width: 120px;
    height: 100%;
}

.cart_productbox3 {
    /* border: 1px solid black; */
    width: 20%;
    align-content: center;
    font-family: 'Gowun Dodum', sans-serif;
    position: relative;
}
.cart_price > p:first-child {
    /* border: 1px solid black; */
    width: fit-content;
    margin: 0;
    position: absolute;
    top: 30%;
    /* left: 10%; */
}
.cart_price > p:last-child {
    border-bottom: 1px solid black;
    width: fit-content;
    position: absolute;
    right: 0;
    bottom: 5%;
    margin: 0;
    font-size: 13px;
}
.cart_price > p:last-child:hover {
    opacity: 0.9;
    cursor: pointer;
    font-weight: bold;
}
/*  */
.cart_subtotal {
    border-top: 1.5px solid black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: block;
    padding-bottom: 45px;
    position: absolute;
    /* bottom: 0; */
    width: 97%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
}
.subtotal_inner {
    /* border: 1px solid black; */
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0px 10px 0px 20px;
}
.subtotal_inner > p {
    width: fit-content;
    /* border: 1px solid black; */
    font-weight: bold;
    font-size: 20px;
}
.subtotal_inner > p:last-child {
    width: fit-content;
    /* border: 1px solid black; */
    margin-right: 40px;
    font-family: 'Gowun Dodum', sans-serif;
}
.subtotal_btn {
    /* border: 1px solid black; */
    padding: 0px 20px;
    display: inline-flex;
    width: fit-content;
    margin: 0 auto;
}
#gocart_btn{
    /* border: 1px solid black; */
    background-color: #715036;
    width: 180px;
    height: 40px;
    border: none;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    justify-content: space-evenly;
    padding: 8px;
    margin: 0px 10px;
    font-family: 'Gowun Dodum', sans-serif;
}
#keepshopping_btn {
    /* border: 1px solid black; */
    background-color: #715036;
    width: 180px;
    height: 40px;
    border: none;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    justify-content: space-evenly;
    padding: 8px;
    margin: 0px 10px;
    font-family: 'Gowun Dodum', sans-serif;
}


</style>