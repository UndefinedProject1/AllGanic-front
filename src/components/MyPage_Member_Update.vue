<template>
    <div class="info_list">
      <div class="m_update_title">
        <p>회원정보 변경</p>
      </div>
      <div class="m_update_insert">
        <div class="m_update_box">
          <div class="m_update_mail">
            <i class="el-icon-message" :size="50"></i>
            <p>이메일</p>
            <input type="text" v-model="member.USEREMAIL" readonly value />
          </div>
          <div class="m_password">
            <div class="m_update_pw">
              <i class="el-icon-lock" :size="50"></i>
              <p>비밀번호</p>
            </div>
            <div class="u_pw_box">
              <input type="password" v-model="u_password_text" refs="password" />
              <button type="password" @click="centerDialogVisible = true">비밀번호변경</button>
            </div>
          </div>
          <div class="m_name">
            <div class="m_update_name">
              <i class="el-icon-user" :size="50"></i>
              <p>이름</p>
            </div>
            <div class="u_name_box">
              <input type="text" v-model="member.USERNAME" refs="name" />
            </div>
          </div>
          <div class="m_phone">
            <div class="m_update_phone">
              <i class="el-icon-phone" :size="50"></i>
              <p>연락처</p>
            </div>
            <div class="u_phone_box">
              <!-- <input type="text" oninput="autoHyphen(this)" maxlength="13"  v-model="member.USERTEL" refs="phone" @keyup="numberHipen"> -->
              <input type="text" class="phoneNumber" @keyup="phonehipen"  v-model="member.USERTEL" refs="phone">
              <!-- <input type="number" /> -->
            </div>
            </div>
          <div class="m_address">
            <div class="m_update_address">
              <i class="el-icon-location" :size="50"></i>
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
          <button type="button" id="handle_memupdate" @click="handle_memupdate">회원정보 수정</button>
        </div>
      </div>

    <!-- modal -->
  <el-dialog v-model="centerDialogVisible" title="비밀번호 변경" width="30%">
    <VeeForm v-slot="{ handleSubmit}" :validation-schema="schema" as="div">
      <form @submit="handleSubmit($event, onSubmit)">
        <div class="update_modal_pw_box">
          <div class="update_modal_pw_oldpw">
            <p>기존 비밀번호</p>
            <span>*</span>
          </div>
          <div class="updatemodal_input_pw_oldpw">
            <Field type="password" name="pw1_btn" v-model="pw1_btn"/>
          </div>
            <div class="modal_password1">
              <ErrorMessage name="pw1_btn"/>
            </div>
          <div class="update_modal_pw_newpw">
            <p>새 비밀번호</p>
            <span>*</span>
          </div>
          <div class="updatemodal_input_pw_newpw">
            <Field type="password" name="pw2_btn" v-model="pw2_btn" ref="pw2_btn" />
          </div>
          <div class="modal_password1">
              <ErrorMessage name="pw2_btn"/>
            </div>
          <div class="update_modal_pw_newpw_check">
            <p>새 비밀번호 확인</p>
            <span>*</span>
          </div>
          <div class="updatemodal_input_pw_newpwchk">
            <input type="password" name="pw3_btn" v-model="pw3_btn"/>
          </div>
          <div class="modal_password1">
            <ErrorMessage name="pw3_btn"/>
          </div>
          <span class="dialog-footer">
            <button type="button" id="btn_cancle" @click="centerDialogVisible = false">취소</button>
            <button type="button" id="btn_update">수정</button>
            <el-button @click="centerDialogVisible = false" id="btn_close" style="display:none">Close</el-button>
          </span>
        </div>
      </form>
    </VeeForm>

  </el-dialog>
  </div>
</template>


