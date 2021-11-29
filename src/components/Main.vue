<template>
    <div class="main_wrapper">
        <div class="line-1"></div>
        <section data-aos="fade-right" class="intro_screen">
            <div class="section1">
                <h1>Welcome,</h1>
                <h2>All Here!</h2>
            </div>
            <div class="section2">
                <h2>All_Ganics.</h2>
                <div class="line-2"></div>
            </div>
        </section>

        <section class="secondScreen">
            <div class="secondTextBox">
                <h4>처음부터 끝까지</h4>
                <h4 id="zero">ALL_"ZERO"</h4>
                <p >
                    계속되는 이상 기후와 자연재해가 피부로 느껴지는 요즘,<br>
                    매년 지구가 보내는 목소리에 귀를 기울이는 이들이 많아지고 있습니다.<br>
                    그리고 지금 이곳, All_Ganics 는 <br> 누구보다 한층 더 의미있는 소비를 만들어가는 여러분과 함께 걷고자<br>
                    공정부터 판매까지 모두 환경을 생각하는 브랜드만 고집합니다.
                </p>
            </div>
            <div class="SecondSliderContainer">
                <el-carousel :interval="5000" height="100%" arrow="never" class="slider">
                    <el-carousel-item v-for="item in slider" :key="item">
                        <el-image style="width: 100%; height: 100%;" :src="item" :fit="contain"></el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </section>

        <section class="thirdScreen">
            <div class="thirdTextBox">
                <el-image style="width: 100%; height: 100%;" :src="boxed_water" :fit="contain"></el-image>
            </div>
            <div class="thirdSliderContainer">
                <!-- <el-image style="width: 100%; height: 100%;" :src="marching" :fit="contain"></el-image> -->
            </div>

        </section>
        



        <section class="outro_screen">
            Outro Page
        </section>

    </div>

</template>

