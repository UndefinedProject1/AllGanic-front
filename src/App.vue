<template>
  <div class="wrapper">
    <div class="header">
      <div class="left_section">
        <div class="product">
          <p>product</p>
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
    <div class="content">
          <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;800&display=swap');
body{
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Playfair Display', serif;
}
.wrapper{
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 90%;
  grid-template-areas: "header", "content";
  height: 100vh;
  font-family: 'Playfair Display', serif;
}
.header{
  border: 1px solid black;
  height: 100%;
  display: inline-flex;
  font-family: 'Playfair Display', serif;
  color: #F6EBCE;
  background-color: #49654E;
  z-index: 1000;
}
.content{
  border: 1px solid black;
  height: 100%;
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
  border: 1px solid black;
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
.header .right_section div > p {
  border: 1px solid black;
  width: 100%;
  text-align: center;
  height: fit-content;
  font-size: 22px;
  margin-bottom: 0;
}
.header .right_section div p:hover {
  cursor: pointer;
  color: #dfd192;
}
.header .left_section div > p {
  border: 1px solid black;
  width: 100%;
  text-align: center;
  height: fit-content;
  font-size: 22px;
  margin-bottom: 0;
}
.header .left_section div > p:hover {
  cursor: pointer;
  color: #dfd192;
}
.header .logo > p {
  border: 1px solid black;
  width: 100%;
  text-align: center;
  height: fit-content;
  font-size: 40px;
  margin-bottom: 0;
}
</style>
