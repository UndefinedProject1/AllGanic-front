<template>
    <div class="pt_table_wrapper">
        <div class="pt_table_container">
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
                                <router-link :to="`/product_detail?code=${product.productcode}`">
                                    <img :src="`REST/api/select_productimage?no=${product.productcode}`">
                                </router-link>
                                <div class="pd_text_section">
                                    <p id="pd_brand"><ins>{{product.brandname}}</ins></p>
                                    <router-link :to="`/product_detail?code=${product.productcode}`" id="pd_name">
                                        <p><strong>{{product.productname}}</strong></p>
                                    </router-link>
                                    <p id="pd_price">{{product.productprice}}원</p>
                                    <img :src="cart_img">
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import cart_img from '@/assets/cart_img.png';
import vegan_oil_img from '@/assets/vegan_oil_img.jpg';
    export default {
        data(){
            return{
                vegan_oil_img : vegan_oil_img,
                cart_img : cart_img,
                category_codeP : this.$route.params.code,
                category_codeq : this.$route.query.code,
                catelist : [],
                productlist : [],
            }
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

                const url1 = `REST/api/select_cproduct?code=${this.category_codeP}`;
                const response1 = await axios.get(url1, header)
                if(response1.data.result === 1){
                    this.productlist = response1.data.list;
                    // console.log(this.productlist);
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
                    // console.log(this.catelist);
                }

                const url1 = `REST/api/select_cproduct?code=${this.category_codeq}`;
                const response1 = await axios.get(url1, header)
                if(response1.data.result === 1){
                    this.productlist = response1.data.list;
                    // console.log(this.productlist);
                }
            },
            async goCate(catecode){
                const url = `REST/api/select_cproduct?code=` + catecode;
                const header = {"Content-Type" : "application/json"};
                const response = await axios.get(url, header);

                if(response.data.result === 1){
                    this.productlist = response.data.list;
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
    width : 15px;
    height : 15px;
    background-size: cover;
    right: 0;
}
</style>