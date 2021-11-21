<template>
    <div class="main_wrapper">
        <section class="firstSection">
            <div data-aos="zoom-in" data-aos-duration="500" v-bind:style="zoomout">
                <div data-aos="zoom-out" data-aos-duration="1000" v-bind:style="zoomout2" v-if="showSlider">
                    <el-carousel trigger="click" class="slider" height="100%" autoplay="false" interval="5000" style="position:relative;">
                        <el-carousel-item v-for="item in banners" :key="item" class="slider2">
                            <img :src="item.img" id="image">
                            <div style="display:flex; align-items: center; flex-direction: column;">
                                <h3 style="position:absolute; color:white; font-size:90px; top:30%;">{{item.text}}</h3>
                            </div>
                            
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
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
import natureround from '@/assets/natureround.jpg';
import main_slider_img_1 from '@/assets/main_slider_img_1.png';


    export default {
        data(){
            return{
                showSlider : false,
                slider_img1 : slider_img1,
                slider_img2 : slider_img2,
                vegan_cream_img : vegan_cream_img,
                vegan_soap_img2 : vegan_soap_img2,
                vegan_oil_img : vegan_oil_img,
                boxed_water : boxed_water,
                zerowaste_package : zerowaste_package,
                natureround : natureround,
                main_slider_img_1 :main_slider_img_1,

                banners : [
                    { text : "Welcome", img : main_slider_img_1},
                    { text : "All Here,", img : natureround},
                    { text : "All_Ganics", img : zerowaste_package},
                ],

                zoomout : {
                    border: '2px solid white',
                    width : '60%',
                    height: '48%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                zoomout2 : {
                    zIndex : '1',
                    width : '100%',
                    height: '100%',
                    transition: '1.5s',
                },

                timeoutID : '',
                timedelay : ''
            }
        },
        async created(){
            await this.delayedAlert();
            await this.delayedShow();
        },
        methods:{
            delayedAlert() {
                this.timeoutID = window.setTimeout(this.slowAlert, 1500);
            },
            slowAlert() {
                this.showSlider = true;
                this.zoomout2.transition = "0.8s";
            },
            delayedShow(){
                this.timedelay = window.setTimeout(this.showslider, 3000);
            },
            showslider(){
                this.zoomout2.width = "98%";
                this.zoomout2.height = "96%";
                this.zoomout.backgroundColor = "white";
            }

        },

    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Playfair+Display:wght@400;500;700;800&display=swap');
.main_wrapper{
    scroll-snap-type: y mandatory;
    /* overflow-y: scroll; */
    height: 100vh;
    /* margin-top: 4.5%; */
}
section{
    /* border: 1px solid black; */
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
/* .zoomout{
    border: 2px solid white;
    width : 60%;
    height: 48%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.zoomout2{
    width : 100%;
    height: 100%;
    transition: width height 3s;
}
.zoomout2:hover{
    width : 98%;
    height : 97%;
} */
.slider{
    width : 100%;
    height: 100%;
}
.slider #image{
    width : 100%;
    object-fit: scale-down;
}
.firstSection_img{
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

</style>