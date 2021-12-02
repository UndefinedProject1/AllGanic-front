<template>
    <div class="api_wrapper">
        <div class="api_header">
            <p>상품관리</p>
            <span> > </span>
            <p id="chosen">제품등록</p>
        </div>
        <div class="api_divider"></div>
        <div class="api_content">
            <div class="section">
                <table class="left_section">
                    <colgroup>
                        <col class="th_area">
                        <col class="td_area">
                    </colgroup>
                    <tbody>
                        <tr>
                            <th><span class="th_title">브랜드코드</span></th>
                            <td>
                                <el-select v-model="selected" placeholder="Select" class="form-select" >
                                    <el-option v-for="code in brandlist" :key="code" :label="code.brandname" :value="code.brandcode">
                                        <span style="float: left; color: var(--el-text-color-primary); font-size: 15px; font-family: 'Gowun Dodum', sans-serif;">{{ code.brandname }}</span>
                                        <span style="float: right; color: var(--el-text-color-secondary); font-size: 14px; font-family: 'Gowun Dodum', sans-serif;">( {{ code.brandcode }} )</span>
                                    </el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <th><span class="th_title">카테고리코드</span></th>
                            <td>
                                <el-select v-model="selected2" placeholder="Select" class="form-select" >
                                    <el-option v-for="code in catelist" :key="code" :label="code.categoryname" :value="code.categorycode">
                                        <span style="float: left; color: var(--el-text-color-primary); font-size: 15px; font-family: 'Gowun Dodum', sans-serif;">{{ code.categoryname }}</span>
                                        <span style="float: right; color: var(--el-text-color-secondary); font-size: 14px; font-family: 'Gowun Dodum', sans-serif;" >( {{ code.categorycode }} )</span>
                                    </el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <th><span class="th_title">제품명</span></th>
                            <td>
                                <el-input v-model="productname" placeholder="제품명 입력" clearable class="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <th><span class="th_title">가격</span></th>
                            <td>
                                <el-input v-model="productprice" placeholder="가격 설정" clearable class="form-control"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="right_section">
                    <div class="main_image_container">
                        <img :src = "mainImg" id="mainImg">
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
                    <p>이미지는 보이는 파일 순서대로 업로드됩니다.</p>
                </div>
            </div>
            <div class="section3">
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
            <button type="button" @click="handleProductInsert">등록하기</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import default_image from '@/assets/default_image.jpg';
