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
                        <p>어성초 세안비누dnsfadsfafafaddndn</p> 
                    </div>
                    <div class="cart_content2">
                        <button @click="increase1" style="border:none">+</button>
                        {{number}}
                        <button @click="decrease1" style="border:none">-</button>
                    </div>
                </div>
                <div class="cart_productbox3">
                    <div class="cart_price">
                        <p>[Price]</p>
                        <p>35,000</p>
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
                        <p>불가리 로즈힙 오일fdsafasdasfafafafafadfasf</p> 
                    </div>
                    <div class="cart_content4">
                        <button @click="increase2" style="border:none">+</button>
                        {{number1}}
                        <button @click="decrease2" style="border:none">-</button>
                    </div>
                </div>
                <div class="cart_productbox6">
                    <div class="cart_price">
                        <p>[Price]</p>
                        <p>25,200</p>
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
import cart_minus from '@/assets/cart_minus.png';
import cart_plus from '@/assets/cart_plus.png';
    export default {
        data() {
            return {
                cart_popup_img1 : cart_popup_img1,
                cart_popup_img2 : cart_popup_img2,
                cart_minus :cart_minus,
                cart_plus : cart_plus,
                number : 0,
                number1 : 0,
            }
        },
        components :{
            Footer : Footer
        },
        methods: {
            increase1 : function() {
                this.number++;
            },
            decrease1 : function() {
                this.number--;
            },
            increase2 : function() {
                this.number1++;
            },
            decrease2 : function() {
                this.number1--;
            }
        },
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
    width: 40%;
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
.cart_content2 .cart_content4 {
    border: 1px solid black;

    margin-left: 30px;
}
#count_line {
    border: 1px solid black;
    width: 70%;
    padding-left: 10px;
}
.cart_content1 .cart_content3  {
    border: 1px solid black;
    width: 150px;
}
.cart_productbox2 .cart_productbox5 {
    border: 1px solid black;
    width: auto 0px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
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
/* .cart_productbox5 {
    border: 1px solid black;
} */
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
    display: flex;
    width: 350px;
    justify-content: space-between;
    margin: 0 auto;
    padding-bottom: 5px;
}
.subtotal_name {
    border: 1px solid black;
    padding-top: 0%;
}
.subtotal_price {
    border: 1px solid black;
    margin-right: 30px;
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
.cart_minus {
    border: 1px solid black;
    width: 10px;
    height: 10px;
    margin-right: 70px;
    /* margin-top: 20px; */
}
.cart_plus {
    border: 1px solid black;
    width: 10px;
    height: 10px;
}
.cart_count {
    display: inline-flex;
    padding-top: 50px;
}

</style>