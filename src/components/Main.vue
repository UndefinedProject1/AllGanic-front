<template>
    <div class="main_wrapper">
        <section class="firstSection">
            <p>COMMING SOON</p>
        </section>
        <!-- <section class="firstSection">
            <p>COMMING SOON</p>
        </section> -->
        <!-- <div class="main_container">
            <div class="banner_slider">
                <h1 class="display-4" id="text1">Here,</h1>
                <div class="welcome_text">
                    <h1 class="display-5" id="text1">In</h1>
                    <transitiongroup id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" name="carousel" v-bind:style="carouselStyle">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="slider1">
                                    <span>ZERO</span>
                                    <p>지구를 생각하는 당신의 완벽한 소비를 위해 <br> 포장재까지 모두 생각한 브랜드만</p>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div class="slider2">
                                    <span>CLOSER</span>
                                    <p>어디서부터 시작해야할지 막막한 당신을 위해<br> 그 어느때보다 더 가까이</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="slider3">
                                    <span>FROM</span>
                                    <p>당신으로부터 시작된 소중한 가치가 헛되지않도록 </p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </transitiongroup>
                    <h1 class="display-4" id="textlogo">All_GANIC</h1>
                </div>

            </div>
            <div class="right_float">
                <h1 class="display-5" id="text">You can take <br> " the best "</h1>
                <div class="best_product">
                    <div class="img1"></div>
                    <div class="img2"></div>
                    <div class="img3"></div>
                </div>
                <h1 class="display-5" id="text2">For you, <br> For us.</h1>
            </div>
        </div> -->
    </div>

</template>

