<template>
  <div class="join_wrapper">
    <div class="join_container">
      <div class="join_title">
        <p>회원가입</p>
        <div class="float-end">
          <span>*</span>
          <p>표시는 필수 입력사항입니다.</p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="join_form">
        <div class="join_info">
          <div class="join_email">
            <div class="email_info">
              <div class="email_ad">
                <img :src="login_email" />
                <input type="text" placeholder="이메일"  v-model="userid"  refs="email" />
              </div>
              <p>@</p>
              <div class="email_domain_selector">
                <div class="form-selector">
                  <input type="text" class="selected" @change="changeDomain" ref="selected_domain" v-model="selected"/>
                  <img :src="select_arrow_down" id="selectorIcon" @click="openOptions" />
                </div>
                <div class="select_options" v-bind:style="selectorStyle" @mouseup="closeOptions">
                  <input type="radio" id="1" v-model="selected" value="" />
                  <label for="1">직접입력</label>
                  <input type="radio" id="2" v-model="selected" value="naver.com" />
                  <label for="2">naver.com</label>
                  <input type="radio" id="3" v-model="selected" value="hanmail.net"/>
                  <label for="3">hanmail.net</label>
                  <input type="radio" id="4" v-model="selected" value="daum.net" />
                  <label for="4">daum.net</label>
                  <input type="radio" id="5" v-model="selected" value="gmail.com"/>
                  <label for="5">gmail.com</label>
                  <input type="radio" id="6" v-model="selected" value="nate.com"/>
                  <label for="6">nate.com</label>
                  <input type="radio" id="7" v-model="selected" value="yahoo.co.kr"/>
                  <label for="7">yahoo.co.kr</label>
                </div>
              </div>
              <span>*</span>
            </div>
            <div class="chk_email" v-bind:style="checkStyle">
              {{ chkemail }}
            </div>
          </div>

          <div class="join_password">
            <div class="password_info">
              <img :src="login_password" />
              <input type="password" placeholder="비밀번호" v-model="userpw" ref="pw"/>
              <span>*</span>
            </div>
            <div class="chk_password" v-bind:style="checkStyle">
              {{ chkpw }}
            </div>
          </div>

          <div class="join_name">
            <div class="name_info">
              <img :src="join_profile" />
              <input type="text" placeholder="이름" v-model="username" ref="name"/>
              <span>*</span>
            </div>
            <div class="chk_password" v-bind:style="checkStyle">
              {{ chkname }}
            </div>
          </div>

          <div class="join_tel">
            <div class="password_info">
              <img :src="join_call" />
              <input type="text" placeholder="연락처" v-model="usertel" ref="tel"/>
              <span>*</span>
            </div>
            <div class="chk_password" v-bind:style="checkStyle">
              {{ chktel }}
            </div>
          </div>

          <div class="join_address">
            <div class="address_info1">
              <div class="address_postcode">
                <img :src="join_location" />
                <input type="text" v-model="postcode" readonly value />
              </div>
              <p>/</p>
              <div class="address_main">
                <input type="text" v-model="roadAddress" readonly value />
              </div>
            </div>
            <div class="address_info2">
              <input type="text" v-model="detailAddress" />
              <button type="button" id="postcode_btn" @click="openDaumPostCode">
                우편번호검색
              </button>
            </div>
          </div>
          <div id="wrap" style="display:none;border:1px solid;width:500px;height:300px;margin:5px 0;position:relative">
              <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1" @click="foldDaumPostcode" alt="접기 버튼">
          </div>
        </div>
        <button type="button" id="join_btn" @click="handleJoin">JOIN</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import login_email from "@/assets/login_email.png";
