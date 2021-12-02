<template>
    <div class="info_list">
        <div class="liview_title">
            <p>리뷰내역</p>
        </div>
        <div class="liview_insert">
            

        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');

.info_list {
    /* border: 1px solid black; */
    width: 98.5%;
    height: 100%;
    margin-left: 30px;
}
.liview_title {
    color: #715036;
    font-weight: bold;
    display: flex;
    /* border: 1px solid black; */
    justify-content: space-between;
    align-items: flex-end;
}
.liview_title > p {
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 20px;
    width: fit-content;
}
.liview_insert{
    border: 3px solid #715036;
    width: 100%;
    height: 93.5%;
    border-radius: 5px;
}
</style>