<script>
import slider_img1 from '@/assets/slider_img1.png';
import slider_img2 from '@/assets/slider_img2.png';
import vegan_cream_img from '@/assets/vegan_cream_img.jpg';
import vegan_soap_img2 from '@/assets/vegan_soap_img2.jpg';
import vegan_oil_img from '@/assets/vegan_oil_img.jpg';
import boxed_water from '@/assets/boxed_water.jpg';
import zerowaste_package from '@/assets/zerowaste_package.jpg';
import face_img from '@/assets/face_img.jpg';
    export default {
        data(){
            return{
                slider_img1 : slider_img1,
                slider_img2 : slider_img2,
                vegan_cream_img : vegan_cream_img,
                vegan_soap_img2 : vegan_soap_img2,
                vegan_oil_img : vegan_oil_img,
                boxed_water : boxed_water,
                zerowaste_package : zerowaste_package,
                face_img : face_img,
            }
        },
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Playfair+Display:wght@400;500;700;800&display=swap');
.main_wrapper{
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
    /* margin-top: 4.5%; */
}
section{
    border: 1px solid black;
    height: 100vh;
    position: relative;
    width: 100%;
    scroll-snap-align: center;
    display: flex;
    overflow-x: hidden;
}
.firstSection{
    opacity: 0.88;
    background-image: url("/src/assets/vegan_cream_img.jpg");
    background-size: cover;
    align-items: center;
    background-position-y: 30%;
    justify-content: center;
}
.firstSection > p{
    font-size: 100px;
    font-weight: bold;
    color: white;
}
/* .main_wrapper{
    border: 1px solid black;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(#49654E, #49654E 60%, #17341C 60%, #17341C 100%);
    max-height: 100vh;
} */
.main_container{
    /* border: 1px solid black; */
    width: 100%;
    height : 100%;
    display: inline-flex;
    margin: 0 auto;
    padding:0px 50px;
}


/* 왼쪽 이미지 슬라이더 */
.banner_slider{
    /* border: 1px solid black; */
    width: 61%;
    height: 100%;
    display : flex;
    flex-direction: column;
    padding: 10px 70px;
    transition: 0.3s;
}
#text1{
    width: fit-content;
    height: fit-content;
    color: #CCA53F;
    font-weight: 800;
    text-shadow: 1px 1px 2px #CCA53F;
}
#textlogo{
    width: fit-content;
    height: fit-content;
    color: #CCA53F;
    font-weight: 800;
    position: absolute;
    right: 7%;
    text-shadow: 1px 1px 2px #CCA53F;
}
.welcome_text{
    height: 100%;
    width: 100%;
    display: inline-flex;
    position: relative;
}
.carousel-enter-from{
    padding-top: 6px 10px;
}
.carousel-enter-to{
    padding-top: 3px 10px;
}
.carousel-enter-active{
    transition: all 2s ease;
}
#carouselExampleInterval {
    width: 58%;
    height: 92%;
    margin: 3px 10px;
}
.carousel-inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 15px;
}
.carousel-item {
    display: block;
    height: 100%;
}
.slider1 {
    width: 100% !important;
    height: 100% !important;
    background-image: url("/src/assets/zerowaste_package.jpg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 30px;  
}
.slider2 {
    width: 100% !important;
    height: 100% !important;
    background-image: url("/src/assets/vegan_cream_img.jpg");
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 30px;   
}
.slider3 {
    width: 100% !important;
    height: 100% !important;
    background-image: url("/src/assets/face_img.jpg");
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: cover;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 30px;   
}
.slider1 span, .slider2 span, .slider3 span{
    width: fit-content;
    height: fit-content;
    color: white;
    z-index: 1;
    font-size: 40px;
    font-weight: bold;
    opacity: 0.9;
    font-family: 'Gowun Batang', serif;
}
.slider1 p, .slider2 p, .slider3 p{
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    color: white;
    font-family: 'Gowun Batang', serif;
}



/* 오른쪽 배너 & BEST */
.right_float{
    /* border: 1px solid black; */
    width: 53%;
    height: fit-content;
    display: block;
    position: absolute;
    padding: 0px 20px;
    margin: auto 0;
    top: 31%;
    right : 6%;
}
.right_float #text{
    width: fit-content;
    height: fit-content;
    color: #CCA53F;
    font-weight: 800;
    text-shadow: 1px 1px 2px #CCA53F;
    float: right;
    text-align: right;
    margin-right: 25px;
    font-size: 2.7rem;
    line-height: 1.1;
}
.right_float #text2{
    width: fit-content;
    height: fit-content;
    color: #CCA53F;
    font-weight: 800;
    text-shadow: 1px 1px 2px #CCA53F;
    margin-left: 25px;
    font-size: 2.7rem;
    line-height: 1.1;
}



/* 오른쪽 상단, 웰컴배너 */
.main_banner{
    /* border: 1px solid black; */
    width: 100%;
    height: 45%;
    margin-top: 5px;
    margin-bottom: 30px;
    background-image: url("/src/assets/Welcome_banner_img.jpg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    border-radius: 3px;
    opacity:0.75;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* box-shadow : 3px 3px #7150368a; */
}
.main_banner > span {
    /* border: 1px solid black; */
    font-size: 50px;
    color: white;
    font-weight: bold;
    opacity: 0.9;
}


/* 오른쪽 하단, BEST 상품군 */
.best_product{
    /* border: 1px solid black; */
    width: 100%;
    height: 188px;
    margin: 15px 0px;
    display: inline-flex;
    justify-content: space-evenly;
}
.img1 {
    width: 30%;
    height: 100%;
    background-image: url("/src/assets/perfume_img.png");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    border-radius: 3px;
    display: flex;
    align-items: center;
}
.img2 {
    width: 30%;
    height: 100%;
    background-image: url("/src/assets/vegan_bag.jpg");
    background-repeat: no-repeat;
    background-position: 50% 10%;
    background-size: cover;
    border-radius: 3px;
}
.img3 {
    width: 30%;
    height: 100%;
    background-image: url("/src/assets/vegan_soap_img2.jpg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    border-radius: 3px;
}
.img1:hover, .img2:hover, .img3:hover {
    cursor: pointer;
    opacity: 0.7;
    box-shadow : 3px 3px #7150368a;
}
</style>