<script>
import axios from "axios";
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate';
import { ElMessage } from 'element-plus';
import * as yup from 'yup';
import mypage_mail from "@/assets/mypage_mail.png";
import mypage_pw from "@/assets/mypage_pw.png";
import mypage_profile from "@/assets/mypage_profile.png";
import mypage_phone from "@/assets/mypage_phone.png";
import mypage_address from "@/assets/mypage_address.png";
  export default {
    setup() {
      const successAlertMSG1 = () => {
          ElMessage.success('비밀번호수정 성공')
      }
      const successAlertMSG2 = () => {
          ElMessage.success('회원정보수정 성공')
      }
      const failAlertMSG1 = () => {
          ElMessage.error('정보를 받아오지 못하였습니다.')
      }
      const failAlertMSG2 = () => {
          ElMessage.error('회원정보수정 실패')
      }
      return {
        successAlertMSG1,
        successAlertMSG2,
        failAlertMSG1,
        failAlertMSG2
      }
    },
      components :{
        VeeForm,
        Field,
        ErrorMessage
      },
      data() {
        const schema = yup.object({
          pw1_btn : yup.string().required('해당 항목은 필수입력사항입니다.'),
          pw2_btn : yup.string()
                  .matches(/[~!@#$%^&*_?]/,'특수문자 ~, !, @, #, $, %, ^, &, *, _, ? 중 하나는 포함되어야합니다. ')
                  .min(6, '비밀번호는 최소 6자리 이상이어야합니다.')
                  .required('해당 항목은 필수입력사항입니다.'),
          pw3_btn : yup.string()
                  .oneOf([yup.ref("pw2_btn")], "새 비밀번호와 일치해야합니다.")
        });
        return {
          token: sessionStorage.getItem("token"),
          schema,
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

          pw1_btn : "",
          pw2_btn : "",
          pw3_btn : "",

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
          else {
            this.failAlertMSG1();
          }
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
        async onSubmit({pw1_btn, pw2_btn}) {
            const headers = {"token" : this.token};
            const body = {
                userpw : pw1_btn,
                usernewpw : pw2_btn
            };
            console.log(body);
            const url = `REST/api/member/passwd`;
            const response = await axios.put(url, body, {headers});
            console.log(response);
            if(response.data.result === 1) {
                this.successAlertMSG1();
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
            this.successAlertMSG2();
          }
          else if(response.data.result !== 1) {
            this.failAlertMSG2();
          }
        }
      },
  }
</script>

<style scoped>
input {
  padding-left: 5px;
  outline: none;
  font-size: 1rem;
  color: #333;
}
.info_list {
  width: 98.5%;
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
  border: 3px solid #715036;
  width: 100%;
  height: 93.5%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.m_update_box{
  /* border: 1px solid black; */
  width: 70%;
  height : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


/* 이메일 부분 */
.m_update_mail {
  /* border: 1px solid black; */
  width: 100%;
  display: inline-flex;
  margin-bottom: 10px;
  font-family: 'Gowun Dodum', sans-serif;
  align-items: center;
  /* margin-top: 30px; */
}
.m_update_mail > p {
  /* border: 1px solid black; */
  width: fit-content;
  font-weight: bold;
  margin: 3px 40px 5px 10px;
}
.m_update_mail > input {
  border: none;
  font-size: 1rem;
  margin-right: 5px;
  margin-left: 15px;
  height: 100%;
  width: 47%;
  font-weight: bold;
  color: #333;
}


/* 비밀번호 부분 */
.m_password {
  /* border: 1px solid black; */
  width: 100%;
  display: inline-flex;
  align-items: flex-end;
  margin-top: 10px;
}
.m_update_pw {
  /* border: 1px solid black; */
  display: flex;
  width: 15%;
  font-weight: bold;
  align-items: center;
}
.m_update_pw > p {
  /* border: 1px solid black; */
  width: fit-content;
  font-weight: bold;
  margin: 3px 10px 5px 10px;
}

/* 비밀번호변경  버튼 */
.u_pw_box {
  display: flex;
  border-bottom: 2px solid black;
  width : 80%;
}
.u_pw_box > input {
  border: none;
  width: 80%;
  height: 30px;
}
.u_pw_box > button {
  width: 20%;
  background-color: #715036;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  margin-bottom: 2px;
  font-family: 'Gowun Dodum', sans-serif;
}


/* 이름 부분 */
.m_name {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  margin-top: 30px;
}
.m_update_name {
  /* border: 1px solid black; */
  display: inline-flex;
  align-items: center;
  width : 15%;
}
.m_update_name > p {
  /* border: 1px solid black; */
  width: fit-content;
  font-weight: bold;
  margin: 3px 10px 5px 10px;
}
.u_name_box {
  border-bottom: 2px solid black;
  width : 80%;
}
.u_name_box > input {
  border: none;
  width: 100%;
  height: 30px;
  font-family: 'Gowun Dodum', sans-serif;
}


/* 전화번호 부분 */
.m_phone {
  /* border: 1px solid black; */
  width: 100%;
  display: inline-flex;
  margin-top: 30px;
  font-family: 'Gowun Dodum', sans-serif;
}
.m_update_phone {
  /* border: 1px solid black; */
  display: inline-flex;
  align-items: center;
  width : 15%;
}
.m_update_phone > p {
  /* border: 1px solid black; */
  width: fit-content;
  font-weight: bold;
  margin: 3px 10px 5px 10px;
}
.u_phone_box {
  border-bottom: 2px solid black;
  margin-right: 15px;
  width : 80%;
}
.u_phone_box > input {
  border: none;
  width: 100%;
  height: 30px;
  font-family: 'Gowun Dodum', sans-serif;
}


/* 주소부분 */
.m_address {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  margin: 30px 0px 10px 0px;
  align-items: flex-end;
}
.m_update_address {
  /* border: 1px solid black; */
  display: flex;
  width: 15%;
  font-family: 'Gowun Dodum', sans-serif;
  align-items: center;
}
.m_update_address > p {
  /* border: 1px solid black; */
  width: fit-content;
  font-weight: bold;
  margin: 3px 10px 5px 10px;
}
.m_update_postcode {
  display: flex;
  border-bottom: 2px solid black;
  height: 35px;
  width: 80%;
  margin-top: 10px;
  font-family: 'Gowun Dodum', sans-serif;
}
.m_update_postcode > input:first-child {
  /* border: 1px solid black; */
  border: none;
  margin-right: 5px;
  width: 60%;
  height: 100%;
  font-family: 'Gowun Dodum', sans-serif;
}
.m_update_postcode > input:last-child {
  /* border: 1px solid black; */
  border: none;
  margin-right: 5px;
  width: 80%;
  height: 100%;
  font-family: 'Gowun Dodum', sans-serif;
}
.u_address_box {
  /* border: 1px solid black; */
  border-bottom: 2px solid black;
  display: inline-flex;
  margin-left: 10%;
  width: 80%;
  font-family: 'Gowun Dodum', sans-serif;
}
.u_address_box > input {
  /* border: 1px solid black; */
  border: none;
  background-color: #fbfdff0f;
  width: 83%;
  font-family: 'Gowun Dodum', sans-serif;
}
.u_address_box > button {
  background-color: #715036;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  margin-bottom: 2px;
  width: 20%;
  font-family: 'Gowun Dodum', sans-serif;
}
.u_address_box > button:hover {
  cursor: pointer;
  opacity: 0.8;
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
/* 회원정보수정 버튼 */
#handle_memupdate {
  width: 20%;
  height: 35px;
  margin-top: 45px;
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
.update_modal_pw_box input[type="password"]{
  border: none;
  border-bottom: 2px solid black;
  width: 250px;
  height : 30px;
  outline: none;
}
.update_modal_pw_box p{
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
#btn_cancle {
  width: 70px;
  height: 30px;
  color:white;
  font-family: 'Gowun Dodum', sans-serif;
  background-color: #715036;
  border-radius: 3px;
  border: none;
  margin-right: 20px;
}
#btn_update {
  width: 70px;
  height: 30px;
  color:white;
  font-family: 'Gowun Dodum', sans-serif;
  background-color: #715036;
  border-radius: 3px;
  border: none;
}
.dialog-footer{
  /* border: 1px solid black; */
  padding: 20px;
  margin-top: 20px;
  width: 80%;
  display: inline-flex;
  justify-content: flex-end;
}
/* 주소 */

input[type="text"] {
  font-family: 'Gowun Dodum', sans-serif;
}
</style>