<script>
import toothpaste from '@/assets/toothpaste.jpg';
import vegan_cream_img from '@/assets/vegan_cream_img.jpg';
import straw from '@/assets/straw.jpg';
import vegan_oil_img from '@/assets/vegan_oil_img.jpg';
import marching from '@/assets/marching.jpg';
import boxed_water2 from '@/assets/boxed_water2.jpg';
import boxed_water from '@/assets/boxed_water.jpg';
import zero_waste_package4 from '@/assets/zero_waste_package4.jpg';
import zero_waste_package5 from '@/assets/zero_waste_package5.jpg';
import natureround from '@/assets/natureround.jpg';
import main_slider_img_1 from '@/assets/main_slider_img_1.png';
import eco1 from '@/assets/eco1.jpg';
import eco5 from '@/assets/eco5.jpg';



    export default {
        data(){
            return{
                vegan_cream_img : vegan_cream_img,
                vegan_oil_img : vegan_oil_img,
                straw : straw,
                marching : marching,
                boxed_water2 : boxed_water2,
                boxed_water : boxed_water,
                natureround : natureround,
                main_slider_img_1 :main_slider_img_1,
                zero_waste_package4 :zero_waste_package4,

                eco1 : eco1,
                eco5 : eco5,

                slider : [
                    zero_waste_package4,
                    toothpaste,
                    zero_waste_package5
                ],
            }
        },
        methods:{
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Exo:wght@300;400;500;600;700;800&family=Roboto:wght@300;500&display=swap');
*{
    margin: 0;
    padding: 0;
}

body{
    /* font-family: 'Playfair Display', sans-serif; */
    font-size: 4em;
    color: white;
}

.main_wrapper{
    scroll-behavior: smooth;
    /* height: 100vh;
    width : 100%; */
    /* overflow-x: hidden; */
    perspective: 300px;
    font-family: 'Playfair Display', sans-serif;
    font-size: 4em;
    color: white;
    background-color:#A3927A;
}
.intro_screen, .secondScreen, .thirdScreen, .outro_screen {
    /* border: 2px solid white; */
    height: 100vh;
    width : 100%;
    scroll-snap-align: center;
}
.intro_screen{
    /* border-bottom: 2px solid white; */
    background-attachment:fixed;
    display: flex;
    /* overflow-x: hidden; */
    flex-direction: row;
    height: 100vh;
    width: 100%;
    background-image: url("/src/assets/vegan_cream_img.jpg");
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-attachment:local;
    align-items: center;
    position: relative;
}
.section1{
    width: 50%;
    /* border: 1px solid white; */
    margin-left: 10%;
    display: flex;
    margin-top: 4.5%;
    height: fit-content;
    flex-direction: column;
}
.line-1{
    transform: rotate(90deg);
    position: absolute;
    width: 109.8%;
    height: 40%;
    z-index: 1;
    margin: 0;
    top: 26.7%;
}

.line-1::after{
    /* border: 1px solid red; */
    content: '';
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 22.5%;
    height: 2%;
    border-radius: 15%;
    background-color: white;
    width: 100%;
    transform-origin: left;
    animation: animateV 13s forwards alternate;
}
@keyframes animateV {
    0%{
        transform: translateX(0) scaleX(0);
        transform-origin: left;
        left: auto;
        right: 1%;
    }
    45%{
        transform: translateX(0) scaleX(1);
        transform-origin: left;
        left: auto;
        right: 1%;
    }
    50%{
        transform: translateX(0) scaleX(1);
        transform-origin: right;
        left: auto;
        right: 1%;
    }
    100%{
        transform: translateX(0) scaleX(1);
        transform-origin: right;
        left: auto;
        right: 1%;
    }
}
.section2{
    /* border: 1px solid white; */
    height: fit-content;
    margin-top: 15%;
    position: absolute;
    display: flex;
    align-items: baseline;
    width: 60%;
    right: 3%;
    color: rgb(228, 167, 0);
}
.line-2:after{
    content : '';
    position: absolute;
    display: block;
    z-index: 2;
    right: 1%;
    bottom: 18%;
    height: 15px;
    border-radius: 15%;
    background-color: rgb(228, 167, 0);
    width: 44%;
    transform-origin: left;
    transform: scaleX(0);
    animation: animate 6s forwards alternate;
}
@keyframes animate {
    0%{
        transform: translateX(0) scaleX(0);
        transform-origin: left;
        left: auto;
        right: 1%;
    }
    45%{
        transform: translateX(0) scaleX(1);
        transform-origin: left;
        left: auto;
        right: 1%;
    }
    50%{
        transform: translateX(0) scaleX(1);
        transform-origin: right;
        left: auto;
        right: 1%;
    }
    100%{
        transform: translateX(0) scaleX(1);
        transform-origin: right;
        left: auto;
        right: 1%;
    }
}

/* 두번째 섹션 */
.secondScreen{
    position: relative;
    display: inline-flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
}
.secondTextBox {
    width: 35%;
    height: 100vh;
    padding: 1rem;
    justify-content: center;
    /* border: 2px solid white; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.514);
}
.secondTextBox h4:first-child{
    color: #4a4521;
    font-family: 'Gowun Batang', sans-serif;
    font-weight: bold;
    text-align: right;
}
.secondTextBox #zero{
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    color: #f2f2ea;
    width: 100%;
    padding-right: 5%;
    text-align: right;
}
.secondScreen p{
    color: #4a4521;
    font-size: 16px;
    font-family: 'Gowun Batang', sans-serif;
    margin-top: 10px;
}
.SecondSliderContainer{
    width: 65%;
    height: 100%;
    /* border: 1px solid white; */
    align-items: center;
    display: flex;
    flex-direction: column;
}
.slider{
    width: 100%;
    height: 100%;
}

/* 세번째 섹션 */
.thirdScreen{
    position: relative;
    display: inline-flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
    /* background-image: url("/src/assets/marching.jpg");
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-attachment:local;
    align-items: center; */
}
.thirdScreen .thirdTextBox{
    width: 35%;
    height: 100vh;
    justify-content: center;
    /* border: 2px solid white; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.thirdSliderContainer{
    width: 65%;
    height: 100%;
    /* border: 1px solid white; */
    align-items: center;
    display: flex;
    flex-direction: column;
}
.outro_screen{
    height: 100vh;
    background-color: #333;
    z-index: 0;
}

.before-enter{
    opacity: 0;
    transform: translateX(100px);
    transition: all 2s ease-out;
}
.enter{
    opacity: 1;
    transform: translateX(0px);
}
</style>