<template>
    <div class="admin_wrapper">
        <div class="admin_sidmenu">
            <div class="sidemenu_header">
                <p @click="ChangeMenu(0)">Admin</p>
            </div>
            <div class="divider"></div>
            <div class="sidemenu_container">
                <div class="section">
                    <h2>브랜드관리</h2>
                    <p @click="ChangeMenu(1)">브랜드 추가</p>
                    <p @click="ChangeMenu(2)">브랜드 등록현황</p>
                </div>
                <div class="section">
                    <h2>상품관리</h2>
                    <p @click="ChangeMenu(3)">카테고리 추가</p>
                    <p @click="ChangeMenu(4)">제품 등록</p>
                    <p @click="ChangeMenu(5)">제품 등록 현황</p>
                </div>
                <div class="section">
                    <h2>통계</h2>
                    <p @click="ChangeMenu(8)">브랜드별 누적 판매율</p>
                    <p @click="ChangeMenu(9)">카테고리별 누적 판매율</p>
                </div>
                <div class="section">
                    <h2>FAQ관리</h2>
                    <el-badge :value="value" type="warning" class="badgeClass">
                        <p @click="ChangeMenu(6)">문의글 목록</p>
                    </el-badge>
                    <p @click="ChangeMenu(7)">문의글(답변완료)</p>
                </div>
                <div class="section">
                    <el-badge :value="count" type="warning" class="badgeClass">
                        <h2 @click="ChangeMenu(10)" id="handleMember">회원관리</h2>
                    </el-badge>
                </div>
            </div>
        </div>
        <div class="admin_content" >
            <component v-bind:is="CurrentPage"></component>
        </div>
    </div>
</template>

<script>
import {getCurrentInstance} from '@vue/runtime-core';
import axios from 'axios';
import Admin_Product_Insert from '@/components/Admin_Product_Insert.vue';
import Admin_Brand_List from '@/components/Admin_Brand_List.vue';
import Admin_Main_Page from '@/components/Admin_Main_Page.vue';
import Admin_Brand_Insert from '@/components/Admin_Brand_Insert.vue';
import Admin_Product_List from '@/components/Admin_Product_List.vue';
import Admin_Category_Insert from '@/components/Admin_Category_Insert.vue';
import Admin_QA_List from '@/components/Admin_QA_List.vue';
import Admin_QA_List_Complete from '@/components/Admin_QA_List_Complete.vue';
import Admin_Brand_Sales_Chart from '@/components/Admin_Brand_Sales_Chart.vue';
import Admin_Cate_Sales_Chart from '@/components/Admin_Cate_Sales_Chart.vue';
import Admin_Handle_Member from '@/components/Admin_Handle_Member.vue';
    export default {
        data () {
            return{
                CurrentPage : 'AdminMainPage',
                pages : ['AdminMainPage', 'AdminBrandInsert', 'AdminBrandList', 'AdminCategoryInsert',
                        'AdminProductInsert','AdminProductList', 'Admin_QA_List', 'Admin_QA_List_Complete',
                        'Admin_Brand_Sales_Chart','Admin_Cate_Sales_Chart', 'Admin_Handle_Member'],
                value : 0,
                count : 0,
                $socket : '',
                token: sessionStorage.getItem("token"),
            }
        },
        components : {
            'AdminProductInsert' : Admin_Product_Insert,
            'AdminBrandList' : Admin_Brand_List,
            'AdminMainPage' : Admin_Main_Page,
            'AdminBrandInsert' : Admin_Brand_Insert,
            'AdminProductList' : Admin_Product_List,
            'AdminCategoryInsert' : Admin_Category_Insert,
            'Admin_QA_List' : Admin_QA_List,
            'Admin_QA_List_Complete' : Admin_QA_List_Complete,
            'Admin_Brand_Sales_Chart' : Admin_Brand_Sales_Chart,
            'Admin_Cate_Sales_Chart' : Admin_Cate_Sales_Chart,
            'Admin_Handle_Member' : Admin_Handle_Member
        },
        async created(){
            await this.getQAlist();
            await this.getCount();
            const app = getCurrentInstance();
            this.$socket = app.appContext.config.globalProperties.$socket;
        },
        mounted() {
            this.$socket.on("QuestionIn", async (recv) => {
                console.log(recv);
                await this.getQAlist();
            })
        },
        methods : {
            ChangeMenu(val){
                this.CurrentPage = this.pages[val];
            },
            async getQAlist(){
                const url = `REST/api/question/all/selectlist?reply=false&kind=`;
                const response = await axios.get(url);
                // console.log(response);
                if(response.data.result === 1){
                    this.value = response.data.count;
                    // console.log(this.value);
                }
            },
            async getCount(){
                const url = `REST/api/admin/forge/member`;
                const headers = {"token" : this.token};
                const response = await axios.get(url, {headers});
                console.log(response);
                this.count = response.data;
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500&display=swap');
.admin_wrapper {
    background-color: white;
    z-index: 1;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;

    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 15% 85%;
    grid-template-areas: "admin_sidmenu", "admin_content";
    height: 100vh;
    font-family: 'Gowun Dodum', sans-serif;
}
.admin_sidmenu{
    /* border: 1px solid black; */
    background-color: #49654E;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
.sidemenu_header{
    height: 14%;
    display: flex;
    align-items: center;
}
.admin_sidmenu p {
    /* border : 1px solid black; */
    height: fit-content;
    width : fit-content;
    font-size: 30px;
    font-weight: bold;
    color: white;
    font-family: 'Exo', sans-serif;
}
.admin_sidmenu p:hover {
    cursor: pointer;
    opacity: 0.9;
}
.divider{
    border : 0.3px solid #ffffff;
    height: -2px;
    width : 100%;
}
.sidemenu_container{
    /* border : 1px solid black; */
    display : flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}
.sidemenu_container .section{
    /* border : 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin : 40px 20px 0px 20px;
}
.sidemenu_container .section:first-child{
    /* border : 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin : 0px 20px 0px 20px;
}
.badgeClass{
    margin: 10px 0px 0px 5px;
}
.sidemenu_container h2{
    font-size: 20px;
    width: fit-content;
    color: #ffffff;
    font-weight: bold;
    font-family: 'Exo', sans-serif;
}

.sidemenu_container p{
    font-size: 15px;
    color : #ffffffef;
    font-weight: 300;
    font-family: 'Exo', sans-serif;
    margin : 5px;
}
.sidemenu_container p:hover,
#handleMember:hover{
    cursor: pointer;
    color: antiquewhite;
}
.last_section{
    margin-top: 10px;
}
.admin_content{
    /* border: 1px solid black; */
    overflow-y: scroll;
    height : 100vh;
    overflow-x: hidden;
}

</style>