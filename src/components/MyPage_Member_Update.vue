<template>
  <div class="info_wapper">
    <MyPage_Info></MyPage_Info>
    <div class="info_list">
      <div class="m_update_title">
        <p>회원정보 변경</p>
      </div>
      <div class="m_update_insert">
        <div class="m_update_mail">
          <img :src="mypage_mail" />
          <p>이메일</p>
          <input type="text" v-model="member.USEREMAIL" readonly value />
          </div>
        <div class="m_password">
          <div class="m_update_pw">
            <img :src="mypage_pw" />
            <p>비밀번호</p>
          </div>
          <div class="u_pw_box">
            <input type="password" v-model="u_password_text" refs="password" />
            <button type="password" @click="centerDialogVisible = true">비밀번호변경</button>
          </div>
        </div>
        <div class="m_name">
          <div class="m_update_name">
            <img :src="mypage_profile" />
            <p>이름</p>
          </div>
          <div class="u_name_box">
            <input type="text" v-model="member.USERNAME" refs="name" />
          </div>
        </div>
        <div class="m_phone">
          <div class="m_update_phone">
            <img :src="mypage_phone" />
            <p>연락처</p>
          </div>
          <div class="u_phone_box">
            <input type="text" v-model="member.USERTEL" refs="phone" />
          </div>
          </div>
        <div class="m_address">
          <div class="m_update_address">
            <img :src="mypage_address" />
            <p>주소</p>
          </div>
          <div class="m_update_postcode">
            <input type="text" v-model="postcode" readonly value style="width:100px;" />
            <p style="margin-top:9px;">/</p>
            <input type="text" v-model="roadAddress" readonly value style="margin-left: 5px;" />
          </div>
        </div>
        <div class="u_address_box">
          <input type="text" v-model="detailAddress" />
          <button type="button" id="postcode_btn" @click="openDaumPostCode">우편번호검색</button>
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
        <button type="button" id="handle_memupdate" @click="handle_memupdate">회원정보수정</button>
      </div>
    </div>

    <!-- modal -->
    <el-dialog 
    v-model="centerDialogVisible"
    title="비밀번호 변경"
    width="30%">
    <div class="update_modal_pw_box">
      <div class="update_modal_pw_oldpw">
        <p>기존 비밀번호</p>
        <span>*</span>
      </div>
      <div class="updatemodal_input_pw_oldpw">
        <input type="password" ref="pw1" v-model="pw1_btn"/>
      </div>
        <div class="modal_password1" v-bind:style="modalcheck">
            {{ chk_pw1 }}
        </div>
      <div class="update_modal_pw_newpw">
        <p>새 비밀번호</p>
        <span>*</span>
      </div>
      <div class="updatemodal_input_pw_newpw">
        <input type="password" ref="pw2" v-model="pw2_btn" />
      </div>
      <div class="modal_password1" v-bind:style="modalcheck">
            {{ chk_pw2 }}
        </div>
      <div class="update_modal_pw_newpw_check">
        <p>새 비밀번호 확인</p>
        <span>*</span>
      </div>
      <div class="updatemodal_input_pw_newpwchk">
        <input type="password" ref="pw3" v-model="pw3_btn"/>
      </div>
      <div class="modal_password1" v-bind:style="modalcheck">
            {{ chk_pw3 }}
        </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button @click="centerDialogVisible = false" id="btn_close" style="display:none">Close</el-button>
        <el-button type="primary" @click="handlPWUpdate">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import MyPage_Info from "@/components/MyPage_Info.vue";
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
        
        postcode: "",
        roadAddress: "",
        detailAddress: "",
        member:[],

        centerDialogVisible: false,
    
        chk_pw1 : "",
        chk_pw2 : "",
        chk_pw3 : "",
        pw1_btn : "",
        pw2_btn : "",
        pw3_btn : "",

        modalcheck: {
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

        // 주소 입력칸에 보이게 하는 부분 
        this.postcode = response.data.member.POST;
        this.roadAddress = response.data.member.ADDRESS;
        this.detailAddress = response.data.member.DETAILEADDRESS;

        console.log(this.member);
      } 
      else alert("정보를 받아오지 못하였습니다.");
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
        }
      }).
      open();
    },
    async handlPWUpdate() {
        if(this.pw1_btn.length === 0) {
            this.chk_pw1 = "기존 비밀번호는 필수항목 입니다.";
            this.modalcheck.color = "Red";
            return this.$refs.pw1.focus();
        }
        else if(this.pw2_btn.length === 0) {
            this.chk_pw2 = "새 비밀번호는 필수 항목입니다.";
            this.modalcheck.color = "Red";
            return this.$refs.pw2.focus();
        }
        else if(this.pw2_btn !== this.pw3_btn) {
            this.chk_pw3 = "새 비밀번호와 일치해야 합니다.";
            this.modalcheck.color = "Red";
            return this.$refs.pw3.focus();
        }
        const headers = {"token" : this.token};
        const body = {
            userpw : this.pw1_btn,
            usernewpw : this.pw2_btn
        };
        console.log(body);
        const url = `REST/api/member/passwd`;
        const response = await axios.put(url, body, {headers});
        console.log(response);
        if(response.data.result === 1) {
            alert("비밀번호 수정 성공");
            // alert버튼 누르면 모달창 사라짐
            document.getElementById('btn_close').click();
        }
    },
    async handle_memupdate() {
      // console.log("ddd");
      const url = `REST/api/member/update`;
      const body = {
        username : this.member.USERNAME,
        usertel : this.member.USERTEL,
        post : this.postcode,
        address : this.roadAddress,
        detaileaddress : this.detailAddress, 
      }
      console.log(body);
      const headers = {"Content-Type" : "application/json", "token" : this.token};
      const response = await axios.put(url, body, {headers});
      console.log(response);
      if(response.data.result === 1) {
        alert("회원정보수정 성공");
      }
      else if(response.data.result !== 1) {
        alert("회원정보수정 실패");
      }
    }
  },
};
</script>

