<template>
    <div class="main_wrapper">
        <div class="main_container">
            <div class="banner_slider"></div>
            <div class="right_float">
                <div class="main_banner"></div>
                <div class="best_product"></div>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
import Footer from '@/components/Footer.vue';
// import Welcome_banner_img from '@/assets/Welcome_banner_img.jpg';
    export default {
        data(){
            return{
                // Welcome_banner_img :Welcome_banner_img
            }
        },
        components:{
            Footer : Footer
        }
    }
</script>

<style>
.main_wrapper{
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
    display: inline-flex;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}
.main_container{
    /* border: 1px solid black; */
    width: 1500px;
    height: 83.5%;
    display: inline-flex;
    margin: 0 auto;
    align-items: center;
    /* justify-items: center; */
    justify-content: space-evenly;
}

.banner_slider{
    border: 1px solid black;
    width: 490px;
    height: 490px;
    margin: 5px;
}
.right_float{
    border: 1px solid black;
    width: 800px;
    height: 490px;
}
.main_banner{
    border: 1px solid black;
    width: 100%;
    height: 40%;
    margin-bottom: 15px;
    background-image: url("/src/assets/Welcome_banner_img.jpg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
.best_product{
    border: 1px solid black;
    width: 100%;
    height: 65%;
}

</style>