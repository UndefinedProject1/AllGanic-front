<template>
    <div class="main_wrapper">
        <div class="line-1"></div>
        <section class="intro_screen">
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

        <section class="thirdScreen" @mouseover="showOverlay">
            <div class="thirdTextBox" @mouseover="showOverlay">
            </div>
            <div class="thirdSliderContainer" @mouseover="showOverlay">
                <div class="third_overlay" v-bind:style="overlayStyle">
                    <div class="third_text_overlay">
                        <p>All_"NEW"</p>
                        <p>_ 전에 없던 형태로 더욱 새롭게!</p>
                        <p> #BOXEDWATER #지구를생각한음료</p>
                        <p><a href="/product_table?page=1&code=20020">더 알아보기</a></p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="outro_screen">
            <div class="profile_wrapper">
                <h4>All_Member Here!</h4>
                <div class="gyeong_section">
                    <img :src="dagyeong_profile">
                    <div class="text_section">
                        <table class="profile_table">
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th><span class="th_title">이름</span></th>
                                    <td>
                                        정다경(95, 살아남음)
                                    </td>
                                </tr>
                                <tr>
                                    <th><span class="th_title">임무</span></th>
                                    <td>
                                        프론트
                                    </td>
                                </tr>
                                <tr>
                                    <th><span class="th_title">MBTI</span></th>
                                    <td>
                                        ENFP(재기발랄한 활동가)
                                    </td>
                                </tr>  
                                <tr>
                                    <th><span class="th_title">소감 주저리</span></th>
                                    <td>
                                        죽어있을 줄 알았는데 죽지는 않고 살아있네요.
                                        부족한 저를 배려해준 팀원들에게 감사하고 많이 배울 수 있어서 좋은 기회였습니다.<br>
                                        아직은 많이 느리지만 꾸준히 해서 개발자라는 이름을 꿰차보도록 하겠습니다. 매번 쓴소리 해주신 선생님..감사...해요...전...상처 안받았어요....
                                    </td>
                                </tr>                                              
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="jihi_section">
                    <div class="text_section">
                        <table class="profile_table">
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th><span class="th_title">이름</span></th>
                                    <td>
                                        정지희(01, 젊은 꼰대력으로 세상 제패)
                                    </td>
                                </tr>
                                <tr>
                                    <th><span class="th_title">임무</span></th>
                                    <td>
                                        팀장, (유일무이)백엔드
                                    </td>
                                </tr>
                                <tr>
                                    <th><span class="th_title">MBTI</span></th>
                                    <td>
                                        ENTJ(대담한 통솔자)
                                    </td>  
                                </tr>  
                                <tr>
                                    <th><span class="th_title">소감 주저리</span></th>
                                    <td>
                                        비전공자에 나이도 어려 팀장을 맡게되어 감사하면서도 잘 이끌어갈 수 있을까라는 걱정이 많았습니다.<br>
                                        다행히 걱정에서 그쳤고 너무나 뛰어난 분들과 함께 프로젝트를 하게되어 감읍하다는 생각이 드는 시간이었습니다.<br>
                                        팀장을 하면서 설계부터 배포까지 모든 과정을 지시하고 공부하다보니 많은 것을 배울 수 있었고 멋진 개발자에 한걸음 다가간 기분이었습니다.<br>
                                        개발자는 계속 성장해나가고 배워가는 직업이라 알고있습니다. 이번 프로젝트를 통해 개발자라는 직업에 대한 마음을 확고히 다질 수 있었고 앞으로도 열심히 하며 꾸준히 성장할 수 있겠다는 생각이 드는 귀중한 경험이었습니다.<br> 
                                        이끈다고 이끈거지만 많이 부족했을 저를 따라와준 정다경, 권다은 언니에게 감사를 표하며, 저에게 웹개발을 가르쳐주신 홍성석 선생님과 안드로이드를 가르쳐주신 이성희선생님도 너무 감사합니다. 아주 뛰어난 인재를 기르셨어요.
                                        언젠가 선생님을 뛰어넘는 역적 제자가 되도록 하겠습니다. 
                                    </td>
                                </tr>                                              
                            </tbody>
                        </table>
                    </div>
                    <img :src="jihi_profile">
                </div>
                <div class="daeun_section">
                    <img :src="daeun_profile">
                    <div class="text_section">
                        <table class="profile_table">
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th><span class="th_title">이름</span></th>
                                    <td>
                                        권다은(95, 두달 째 깨어있는 중)
                                    </td>
                                </tr>
                                <tr>
                                    <th><span class="th_title">임무</span></th>
                                    <td>
                                        프론트
                                    </td>
                                </tr>
                                <tr>
                                    <th><span class="th_title">MBTI</span></th>
                                    <td>
                                        ENFJ(정의로운 사회운동가)
                                    </td>
                                </tr>  
                                <tr>
                                    <th><span class="th_title">소감 주저리</span></th>
                                    <td>
                                        막막하게만 느껴졌던 하나의 시작이 끝을 맺었네요.
                                        눈만 열심히 굴리며 하나하나 따라치기 바쁘던 제가 그래도 웹사이트는 하나 만들게 됐어요.<br>
                                        도움주신 모든 분들, 감사합니다. 프로젝트를 함께한 멤버들도 너무 고맙고 수고많았어요.<br>
                                        전 이제 자러가볼께요. 미리 메리 크리스마스, 미리 해피뉴이어! ;)
                                    </td>
                                </tr>                                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>


    </div>

