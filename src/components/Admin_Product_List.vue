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
                <select class="form-select" aria-label="Default select example" v-model="selected1" @change="selectCate1">
                    <option selected disabled>대분류</option>
                    <option value="100">100</option>
                    <option value="200">200</option> 
                    <option value="300">300</option>
                    <option value="400">400</option>
                </select>
                <select class="form-select" aria-label="Default select example" @click="handle_middle" v-model="selected2" @change="selectCate1">
                    <option selected disabled>중분류</option>
                    <option :value="select" v-for="select in resultset" v-bind:key="select">{{select}}</option>
                </select>
                <select class="form-select" aria-label="Default select example" @click="handle_small" v-model="selected3" @change="selectCate1">
                    <option selected disabled>소분류</option>
                    <option :value="select1" v-for="select1 in resultset1" v-bind:key="select1">{{select1}}</option>

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
                        <tr v-for="list in pList" v-bind:key="list">
                            <th scope="row">{{list.productcode}}</th>
                            <td>{{list.productname}}</td>
                            <td>{{list.brandname}}</td>
                            <td>{{list.productprice}}</td>
                            <td style="padding : 25px 0;"><img :src="`REST/api/select_productimage?no=${list.productcode}`"></td>
                            <td>
                                <button type="button" @click="handleModal(list.productcode)" data-bs-toggle="modal" data-bs-target="#exampleModal">수정</button>
                                <button type="button">삭제</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 수정창 Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">제품수정하기</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="section">
                    <table class="left_section">
                        <colgroup>
                            <col class="th_area">
                            <col class="td_area">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th><span class="th_title">브랜드코드</span></th>
                                <td>{{originProduct.productcode}}</td>
                            </tr>
                            <tr>
                                <th><span class="th_title">제품명</span></th>
                                <td>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="제품명 입력" v-model="originProduct.productname">
                                </td>
                            </tr>
                            <tr>
                                <th><span class="th_title">가격</span></th>
                                <td><input type="text" class="form-control" id="formGroupExampleInput" placeholder="가격 설정" v-model="originProduct.productprice"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="right_section">
                        <div class="main_image_container">
                            <img :src = "originProductImg" id="mainImg">
                            <label for="insertmainImg">이미지 추가</label>
                            <input type="file" @change="handleMainImg($event)" name="파일첨부" id="insertmainImg">
                        </div>
                    </div>
                </div>
                <div class="section2">
                    <div class="title_area">
                        <span class="th_title">제품설명</span>
                    </div>
                    <div class="content_area">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                            <label for="floatingTextarea2">제품 상세 설명</label>
                        </div>
                        <p>이미지는 보이는 파일 순서대로 수정됩니다.</p>
                    </div>
                </div>
                <div class="section2">
                    <div class="title_area2" style="padding-top:-10px">
                        <span class="th_title" >상세 이미지</span>
                    </div>
                    <div class="content_area">
                        <div class="subimage_container">
                            <div class="subimg1_container">
                                <img :src = "subimg1" id="subimage1">
                                <label for="insertsubimg1">이미지 추가</label>
                                <input type="file" @change="handleSubImg($event)" name="파일첨부" id="insertsubimg1">
                            </div>
                            <div class="subimg2_container">
                                <img :src = "subimg2" id="subimage2">
                                <label for="insertsubimg2">이미지 추가</label>
                                <input type="file" @change="handleSubImg2($event)" name="파일첨부" id="insertsubimg2">
                            </div>
                            <div class="subimg3_container">
                                <img :src = "subimg3" id="subimage3">
                                <label for="insertsubimg3">이미지 추가</label>
                                <input type="file" @change="handleSubImg3($event)" name="파일첨부" id="insertsubimg3">
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">수정항목 저장</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closebtn">닫기</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import default_image from '@/assets/default_image.jpg';
import vegan_oil_img from '@/assets/vegan_oil_img.jpg';
    export default {
        data(){
            return{
                vegan_oil_img : vegan_oil_img,
                token : sessionStorage.getItem("token"),
                showModal : false,
                subimg1 : default_image,
                subimg2 : default_image,
                subimg3 : default_image,
                mainImg : default_image,
                mainfile : '',
                selected1 : '',
                selected2 : '',
                selected3 : '',
                select : '',
                select1 : '',
                resultset : [],
                resultset1 : [],
                selects : [],
                selects1 : [],
                productname : '',
                productprice : '',
                pList : [],
                originProduct : '',
                originProductImg : '',
            }
        },
        async created(){
            await this.productList();
        },
        methods : {
            handleMainImg(e){
                if(e.target.files.length > 0) {
                    this.mainfile = e.target.files[0];
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.originProductImg = e.target.result;
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            },
            async selectCate1(){
                await this.productList();
            },
            async productList() {
                const header = {"Content-Type" : "application/json"};
                const url = `/REST/api/select_cproduct?code=` + this.selected1+this.selected2+this.selected3;
                const response = await axios.get(url, {header});
                console.log(response);
                if(response.data.result ===1) {
                    this.pList = response.data.list;
                    // console.log(this.pList);
                }
            },
            async updatemodal(){ 
                this.$refs['testmodal']
            },
            async handle_middle() {
                const headers = {"Content-Type" : "application/json", token : this.token};
                const url = `REST/api/select_catenum?code=` + this.selected1;
                const response = await axios.get(url, {headers});
                console.log(response);
                if(response.data.result ===1) {
                    this.selects = response.data.list;

                    //categorycode 추출
                    var arr = [];
                    for(var tmp of this.selects){
                        // console.log(tmp.categorycode);
                        const str1 = tmp.categorycode.substring(3,5);
                        arr.push(str1);
                    }
                    //categorycode 중복제거
                    const set = new Set(arr);
                    this.resultset = [...set];
                    
                    // console.log(arr);
                    // console.log(this.resultset);
                }
            },
            async handle_small() {
                const headers = {"Content-Type" : "application/json", token : this.token};
                const url = `REST/api/select_catenum?code=` + this.selected1 + this.selected2;
                const response = await axios.get(url, {headers});
                console.log(url);
                console.log(response);
                if(response.data.result ===1) {
                    this.selects1 = response.data.list;

                    //categorycode 추출
                    var arr = [];
                    for(var tmp of this.selects1){
                        // console.log(tmp.categorycode);
                        const str1 = tmp.categorycode.substring(5);
                        arr.push(str1);
                    }
                    //categorycode 중복제거
                    const set = new Set(arr);
                    this.resultset1 = [...set];
                    
                    // console.log(arr);
                    // console.log(this.resultset1);
                }
            },
            async handleModal(val){
                const url= `REST/api/product_one?code=` + val;
                const header = {"Content-Type" : "application/json"};
                const response = await axios.get(url, header);
                console.log(response);

                if(response.data.result === 1){
                    this.originProduct = response.data.product;
                    // console.log(this.originProduct);
                    this.originProductImg = response.data.imgurl;
                    // console.log(this.originProductImg);

                    // const url1 = `REST/api/select_subimage?product=` + val;
                    // const response1 = await axios.get(url1, header);
                    // console.log(response1);
                }
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
    border-radius: 5px;
}
.list_section table th {
    padding : 10px 0px;
    text-align: center;
}
.list_section table tbody th, .list_section table tbody td {
    padding : 50px 0px;
}

Button{
    width : 50px;
    height : 30px;
    background-color: #49654E;
    color: white;
    margin-right: 5px;
    border-radius: 5px;
}
Button:hover{
    opacity: 0.9;
}

/* 수정 모달창 */
.modal-content {
    width: 100%;
}
.modal-title{
    font-size: 20px;
    padding: 0px 0px 0px 8px;
    font-weight: bold;
}
.modal-header button {
    background-color: white;
    width: fit-content;
    height: fit-content;
    margin: 0px 10px 0px 0px;
}
.section {
    /* border : 1px solid black; */
    width: 100%;
    height: 50%;
    display: inline-flex;
}

.left_section {
    /* border : 1px solid black; */
    width: 60%;
}
.tr{
    margin: 10px;
}
.th_area{
    width : 200px;
    height : 100%;
    /* border : 1px solid black; */
}
th{
    text-align: right;
    margin: 10px;
    /* border : 1px solid black; */
}
.th_title{
    margin-right: 10px;
    /* font-family: 'Exo', sans-serif; */
    font-weight: 700;
    font-size : 17px;
    letter-spacing: 0.25px;
}
.form-control {
    width: 95%;;
}
.td_area{
    width : 500px;
}
td { 
    margin-bottom: 10px;
    padding-left: 15px;
}
.right_section {
    width : 28%;
    height: 250px;
}
.main_image_container{
    border: 1px solid rgb(206 212 217);
    border-radius: 2px;
    width: fit-content;
    height: fit-content;
}
#mainImg{
    width : 245px;
    height : 238px;
    display : block;
    border-radius: 2px;
    margin: 10px;
}
.main_image_container > label {
    position: absolute;
    top : 45%;
    left : 35%;
    color : white;
    /* font-family: 'Exo', sans-serif; */
    font-weight: 700;    
 }



.section2 {
    /* border : 1px solid black; */
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    margin-top : 15px;
}
.title_area{
    width : 17.5%;
    height : 100%;
    /* border : 1px solid black; */
    text-align : right;
    padding-top : 10px;
}
.title_area2{
    width : 17.5%;
    height : 100%;
    /* border : 1px solid black; */
    text-align : right;
    margin-top : -3px;
}
.content_area{
    width : 83%;
    height : 100%;
    position: relative;
    /* border : 1px solid black; */
}
#floatingTextarea2{
    width : 82%;
    height: 235px;
    margin : 13px 0px 40px 20px;
}
.form-floating>label {
    color : rgba(37, 37, 37, 0.747);
    position: absolute;
    top: 0;
    left: 25px;
    height: 100%;
    padding: 1rem 0.75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity .1s ease-in-out,transform .1s ease-in-out;
}
.content_area > p{
    font-size: 13px;
    /* font-family: 'Exo', sans-serif; */
    color : rgba(37, 37, 37, 0.747);
    font-weight: 300;
    position: absolute;
    top: 93%;
    right : 20%;
}
.subimage_container{
    border: 1px solid rgb(206 212 217);
    border-radius : 2px;
    margin : -3px 0px 13px 20px;
    width : 82%;
    height : 270px;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
input[type="file"]{
    display: none;
}
#subimage1, #subimage2 ,#subimage3{
    width : 200px;
    height : 200px;
    border-radius: 2px;
}
.main_image_container, .subimg1_container, .subimg2_container, .subimg3_container{
    position: relative;
    width : fit-content;
    height : fit-content;
    border : 1px solid rgb(206 212 217);
    border-radius : 2px;
    margin: 15px;
}
.subimage_container label{
    position: absolute;
    top : 45%;
    left : 30%;
    color : white;
    /* font-family: 'Exo', sans-serif; */
    font-weight: 700;
}
.modal-footer button {
    background-color: #49654E;
    width: fit-content;
    height: fit-content;
    margin: 0px 10px 0px 0px;
    color: white;
}
#closebtn {
    background-color: white;
    width: fit-content;
    height: fit-content;
    margin: 0px 10px 0px 0px;
    color: #49654E;
    font-weight: bold;
}

</style>