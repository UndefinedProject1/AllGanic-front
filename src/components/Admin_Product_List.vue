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
                <el-select v-model="selected1" placeholder="대분류" class="form-select" @change="selectCate1">
                    <el-option v-for="item in firstCateList" :key="item.value" :label="item.value" :value="item.value">
                        <span style="float: left; font-size: 15px;">{{ item.label }}</span>
                        <span style="float: right; color: var(--el-text-color-secondary); font-size: 13px;">( {{ item.value }} )</span>
                    </el-option>
                </el-select>

                <el-select v-model="selected2" placeholder="중분류" @click="handle_middle" @change="selectCate1" class="form-select">
                    <el-option v-for="select in resultset"  :key="select" :label="select" :value="select"></el-option>
                </el-select>

                <el-select v-model="selected3" placeholder="소분류" @click="handle_small" @change="selectCate1" class="form-select">
                    <el-option v-for="select1 in resultset1"  :key="select1" :label="select1" :value="select1"></el-option>
                </el-select>
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
                            <th scope="col">기타</th>
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
                                <button type="button" @click="handleModal(list.productcode)">수정</button>
                                <button type="button">삭제</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <el-dialog v-model="showModal" title="제품 수정하기">
        <div class="modal-wrapper">
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
                                <el-input v-model="originProduct.productname" placeholder="제품명 입력" clearable class="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <th><span class="th_title">가격</span></th>
                            <td>
                                <el-input v-model="originProduct.productprice" placeholder="가격 설정" clearable class="form-control"/>
                            </td>
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
                    <el-input v-model="textarea" :rows="8" type="textarea" placeholder="브랜드 설명 입력"  class="form-control2"/>
                </div>
            </div>
            <div class="section3">
                <div class="title_area2" style="padding-top:-10px">
                    <span class="th_title" >상세 이미지</span>
                </div>
                <div class="content_area">
                    <div class="subimage_container">
                        <div class="subimg1_container" v-for="subimgcode in originProductSubImg" v-bind:key="subimgcode">
                            <img :src="`REST/api/select_subimage/find?no=${subimgcode}`"  id="subimage1">
                            <label for="insertsubimg1">이미지 추가</label>
                            <input type="file" @change="handleSubImg($event)" name="파일첨부" id="insertsubimg1">
                        </div>
                    </div>
                </div>
            </div>           
        </div>
        <div class="modal-footer">
            <el-button @click="showModal = false">취소</el-button>
            <el-button @click="handleProductUpdate">수정완료</el-button>
        </div>


    </el-dialog>
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
                subimage1 : default_image,
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
                originProductSubImg : [],
                    firstCateList : [
                    {value : 100, label : '패션'},
                    {value : 200, label : '식품'},
                    {value : 300, label : '생활잡화'},
                    {value : 400, label : '뷰티'},
                ],
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
            handleSubImg(e){
                if(e.target.files.length > 0) {
                    this.subfile1 = e.target.files[0];
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.subimage1 = e.target.result;
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            },
            handleSubImg2(e){
                if(e.target.files.length > 0) {
                    this.subfile2 = e.target.files[0];
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.subimg2 = e.target.result;
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            },
            handleSubImg3(e){
                if(e.target.files.length > 0) {
                    this.subfile3 = e.target.files[0];
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.subimg3 = e.target.result;
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
                const headers = {"Content-Type" : "application/json"};
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
                    console.log(this.resultset);
                }
            },
            async handle_small() {
                const headers = {"Content-Type" : "application/json"};
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
                this.showModal = true;
                const url= `REST/api/product_one?code=` + val;
                const header = {"Content-Type" : "application/json"};
                const response = await axios.get(url, header);
                // console.log(response);

                if(response.data.result === 1){
                    this.originProduct = response.data.product;
                    this.originProductImg = response.data.imgurl;

                    const url1 = `REST/api/select_subimage?product=` + val;
                    const response1 = await axios.get(url1, header);
                    console.log(response1);
                    if(response1.data.result === 1){
                        for(var i=0; i<response1.data.list.length; i++){
                            this.originProductSubImg[i] = response1.data.list[i].subcode;
                            console.log(this.originProductSubImg);
                        }
                    }
                }
            },
            async handleProductUpdate(){
                const url = `REST/api/admin/product_update`;
                const headers = { "Content-Type" : "multipart/form-data", "token" : this.token };
                const formData = new FormData();
                formData.append("productcode", this.originProduct.productcode);
                formData.append("productname", this.originProduct.productname);
                formData.append("productprice", this.originProduct.productprice);
                formData.append("file", this.originProductImg);
                
                const response = await axios.post(url, formData, {headers});
                console.log(response);
                if(response.data.result === 1){
                    const url1 = `REST/api/admin/subimg_update?product=${this.originProduct.productcode}&subcode=${this.originProductSubImg}`;
                    const formData1 = new FormData();
                    formData1.append("file", this.subimage1);
                    formData1.append("file", this.subfile2);
                    formData1.append("file", this.subfile3);
                    const response1 = await axios.post(url1, formData1, {headers});
                    if(response1.data.result === 1){
                        alert("제품수정완료");
                        this.showModal = false;
                    }else alert("error");
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
    height: 14.5%;
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
    height: 0px;
    width : 100%;
}   
.apl_content {
    /* border : 1px solid black; */
    height : 50%;
    width : 80%;
    display : flex;
    flex-direction: column;
    padding : 60px;
    margin: 0 auto;
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
    margin-top: 20px;
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
.list_section table thead tr th{
    border-bottom: 1px solid black;
}
.list_section table th{
    text-align: center;
    width: 100px;
}
.list_section table th:nth-child(2){
    text-align: center;
    width: 450px;
}
.list_section table th:nth-child(5){
    text-align: center;
    width: 150px;
}
.list_section table th:nth-child(6){
    text-align: center;
    width: 190px;
}
.list_section table tbody th, .list_section table tbody td {
    padding : 50px 0px;
}
.list_section table tbody tr:hover{
    opacity: 0.9;
    z-index: 1;
    background-color: #eeeeee;
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
.modal-wrapper{
    width: 100%;
    height: 100%;
}
.section {
    /* border : 1px solid black; */
    width: 100%;
    height: 50%;
    display: inline-flex;
}

.left_section {
    /* border : 1px solid black; */
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
    margin: 10px;
    /* border : 1px solid black; */
}
.th_title{
    margin-right: 10px;
    /* font-family: 'Exo', sans-serif; */
    font-weight: 700;
    font-size : 16px;
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
    /* width : 28%; */
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
.section3 {
    /* border: 1px solid black; */
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    margin-top : 50px;
}
.title_area{
    width : 17.5%;
    height : 100%;
    /* border : 1px solid black; */
    text-align : right;
    padding-top : 10px;
}
.title_area2{
    width : 18%;
    height : 100%;
    /* border : 1px solid black; */
    margin-top : -3px;
}
.content_area{
    width : 80%;
    height : 100%;
    position: relative;
    /* border : 1px solid black; */
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
    margin : -3px 0px 13px 5px;
    width : 98%;
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
    width : 150px;
    height : 150px;
    border-radius: 2px;
}
.main_image_container, .subimg1_container, .subimg2_container, .subimg3_container{
    position: relative;
    width : fit-content;
    height : fit-content;
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
.modal-footer{
    /* border: 1px solid black; */
    display: inline-flex;
    justify-content: flex-end;
    width: 100%;
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