import login_password from "@/assets/login_password.png";
import join_profile from "@/assets/join_profile.png";
import join_call from "@/assets/join_call.png";
import join_location from "@/assets/join_location.png";
import select_arrow_down from "@/assets/select_arrow_down.png";
export default {
  data() {
    return {
      login_email: login_email,
      login_password: login_password,
      join_profile: join_profile,
      join_call: join_call,
      join_location: join_location,
      select_arrow_down: select_arrow_down,

      selected: "",
      userid: "",
      userpw: "",
      username: "",
      usertel: "",
      userrole: "MEMBER",
      postcode: "",
      roadAddress: "",
      detailAddress: "",

      chkemail: "",
      chkpw: "",
      chkname: "",
      chktel: "",

      pw: "",

      checkStyle: {
        width: "fit-content",
        height: "20px",
        fontFamily: '"Gowun Dodum", serif',
        fontSize: "13px",
        marginTop: "10px",
        marginRight: "15px",
        color: "black",
      },

      selectorStyle: {
        width: "85%",
        height: "0",
        display: "block",
        opacity: "1",
        position: "relative",
        flexFlow: "column",
        overflowY: "hidden",
        overflowX: "hidden",
        transition: "0.3s",
        background: "white",
        borderRadius: "3px",
        marginLeft: "10px",
        padding: "5px",
      },
    };
  },
  mounted() {
    let daumPostCode = document.createElement("script");
    daumPostCode.setAttribute(
      "src",
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
    );
    document.head.appendChild(daumPostCode);
  },
  watch: {
    async selected(val) {
      const header = { "Content-Type": "application/json" };
      const url = `REST/api/member/checkemail`;
      const body = { useremail: this.userid + "@" + this.selected };
      const response = await axios.post(url, body, header);
      if (val.length >= 1) {
        if (response.data.result === 1) {
          this.chkemail = "이미 사용중인 이메일입니다.";
          this.checkStyle.color = "Red";
        } else {
          this.chkemail = "사용 가능한 아이디입니다.";
          this.checkStyle.color = "Green";
          this.chkemail = "";
        }
      }
    },
    userpw(val) {
      if (val.length > 0) {
        this.chkpw = "사용가능한 암호입니다.";
        this.checkStyle.color = "Green";
        this.chkpw = "";
      }
    },
    username(val) {
      if (val.length > 0) {
        this.chkname = "";
      }
    },
    usertel(val) {
      if (val.length > 0) {
        this.chktel = "";
      }
    },
  },
  // components: {
  //   Footer: Footer,
  // },
  methods: {
    changeDomain() {
      console.log(this.selected);
    },
    openOptions() {
      this.selectorStyle.height = "fit-content";
      this.selectorStyle.border = "1px solid black";
    },
    closeOptions() {
      this.selectorStyle.height = "0px";
      this.selectorStyle.border = "none";
      this.selectorStyle.backgroundColor = "white";
    },
    openDaumPostCode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          let addr = data.query; // 주소 변수
          let postcode = data.zonecode;
          let extraRoadAddr = "";

          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraRoadAddr +=
              extraRoadAddr !== ""
                ? ", " + data.buildingName
                : data.buildingName;
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if (extraRoadAddr !== "") {
            extraRoadAddr = " (" + extraRoadAddr + ")";
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          // document.getElementById('address').value = addr
          this.postcode = postcode;
          this.roadAddress = addr;

          // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
          if (addr !== "") {
            this.detailAddress = extraRoadAddr;
          } else {
            this.detailAddress = "";
          }
        },
        theme: {
          searchBgColor: "#1B1B1C",
          queryTextColor: "#FFFFFF",
        },
      }).open();
    },
    async handleJoin() {
      if (this.userid.length === 0) {
        this.$refs.email.focus();
        this.chkemail = "이메일은 입력 필수 항목입니다.";
        this.checkStyle.color = "Red";
      } else if (this.userpw.length === 0) {
        this.$refs.pw.focus();
        this.chkpw = "암호는 입력 필수 항목입니다.";
        this.checkStyle.color = "Red";
      } else if (this.username.length === 0) {
        this.$refs.name.focus();
        this.chkname = "이름은 입력 필수 항목입니다.";
        this.checkStyle.color = "Red";
      } else if (this.usertel.length === 0) {
        this.$refs.tel.focus();
        this.chktel = "연락처는 입력 필수 항목입니다.";
        this.checkStyle.color = "Red";
      } else {
        const header = { "Content-Type": "application/json" };
        const body = {
          useremail: this.userid + "@" + this.selected,
          userpw: this.userpw,
          username: this.username,
          userrole: this.userrole,
          usertel: this.usertel,
          post: this.postcode,
          address: this.roadAddress,
          detaileaddress: this.detailAddress,
        };
        console.log(body);
        const url = `REST/api/member/join`;
        const response = await axios.post(url, body, header);
        console.log(response);
        if (response.data.result === 1) {
          alert("회원가입성공");
          this.$router.push({ path: "/" });
        }
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap");
.join_wrapper {
  width: 100%;
  height: fit-content;
  /* overflow-y: scroll; */
  font-family: "Gowun Dodum", sans-serif;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 4.5%;
}
.join_container {
  /* border: 1px solid black; */
  width: 60%;
  height: fit-content;
  margin: 0 auto;
  font-family: "Gowun Dodum", sans-serif;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

/* 회원가입 타이틀 부분 */
.join_title {
  /* border: 1px solid black; */
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  display: inline-block;
}
.join_title p {
  width: fit-content;
  font-size: 30px;
  font-weight: bold;
  margin: 80px auto;
}
.float-end {
  display: flex;
  width: fit-content;
}
span {
  width: fit-content;
  height: fit-content;
  font-size: 15px;
  margin: 2px 5px 2px 0px;
  color: #c30000;
  font-weight: bold;
}
.float-end > p {
  width: fit-content;
  font-size: 15px;
  letter-spacing: -0.1rem;
  color: #49654e;
  margin: 0;
  margin: 0px 5px 5px 0px;
}

/* 구분선 */
.divider {
  border: 0.3px solid #49654e;
  height: -2px;
  width: 100%;
}

/* 회원가입 정보 입력부분 */
.join_form {
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.join_info {
  /* border: 1px solid black; */
  width: 75%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 15px;
}
.join_email,
.join_password,
.join_name,
.join_tel,
.join_address {
  /* border: 1px solid black; */
  width: 100%;
  height: fit-content;
  display: block;
  padding: 10px;
  /* margin : 15px; */
}
.email_info {
  display: inline-flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
}
.email_ad {
  border-bottom: 1px solid #49654e;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.chk_email,
.chk_password {
  /* border : 1px solid black; */
  width: fit-content;
  float: right !important;
  margin: 10px 0px 0px 0px;
  font-size: 13px;
}
img {
  width: 20px;
  height: 20px;
  margin: 5px;
}
.email_ad input {
  border: none;
  width: 100%;
  height: 48.5px;
  padding-left: 15px;
  font-size: 15px;
  font-family: "Gowun Dodum", sans-serif;
}
.email_info > p {
  /* border: 1px solid black; */
  width: fit-content;
  font-weight: bold;
  font-size: 20px;
  color: #49654e;
  margin: 0;
  padding-bottom: 5px;
}
.email_domain_selector {
  /* border: 1px solid black; */
  width: 45%;
  height: 47.33px;
  display: block;
}
.form-selector {
  border-bottom: 1px solid black;
  margin-right: 5px;
  width: 90%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
  overflow: hidden;
}
.selected {
  border : 1px solid black;
  width: 95%;
  height: 90%;
  font-size: 15px;
  font-weight: 200;
  color: black;
  text-align: center;
  border: none;
  font-family: "Gowun Dodum", sans-serif;
}
.form-selector > img {
  width: 13px;
  height: 7px;
  background-size: cover;
  margin-bottom: 0px;
}
.select_options label {
  display: block;
  width: 100%;
  color: rgb(37, 36, 36);
  text-align: center;
  font-size: 15px;
  line-height: 0.6em;
  z-index: 10000;
  padding: 10px 0px 8px 8px;
}
.select_options label:hover {
  background: #49654e7a;
}
input[type="radio"] {
  display: none;
}

/* 비밀번호 */
.password_info,
.name_info {
  border-bottom: 1px solid black;
  width: 100%;
  height: 60%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}
.password_info input,
.name_info input {
  width: 90%;
  height: 48.5px;
  border: none;
  padding-left: 10px;
  font-size: 15px;
  font-family: "Gowun Dodum", sans-serif;
}

/* 이름 */
.name_info img {
  width: 15px;
  height: 17px;
  margin: 5px;
}

/* 주소입력 */
.address_info1 {
  /* border : 1px solid black; */
  width: 100%;
  height: 50%;
  display: inline-flex;
  align-items: flex-end;
  margin-bottom: 15px;
}
.address_postcode {
  border-bottom: 1px solid black;
  width: 30%;
  height: 100%;
  display: inline-flex;
  align-items: center;
}
.address_postcode > img {
  width: 18px;
  height: 20px;
  margin: 5px;
}
.address_postcode input,
.address_info2 input {
  border: none;
  width: 90%;
  height: 48.5px;
  padding-left: 10px;
  font-size: 15px;
  font-family: "Gowun Dodum", sans-serif;
}
.address_info1 > p {
  /* border: 1px solid black; */
  width: fit-content;
  font-weight: bold;
  font-size: 20px;
  color: #49654e;
  margin: 0;
  padding: 8px 8px 5px 8px;
}
.address_main {
  border-bottom: 1px solid black;
  width: 80%;
  height: 48.5px;
}
.address_main > input {
  border: none;
  width: 95%;
  height: 90%;
  padding-left: 10px;
  font-size: 15px;
  font-family: "Gowun Dodum", sans-serif;
}
.address_info2 {
  border-bottom: 1px solid black;
  width: 100%;
  height: 48.5px;
  display: inline-flex;
  align-items: flex-end;
}
#postcode_btn {
  width: 110px;
  height: 40px;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  background-color: #715036;
  margin-bottom: 5px;
  font-size: 15px;
}
#postcode_btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

/* 회원가입 버튼 */
#join_btn {
  /* border: 1px solid black; */
  width: 15%;
  height: 60px;
  margin: 100px;
  border: none;
  font-size: 25px;
  font-weight: bold;
  background-color: #715036;
  color: white;
  border-radius: 4px;
  font-family: "Playfair Display", serif;
}
#join_btn:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>