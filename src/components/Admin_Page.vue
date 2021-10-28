<template>
    <div class="admin_wrapper">
        <div class="admin_sidmenu">
            <p>Admin</p>
            <div class="divider"></div>
            <div class="sidemenu_container">
                <div class="section">
                    <h2>브랜드관리</h2>
                    <p @click="ChangeMenu(1)">브랜드 추가</p>
                    <p @click="ChangeMenu(2)">브랜드 등록현황</p>
                </div>
                <div class="section">
                    <h2>상품관리</h2>
                    <p @click="ChangeMenu(3)">제품 등록</p>
                    <p>제품 등록 현황</p>
                </div>
                <div class="section">
                    <h2>통계</h2>
                    <p>미정</p>
                    <p>미정</p>
                </div>
                <h2 class="last_section">FAQ관리</h2>
            </div>
        </div>
        <div class="admin_content" >
            <component v-bind:is="CurrentPage"></component>
        </div>
    </div>
</template>

<script>
import Admin_Product_Insert from '@/components/Admin_Product_Insert.vue';
import Admin_Brand_List from '@/components/Admin_Brand_List.vue';
import Admin_Main_Page from '@/components/Admin_Main_Page.vue';
import Admin_Brand_Insert from '@/components/Admin_Brand_Insert.vue';
    export default {
        data () {
            return{
                CurrentPage : 'Admin_Main_Page',
                pages : ['Admin_Main_Page', 'Admin_Brand_Insert', 'AdminBrandList','AdminProductInsert']
            }
        },
        components : {
            'AdminProductInsert' : Admin_Product_Insert,
            'AdminBrandList' : Admin_Brand_List,
            'Admin_Main_Page' : Admin_Main_Page,
            'Admin_Brand_Insert' : Admin_Brand_Insert
        },
        methods : {
            ChangeMenu(val){
                this.CurrentPage = this.pages[val];
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500&display=swap');
.admin_wrapper {
    background-color: white;
    z-index: 1000000;
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
}
.admin_sidmenu p {
    /* border : 1px solid black; */
    height: fit-content;
    width : fit-content;
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin : 30px auto;
    font-family: 'Exo', sans-serif;
}
.divider{
    border : 0.3px solid #ffffff;
    height: 0.3px;
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
    margin : 20px;
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
.sidemenu_container p:hover{
    cursor: pointer;
    color: antiquewhite;
}
.last_section{
    margin-top: 10px;
}
.admin_content{
    /* border: 1px solid black; */
    overflow-y: scroll;
    height : 100%;
}

</style>