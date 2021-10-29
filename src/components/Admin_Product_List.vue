<template>
    <div class="apl_wrapper">
        <div class="apl_header">
            <p>상품관리</p>
            <span> > </span>
            <p id="chosen">제품 등록 현황</p>
        </div>
        <div class="apl_divider"></div>
        <div class="apl_content">
            <div class="selector_section">
                <select class="form-select" aria-label="Default select example">
                    <option selected>대분류</option>
                    <option value="1">One</option>
                    <option value="2">Two</option> 
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                    <option selected>중분류</option>
                    <option value="1">One</option>
                    <option value="2">Two</option> 
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                    <option selected>소분류</option>
                    <option value="1">One</option>
                    <option value="2">Two</option> 
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="list_section">
                <table class="table table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">제품코드</th>
                            <th scope="col">제품명</th>
                            <th scope="col">브랜드</th>
                            <th scope="col">제품가격</th>
                            <th scope="col">이미지</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="num in 10" v-bind:key="num">
                            <th scope="row">300102</th>
                            <td>비건세럼</td>
                            <td>멜릭서</td>
                            <td>20,000</td>
                            <td style="padding : 25px 0;"><img :src="vegan_oil_img"></td>
                            <td>
                                <button type="button">수정</button>
                                <button type="button">삭제</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import vegan_oil_img from '@/assets/vegan_oil_img.jpg';
    export default {
        data(){
            return{
                vegan_oil_img : vegan_oil_img
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.apl_wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
    position: relative;
}
.apl_header{
    /* border: 1px solid black; */
    width : 100%;
    height: 15%;
    display : flex;
    flex-direction: row;
    align-items: center;
}
.apl_header p, span {
    width : fit-content;
    margin : 0 0px 0px 40px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight : 400;
}
.apl_header > span {
    margin-left : 20px;
}
#chosen {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: 700;
    color: black;
    margin : 0 0px 0px 20px;
}
.apl_divider{
    border : 0.3px solid black;
    height: 0.3px;
    width : 100%;
}   
.apl_content {
    /* border : 1px solid black; */
    height : 80%;
    width : 100%;
    display : flex;
    flex-direction: column;
    padding : 60px;
}
.selector_section {
    display: inline-flex;
    justify-content: flex-end;
    /* border : 1px solid black; */
}
.form-select{
    width : 20%;
    height : 40px;
    margin : 0px 10px 0px 10px;
}
.form-select:last-child{
    margin-right: 0;
}

.list_section{
    /* border : 1px solid black; */
    padding: 10px;
}
.list_section table{
    margin-top: 20px;
    text-align: center;
}
.list_section table img{
    width : 80px;
    height : 80px;
}
tbody th {
    padding: 50px 0;
}
tbody td {
    padding: 50px 0;
}
Button{
    width : 50px;
    height : 30px;
    background-color: #49654E;
    color: white;
    margin-right: 5px;
}
Button:hover{
    opacity: 0.9;
}
</style>