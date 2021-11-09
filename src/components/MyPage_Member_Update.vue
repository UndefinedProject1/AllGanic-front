<template>
  <div class="mp_m_update">
    <MyPage_Info></MyPage_Info>
    <div class="m_update_box">
      <div class="m_update_title">
        <p>회원정보 변경</p>
      </div>
      <div class="m_update_insert">
        <!-- <option :value="member" v-for="member in memberinfo" v-bind:key="member">{{member}}</option> -->
        <div class="m_update_mail">
          <img :src="mypage_mail" />
          <p>이메일</p>
          <input type="text" v-model="member.USEREMAIL" readonly value />
          <!-- {{member.USEREMAIL}} -->
          <!-- <span style="color:black">sksmsdiWkd!@naver.com</span> -->
          <div class="chk_password" v-bind:style="doublecheck">
            {{ chk_mail }}
          </div>
        </div>
        <div class="m_password">
          <div class="m_update_pw">
            <img :src="mypage_pw" />
            <p>비밀번호</p>
          </div>
          <div class="chk_password" v-bind:style="doublecheck">
            {{ chk_pw }}
          </div>
          <div class="u_pw_box">
            <input type="password" v-model="u_password_text" />
            <!-- <button type="button" @click="handle_pw_modal">비밀번호변경</button> -->
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="handle_pw_modal"
            >
              비밀번호변경
            </button>
          </div>
        </div>
        <div class="m_name">
          <div class="m_update_name">
            <img :src="mypage_profile" />
            <p>이름</p>
          </div>
          <div class="u_name_box">
            <input type="text" v-model="member.USERNAME" />
          </div>
          <div class="chk_password" v-bind:style="doublecheck">
            {{ chk_name }}
          </div>
        </div>
        <div class="m_phone">
          <div class="m_update_phone">
            <img :src="mypage_phone" />
            <p>연락처</p>
          </div>
          <div class="u_phone_box">
            <input type="text" v-model="member.USERTEL" />
          </div>
          <div class="chk_password" v-bind:style="doublecheck">
            {{ chk_phone }}
          </div>
        </div>
        <div class="m_address">
          <div class="m_update_address">
            <img :src="mypage_address" />
            <p>주소</p>
          </div>
          <div class="m_update_postcode">
            <input type="text" v-model="member.POST" readonly value />
            <p>/</p>
            <input
              type="text"
              v-model="member.ADDRESS"
              readonly
              value
              style="margin-left: 5px"
            />
          </div>
        </div>
        <div class="u_address_box">
          <input
            type="text"
            v-model="member.DETAILEADDRESS"
            readonly
            value
            style="width: 100px"
          />
          <button type="button" id="chage_address_btn" @click="handle_ad_btn">
            우편번호검색
          </button>
        </div>
        <div
          id="wrap"
          style="
            display: none;
            border: 1px solid;
            width: 500px;
            height: 300px;
            margin: 5px 0;
            position: relative;
          "
        >
          <img
            src="//t1.daumcdn.net/postcode/resource/images/close.png"
            id="btnFoldWrap"
            style="
              cursor: pointer;
              position: absolute;
              right: 0px;
              top: -1px;
              z-index: 1;
            "
            @click="foldDaumPostcode"
            alt="접기 버튼"
          />
        </div>
        <div
          id="wrap"
          style="
            display: none;
            border: 1px solid;
            width: 500px;
            height: 300px;
            margin: 5px 0;
            position: relative;
          "
        >
          <img
            src="//t1.daumcdn.net/postcode/resource/images/close.png"
            id="btnFoldWrap"
            style="
              cursor: pointer;
              position: absolute;
              right: 0px;
              top: -1px;
              z-index: 1;
            "
            @click="foldDaumPostcode"
            alt="접기 버튼"
          />
        </div>
        <button type="button" id="handle_memupdate" @click="handle_memupdate">
          회원정보수정
        </button>
      </div>
      <!-- <button type="button" class="btn btn-primary"  @click="handlUpdate">비밀번호변경</button> -->
    </div>
    <!-- 비밀번호 변경 Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">비밀번호변경</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="update_modal_pw_box">
              <div class="update_modal_pw_oldpw">
                <p>기존 비밀번호</p>
                <span>*</span>
              </div>
              <div class="updatemodal_input_pw_oldpw">
                <input type="password" />
              </div>
              <div class="update_modal_pw_newpw">
                <p>새 비밀번호</p>
                <span>*</span>
              </div>
              <div class="updatemodal_input_pw_newpw">
                <input type="password" />
              </div>
              <div class="update_modal_pw_newpw_check">
                <p>새 비밀번호 확인</p>
                <span>*</span>
              </div>
              <div class="updatemodal_input_pw_newpw">
                <input type="password" />
              </div>
              <!-- <button type="button" id="update_modal_pw_box_btn" @click="" -->
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="handlPWUpdate"
            >
              비밀번호변경
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import axios from "axios";
import MyPage_Info from "@/components/MyPage_Info.vue";
import Footer from "@/components/Footer.vue";
import mypage_mail from "@/assets/mypage_mail.png";
import mypage_pw from "@/assets/mypage_pw.png";
import mypage_profile from "@/assets/mypage_profile.png";
import mypage_phone from "@/assets/mypage_phone.png";
import mypage_address from "@/assets/mypage_address.png";

