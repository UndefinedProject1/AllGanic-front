<template>
    <div class="pt_table_wrapper">
        <div class="pt_table_container">
            <div class="pt_table_cate">
                <p>토너(1)</p><span>|</span>
                <p>크림(2)</p><span>|</span>
                <p>세안제(3)</p><span>|</span>
                <p>세럼(4)</p><span>|</span>
                <p>선크림(5)</p>
            </div>
            <div class="pt_table_divider"></div>
            <div class="pt_table">
                <div class="table1">
                    <div class="pt_product" v-for="item in 4" v-bind:key="item">
                        <img :src="vegan_oil_img">
                        <div class="pd_text_section">
                            <p id="pd_brand"><ins>멜릭서</ins></p>
                            <p id="pd_name"><strong>자연 100% 추출 어성초세럼</strong></p>
                            <p id="pd_price">28,000원</p>
                            <img :src="cart_img">
                        </div>
                    </div>
                </div>
                <div class="table1">
                    <div class="pt_product" v-for="item in 4" v-bind:key="item">
                        <img :src="vegan_oil_img">
                        <div class="pd_text_section">
                            <p id="pd_brand"><ins>멜릭서</ins></p>
                            <p id="pd_name"><strong>자연 100% 추출 어성초세럼</strong></p>
                            <p id="pd_price">28,000원</p>
                            <img :src="cart_img">
                        </div>
                    </div>
                </div>
                <div class="table1">
                    <div class="pt_product" v-for="item in 4" v-bind:key="item">
                        <img :src="vegan_oil_img">
                        <div class="pd_text_section">
                            <p id="pd_brand"><ins>멜릭서</ins></p>
                            <p id="pd_name"><strong>자연 100% 추출 어성초세럼</strong></p>
                            <p id="pd_price">28,000원</p>
                            <img :src="cart_img">
                        </div>
                    </div>
                </div>
                <div class="table1">
                    <div class="pt_product" v-for="item in 4" v-bind:key="item">
                        <img :src="vegan_oil_img">
                        <div class="pd_text_section">
                            <p id="pd_brand"><ins>멜릭서</ins></p>
                            <p id="pd_name"><strong>자연 100% 추출 어성초세럼</strong></p>
                            <p id="pd_price">28,000원</p>
                            <img :src="cart_img">
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import cart_img from '@/assets/cart_img.png';
import vegan_oil_img from '@/assets/vegan_oil_img.jpg';
import Footer from '@/components/Footer.vue';
    export default {
        data(){
            return{
                vegan_oil_img : vegan_oil_img,
                cart_img : cart_img
            }
        },
        components : {
            Footer : Footer,
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
.pt_table_wrapper{
    width : 100%;
    height : 100%;
    overflow-y: scroll;
    font-family: 'Gowun Dodum', sans-serif;
    padding: 80px;
}
.pt_table_container{
    /* border: 1px solid black; */
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
}
.pt_table_cate {
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
    margin: 10px 0px 10px 0px;
    height: fit-content;
    align-items: center;
}
.pt_table_cate p {
    font-size: 15px;
    color: #49654E;
    margin: 0;
    height: fit-content;
}
.pt_table_cate p:hover {
    color: black;
    cursor: pointer;
}
.pt_table_cate span{
    font-size: 15px;
    margin: 0px 10px;
    font-weight: bold;
    height: fit-content;
}

.pt_table_divider{
    border : 0.2px solid #49654E;
    height: 0.2px;
    width : 100%;
}

.pt_table{
    width: 100%;
    height: fit-content;
    padding-top: 20px;
    display :flex;
    flex-direction: column;
}
.table1{
    width: 100%;
    height: fit-content;
    display: flex;
    margin: 20px 0px;
}
.pt_product{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    width: 24%;
    height: fit-content;
    padding: 5px;
    margin: 5px;
}
.pt_product img{
    width: 93%;
    height: 70%;
    border-radius: 3px;
    margin: 0 auto;
}
.pt_product:hover{
    cursor: pointer;
    opacity: 0.7;
}
.pd_text_section {
    margin-left: 10px;
}
.pd_text_section p{
    margin-bottom: 0;
}
.pd_text_section #pd_brand{
    font-size: 14px;
    margin: 5px 0px;
}
.pd_text_section #pd_name{
    font-size: 15px;
    margin-bottom: 10px;
}
.pd_text_section img{
    width : 15px;
    height : 15px;
    background-size: cover;
    right: 0;
}
</style>