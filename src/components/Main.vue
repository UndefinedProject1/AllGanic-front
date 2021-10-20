<template>
    <div class="main_wrapper">
        <div class="inner_container">
            <div class="main_container">
                <div class="banner_slider"></div>
                <div class="main_banner"></div>
                <div class="best_product"></div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
    export default {
        data(){
            return{

            }
        },
        components:{
            Footer : Footer
        }
    }
</script>

<style>
Footer{
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 10000;
}
.main_wrapper{
    border: 1px solid black;
    width: 100%;
    height: 80%;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
}
.main_container{
    border: 1px solid black;
    width: 100%;
    height: 100%;
    display: grid;
    /* grid-gap: 10px; */
    margin: 0 auto;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: space-evenly;
}
.inner_container{
    border: 1px solid black;
    margin: 0 auto;
    width: 1300px;
    height: 100%;
}
.banner_slider{
    border: 1px solid black;
    grid-row: span 2;
    width: 590px;
    height: 590px;
}
.main_banner{
    border: 1px solid black;
    grid-column: 2 / span 2;
    grid-row: 1;
    width: 590px;
    height: 280px;
}
.best_product{
    border: 1px solid black;
    grid-column: 2 / span 2;
    grid-row: 2;
    width: 590px;
    height: 280px;
}

</style>