export default {
  data() {
    return {
      token: sessionStorage.getItem("token"),
      mypage_mail: mypage_mail,
      mypage_pw: mypage_pw,
      mypage_profile: mypage_profile,
      mypage_phone: mypage_phone,
      mypage_address: mypage_address,
      showModal: false,
      member: [],
      memberinfo: "",

      userpw: "",
      usernewpw: "",

      chk_mail: "",
      chk_pw: "",
      chk_name: "",
      chk_phone: "",

      doublecheck: {
        width: "fit-content",
        height: "20px",
        fontFamily: '"Gowun Dodum", serif',
        fontSize: "13px",
        marginTop: "10px",
        marginRight: "15px",
        color: "black",
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
  async created() {
    await this.handleMemberGet();
  },
  components: {
    Footer: Footer,
    MyPage_Info: MyPage_Info,
  },
  methods: {
    async handleMemberGet() {
      const url = `REST/api/member/find`;
      const headers = { token: this.token };
      // console.log(header);
      const response = await axios.get(url, { headers });
      console.log(response);
      if (response.data.result === 1) {
        this.member = response.data.member;
        console.log(this.member);
      } else alert("정보를 받아오지 못하였습니다.");
    },
    handle_ad_btn() {
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
      }).open()({
        popupTitle: "LUSH 우편번호 검색", //팝업창 타이틀 설정 (영문,한글,숫자 모두 가능)
      });
    },
  },
  // async handlPWUpdate() {
  //     const url = `REST/api/member/passwd`;
  //     const headers = {"token" : this.token};
  //     const obj = {
  //         userpw : this.userpw,
  //         usernewpw : this.usernewpw,
  //     }
  //     console.log(obj);
  //     const response = await axios.put(url,obj,{headers});
  // }
  // async handlUpdate(){
  //     const obj = {
  //         id : this.member.USEREMAIL,
  //         name : this.member.USERNAME
  //     }
  //     console.log(obj);
  // }
};
</script>

<style scoped>
.mp_m_update {
  width: 100%;
  height: 100%;
  padding: 40px;
  display: inline-flex;
  font-family: "Gowun Dodum", sans-serif;
}
.mp_m_update > p {
  display: flex;
}
.m_update_box {
  width: 100%;
}
.m_update_title {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  color: #715036;
  font-weight: 500;
  font-size: 18px;
  font-weight: bold;
}
.mp_m_update > p {
  height: fit-content;
}
.m_update_insert {
  border: 2px solid black;
  width: 100%;
  height: 530px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.m_update_mail {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.m_update_mail > p {
  width: fit-content;
  margin-right: 23px;
  margin-bottom: 5px;
  margin-top: 3px;
}
.m_update_mail > span {
  width: 50%;
  font-weight: bold;
}
.m_password {
  width: 100%;
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 10px;
}
.m_update_pw {
  /* border: 1px solid black; */
  display: flex;
  width: fit-content;
}
.m_update_pw > p {
  width: fit-content;
  margin-left: 10px;
  margin-bottom: 5px;
  margin-top: 3px;
}
.u_name_box,
.u_phone_box {
  border-bottom: 2px solid black;
  width: 50%;
}
.u_pw_box {
  display: flex;
  border-bottom: 2px solid black;
  width: 50%;
  margin-left: 37px;
}
.u_pw_box > input,
.u_name_box > input,
.u_phone_box > input {
  border: none;
  margin-right: 5px;
  height: 100%;
  width: 70%;
  background-color: #eeeeee;
}
.m_update_mail > input {
  border: none;
  margin-right: 5px;
  margin-left: 10px;
  height: 100%;
  width: 47%;
  background-color: #eeeeee;
}
.m_update_mail > img {
  /* border: 1px solid black; */
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 8px;
}
.m_update_pw > img {
  width: 15px;
  height: 15px;
  /* margin-right: 5px; */
  margin-bottom: 5px;
  margin-top: 8px;
}
.m_update_name > img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-left: 35px;
  margin-bottom: 5px;
  margin-top: 8px;
}
.m_update_phone > img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-left: 33px;
  margin-bottom: 5px;
  margin-top: 8px;
}
.m_update_address > img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-left: 15px;
  margin-bottom: 5px;
  margin-top: 8px;
}
.u_pw_box > button {
  /* width: 110px; */
  height: 25px;
  background-color: #715036;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
}
.m_name {
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
}
.m_update_name {
  display: flex;
}
.m_update_name > p {
  width: fit-content;
  margin-right: 40px;
  margin-bottom: 5px;
  margin-top: 3px;
}
.m_update_pw > p {
  width: fit-content;
  margin-right: 8px;
  margin-bottom: 5px;
  margin-top: 3px;
}
.m_update_mail > p {
  width: fit-content;
  margin-right: 35px;
  margin-bottom: 5px;
  margin-top: 3px;
}
.m_update_phone > p {
  width: fit-content;
  margin-right: 52px;
  margin-bottom: 5px;
  margin-top: 3px;
}
.m_phone {
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
}
.m_update_phone {
  /* border: 1px solid black; */
  display: flex;
}
/* .m_update_phone > p {
    margin-right: 22px;
    width: fit-content;
    margin-bottom: 5px;
    margin-top: 3px;
} */
.m_address {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
}
/* .m_update_address > img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 5px;
} */
.m_update_address {
  /* border: 1px solid black; */
  display: flex;
  height: 30px;
  margin-left: 10px;
  margin-top: 35px;
}
.m_update_address > p {
  margin-right: 20px;
}
.m_update_postcode {
  display: flex;
  border-bottom: 2px solid black;
  width: 50%;
  margin-left: 33px;
  height: 35px;
  margin-top: 30px;
}
.m_update_postcode > input {
  /* border: 1px solid black; */
  border: none;
  margin-right: 5px;
  width: 80px;
  height: 32px;
  background-color: #eeeeee;
}
.u_address_box {
  /* border: 1px solid black; */
  display: flex;
  border-bottom: 2px solid black;
  width: 50%;
  margin-left: 125px;
  margin-top: 20px;
}
.u_address_box > input {
  border: none;
  background-color: #eeeeee;
  width: 80%;
}
.u_address_box > button {
  width: 110px;
  height: 25px;
  background-color: #715036;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
}
/* Modal */
.modal-body {
  font-family: "Gowun Dodum", sans-serif;
  display: flex;
  justify-content: center;
  width: 100%;
}
.update_modal_pw_oldpw {
  display: flex;
  width: 80%;
  margin-top: 10px;
  margin-bottom: 0px;
}
.update_modal_pw_newpw,
.update_modal_pw_newpw_check {
  display: flex;
  width: 80%;
  margin-top: 30px;
  margin-bottom: 0px;
}
.updatemodal_input_pw_oldpw > input,
.updatemodal_input_pw_newpw > input,
.updatemodal_input_pw_newpw > input {
  border: none;
  border-bottom: 2px solid black;
  width: 250px;
}
.update_modal_pw_oldpw > p,
.update_modal_pw_newpw > p,
.update_modal_pw_newpw_check > p {
  margin-bottom: 0px;
}
span {
  width: fit-content;
  height: fit-content;
  font-size: 15px;
  margin: 2px 5px 2px 0px;
  color: #c30000;
  font-weight: bold;
}
#handle_memupdate {
  width: 110px;
  height: 35px;
  margin-top: 60px;
  background-color: #715036;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
}
</style>