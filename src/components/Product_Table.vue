<template>
    <div class="pt_table_wrapper">
        <div class="pt_table_container">
            <div class="pt_table_banner">
                <img :src="brand4" id="pt_table_banner_img">
                <p>_SHOP</p>
            </div>
            <div class="pt_table_cate_container" >
                <div class="pt_table_cate" v-for="cate in catelist" v-bind:key="cate">
                    <p @click="goCate(cate.categorycode)">{{cate.categoryname}}</p><span>|</span>
                </div>
            </div>
            <div class="pt_table_divider"></div>
            <div class="pt_table">
                <div class="table1">
                    <ul> 
                        <li class="pt_product_container" v-for="product in productlist" v-bind:key="product">
                            <div class="pt_product" >
                                <img :src="`REST/api/select_productimage?no=${product.productcode}`" @error="replaceByDefault" @click="goDetail(product.productcode)"> 
                                <div class="pd_text_section">
                                    <p id="pd_brand"><ins>{{product.brandname}}</ins></p>
                                    <router-link :to="`/product_detail?code=${product.productcode}`" id="pd_name">
                                        <p id="pd_name"><strong>{{product.productname}}</strong></p>
                                    </router-link>
                                    <div class="pd_last">
                                        <p id="pd_price">{{product.productprice}}원</p>
                                        <img :src="shoppingBag" @click="addCart(product.productcode)">
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <el-pagination layout="prev, pager, next" :total="pages" @current-change="handlePageChange" class="pagination"></el-pagination>
            </div>
        </div>
    </div>

    <CartPopup v-on:addEvent ="closeDrawer" v-on:handleEvent = "handleGoCart" v-model="CartPopup" ref="handlePopCart"></CartPopup>
</template>

