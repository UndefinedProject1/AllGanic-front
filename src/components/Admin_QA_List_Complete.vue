<template>
    <div class="qa_list_Cwrapper">
        <div class="qa_list_Cheader">
            <p>FAQ관리</p>
            <span> > </span>
            <p id="chosen">문의글(답변완료)</p>
        </div>
        <div class="qa_list_Cdivider"></div>
        <div class="qa_list_Ccontent"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.qa_list_Cwrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
}
.qa_list_Cheader {
    height : 15%;
    width : 100%;
    display : flex;
    flex-direction: row;
    align-items: center;
}
.qa_list_Cheader p, span {
    width : fit-content;
    margin : 0 0px 0px 40px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight : 400;
}
.qa_list_Cheader > span {
    margin-left : 20px;
}
#chosen {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: 700;
    color: black;
    margin : 0 0px 0px 20px;
}
.qa_list_Cdivider{
    border : 0.3px solid black;
    height: 0.3px;
    width : 100%;
}
</style>