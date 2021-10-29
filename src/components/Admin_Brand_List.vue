<template>
    <div class="admin_brand_list_wrapper">
        <div class="br_in_header">
            <p>브랜드관리</p>
            <span> > </span>
            <p id="brand_section">브랜드 등록현황</p>
        </div>
        <hr class="solid" />
        <div class="adbr_list">
            <table class="table table-borderless" style="">
                <colgroup>
                <col width="19%"/>
                <col width="9%"/>
                <col width="9%"/>
                <col width="9%"/>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">브랜드</th>
                        <th scope="col">등록일</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="num in 10" v-bind:key="num">
                        <td style="width:1px;">
                        <div class="adbr_box" style="background:none" >
                            <img :src="melixir" class="adbr_profile" >
                        </div>
                        </td>
                        <td>Melixir</td>
                        <td>2001.07.12</td>
                        <td><button type="button" id="br_delete"> 삭제</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import melixir from '@/assets/melixir.png';

//import axios from 'axios';
    export default {
        data() {
            return {
                melixir : melixir,
            }
        },
        components : {

        },
        // methods : {
        //     async handle_adbr_delete() {
                
        //         // const url = ;
        //         const headers = {"Content-Type":"application/json"};
        //         const body = {}
        //         const response = await axios.

        //     }
        // }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.table {
    font-family: 'Gowun Dodum', sans-serif;
}
.admin_brand_list_wrapper {
    height: 100%;
    display : grid;
    grid-template-rows: 14% 1% 85%;
    grid-template-columns: 100%;
    grid-template-areas: "br_in_header", "apl_divider" "apl_content";
    font-family: 'Exo', sans-serif;
}
.br_in_header {
    width: 100%;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Gowun Dodum', sans-serif;
}
.br_in_header p, span {
    width : fit-content;
    margin : 0 0px 0px 20px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
}
.brand_section {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: bold;
    color: black;
}
#brand_section {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: bold;
    color: black;
}
.solid {
    /* border: 0.8px solid black; */
    width : 100%;
    height: 2px;
    margin-top: 7px;
}
.adbr_list {
    padding: 50px 0 0 150px;
    text-align: center;
}
.br_delete {
   /* border: 1px solid black;  */
   display: inline-block;
   width: 50px;
   height: 20px;
   border-radius: 4px;
   background-color: white;
   border:0.1px;
}
.adbr_box {
    border: 1px solid black; 
    width: 70px;
    height: 70px; 
    border-radius: 70%;
    overflow: hidden;
}
.adbr_profile {
    border: 1px solid black; 
    width: 100%;
    height: 100%;
    object-fit: cover;
}



</style>