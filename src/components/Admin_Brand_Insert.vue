<template>
    <div class="admin_brand_insert_wrapper">
        <div class="br_in_header">
            <p>브랜드관리</p>
            <span> > </span>
            <p id="brand_section">브랜드추가</p>
        </div>
        <div class="solid"></div>
        <div class="admin_bri_content">
            <div class="admin_name">
                <P>브랜드명</P>
                <el-input v-model="brandname" placeholder="제품명 입력" class="form-control" clearable style="font-family: 'Gowun Dodum', sans-serif;"/>
            </div>
            <div class="admin_put_img">
                <P>이미지</P>
                <div class="insertBrandImg">
                    <img :src="uploadImageFile" class="popupImageItem" />
                    <label for="insertImg">이미지추가</label>
                    <input type="file" @change="onFileSelected($event)" id="insertImg">
                </div>
            </div>
            <div class="admin_history">
                <P>브랜드 설명</P>
                  <el-input v-model="textarea" :rows="3" type="textarea" placeholder="브랜드 설명 입력"  class="form-control"/>
            </div>
            <div class="ad_bri_btn">
                <button type="button" id="ad_btn_insert" @click="handleAdmin" >등록하기</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import default_image from '@/assets/default_image.jpg';
    export default {
        data() {
            return {
                uploadImageFile : default_image,
                brandname :'',
                token : sessionStorage.getItem("token"),
                file : '',
                textarea: ''
            }
        },
        methods : {
            onFileSelected(event) {
                var input = event.target;
                if (input.files.length>0) {
                    this.file = event.target.files[0];
                    var reader = new FileReader();
                    reader.onload = (event) => {
                        this.uploadImageFile = event.target.result;
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            },
            async handleAdmin(){
                console.log(this.token);
                const headers = { "Content-Type" : "multipart/form-data", "token" : this.token };
                const url = `REST/api/admin/brand_insert`;
                const formData = new FormData();
                formData.append("brandname", this.brandname);
                formData.append("file", this.file);
                // console.log(this.uploadImageFile);

                const response = await axios.post(url, formData, {headers});
                console.log(response);
                if(response.data.result === 1){
                    alert("브랜드 추가 성공");
                }
                else alert("브랜드 추가 실패");
            }
        }
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');

.admin_brand_insert_wrapper {
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
    border: 0.3px solid black;
    height: 0px;
    width: 100%;
}
.admin_bri_content {
    /* border: 1px solid black; */
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
}
.admin_bri_content {
    /* border: 1px solid black; */
    margin: 0 auto;
}
.admin_name {
    /* border: 1px solid black; */
    width: fit-content;
    display: flex;
    justify-content: center;
    font-family: 'Gowun Dodum', sans-serif;
    margin-top: 20px;
    margin-bottom: 28px;
}
.admin_name p {
    /* border: 1px solid black; */
    margin-right: 15px;
    margin-top: 13px;
    width : 60px
}
.form-control {
    width: 300px;
    font-family: 'Gowun Dodum', sans-serif;
}
#adbr_history {
    width: 300px;
    margin:  auto 0px;
}
.el-input__inner, .el-textarea__inner{
    font-family: 'Gowun Dodum', sans-serif;
}
.admin_history {
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    font-family: 'Gowun Dodum', sans-serif;
}
.admin_history p {
    /* border: 1px solid black; */
    margin-right: 15px;
    font-family: 'Gowun Dodum', sans-serif;
    width: fit-content;
    height: fit-content;
    margin-top: 18px;
}
.admin_put_img {
    /* border: 1px solid black; */
    width: fit-content;
    align-items: center;
    margin-bottom: 28px;
    margin-left: 28px;
    display: inline-flex;
    justify-content: center;
}
.admin_put_img p {
    display: inline-block;
    width: fit-content;
    height: fit-content;
    /* border: 1px solid black; */
    font-family: 'Gowun Dodum', sans-serif;
}
.insertBrandImg{
    position: relative;
    width : fit-content;
    height : fit-content;
    /* border : 1px solid rgb(206 212 217); */
    border-radius : 2px;
    margin: 15px;
}
.admin_put_img label{
    position: absolute;
    top : 45%;
    left : 35%;
    color : white;
    /* font-family: 'Exo', sans-serif; */
    font-weight: 700;
}
input[type="file"]{
    display: none;
}
.popupImageItem{
    /* border: 1px solid rgb(211, 206, 206); */
    width: 300px;
    height: 190px;
}
.ad_img {
    /* border: 1px solid black; */
    margin-left: 139px;
}
.ad_bri_btn {
    margin: 0 auto;
}
#ad_btn_insert{
    width: 140px;
    height: 45px;
    display: block;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    background-color: #49654E;
    margin-top: 30px;
}
</style>