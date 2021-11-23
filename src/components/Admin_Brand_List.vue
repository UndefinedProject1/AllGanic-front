<template>
    <div class="admin_brand_list_wrapper">
        <div class="br_in_header">
            <p>브랜드관리</p>
            <span> > </span>
            <p id="brand_section">브랜드 등록현황</p>
        </div>
        <div class="solid"></div>
        <div class="adbr_list">
            <table class="table table-borderless align-middle" style="margin-left:50px;" >
                <thead>
                    <tr>
                        <th scope="col">브랜드이미지</th>
                        <th scope="col">브랜드명</th>
                        <th scope="col">관리</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in brandlist" v-bind:key="item">
                        <td>
                            <img :src="`REST/api/select_image?no=${item.brandcode}`" class="adbr_box" >
                        </td>
                        <td style="padding: 45px 0;" >{{item.brandname}}</td>
                        <td>
                        <button type="button" id="brand_deleteBtn" @click="deleteBrand">삭제</button>
                        </td>
                        <!-- id="br_delete" -->
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import melixir from '@/assets/melixir.png';
    export default {
        data() {
            return {
                melixir : melixir,
                brandlist : [],
            }
        },
        components : {

        },
        async created() {
            const url = `REST/api/select_brand`;
            const response = await axios.get(url);

            if(response.data.result === 1){
                this.brandlist = response.data.list;
                console.log(this.brandlist);
            }
            else alert("떼잉");
            
        },
        methods : {
            async deleteBrand(){
                
            }
        },

    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.table {
    width: 60%;
    font-family: 'Gowun Dodum', sans-serif;
    text-align: center;
}
.admin_brand_list_wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
}
.br_in_header {
    height : 13%;
    width : 100%;
    display : flex;
    flex-direction: row;
    align-items: center;
}
.br_in_header p, span {
    width : fit-content;
    margin : 0 0px 0px 40px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight : 400;
}
.br_in_header > span{
    margin-left : 20px;
}
#brand_section {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: 700;
    color: black;
    margin : 0 0px 0px 20px;
}
.solid {
    border: 0.8px solid black;
    width : 100%;
    margin-top: 7px;
}
.adbr_list {
    padding: 70px;
    height: 65%;
    display : flex;
    flex-direction: row;
    justify-content: center;
}
.adbr_list th{
    /* border : 1px solid black; */
    width: 20%;
}
tbody td {
    padding: 25px 0;
}
.br_delete {
    width: 50px;
    border-radius: 7px;
    margin: 15px 0px;
    color: white;
}
.adbr_box {
    /* border: 1px solid black;  */
    width: 110px;
    height: 60px; 
    border-radius: 30%;
    overflow: hidden;
}
.adbr_profile {
    /* border: 1px solid black;  */
    width: 100%;
    height: 100%;
    object-fit: cover;
}
#brand_deleteBtn{
    margin: 20px 0; 
    width: 60px; 
    height: 40px;
    border-radius: 7px;
    color: white; 
    background-color: #49654E; 
    border:none;
    font-family: 'Gowun Dodum', sans-serif;
}
#brand_deleteBtn:hover{
    cursor: pointer;
    opacity: 0.8;
}


</style>