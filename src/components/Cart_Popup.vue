<template>
    <div class="cart_wrapper">
        <div class="add_list">
            <p>ADD LIST</p>
            <hr class="line" />
        </div>
        <div class="cart_product1">
            <div class="cart_productbox1">
                <div class="cart_popup_img1"></div>
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
            <div class="cart_productbox1-1">
                <div class="cart_popup_img2"></div>
            </div>
            <div class="cart_productbox2-1">
                <div class="cart_content1">
                    <span>[Melixir]</span>
                    <p>불가리 로즈힙 오일</p> 
                    <!-- <p>세안비누</p> -->
                </div>
                <div class="cart_content3">
                    <span>[Quantity]</span>
                    <p>숫자 증가하는걸 찾을 수 없어</p>
                </div>
            </div>
            <div class="cart_productbox4">
                <div class="cart_price">
                    <p>[Price]</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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

        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@300&family=Gowun+Dodum&family=Hahmlet&display=swap');
.cart_wrapper {
    border: 1px solid black;
    width: 30%;
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
.cart_product1 {
    border: 1px solid black;
    display: flex;
}
.cart_popup_img1 {
    width: 100px;
    height: 100px;
}
.cart_productbox1 {
    border: 1px solid black;
}
.cart_content1 {
    border: 1px solid black;
    /* width: fit-content; */
}
.cart_content2 {
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



</style>