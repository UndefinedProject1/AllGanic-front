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
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>브랜드코드 선택</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option> 
                                    <option value="3">Three</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th><span class="th_title">카테고리코드</span></th>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>카테고리 코드 선택</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th><span class="th_title">제품명</span></th>
                            <td>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="제품명 입력">
                            </td>
                        </tr>
                        <tr>
                            <th><span class="th_title">가격</span></th>
                            <td><input type="text" class="form-control" id="formGroupExampleInput" placeholder="가격 설정"></td>
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
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2">제품 상세 설명</label>
                    </div>
                    <p>이미지는 보이는 파일 순서대로 업로드됩니다.</p>
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
            <button type="button">등록하기</button>
        </div>
    </div>
</template>

<script>
import default_image from '@/assets/default_image.jpg';
    export default {
        data() {
            return {
                subimg1 : [default_image],
                subimg2 : [default_image],
                subimg3 : [default_image],
                mainImg : [default_image],
            }
        },
        methods: {
            handleMainImg(e){
                if(e.target.files.length > 0) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.mainImg = e.target.result;
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            },
            handleSubImg(e){
                if(e.target.files.length > 0) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.subimg1 = e.target.result;
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            },
            handleSubImg2(e){
                if(e.target.files.length > 0) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.subimg2 = e.target.result;
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            },
            handleSubImg3(e){
                if(e.target.files.length > 0) {
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
    grid-template-rows: 15% 1% 85%;
    grid-template-columns: 100%;
    grid-template-areas: "api_header", "api_divider" "api_content";
    font-family: 'Exo', sans-serif;
}
.api_header{
    width: 100%;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Gowun Dodum', sans-serif;
}
.api_header p, span {
    width : fit-content;
    margin : 0 0px 0px 40px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
    font-family: 'Exo', sans-serif;
    font-weight : 400;
}
.api_header > span {
    margin-left : 20px;
}
#chosen {
    font-family: 'Exo', sans-serif;
    font-weight: 700;
    color: black;
    margin : 0 0px 0px 20px;
}
.api_divider{
    border : 0.3px solid black;
    height: 0.3px;
    width : 100%;
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
    font-family: 'Exo', sans-serif;
    font-weight: 700;
    font-size : 17px;
    letter-spacing: 0.25px;
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
    font-family: 'Exo', sans-serif;
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
#floatingTextarea2{
    width : 80%;
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
    font-family: 'Exo', sans-serif;
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
    border : 1px solid rgb(206 212 217);
    border-radius : 2px;
    margin: 15px;
}
.subimage_container label{
    position: absolute;
    top : 45%;
    left : 25%;
    color : white;
    font-family: 'Exo', sans-serif;
    font-weight: 700;
}
button {
    height: 50px;
    width : 120px;
    background-color: #49654E;
    margin : 90px auto;
    border-radius: 5px;
    color: white;
    font-family: 'Exo', sans-serif;
    font-weight: 700;
    font-size : 20px;
}
</style>