</template>

<script>
import daeun_profile from '@/assets/daeun_profile.png';
import dagyeong_profile from '@/assets/dagyeong_profile.png';
import jihi_profile from '@/assets/jihi_profile.png';
import toothpaste from '@/assets/toothpaste.jpg';
import zero_waste_package4 from '@/assets/zero_waste_package4.jpg';
import zero_waste_package5 from '@/assets/zero_waste_package5.jpg';
    export default {
        data(){
            return{
                daeun_profile,
                dagyeong_profile,
                jihi_profile,


                slider : [
                    zero_waste_package4,
                    toothpaste,
                    zero_waste_package5
                ],

                overlayStyle : {
                    height: '100%',
                    width: '0%',
                    zIndex: '1',
                    top: '0',
                    right: '0',
                    backgroundColor: 'rgba(255, 255, 255, 0.74)',
                    overflowX: 'hidden',
                    transition: '0.5s',
                }
            }
        },
        methods:{
            showOverlay(){
                this.overlayStyle.width = "100%";
            },
            goDrink(){
                this.$router.push({path:'/product_table?page=1&code=20020'});
            }
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Exo:wght@300;400;500;600;700;800&family=Roboto:wght@300;500&display=swap');
*{
    margin: 0;
    padding: 0;
}

body{
    /* font-family: 'Playfair Display', sans-serif; */
    font-size: 4em;
    color: white;
    /* background-color: rgba(255, 255, 255, 0.74) */
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
    margin-top: 13%;
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
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    text-align: right;
}
.secondTextBox #zero{
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    color: rgb(228, 167, 0);
    width: 100%;
    padding-right: 5%;
    text-align: right;
}
.secondScreen p{
    color: #4a4521;
    font-size: 16px;
    font-family: 'Hahmlet', serif;
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
    background-image: url("/src/assets/boxed_water3.jpg");
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-attachment:local;
    align-items: center;
}
.thirdScreen .thirdTextBox{
    width: 35%;
    height: 100vh;
    justify-content: center;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.thirdSliderContainer{
    width: 65%;
    height: 100%;
    /* border: 1px solid blue; */
    align-items: center;
    display: flex;
    flex-direction: column;
}
.third_text_overlay {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5%;
}
.third_text_overlay p:first-child {
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    color: rgb(228, 167, 0);
    width: 100%;
    font-size: 1em;
    text-align: left;
}
.third_text_overlay p:nth-child(2) {
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    color: black;
    width: 100%;
    font-size: 0.9em;
    text-align: left;
}
.third_text_overlay p:nth-child(3) {
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    color: black;
    width: 100%;
    font-size: 0.7em;
    text-align: left;
}
.third_text_overlay a {
    font-family: 'Black Han Sans', sans-serif;
    border: 2px solid #333;
    font-weight: 100;
    color: black;
    width: fit-content;
    text-decoration: none;
    height: fit-content;
    font-size: 0.5em;
    padding: 10px;
    float: right;
    margin: 2% 15% 0% 0%;
}
.third_text_overlay a:hover {
    cursor: pointer;
    background-color: #333;
    color: rgb(228, 167, 0);
}


/* 마지막 프로필 섹션 */
.outro_screen{
    height: 100vh;
    background-color: #3c5240;
    display: flex;
    justify-content: center;
}
.profile_wrapper h4 {
    /* border: 1px solid red; */
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    padding-top: 1%;
    padding-left: 3%;
}
.profile_wrapper{
    padding-top: 4.5%;
    width: 90%;
    position: relative;
    z-index: 1000;
    height: 100%;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    /* justify-items: center; */
    align-items: center;
}
.profile_wrapper img{
    width: 22%;
    height: 100%;
}
.text_section{
    border: 2px solid whitesmoke;
    border-radius: 1em;
    width: 90%;
    height: 100%;
    padding: 10px;
}
.jihi_section .text_section {
    display: flex;
    justify-content: flex-end;
}
.jihi_section .text_section img{
    width: 20%;
    height: 90%;
}
.profile_table{
    width: 100%;
    height: 100%;
    /* border: 1px solid red; */
    color: white;
    font-size: 15px;
    font-family: 'Hahmlet', serif;
}
.profile_table .th_titles {
    width : 15%;
    height: 30px;
}
.profile_table .td_area {
    /* border: 1px solid black; */
    width : 90%;
    height: 30px;
}
.gyeong_section, .jihi_section, .daeun_section{
    position: absolute;
    /* border: 1px solid whitesmoke; */
    width: 88%;
    height: 25%;
    margin: 5px;
    display: inline-flex;
}
.gyeong_section { 
    left: 0;
    top: 19%;
    height: 22%;
}
.gyeong_section .text_section img{
    width: 23%;
    height: 100%;
}
.jihi_section {
    right: 0;
    top: 42%;
    height: 30%;
}
.daeun_section {
    left: 0;
    bottom: 1%;
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