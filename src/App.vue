<template>
  <div class="wrapper" v-bind:style="wrapper">
    <!-- 상단 헤더 -->
    <div class="header">
      <div class="left_section">
        <div class="product">
          <p @mouseover="openSideNav">product</p>
        </div>
        <div class="brand">
          <p>brand</p>
        </div>
      </div>
      <div class="logo">
        <p>All_ganic</p>
      </div>
      <div class="right_section">
        <div class="search">
          <p>search</p>
        </div>
        <div class="cart">
          <p>cart</p>
        </div>
        <div class="mypage">
          <p>mypage</p>
        </div>
      </div>
    </div>
    <!-- 메인 콘텐츠 -->
    <div class="content" @mouseover="closeSideNav">
          <router-view></router-view>
    </div>
  </div>


  <!-- 사이드 NAV 메뉴 -->
  <div v-bind:style="sideNavStyle" class="sidenav" id="Sidenav" >
    <div class="nav_sections">
      <div class="fashion_section">
        <h3>Fashion</h3>
        <a href="#">의류</a>
        <a href="#">잡화</a>
      </div>
      <div class="lifestyle_section">
        <h3>Life-Style</h3>
        <a href="#">주방</a>
        <a href="#">욕실</a>
        <a href="#">기타</a>
      </div>
      <div class="beauty_section">
        <h3>Beauty</h3>          
        <a href="#">헤어</a>
        <a href="#">스킨</a>
        <a href="#">바디</a>          
      </div>
      <div class="food_section">
        <h3>Food</h3>
        <a href="#">마실거리</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return{
        wrapper:{
          display: 'grid',
          gridTemplateColumns: '100%',
          gridTemplateRows: '10% 90%',
          gridTemplateAreas: '"header", "content"',
          height: '100vh',
          fontFamily: '"Playfair Display", serif'
        },
        sideNavStyle:{
          width : '0',
          height : '100%',
          position : 'fixed',
          zIndex : '10000',
          top : '0',
          left : '0',
          backgroundColor : '#49654E',
          overflowX : 'hidden',
          paddingTop : '25px',
          transition : '0.3s'
        }
      }
    },
    methods : {
      openSideNav(){
        this.sideNavStyle.width="20%";
        this.wrapper.opacity="0.4";
        
        // this.wrappers
      },
      closeSideNav(){
        this.sideNavStyle.width="0";
        this.wrapper.opacity="1";
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
body{
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Playfair Display', serif;
}
/* .wrapper{
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 90%;
  grid-template-areas: "header", "content";
  height: 100vh;
  font-family: 'Playfair Display', serif;
} */
.header{
  /* border: 1px solid black; */
  height: 100%;
  display: inline-flex;
  font-family: 'Playfair Display', serif;
  color: #49654E;
  background-color: #eeeeee;
  z-index: 1;
  /* position: absolute;
  top: 0;
  width: 100%; */
}
.content{
  /* border: 1px solid black; */
  height: 100%;
  background-color: #eeeeee;
}


.header .left_section, .right_section{
  display: inline-flex;
  width: 42%;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 0;
}
.header .right_section div p:hover, 
.header .left_section div p:hover {
  cursor: pointer;
  color: #dfd192;
}

.header .logo > p {
  /* border: 1px solid black; */
  width: 100%;
  text-align: center;
  height: fit-content;
  font-size: 30px;
  margin-bottom: 0;
  font-weight: bold;
}
.nav_sections {
  display: flex;
  flex-direction: column;
  padding: 30px 30px 30px 45px;
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
} 
.nav_sections a{
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
  color : white;
  opacity: 0.9;
}
</style>
