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
            <div class="list_section"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.apl_wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Exo', sans-serif;
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
    border : 1px solid black;
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
    border: 1px solid black;
}
</style>