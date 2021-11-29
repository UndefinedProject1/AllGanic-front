<template>
    <div class="pt_table_wrapper">
        <div class="pt_table_container">
            <div class="pt_table_cate_container" >
                <p>총 ({{total}}) 개의 검색 결과</p>
            </div>
            <div class="pt_table_divider"></div>
            <div class="pt_table">
                <div class="table1">
                    <ul> 
                        <li class="pt_product_container" v-for="product in productlist" v-bind:key="product">
                            <div class="pt_product">
                                <router-link :to="`/product_detail?code=${product.productcode}`">
                                    <img :src="`REST/api/select_productimage?no=${product.productcode}`">
                                </router-link>
                                <div class="pd_text_section">
                                    <!-- <p id="pd_brand"><ins>{{product.brandname}}</ins></p> -->
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
import Cart_Popup from './Cart_Popup.vue';
import shoppingBag from '@/assets/shoppingBag.png';
    export default {
        data(){
            return{
                token : sessionStorage.getItem("token"),
                shoppingBag : shoppingBag,
                search_page : this.$route.query.page,
                product_name_key : this.$route.query.name,
                productlist : [],
                pages : 0,
                page : 1,
                total : 0,
                quantity : 1,
                CartPopup : false
            }
        },
        components : {
            CartPopup : Cart_Popup
        },
        async created(){
            await this.getSearchResult();
        },
        watch: {
            async $route(to, from) {
                if(to.query !== from.query){
                    this.product_name_key = to.query.name;
                    await this.getSearchResult();
                }
            }
        },
        methods : {
            async getSearchResult(){
                const url = `REST/api/select_product2?page=${this.page}&name=${this.product_name_key}`;
                const response = await axios.get(url);
                if(response.data.result === 1){
                    this.productlist = response.data.list;
                    this.total = Number(this.productlist.length);
                }
            },
            async handlePageChange(val){
                this.page = val;
                await this.getSearchResult();
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
                const url = `REST/api/cart/create/insert?cnt=${this.quantity}&no=${val}`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.post(url, { }, {headers});
                // console.log(this.token);

                // console.log(response);

                if(response.data.result === 1){
                    this.$refs.handlePopCart.getCartItem();
                    this.CartPopup = true;
                    // this.addProductAlertMSG();
                }
                else if(response.data.result === 0){
                    alert(response.data.state);
                }
                else if(this.token === undefined){
                    alert("회원전용 기능입니다. 로그인 페이지로 이동합니다.");
                    this.$router.push({ path: "/login" });
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
    font-family: 'Gowun Dodum', sans-serif;
    /* padding: 80px; */
    /* background-color: white; */
    margin-top: 4.5%;
}
.pt_table_container{
    /* border: 1px solid black; */
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
}
.pt_table_cate_container {
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
    margin: 10px 0px 10px 0px;
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
    height: fit-content;
    padding-top: 20px;
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