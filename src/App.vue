<template>
  <div class="wrapper" v-bind:style="wrapper">
    <!-- 상단 헤더 -->
    <div class="header">
      <div class="left_section">
        <div class="product">
          <p @mouseover="openSideNav">product</p>
        </div>
        <div class="brand">
          <p @mouseover="openSideNav_b">brand</p>
        </div>
      </div>
      <div class="logo">
        <p><a href="/">All_ganic</a></p>
      </div>
      <!-- Search -->
      <div class="right_section">
        <div class="search">
          <p style="cursor:pointer" @click="openNav()">search</p>
        </div>
        <!-- <div id="myNav" class="overlay">
          <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
          <div class="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div> -->
        <div class="cart">
          <p @click="goCart">cart</p>
        </div>
        <div class="mypage">
          <el-dropdown style="font-family:'Playfair Display'; align-center:center; margin:23px 0px 0px 40px; width:80px;">
            <p class="el-dropdown-link" @click="hadleApp_join" style="font-size:22px; color: #3c5240;">sign up<el-icon class="el-icon--right"><arrow-down /></el-icon></p>
            <template #dropdown>
              <el-dropdown-menu style="font-family:'Playfair Display'; background-color=transparent;">
                <el-dropdown-item @click="hadleApp_login" v-if="!logged">log in</el-dropdown-item>
                <el-dropdown-item @click="hadleApp_mypage" v-if="logged">my page</el-dropdown-item>
                <el-dropdown-item @click="hadleApp_logout" v-if="logged">log out</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <!-- 메인 콘텐츠 -->
    <div class="content" @mouseover="closeSideNav">
      <router-view @changeLogged="changeLogged"></router-view>
    </div>
  </div>

  <!-- 사이드 NAV 메뉴 / product -->
  <div v-bind:style="sideNavStyle" class="sidenav" id="Sidenav" >
    <div class="nav_sections">
      <div class="fashion_section">
        <h3>Fashion</h3>
        <router-link :to="{ name: 'product_table', params: {page : '1', code: '10010' }, query: {page : '1', code : '10010'} } ">의류</router-link>
        <router-link :to="{ name: 'product_table', params: {page : '1', code: '10011' }, query: {page : '1', code : '10011'} }">잡화</router-link>
      </div>
      <div class="lifestyle_section">
        <h3>Life-Style</h3>
        <router-link :to="{ name: 'product_table', params: {page : '1', code: '30030' }, query: {page : '1', code : '30030'} } ">주방</router-link>
        <router-link :to="{ name: 'product_table', params: {page : '1', code: '30031' }, query: {page : '1', code : '30031'} }">욕실</router-link>
        <router-link :to="{ name: 'product_table', params: {page : '1', code: '30032' }, query: {page : '1', code : '30032'} }">기타</router-link>
      </div>
      <div class="beauty_section">
        <h3>Beauty</h3>
        <router-link :to="{ name: 'product_table', params: {page : '1', code: '40040' }, query: {page : '1', code : '40040'} } ">헤어</router-link>
        <router-link :to="{ name: 'product_table', params: {page : '1', code: '40041' }, query: {page : '1', code : '40041'} }">스킨</router-link>
        <router-link :to="{ name: 'product_table', params: {page : '1', code: '40042' }, query: {page : '1', code : '40042'} }">바디</router-link>                
      </div>
      <div class="food_section">
        <h3>Food</h3>
        <router-link :to="{ name: 'product_table', params: {page : '1', code: '20020' }, query: {page : '1', code : '20020'}}">마실거리</router-link> 
      </div>
    </div>
  </div>

  <!-- 사이드 NAV 메뉴 / brand -->
    <div v-bind:style="sideNavStyle_b" class="sidenav" id="Sidenav" >
    <div class="nav_sections">
      <div class="nav_section">
        <p>( * )</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '1' }, query: {code : '1'} } ">119REO</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '2' }, query: {code : '2'} } ">LAR</router-link>
        </div>
      </div>
      <div class="nav_section">
        <p>(ㄴ)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '3' }, query: {code : '3'} } ">누깍</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '4' }, query: {code : '4'} } ">니드포유</router-link>
        </div>
      </div>
      <div class="nav_section">
        <p>(ㄷ)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '5' }, query: {code : '5'} } ">당신의 식탁</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '6' }, query: {code : '6'} } ">더비건글로우</router-link>
        </div>
      </div>
      <div class="nav_section">
        <p>(ㄹ)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '7' }, query: {code : '7'} } ">로우레스</router-link>
        </div>
      </div>
      <div class="nav_section">
        <p>(ㅁ)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '8' }, query: {code : '8'} } ">마이너피겨스</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '9' }, query: {code : '9'} } ">멜릭서</router-link>
        </div>        
      </div>
      <div class="nav_section">
        <p>(ㅂ)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '10' }, query: {code : '10'} } ">보시아</router-link>
        </div>       
      </div>
      <div class="nav_section">
        <p>(ㅅ)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '11' }, query: {code : '11'} } ">스프라우드</router-link>
        </div>        
      </div>
      <div class="nav_section">
        <p>(o)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '12' }, query: {code : '12'} } ">야다</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '13' }, query: {code : '13'} } ">어스후드</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '14' }, query: {code : '14'} } ">얼로젯</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '15' }, query: {code : '15'} } ">에리제론</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '16' }, query: {code : '16'} } ">오틀리</router-link>
        </div>  
      </div>
      <div class="nav_section">
        <p>(ㅋ)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '17' }, query: {code : '17'} } ">카네이테이</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '18' }, query: {code : '18'} } ">코드그린</router-link>
        </div> 
      </div>
      <div class="nav_section">
        <p>(ㅌ)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '19' }, query: {code : '19'} } ">톤28</router-link>
          <a href="#"></a>
        </div> 
      </div>
      <div class="nav_section">
        <p>(ㅍ)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '21' }, query: {code : '21'} } ">프로쉬</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '20' }, query: {code : '20'} } ">프로젝트1907</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '22' }, query: {code : '22'} } ">플리츠마마</router-link>
        </div> 
      </div>
      <div class="nav_section">
        <p>(ㅎ)</p>
        <div class="snav_section">
          <router-link :to="{ name: 'brand_product_table', params: { code: '23' }, query: {code : '23'} } ">하이사이클</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '24' }, query: {code : '24'} } ">허블룸</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '25' }, query: {code : '25'} } ">허스키</router-link>
          <em> / </em>
          <router-link :to="{ name: 'brand_product_table', params: { code: '26' }, query: {code : '26'} } ">히녹</router-link>
        </div> 
      </div>
      
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
import { ElMessage } from 'element-plus'

  export default {
    setup() {
        const successAlertMSG = () => {
          ElMessage.success('로그아웃 되었습니다.')
        }
        return{
          successAlertMSG,
        }
    },
    data() {
      return{
        logged : false,
        routes : this.$route.path,
        token : sessionStorage.getItem("token"),
        wrapper:{
          display: 'flex',
          flexDirection : 'column',
          // gridTemplateColumns: '100%',
          // gridTemplateRows: '10% 90%',
          gridTemplateAreas: '"header", "content"',
          height: '100vh',
          fontFamily: '"Playfair Display", serif',
          // backgroundColor : '#49654E'
        },
        sideNavStyle:{
          width : '0%',
          height : '100%',
          position : 'fixed',
          zIndex : '10000',
          top : '0',
          left : '0',
          backgroundColor : '#49654E',
          overflowX : 'hidden',
          transition : '0.3s'
        },
        sideNavStyle_b:{
          width : '0%',
          height : '100%',
          position : 'fixed',
          zIndex : '10000',
          top : '0',
          left : '0',
          paddingTop : '10px',
          backgroundColor : '#49654E',
          overflowX : 'hidden',
          transition : '0.3s'
        },
        
      }
    },
    async created(){
      this.logged = false;
      const url = `REST/api/validtoken`;
      const headers = {"token" : this.token };
      const response = await axios.get(url, {headers});
      console.log(response);
      if(response.data === 1){
        this.logged = true;
      }
      else if(response.data !== 1){
        this.logged = false;
      }
    },
    
    methods : {
      openSideNav(){
        this.sideNavStyle.width="20%";
        this.wrapper.opacity="0.4";
      },
      openSideNav_b(){
        this.sideNavStyle_b.width="32%";
        this.wrapper.opacity="0.4";
      },
      closeSideNav(){
        this.sideNavStyle.width="0";
        this.sideNavStyle_b.width="0%";
        this.wrapper.opacity="1";
      },
      goCart(){
        this.$router.push({ path: "/product_cart" });
      },
      changeLogged(logged){
        this.logged = logged;
      },
      async handleLogout() {
        this.$emit('handleLogout');
      },
      async hadleApp_join() {
        this.$router.push({ path : '/join'});
      },
      async hadleApp_login() {
        this.$router.push({ path : '/login'});
      },
      async hadleApp_mypage() {
        this.$router.push({ path : '/mypage_info'});
      },
      async hadleApp_logout() {
        this.successAlertMSG();
        sessionStorage.clear();
        this.logged = false;
        this.$router.push({path:'/'});
      },
      async openNav() {
        document.getElementById("myNav").style.height = "100%";
      },

      async closeNav() {
        document.getElementById("myNav").style.height = "0%";
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.header{
  /* border: 4px solid red; */
  height: 10%;
  display: inline-flex;
  font-family: 'Playfair Display', serif;
  color: #3c5240;
  position: fixed;
  z-index: 1;
  right : 0;
  top: 0;
  width: 100%;
}
.content{
  /* border: 3px solid blue; */
  width: 100%;
  background-color: white;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  /* height: 100vh; */
}
.header .left_section, .right_section{
  display: inline-flex;
  width: 42%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.header .logo{
  display: inline-flex;
  width: 25%;
  align-content: center;
  flex-direction: column;
  justify-content: center;
}
.header div{
  /* border: 1px solid black; */
}
.header .left_section div {
  width: 47%;
  margin: 5px;
}
.header .right_section div {
  width: 32%;
  margin: 5px;
}
.header .right_section div:last-child {
  width: 32%;
  margin-right: 35px;
}
.header .right_section div > p, 
.header .left_section div > p {
  /* border: 1px solid black; */
  width: 100%;
  text-align: center;
  height: fit-content;
  font-size: 22px;
}
.header .right_section div p:hover, 
.header .left_section div p:hover,
.mypage a:hover,
.logo a:hover{
  cursor: pointer;
  color: #dfd192;
}

.header .logo > p {
  /* border: 1px solid black; */
  width: 100%;
  text-align: center;
  height: fit-content;
  font-size: 30px;
  font-weight: bold;
}
.mypage {
  font-family: 'Playfair Display', serif;
  /* opacity: 0.5; */
  background-color: transparent;
}
.mypage a, .logo a{
  text-decoration: none;
  color: #3c5240;
}
.nav_sections {
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px 45px;
}
.fashion_section, .lifestyle_section, .beauty_section, .food_section{
  display: flex;
  flex-direction: column;
  margin : 10px;
}
.nav_sections h3{
  font-family: 'Playfair Display', serif;
  font-size : 25px;
  font-weight : bold;
  color: #F6EBCE;
  margin: 10px 0px;
} 
.nav_sections  a{
  width : 100%;
  padding : 8px 8px 8px 10px;
  text-decoration: none;
  font-size: 18px;
  color: #F6EBCE;
  /* display : block; */
  transition: 0.3s;
  font-family: 'Gowun Dodum', sans-serif;
}
.nav_sections a:hover {
  color : #49654E;
  background-color: #eeeeee;
  border-radius: 8px;
  opacity: 0.9;
}
.nav_section{
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 10px 0px 3px 10px;
}
.nav_section p {
  width: fit-content;
  font-size: 14px;
  color: #F6EBCE;
  height: fit-content;
  font-family: 'Gowun Batang', sans-serif;
  margin: 10px;
}
.snav_section {
  display: flex;
  flex-direction: row;
}
.snav_section a{
  width : fit-content;
  padding: 0;
  margin: 0px 0px 0px 0px;
  text-decoration: none;
  font-size: 15px;
  color: #F6EBCE;
  transition: 0.3s;
  font-family: 'Gowun Batang', sans-serif;
}
.snav_section a:hover{
  color : #49654E;
  background-color: #eeeeee;
  border-radius: 5px;
  opacity: 0.9;
}
.snav_section em{
  width : fit-content;
  padding: 0;
  margin: 0px 8px;
  text-decoration: none;
  font-size: 15px;
  color: #F6EBCE;
  transition: 0.3s;
  font-family: 'Gowun Batang', sans-serif;
}

/* test */
.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-y: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay {overflow-y: auto;}
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}
</style>
