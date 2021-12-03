<template>
    <div class="co_wrapper">
        <div class="co_container">
            <div class="co_text_box">
                <h1>주문이 정상적으로 완료되었습니다.</h1>
                <img id="image" :src="sky">
                <p>자세한 내역은 <a href="/mypage_info">마이페이지</a> 에서 확인하실 수 있습니다.</p>
            </div>
        </div>
    </div>
</template>

<script>
import sky from '@/assets/sky.jpg';
    export default {
        data(){
            return{
                sky : sky
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');

.co_wrapper{
    margin: 0;
    padding-top: 5%;
    width: 100%;
    /* height: 100vh; */
    font-family: 'Hahmlet', serif;
}
.co_container{
    /* border: 1px solid black; */
    width: 80%;
    height: 100%;
    margin: 0 auto;
}
.co_text_box{
    margin-top: 4%;
    /* border: 1px solid blue; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
}
#image{
    width: 50%;
    height: 300px;
}
.co_text_box h1{
    margin: 2% auto;
}
.co_text_box p{
    margin-top: 2%;

}
</style>