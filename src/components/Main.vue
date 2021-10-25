<template>
    <div class="main_wrapper">
        <div class="main_container">
            <div class="banner_slider">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
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
                </div>
            </div>
            <div class="right_float">
                <div class="main_banner">
                    <span>With,</span>
                    <span>Earth</span>
                </div>
                <div class="best_product">
                    <p>BEST</p>
                    <div class="best_product_list">
                        <div class="section1">
                            <div class="img1">
                                <!-- <span>shop</span> -->
                            </div>
                            <p>perfume</p>
                        </div>
                        <div class="section2">
                            <div class="img2"></div>
                            <p>bag</p>
                        </div>
                        <div class="section3">
                            <div class="img3"></div>
                            <p>soap</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
import Footer from '@/components/Footer.vue';
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
                face_img : face_img
            }
        },
        components:{
            Footer : Footer
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Playfair+Display:wght@400;500;700;800&display=swap');
.main_wrapper{
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    justify-content: center;
    flex-direction: column;
}
.main_container{
    /* border: 1px solid black; */
    width: 100%;
    height : 100%;
    display: inline-flex;
    margin: 0 auto;
    padding:40px;
}


/* 왼쪽 이미지 슬라이더 */
.banner_slider{
    width: 40%;
    height: 90%;
    margin: 5px;
    margin-top: 20px;
    margin-right: 20px;
}
#carouselExampleInterval {
    width: 100%;
    height: 100%;
}
.carousel-inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
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
    opacity: 0.8;
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
    opacity: 0.87;
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
    opacity: 0.87;
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
    width: 60%;
    height: 100%;
    display: block;
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
    border-radius: 10px;
    opacity:0.75;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    height: 53%;
    display: block;
}
.best_product > p {
    /* border: 1px solid black; */
    color: #49654E;
    font-size: 20px;
    font-weight: bold;
    height: fit-content;
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 10px;
}
.best_product .best_product_list{
    /* border: 1px solid black; */
    display: inline-flex;
    height: 80%;
    width : 100%;
    justify-content: space-evenly;
}
.section1, .section2, .section3{
    /* border: 1px solid black; */
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.img1 {
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/perfume_img.png");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    border-radius: 10px;
    display: flex;
    align-items: center;
}
.img2 {
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/vegan_bag.jpg");
    background-repeat: no-repeat;
    background-position: 50% 10%;
    background-size: cover;
    border-radius: 10px;
}
.img3 {
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/vegan_soap_img2.jpg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    border-radius: 10px;
}
.section1 p, .section2 p, .section3 p {
    font-size: 18px;
    width: fit-content;
    margin: 0 auto;
    margin-top: 5px;
    color: #49654E;
}
.img1 > span {
    margin: 0px auto;
    font-size: 40px;
}
.img1:hover, .img2:hover, .img3:hover {
    cursor: pointer;
    opacity: 0.7;
}
</style>