<style scoped>
.info_wapper {
  width: 100%;
  height: 100%;
  display: flex;
  font-family: 'Gowun Dodum', sans-serif;
}
.info_list {
  width: 100%;
  height: 100%;
  margin-left: 30px;
}
.m_update_title {
  color: #715036;
  font-weight: bold;
  display: flex;
}
.m_update_title > p {
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 20px;
}
.m_update_insert {
  border: 1px solid black;
  width: 100%;
  height: 497px;
  border-radius: 3px;
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
  font-family: 'Gowun Dodum', sans-serif;
  /* margin-top: 30px; */
}
.m_update_mail > p {
  width: fit-content;
  margin-right: 45px;
  margin-bottom: 5px;
  margin-top: 3px;
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
.u_phone_box {
  border-bottom: 2px solid black;
  width: 50%;
  margin-right: 15px;
}
.u_phone_box > input {
  border: none;
  width: 250px;
  height: 30px;
  font-family: 'Gowun Dodum', sans-serif;
}
.u_name_box {
  border-bottom: 2px solid black;
  width: 50%;
  margin-right: 7px;
}
.u_name_box > input {
  border: none;
  width: 432px;
  height: 30px;
  font-family: 'Gowun Dodum', sans-serif;
}
.u_pw_box {
  display: flex;
  border-bottom: 2px solid black;
  width: 50%;
  margin-left: 37px;
}
.u_pw_box > input {
  border: none;
  width: 432px;
  height: 30px;
}
.m_update_mail > input {
  border: none;
  margin-right: 5px;
  margin-left: 15px;
  height: 100%;
  width: 47%;
  background-color: #fbfdff0f;
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
  margin-top: 20px;
}
/* 비밀번호변경  버튼 */
.u_address_box > button {
  background-color: #715036;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  margin-bottom: 2px;
  font-family: 'Gowun Dodum', sans-serif;
}
.u_pw_box > button {
  width: 110px;
  background-color: #715036;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  margin-bottom: 2px;
  font-family: 'Gowun Dodum', sans-serif;
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
  margin-right: 52px;
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
  font-family: 'Gowun Dodum', sans-serif;
}
.m_phone {
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  font-family: 'Gowun Dodum', sans-serif;
}
.m_update_phone {
  /* border: 1px solid black; */
  display: flex;
}
.m_address {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.m_update_address {
  /* border: 1px solid black; */
  display: flex;
  height: 30px;
  margin-left: 10px;
  margin-top: 35px;
  font-family: 'Gowun Dodum', sans-serif;
}
.m_update_address > p {
  margin-right: 20px;
}
.m_update_postcode {
  display: flex;
  border-bottom: 2px solid black;
  width: 50%;
  margin-left: 40px;
  height: 35px;
  margin-top: 30px;
  font-family: 'Gowun Dodum', sans-serif;
}
.m_update_postcode > input {
  /* border: 1px solid black; */
  border: none;
  margin-right: 5px;
  width: 400px;
  height: 25px;
  margin-top: 8px;
  background-color: #fbfdff0f;
  font-family: 'Gowun Dodum', sans-serif;
  height: 30px;
}
.u_address_box {
  /* border: 1px solid black; */
  display: flex;
  border-bottom: 2px solid black;
  margin-left: 135px;
  margin-top: 20px;
  width: 50%;
  font-family: 'Gowun Dodum', sans-serif;
}
.u_address_box > input {
  border: none;
  background-color: #fbfdff0f;
  width: 432px;
  font-family: 'Gowun Dodum', sans-serif;
}
/* 우편번호검색 버튼 */
#postcode_btn {
  width: 110px;
  height: 30px;
  background-color: #715036;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-family: 'Gowun Dodum', sans-serif;
}
/* Modal */
.modal-body {
  font-family: "Gowun Dodum", sans-serif;
  display: flex;
  justify-content: center;
  width: 100%;
}
.update_modal_pw_box {
  margin-left: 80px;
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
.updatemodal_input_pw_newpwchk > input {
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
/* 회원정보수정 버튼 */
#handle_memupdate {
  width: 110px;
  height: 35px;
  margin-top: 42px;
  background-color: #715036;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-family: 'Gowun Dodum', sans-serif;
}
/* 주소 */
#postcode_btn:hover {
  cursor: pointer;
  opacity: 0.8;
}
input[type="text"] {
  font-family: 'Gowun Dodum', sans-serif;
}
</style>