<template>
    <div class="apl_wrapper">
        <div class="apl_header">
            <p>상품관리</p>
            <span> > </span>
            <p id="chosen">제품등록</p>
        </div>
        <div class="apl_divider"></div>
        <div class="apl_content">
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
                <div class="right_section"></div>
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
                        <div v-for="num in 3" v-bind:key="num">
                            <img :src = "imageupload" class="subimage"> 
                        </div>
                        
                    </div>
                    <input type="file" @change="handleSubImg($event)" name="파일첨부" multiple>
                </div>
            </div>
            <button type="button">등록하기</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageupload : [],
            }
        },
        methods: {
            handleSubImg(e){
                if(e.target.files.length > 0) {
                    const fileArr = Array.from(e.target.files);

                    fileArr.forEach(file => {
                        const reader = new FileReader();

                        reader.onload = e => {
                            this.imageupload = e.target.result;
                            console.log(file.name);
                        }

                        reader.readAsDataURL(file)
                    })
                    
                    // var reader = new FileReader();
                    // reader.onload = (e) => {
                    //     this.imageupload = e.target.result;
                    // }
                    // reader.readAsDataURL(e.target.files[0]);
                }
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.apl_wrapper {
    height: 100%;
    display : grid;
    grid-template-rows: 13.4% 1% 85%;
    grid-template-columns: 100%;
    grid-template-areas: "apl_header", "apl_divider" "apl_content";
    font-family: 'Exo', sans-serif;
}
.apl_header{
    width: 100%;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Gowun Dodum', sans-serif;
}
.apl_header p, span {
    width : fit-content;
    margin : 0 0px 0px 40px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
    font-family: 'Exo', sans-serif;
    font-weight : 400;
}
.apl_header > span {
    margin-left : 20px;
}
#chosen {
    font-family: 'Exo', sans-serif;
    font-weight: 700;
    color: black;
    margin : 0 0px 0px 20px;
}
.apl_divider{
    border : 0.3px solid black;
    height: 0.3px;
    width : 100%;
}

tbody{
    width : 300px;
    /* border : 1px solid black; */

}
.apl_content{
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
    font-size : 18px;
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
    border: 1px solid black;
    width : 25%;
    height: 250px;
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
    margin-top : -11px;
}
.content_area{
    width : 83%;
    height : 100%;
    /* border : 1px solid black; */
}
#floatingTextarea2{
    width : 80%;
    height: 235px;
    margin : 13px 0px 32px 20px;
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
    margin-right: 60px;
    margin-top : 30px;
}
.subimage_container{
    border: 1px solid rgb(206 212 217);
    border-radius : 2px;
    margin : -10px 0px 13px 20px;
    width : 80%;
    height : 270px;
    display : flex;
    flex-direction: row;
}
.subimage{
    width : 100px;
    height : 100px;
}
button {
    height: 80px;
    width : 200px;
    background-color: #49654E;
    margin : 90px auto;
    border-radius: 5px;
    color: white;
    font-family: 'Exo', sans-serif;
    font-weight: 700;
    font-size : 25px;
}
</style>