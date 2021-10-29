<template>
    <div class="aci_wrapper">
        <div class="aci_header">
            <p>상품관리</p>
            <span> > </span>
            <p id="chosen">카테고리 추가</p>
        </div>
        <div class="aci_divider"></div>
        <div class="aci_content">
            <div class="cate_list_section">
                <p>현재 카테고리 목록</p>
                <div class="cate_list">
                    <ul>Fashion</ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    <ul>Life-Style</ul>
                    <ul>Beauty</ul>
                    <ul>Food</ul>
                </div>

            </div>
            <div class="cate_insert_section">
                <div class="cate_insert_selector">
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
                </div>
                <div class="cate_insert_input">
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="코드 입력">
                    <button type="button">카테고리 추가</button>
                </div>
                <div class="cate_insert_note"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.aci_wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
}
.aci_header {
    height : 15%;
    width : 100%;
    display : flex;
    flex-direction: row;
    align-items: center;
}
.aci_header p, span {
    width : fit-content;
    margin : 0 0px 0px 40px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight : 400;
}
.aci_header > span {
    margin-left : 20px;
}
#chosen {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: 700;
    color: black;
    margin : 0 0px 0px 20px;
}
.aci_divider{
    border : 0.3px solid black;
    height: 0.3px;
    width : 100%;
}
.aci_content{
    padding: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.cate_list_section{
    border: 1px solid black;
    width: 40%;
    height: 400px;
    display: flex;
    flex-direction: column;
}
.cate_insert_section{
    border: 1px solid black;
    width: 60%;
    height: 400px;
    display: flex;
    flex-direction: column;
}
.cate_insert_selector{
    border : 1px solid black;
    width : 100%;
    height : fit-content;
    display : inline-flex;
}
.cate_insert_selector .form-select{
    width : 50%;
    height : fit-content;
    margin-right : 10px;
}
.cate_insert_input{
    border: 1px solid black;
    width: 100%;
    height : fit-content;
    display: inline-flex;
    justify-content: flex-end;
    padding: 10px;
}
.form-control{
    width: 50%;
    height: 100%;
    margin-right: 10px;
}
button {
    height: 37px;
    width : 120px;
    background-color: #49654E;
    border-radius: 5px;
    color: white;
    font-size : 15px;
}
Button:hover{
    opacity: 0.9;
}

.cate_insert_note{
    border : 1px solid black;
    width : 100%;
    height : 50%;
}

</style>