<template>
    <ul class="navigation" ref="navigation">
        <li class="selected"></li>
        <li></li>
        <li></li>
        <!-- <li></li> -->
    </ul>
    <div class="main_wrapper">
        <section class="firstSection" ref="sections">
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
        <section>

        </section>
        <section>
            
        </section>
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
                scrollTop : 0,
                windowHeight : window.innerHeight,
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
                    height: '50%',
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
            window.addEventListener('scroll', this.NavScroll);
        },
        async mounted(){

            


            // this.$refs.navigation.querySelectorAll('li').forEach(function(item, i){
            //     item.addEventListener('click', function(){
            //         this.resetSelection;
            //         window.scrollTo({
            //             top : i * this.windowHeight,
            //             behavior : 'smooth'
            //         });
            //     });
            // });
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
                this.zoomout2.width = "99%";
                this.zoomout2.height = "97%";
                this.zoomout.backgroundColor = "white";
            },
            resetSelection(){
                for(var i=0; i<this.$refs.navigation.children.length; i++){
                    this.$refs.navigation.children[i].classList.remove('selected');
                }
            },
            NavScroll(){
                this.$refs.sections.forEach(function(section, i){
                    console.log(i);
                    this.scrollTop = window.scrollY;
                    if(section.offsetTop < scrollTo + this.windowHeight/2 && this.scrollTop < section.offsetTop + this.windowHeight/2) {
                        this.resetSelection();
                        this.$refs.navigation.children[i].classList.add('selected');
                    }
                });
            },
            // NavClick(){
            //     this.navigation.querySelectorAll('li').forEach(function(item, i){
            //         item.addEventListener
            //         this.resetSelection();
            //         window.scrollTo({
            //             top : i * windowHeight,
            //             behavior : 'smooth'
            //         })
            //     })
            // }
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Playfair+Display:wght@400;500;700;800&display=swap');
.navigation{
    margin: 0;
    padding: 0;
    position: fixed;
    right: 2.5%;
    list-style :none;
    top: 40%;
    z-index :10;
}
.navigation li{
    width: 15px;
    height: 15px;
    background: #eeeeee;
    /* border: 1px solid #333; */
    border-radius: 50%;
    margin-top: 20px;
    transition: all 0.3s;
}
.navigation li:hover, .navigation li.selected{
    transform: scale(1.5);
    cursor: pointer;
}
.main_wrapper{
    /* scroll-snap-type: y mandatory;
    overflow-y: scroll; */
    scroll-behavior: smooth;
    height: 100%;
}
section{
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
}
section:first-child{
    opacity: 0.88;
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/vegan_cream_img.jpg");
    background-size: cover;
    align-items: center;
    background-position-y: 30%;
    justify-content: center;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
}
section:nth-child(2){
    background-color: #eee;
}
section:last-child{
    background-color: #333;
}
.slider{
    width : 100%;
    height: 100%;
}
.slider #image{
    width : 100%;
    object-fit: scale-down;
}
.secondBox {
    border: 2px solid black;
    width : 50%;
    height : 700px;
}
.secondBox p {
    font-weight: bold;
    font-size: 40px;
    color: black;
}

</style>