<template>
    <div class="restrict_wrapper">
        <img :src="conversation">
        <h1>접근 권한이 없습니다.</h1>
    </div>
</template>

<script>
import conversation from '@/assets/conversation.png';
    export default {
        data(){
            return {
                conversation
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@200&display=swap');

.restrict_wrapper{
    width : 100%;
    height : 100%;
    display : flex;
    padding-top: 5%;
    font-family: 'Hahmlet', serif;    
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
img{
    height : 50%;
}

h1 {
    margin: 10px;
    font-weight: bold;
    color: black;
}
</style>