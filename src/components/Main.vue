<template>
    <div class="main_wrapper">
        <div class="intro_screen">
            <div data-aos="fade-right"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine" class="section1">
                <h1>Welcome,</h1>
                <h2>All Here!</h2>
            </div>
            <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-sine" class="section2"><h2>All_Ganics.</h2></div>
        </div>

        <div class="secondScreen">
            <div class="secondImgBox">
                <!-- <div class="img1"></div> -->
                <div class="img2"></div>
            </div>
            <div class="secondTextBox">
                <div class="SecondTextContainer">
                    <h3>처음부터 끝까지</h3>
                    <h3 id="zero">ALL_"ZERO"</h3>
                    <p>
                        계속되는 이상 기후와 자연재해가 여실히 다가오는 요즘,<br>
                        매년 지구가 보내는 목소리에 귀를 기울이는 이들이 많아지고 있습니다.<br>
                        그리고 지금 이곳, 누구보다 한층 더 의미있는 소비를 만들어가는 여러분과 함께 걷고자<br>
                        저희 All_Ganics 는 공정부터 판매까지 모두 환경을 생각하는 브랜드만 고집합니다.
                    </p>
                </div>

            </div>
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
import zerowaste_package2 from '@/assets/zerowaste_package2.jpg';
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
                zerowaste_package2 : zerowaste_package2,
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
    /* height: 100%; */
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
    display: flex;
    overflow-x: hidden;
    flex-direction: row;
    height: 100vh;
    width: 100%;
    align-items: center;
    position: relative;
}
.section1{
    margin-left: 10%;
    display: flex;
    margin-top: 4.5%;
    height: fit-content;
    flex-direction: column;
}
.section2{
    height: fit-content;
    margin-top: 15%;
    position: absolute;
    right: 29%;
    color: rgb(228, 167, 0);
}

/* 두번째 섹션 */
.secondScreen{
    position: relative;
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.secondScreen .secondImgBox {
    width: 40%;
    height: 100%;
    padding-top: 4.5%;
    /* border: 1px solid white; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.img1{
    position: relative;
    width: 80%;
    height: 80%;
    background-image: url("/src/assets/zerowaste_package.jpg");
    background-size: cover;
}
.img2{
    width: 90%;
    height: 90%;
    background-image: url("/src/assets/zerowaste_package2.jpg");
    background-size: cover;
    background-position: 50%;
    border-radius: 5px;
    /* position: absolute;
    top: 40%;
    left: 33%; */
}
.secondScreen .secondTextBox{
    width: 40%;
    height: 100%;
    padding: 10px;
    /* border: 1px solid white; */
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 4.5%;
}
.SecondTextContainer{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;

}
.secondScreen .secondTextBox .SecondTextContainer h3:first-child{
    color: whitesmoke;
    font-family: 'Gowun Batang', sans-serif;
    font-weight: bold;
}
.secondTextBox .SecondTextContainer #zero{
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    width: 100%;
    text-align: right;
}
.secondScreen .secondTextBox p{
    color: whitesmoke;
    font-size: 16px;
    font-family: 'Gowun Batang', sans-serif;
}
.outro_screen{
    height: 100vh;
    background-color: #333;
    z-index: 0;
}


</style>