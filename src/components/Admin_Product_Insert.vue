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
            <div class="section"></div>
            <div class="section"></div>
            <button type="button"></button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.apl_wrapper {
    height: 100%;
    display : grid;
    grid-template-rows: 14% 1% 85%;
    grid-template-columns: 100%;
    grid-template-areas: "apl_header", "apl_divider" "apl_content";
    font-family: 'Exo', sans-serif;
}
.apl_header{
    width: 100%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Gowun Dodum', sans-serif;
}
.apl_header p, span {
    width : fit-content;
    margin : 0 0px 0px 20px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
}
#chosen {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: bold;
    color: black;
}
.apl_divider{
    border : 0.3px solid black;
    height: 0.3px;
    width : 100%;
}
.apl_content{
    width: 100%;
    height : 100%;
    border:1px solid black;
    display : flex;
    flex-direction: column;
    padding : 30px;
}
.section {
    border: 1px solid black;
    width: 100%;
    height: 50%;
    display: inline-flex;
}
.left_section {
    border: 1px solid black;
    width: 60%;
}
.tr{
    margin: 10px;
}
.left_section .th_area{
    width : 200px;
    height : 100%;
    border : 1px solid black;
}
th{
    text-align: right;
    margin: 10px;
    border : 1px solid black;
}
th .th_title{
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
.form-select, .form-control{
    width : 90%;
    margin : 0 auto;
    margin : 10px;
}

.right_section {
    border: 1px solid black;
    width : 40%;
    height: 100%;
}
button {
    height: 40%;
    width : 300px;
    background-color: black;

}
</style>