<script>
import axios from 'axios';
import soldout from '@/assets/soldout.jpg';
import brand4 from '@/assets/brand4.jpg';
import shoppingBag from '@/assets/shoppingBag.png';
import Cart_Popup from './Cart_Popup.vue';
import { ElMessage } from 'element-plus'
    export default {
        setup() {
            const addProductAlertMSG = () => {
                ElMessage.message('회원전용 기능입니다. 로그인 페이지로 이동합니다.')
            }
            const infoAlertMSG = () => {
                ElMessage.error('회원정보를 불러오지 못했습니다.')
            }
            const failMSG = () => {
                ElMessage.error('해당 제품은 품절되었습니다.')
            }
            return {
                addProductAlertMSG,
                infoAlertMSG,
                failMSG
            }
        },
        data(){
            return{
                brand4 : brand4,
                soldout : soldout,
                shoppingBag : shoppingBag,
                token : sessionStorage.getItem("token"),
                category_codeP : this.$route.params.code,
                category_codeq : this.$route.query.code,
                catelist : [],
                productlist : [],
                pages : 0,
                page : 1,
                quantity : 1,
                CartPopup : false,
                chk : 1,
                errorimg : '',
            }
        },
        components : {
            CartPopup : Cart_Popup
        },
        async created(){
            await this.handleContents();
        },
        watch: {
            async $route(to, from) {
                if(to.params !== from.params){
                    this.category_codeP = to.params.code;
                    await this.changeContents();
                }
            }
        },
        methods : {
            async goDetail(val){
                const url = `REST/api/check/unsalable/product?code=${val}`;
                const response = await axios.get(url);
                console.log(response);
                if(response.data === 0){
                    this.$router.push({ path: "/product_detail", query:{code : val} }); 
                }
                else{
                    this.failMSG();
                }
            },
            replaceByDefault(e) {
                e.target.src = soldout;
            },
            async changeContents(){
                // console.log(this.$route.params);
                // console.log(this.category_codeP);
                const url = `REST/api/select_catenum?code=${this.category_codeP}`;
                const header = {"Content-Type" : "application/json"};
                const response = await axios.get(url, header);

                if(response.data.result === 1){
                    this.catelist = response.data.list;
                    // console.log(this.catelist);
                }

                const url1 = `REST/api/select_cproduct3?page=${this.page}&code=${this.category_codeP}`;
                const response1 = await axios.get(url1, header);
                console.log(response1);
                if(response1.data.result == 1){
                    this.productlist = response1.data.list;
                    this.pages = response1.data.count;
                }

            },
            async handleContents(){
                // console.log(this.$route.params);
                // console.log(this.category_codeq);
                const url = `REST/api/select_catenum?code=${this.category_codeq}`;
                const header = {"Content-Type" : "application/json"};
                const response = await axios.get(url, header);

                if(response.data.result === 1){
                    this.catelist = response.data.list;
                    console.log(this.catelist);
                }

                const url1 = `REST/api/select_cproduct3?page=${this.page}&code=${this.category_codeq}`;
                const response1 = await axios.get(url1, header);
                console.log(response1);
                if(response1.data.result == 1){
                    this.productlist = response1.data.list;
                    this.pages = response1.data.count;
                    console.log(this.productlist);
                    // this.pages = Number(response2.data.list);
                }
            },
            async goCate(catecode){
                const url = `REST/api/select_cproduct?code=` + catecode;
                const header = {"Content-Type" : "application/json"};
                const response = await axios.get(url, header);

                if(response.data.result === 1){
                    this.productlist = response.data.list;
                }
            },
            async handlePageChange(val){
                this.page = val;
                await this.changeContents();
            },

            // 자식 컴포넌트 (Cart_PopUp)에 전달하는 메소드
            // 1. 팝업 닫기
            closeDrawer(){
                this.CartPopup = false;
            },
            // 2. 장바구니 이동
            handleGoCart(){
                this.$router.push({ path: "/product_cart" });
            },

            async addCart(val){
                const url1 = `REST/api/check/unsalable/product?code=${val}`;
                const response1 = await axios.get(url1);
                console.log(response1);
                
                if(response1.data === 0){
                    const url = `REST/api/cart/create/insert?cnt=${this.quantity}&no=${val}`;
                    const headers = {"Content-Type" : "application/json", "token" : this.token};
                    const response = await axios.post(url, { }, {headers});
                    console.log(this.token);

                    console.log(response);

                    if(response.data.result === 1){
                        this.$refs.handlePopCart.getCartItem();
                        this.CartPopup = true;
                    }
                    else if(response.data.result === 0){
                        alert('회원정보를 불러오지 못했습니다.');
                    }
                    else if(this.token === null){
                        alert("회원전용 기능입니다. 로그인 페이지로 이동합니다.");
                        this.$router.push({ path: "/login" });
                    }
                }
                else {
                    this.failMSG();
                }
            }   
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
.pt_table_wrapper{
    width : 100%;
    overflow-x: hidden;
    font-family: 'Hahmlet', serif;
    /* padding: 80px; */
    /* background-color: white; */
    margin-top: 4.5%;
}
.pt_table_container{
    /* border: 1px solid black; */
    width: 85%;
    height : 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
}
.pt_table_banner{
    position: relative;
    width: 100%;
    height : 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#pt_table_banner_img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
}
.pt_table_banner P{
    position: absolute;
    color: #333;
    font-size: 5rem;
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    width: fit-content;
    margin-left: 35%;
}
.pt_table_cate_container {
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
    margin: 20px 0px 10px 0px;
    height: fit-content;
    align-items: center;
}
.pt_table_cate {
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
    margin: 10px 0px 10px 0px;
    height: fit-content;
    align-items: center;
    padding-left: 10px;
}
.pt_table_cate p {
    font-size: 15px;
    color: #49654E;
    margin: 0;
    height: fit-content;
    width: fit-content;
    font-weight: bold;
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
    height: 0px;
    width : 100%;
}

.pt_table{
    width: 100%;
    height : 50%;
    display :flex;
    flex-direction: column;
}
.table1{
    width: 100%;
    /* height: fit-content; */
    display: table;
    margin: 20px 0px;
}
.table1 ul {
    padding-left: 0;
}
.table1 ul li{
    list-style: none;
    display: inline-flex;
    max-width: 25%;
}
.pt_product{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: fit-content;
    padding: 10px;
    margin: 25px 5px;
}
.pt_product img{
    width: 100%;
    height: 90%;
    border-radius: 3px;
    margin: 0 auto;
}
.pd_text_section {
    margin-top: 5px;
}
#pd_name{
    margin-bottom: 0;
    height: 50px;
    display: flex;
    align-items: center;
}
.pd_text_section #pd_brand{
    font-size: 14px;
    margin: 5px 0px;
}
.pd_text_section #pd_name{
    font-size: 15px;
    margin-bottom: 10px;
    text-decoration: none;
    text-decoration-line: none;
    color: black;
}
.pd_text_section #pd_name:hover, 
.pd_text_section #pd_brand:hover,
.pt_product img:hover{
    cursor: pointer;
    opacity: 0.7;
}
.pd_text_section img{
    width : 9%;
    height : 90%;
    margin: 0;
    background-size: cover;
}
.pd_last{
    width: 100%;
    /* border: 1px solid black; */
    display: inline-flex;
    justify-content: space-between;
    align-items: flex-end;
}
.pd_last p {
    height: fit-content;
}
.pagination{
    /* border: 1px solid black; */
    width : 120px;
    height : 40px;
    margin: 0 auto;
}
</style>