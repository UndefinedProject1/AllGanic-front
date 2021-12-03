<template>
    <div class="qa_list_wrapper">
        <div class="qa_list_header">
            <p>FAQ관리</p>
            <span> > </span>
            <p id="chosen">문의글 목록</p>
        </div>
        <div class="qa_list_divider"></div>
        <div class="qa_list_content">
            <div class="selector_section">
                <el-select v-model="selected" placeholder="Select" @click="handle_catemiddle" @change="selectCate1" class="form-select">
                    <el-option v-for="select in firstQCateList"  :key="select.value" :label="select.label" :value="select.value"></el-option>
                </el-select>
            </div>
            <div class="qa_list_table">
                <el-table :data="QList">
                    <el-table-column label="문의번호" align="center" prop="QUESTIONCODE" />
                    <el-table-column label="문의제목" align="center" prop="QUESTIONTITLE" />
                    <el-table-column label="물품정보" align="center" prop="PRODUCTCODE" />
                    <el-table-column label="작성일" align="center" prop="QUESTIONDATE" />
                    <el-table-column align="right">
                        <template #default="scope">
                            <el-button size="mini" @click="handleEdit(scope.row.QUESTIONCODE)">답글달기</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-pagination layout="prev, pager, next" :page-count="pages" @current-change="handlePageChange" class="pagination"></el-pagination>
        </div>
    </div>

    <el-dialog v-model="showModal" title="답글달기">
        <div class="questionContents">
            <div class="productInfo">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">브랜드정보</th>
                            <th scope="col">물품이름</th>
                            <th scope="col">물품코드</th>
                            <th scope="col">카테고리분류</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{BList_Modal.brandname}}</td>
                            <td>
                                <router-link :to="`/product_detail?code=${PList_Modal.productcode}`" id="pd_name">
                                    {{PList_Modal.productname}}
                                </router-link>
                            </td>
                            <td>{{PList_Modal.productcode}}</td>
                            <td>{{CList_Modal.categoryname}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p> 문의 내용 </p>
            <div class="question_box">
                <div class="questionbox_title">
                    <p class="form-control" style="font-family: 'Gowun Dodum', sans-serif;">{{ QList_Modal.questiontitle }}</p>
                    <p class="form-select">{{QList_Modal.questionkind}}</p>
                </div>
                <div class="questionContent" v-html="questioncontent"></div> 
            </div>
            <hr style="width:100%;"/>
            <div class="replysection">
                <p> 문의 답변 </p>
                <textarea name="content" v-model="replyContent" row="30" placeholder="답글 작성란" style="font-family: 'Gowun Dodum', sans-serif;"  class="form-control"></textarea>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" id="reportbtn" @click="showReportModal = true">경고 처리</button>
            <div class="btn_box">
                <!-- 히든버튼 추가 -->
                <button type="button" id="btn_close" style="display:none" @click="showModal = false">Close</button>
                <!-- <button type="button"  @click="showModal = false" id="closebtn">닫기</button> -->
                <button type="button" @click="handleReply(QList_Modal.questioncode)">작성완료</button>
            </div>
        </div>
    </el-dialog>

    <el-dialog v-model="showReportModal" title="악성문의건 경고처리" width="40%" :before-close="handleClose" class="reportModal">
        <p id="reportTitle">다음 내용에 관하여 경고 처리를 진행하시겠습니까?</p>
        <div class="reportInfoBox">
            <label>회원정보</label>
            <p>- {{MList_Modal.username}} ( {{MList_Modal.useremail}} )  </p>
            <label>경고사유</label>
            <p>- 악성 문의건</p>
        </div>

        <template #footer>
            <span class="dialog-footer">
            <el-button @click="showReportModal = false">취소</el-button>
            <el-button type="primary" @click="handleQaReport">완료</el-button>
            </span>
        </template>
    </el-dialog>


</template>

<script>
import {getCurrentInstance} from '@vue/runtime-core';
import axios from 'axios';
import { ElMessage } from 'element-plus'
    export default {
        setup() {
            const successAlertMSG = () => {
                ElMessage.success('문의글등록 완료')
            }
            const successAlertMSG1 = () => {
                ElMessage.success('경고처리 완료')
            }
            const failAlertMSG = () => {
                ElMessage.error('error')
            }
            return {
                successAlertMSG,
                successAlertMSG1,
                failAlertMSG
            }
        },
        data(){
            return{
                token : sessionStorage.getItem("token"),
                selected : '',
                showModal :  false,
                showReportModal : false,
                QList : [],
                QList_Modal : [],
                PList_Modal : [],
                BList_Modal : [],
                MList_Modal : '',
                CList_Modal : '',
                replyContent : '',
                replyReportContent : '',
                firstQCateList : [
                    {value : 1, label : '상품문의'},
                    {value : 2, label : '배송문의'},
                    {value : 3, label : '기타'},
                ],
                pages : 0,
                page : 1,
                $socket : '',
            }
        },
        async created(){
            await this.handleGetQList();
            const app = getCurrentInstance();
            this.$socket = app.appContext.config.globalProperties.$socket;
        },
        computed: { 
            questioncontent() { 
                return this.QList_Modal.questioncontent.split('\n').join('<br>');
            }
        },
        mounted() {
            this.$socket.on("QuestionIn", async (recv) => {
                console.log(recv);
                await this.handleGetQList();
            })
        },

        methods : {
            async handlePageChange(val){
                this.page = val;
                await this.handleGetQList();
            },
            async selectCate1(){
                await this.handleGetQList();
            },
            async handleGetQList(){
                const url = `REST/api/question/all/selectlist?reply=false&kind=${this.selected}&page=${this.page}`;
                const response = await axios.get(url);
                console.log(response);
                if(response.data.result === 1){
                    this.QList = response.data.list;
                    this.pages = response.data.count;
                    // console.log(this.response);
                }
            },
            async handleEdit(val){
                this.showModal = true;
                const url = `REST/api/question/select?no=` + val;
                const response = await axios.get(url);
                // console.log(response);
                if(response.data.result === 1){
                    this.QList_Modal = response.data.question;
                    // console.log(this.QList_Modal);

                    if(this.QList_Modal.questionkind === 1){
                        this.QList_Modal.questionkind = '상품문의';
                    }
                    else if(this.QList_Modal.questionkind === 2){
                        this.QList_Modal.questionkind = '배송문의';
                    }else this.QList_Modal.questionkind = '기타';

                    this.PList_Modal = response.data.question.product;
                    // console.log(this.PList_Modal);
                    this.BList_Modal = response.data.question.product.brand;
                    // console.log(this.BList_Modal);
                    this.CList_Modal = response.data.question.product.category;

                    this.MList_Modal = response.data.question.member;
                    // console.log(this.MList_Modal);
                }
            },
            async handleReply(val){
                const url = `REST/api/admin/question/reply/insert?code=` + val;
                const headers = {"Content-Type" : "application/json", token : this.token};
                const body = {
                    answercontent : this.replyContent
                }

                const response = await axios.post(url, body, {headers});
                // console.log(response);
                if(response.data.result === 1){
                    this.successAlertMSG();
                    // alert버튼 누르면 모달창 사라짐
                    document.getElementById('btn_close').click();
                    this.$emit('input', this.pages)
                    await this.handleGetQList();
                }
            },
            async handleQaReport(){
                const url = `REST/api/member/report`;
                const headers = {"Content-Type" : "application/json", token : this.token};
                const body = {
                    useremail : this.MList_Modal.useremail,
                    reportdate : new Date().getTime
                }
                const response = await axios.post(url, body, {headers});
                // console.log(response);
                if(response.data.result === 1){
                    this.failAlertMSG();
                    this.showReportModal = false;
                    
                    // 경고성 게시글에 대한 답변을 남겨서 처리시키기
                    this.replyReportContent = "해당문의는 부적절한 게시글로 판명되어 경고 처리 되었습니다."
                    const url1 = `REST/api/admin/question/reply/insert?code=` + this.QList_Modal.questioncode;
                    const body1 = {
                        answercontent : this.replyReportContent
                    }
                    const response1 = await axios.post(url1, body1, {headers});
                    if(response1.data.result === 1){
                        this.successAlertMSG1();
                        document.getElementById('btn_close').click();
                        this.$emit('input', this.pages)
                        await this.handleGetQList();
                    }
                
                }else {
                    // this.failAlertMSG();
                }
            }

        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.qa_list_wrapper{
    height: 100%;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    font-family: 'Hahmlet', serif;
}
.qa_list_header {
    height : 14%;
    width : 100%;
    display : flex;
    flex-direction: row;
    align-items: center;
}
.qa_list_header p, span {
    width : fit-content;
    margin : 0 0px 0px 40px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
    font-family: 'Hahmlet', serif;
    font-weight : 400;
}
.aci_header > span {
    margin-left : 20px;
}
#chosen {
    font-family: 'Hahmlet', serif;
    font-weight: 700;
    color: black;
    margin : 0 0px 0px 20px;
}
.qa_list_divider{
    border : 0.3px solid black;
    height: 0px;
    width : 100%;
}
.qa_list_content {
    /* border : 1px solid black; */
    height : 80%;
    width : 100%;
    display : flex;
    flex-direction: column;
    padding : 50px;
    margin: 0 auto;
}
.qa_list_content .selector_section{
    width : 100%;
    display: flex;
    justify-content: flex-end;
}
.form-select{
    width: 150px;
}
.qa_list_table{
    margin-top: 15px;
}
.qa_list_table table tbody button{
    border: none;
    width: 80px;
    height: 30px;
    color: white;
    background-color: #49654E;
    border-radius: 3px;
    font-family: 'Hahmlet', serif;
}
.qa_list_table table tbody button:hover{
    opacity: 0.9;
    cursor: pointer;
}
.pagination{
    width: fit-content;
    margin: 0 auto;
    margin-top: 5%;
}

/* 모달 */
.questionContents{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
.questionContents p{
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #49654E;
}
.questionContents .productInfo{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    align-items: center;
    border-top: 0.5px solid #333;
    border-bottom: 0.5px solid #333;
}
.questionContents .productInfo #productinfo{
    /* border: 1px solid black; */
    font-size: 18px;
    padding-left: 10px;
    width: fit-content;
    font-weight: bold;
    height: fit-content;
    margin: 0px;
}
.productInfo table {
    width: 100%;
    margin-bottom: 10px;
}
.productInfo table img{
    width: 100%;
    height: 100%;
}
.productInfo table th,
.productInfo table tbody td{
    text-align: center;
}
.productInfo table th:first-child{
    /* border: 1px solid black; */
    width : 18%;
}
.productInfo table th:nth-child(2){
    /* border: 1px solid black; */
    width : 55%;
}
.productInfo table th:nth-child(3){
    /* border: 1px solid black; */
    width : 10%;
}
.productInfo table th:last-child{
    /* border: 1px solid black; */
    width : 15%;
}

.productInfo table tbody img{
    width: 60px;
    height: 60px;
}
.questionContents .questionContent{
    border: 1px solid rgb(180, 180, 180);
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    width: 100%;
    overflow-y : scroll;
    height: 150px;
    padding : 10px;
}
.question_box{
    width : 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
.question_box .questionbox_title{
    /* border: 1px solid black; */
    width: 100%;
    height: 20%;
    display: inline-flex;
    margin-bottom: 10px;
    justify-content: space-between;
}
.question_box .questionbox_title .form-control{
    /* border: 1px solid black; */
    width: 68%;
    height: 100%;
}
.question_box .questionbox_title .form-select{
    /* border: 1px solid black; */
    width: 30%;
    height: 100%;
}
.questionbox_title p:first-child {
    border: 1px solid rgb(180, 180, 180);
    font-size: 15px;
    color: black;
    font-weight: 100;
    border-radius: 3px;
}
.questionbox_title p:last-child {
    border: 1px solid rgb(180, 180, 180);
    font-size: 15px;
    color: black;
    text-align: center;
    border-radius: 3px;
}
.replysection{
    width : 98%;
    display: flex;
    flex-direction: column;
}
.replysection p{
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #49654E;
}
.replysection .form-control{
    border: 1px solid rgb(180, 180, 180);
    border-radius: 3px;
    width: 100%;
    height: 150px;
    padding : 10px;
}
.modal-footer{
    /* border: 1px solid black; */
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0px;
}
.modal-footer button {
    border: none;
    border-radius: 3px;
    background-color: #49654E;
    width: 100px;
    height: 40px;
    margin: 0px 10px 0px 0px;
    color: white;
    font-family: 'Hahmlet', serif;
}

#closebtn {
    background-color: white;
    width: 100px;
    height: 40px;
    margin: 0px 10px 0px 0px;
    color: #49654E;
    border: 0.5px solid #49654E;
    font-weight: bold;
    font-family: 'Hahmlet', serif;
}
#reportbtn{
    background-color: rgb(161, 1, 1);
    width: 100px;
    height: 40px;
    margin: 0px 10px 0px 0px;
    color: white;
    font-weight: bold;
    font-family: 'Hahmlet', serif;
}
.modal-footer button:hover{
    opacity: 0.8;
    cursor: pointer;

}
.btn_box{
    width: fit-content;
    height: 100%;
}
#reportTitle{
    /* font-weight: bold; */
    font-size : 1rem;
}
.reportInfoBox {
    width: 100%;
    margin-top: 20px;
}
.reportInfoBox label {
    font-weight: bold;
    font-size: 1rem;
    width: fit-content;
}
.reportInfoBox p {
    font-size : 0.9rem;
    width: fit-content;
    margin: 0px 0px 10px 5px;
}
</style>