<template>
    <div class="cart_wrapper">
        <div class="cart_popup_container">
            <div class="add_list">
                <p>ADD LIST</p>
                <hr class="line" />
            </div>
            <div class="cart_product1">
                <div class="cart_productbox1">
                <img :src="cart_popup_img1" />
                </div>
                <div class="cart_productbox2">
                    <div class="cart_content1">
                        <span>[Melixir]</span>
                        <p>어성초 세안비누</p> 
                        <!-- <p>세안비누</p> -->
                    </div>
                    <div class="cart_content2">
                        <span>[Quantity]</span>
                        <p>숫자 증가하는걸 찾을 수 없어</p>
                    </div>
                </div>
                <div class="cart_productbox3">
                    <div class="cart_price">
                        <p>[Price]</p>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="cart_product2">
                <div class="cart_productbox4">
                    <img :src="cart_popup_img2" />
                </div>
                <div class="cart_productbox5">
                    <div class="cart_content3">
                        <span>[Melixir]</span>
                        <p>불가리 로즈힙 오일</p> 
                        <!-- <p>세안비누</p> -->
                    </div>
                    <div class="cart_content4">
                        <span>[Quantity]</span>
                        <p>숫자 증가하는걸 찾을 수 없어</p>
                    </div>
                </div>
                <div class="cart_productbox6">
                    <div class="cart_price">
                        <p>[Price]</p>
                    </div>
                </div>
            </div>
                <div class="cart_subtotal">
                    <div class="subtotal_inner">
                        <div class="subtotal_name">
                            <p>SUBTOTAL</p>
                        </div>
                        <div class="subtotal_price">
                            <p>58,000</p>
                        </div>
                    </div>
                    <div class="subtotal_btn">
                        <button type="button" id="subtotal_btn" >주문하기</button>
                    </div>
                </div>
            </div>
        <Footer></Footer>
    </div>
</template>



<script>
import Footer from '@/components/Footer.vue';
import cart_popup_img1 from '@/assets/cart_popup_img1.png';
import cart_popup_img2 from '@/assets/cart_popup_img2.png';
    export default {
        data() {
            return {
                cart_popup_img1 : cart_popup_img1,
                cart_popup_img2 : cart_popup_img2
            }
        },
        components :{
            Footer : Footer
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@300&family=Gowun+Dodum&family=Hahmlet&display=swap');
.cart_wrapper {
    border: 1px solid black;
    height: 100%;
}
.cart_popup_container {
    /* border: 1px solid black; */
    display: inline-block;
    height : 100%;
    padding-top: 50px;
}
.add_list{
    border: 1px solid black;
    font-size: 25px;
    font-weight: bold;
    font-family: 'Fraunces', serif;
}
.line {
    border: 1px solid black;
    border: 10px;
    color: #49654E;
    width: 100%;
    padding-top: 1px;
}
/*  */
.cart_product1 {
    border: 1px solid black;
    display: flex;
}
#cart_popup_img1 #cart_popup_img2 {
    border: 1px solid black;
    width: 50px;
    height: 50px;

}
.cart_productbox1 {
    border: 1px solid black;
    margin-top: auto;
    margin-bottom: auto;
}
.cart_content1 .cart_content2 .cart_content3 .cart_content4 {
    border: 1px solid black;
}
.cart_productbox2 {
    border: 1px solid black;
}
.cart_productbox3 {
    border: 1px solid black;
    width: 30%;
    align-content: center;
}
/*  */
.cart_product2 {
    border: 1px solid black;
    display: flex;
}
.cart_productbox4 {
    border: 1px solid black;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
}
.cart_productbox5 {
    border: 1px solid black;
}
.cart_productbox6 {
    border: 1px solid black;
    width: 30%;
    align-content: center;
}
/*  */
.cart_subtotal {
    border: 1px solid black;
    display: block;
    padding-bottom: 30px;
}
.subtotal_inner {
    /* border: 1px solid black; */
    display: inline-flex;
    width: 250px;
    justify-content: space-between;
    margin: 0 auto;
}
.subtotal_name {
    border: 1px solid black;
    padding-top: 0%;
}
.subtotal_price {
    border: 1px solid black;
    margin-left: 148px;
}
.subtotal_btn {
    display: flex;
}
#subtotal_btn {
    border: 1px solid black;
    background-color: #715036;
    width: 180px;
    height: 40px;
    border: none;
    color: #F6EBCE;
    border-radius: 5px;
    font-weight: bold;
    margin: 0 auto;
    justify-content: space-evenly;
    padding: 8px;
}
#img {
    width: 70px;
}


</style>