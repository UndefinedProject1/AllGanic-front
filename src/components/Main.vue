<template>
    <div class="main_wrapper">
        <div class="intro_screen">
            <div data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine" class="base_layer2">
                <h1>Welcome,</h1>
                <h2>All Here!</h2>
            </div>
        </div>

        <div class="secondScreen">


        </div>

        <div class="thirdScreen">


        </div>
        



        <div class="outro_screen">
            Outro Page
        </div>

    </div>

</template>

<script>
import slider_img2 from '@/assets/slider_img2.png';
import vegan_cream_img from '@/assets/vegan_cream_img.jpg';
import vegan_soap_img2 from '@/assets/vegan_soap_img2.jpg';
import vegan_oil_img from '@/assets/vegan_oil_img.jpg';
import boxed_water from '@/assets/boxed_water.jpg';
import zerowaste_package from '@/assets/zerowaste_package.jpg';
import natureround from '@/assets/natureround.jpg';
import main_slider_img_1 from '@/assets/main_slider_img_1.png';
import eco1 from '@/assets/eco1.jpg';
import eco5 from '@/assets/eco5.jpg';



    export default {
        data(){
            return{

                slider_img2 : slider_img2,
                vegan_cream_img : vegan_cream_img,
                vegan_soap_img2 : vegan_soap_img2,
                vegan_oil_img : vegan_oil_img,
                boxed_water : boxed_water,
                zerowaste_package : zerowaste_package,
                natureround : natureround,
                main_slider_img_1 :main_slider_img_1,

                eco1 : eco1,
                eco5 : eco5,
            }
        },
        methods:{
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Playfair+Display:wght@400;500;700;800&display=swap');
*{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Playfair Display', sans-serif;
    font-size: 4em;
    color: white;
}

.main_wrapper{
    scroll-behavior: smooth;
    height: 100vh;
    /* width : 100%; */
    overflow-x: hidden;
    perspective: 300px;
    font-family: 'Playfair Display', sans-serif;
    font-size: 4em;
    color: white;
    background-image: url("/src/assets/vegan_cream_img.jpg");
    background-size: cover;
    background-position: 50%;
    /* background-repeat: no-repeat; */
    background-attachment:local;
}
.intro_screen, .secondScreen, .thirdScreen, .outro_screen {
    border: 2px solid white;
    height: 100vh;
    width : 100%;
}
.intro_screen{
    background-attachment:fixed;
    justify-content: center;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    height: 100vh;
    width: 100%;
}
.outro_screen{
    height: 100vh;
    background-color: #333;
    z-index: 0;
}


</style>