import { ElMessage } from 'element-plus'
    export default {
        setup() {
            const successAlertMSG = () => {
                ElMessage.success('제품등록 완료')
            }
            const failAlertMSG = () => {
                ElMessage.error('error')
            }
            return {
                successAlertMSG,
                failAlertMSG
            }
        },
        data() {
            return {
                gettoken : sessionStorage.getItem("token"),
                // settoken : sessionStorage.setItem("token"),
                subimg1 : default_image,
                subimg2 : default_image,
                subimg3 : default_image,
                mainImg : default_image,
                brandlist : [],
                catelist : [],
                selected : '브랜드코드선택',
                selected2 : '카테고리코드선택',
                productname : '',
                productprice : '',
                mainfile : '',
                subfile1 : '',
                subfile2 : '',
                subfile3 : '',
                pcode : '',
            }
        },
        async created() {
            await this.handleBrandList();
        },
        methods: {
            async handleBrandList(){
                const url = `REST/api/select_brand`;
                const response = await axios.get(url);

                if(response.data.result === 1){
                    this.brandlist = response.data.list;
                    // console.log(this.brandlist);
                }
                else alert("떼잉");


                const url1 = `REST/api/select_cate`;
                const response1 = await axios.get(url1);

                if(response1.data.result === 1){
                    this.catelist = response1.data.list;
                    console.log(this.catelist);
                }
                else alert("돼라");

            },
            async handleProductInsert(){
                const headers = { "Content-Type" : "multipart/form-data", "token" : this.gettoken };
                const url = `REST/api/admin/product_insert`;
                const formData = new FormData();
                formData.append("productname", this.productname);
                formData.append("productprice", this.productprice);
                formData.append("file", this.mainfile);
                formData.append("brand", this.selected);
                formData.append("category", this.selected2);
                
                const response = await axios.post(url, formData, {headers});
                console.log(response);
                // console.log(formData);
                if(response.data.result === 1){
                    this.pcode = response.data.code;
                    console.log(this.pcode);
                    const url1 = `REST/api/admin/subimg_insert?product=${this.pcode}`;
                    const formData1 = new FormData();
                    formData1.append("file", this.subfile1);
                    formData1.append("file", this.subfile2);
                    formData1.append("file", this.subfile3);
                    const response1 = await axios.post(url1, formData1, {headers});
                    if(response1.data.result === 1){
                        this.successAlertMSG();
                    }
                    else {
                        this.failAlertMSG();
                    }
                }

            },
            handleMainImg(e){
                if(e.target.files.length > 0) {
                    this.mainfile = e.target.files[0];
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.mainImg = e.target.result;
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            },
            handleSubImg(e){
                if(e.target.files.length > 0) {
                    this.subfile1 = e.target.files[0];
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.subimg1 = e.target.result;
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


        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.api_wrapper {
    height: 100%;
    display : grid;
    grid-template-rows: 14.5% 1% 85%;
    grid-template-columns: 100%;
    grid-template-areas: "api_header", "api_divider" "api_content";
    font-family: 'Hahmlet', serif;
}
.api_header{
    width: 100%;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Hahmlet', serif;
}
.api_header p, span {
    width : fit-content;
    margin : 0 0px 0px 40px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
    /* font-family: 'Exo', sans-serif; */
    font-weight : 400;
}
.api_header > span {
    margin-left : 20px;
}
#chosen {
    /* font-family: 'Exo', sans-serif; */
    font-weight: 700;
    color: black;
    margin : 0 0px 0px 20px;
}
.api_divider{
    border: 0.3px solid black;
    height: 0px;
    width: 100%;
    margin-top: -3px;
}

tbody{
    width : 300px;
    /* border : 1px solid black; */

}
.api_content{
    width: 100%;
    height : fit-content;
    /* border : 1px solid black; */
    display : flex;
    flex-direction: column;
    padding : 30px;
}
.section {
    /* border : 1px solid black; */
    width: 100%;
    height: 50%;
    display: inline-flex;
}

.left_section {
    /* border: 1px solid black; */
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
    margin-bottom: 5px;
}

.td_area{
    width : 500px;
}
.td { 
    margin-bottom: 10px;
}
.form-select, .form-control {
    width : 90%;
    margin : 10px auto;
}
.right_section {
    width : 25%;
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
    /* border: 1px solid black; */
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
.content_area .form-control2{
    width: 80%;
}
#floatingTextarea2{
    width : 80%;
    height: 235px;
    margin : 13px 0px 40px 20px;
}
.content_area > p{
    font-size: 13px;
    /* font-family: 'Exo', sans-serif; */
    color : rgba(37, 37, 37, 0.747);
    font-weight: 300;
    position: absolute;
    top: 107%;
    right : 20%;
}
.section3 {
    /* border: 1px solid black; */
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    margin-top : 50px;
}
.subimage_container{
    border: 1px solid rgb(206 212 217);
    border-radius : 2px;
    width : 80%;
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
button {
    height: 40px;
    width : 120px;
    background-color: #49654E;
    margin : 90px auto;
    border-radius: 5px;
    border: none;
    color: white;
    /* font-family: 'Exo', sans-serif; */
    font-weight: 500;
    font-size : 18px;
    font-family: 'Hahmlet', serif;
}
button:hover {
    opacity: 0.9;
    cursor: pointer;
}
</style>