<template>
    <div class="info_list">
        <div class="qa_title">
            <p>문의내역</p>
            <p>*본 문의글에 대한 수정은 문의 답변이 이루어지기 전에만 가능합니다.</p>
        </div>
        <div class="qa_insert">
            <!-- 문의내역 Table -->
            <div class="insert_prdcode">
                <el-table :data="QAListData" stripe style="width: 97%; margin-left:20px;" >
                    <el-table-column prop="select" label="문의유형" width="110" align="center">
                        <template #default="scope">
                            <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold;">{{scope.row.QUESTIONKIND}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="title" label="제목" width="220" align="center">
                        <template #default="scope">
                            <el-button type="text" @click="showQaReplay(scope.row.QUESTIONCODE, scope.row.QUESTIONREPLY)" 
                                    style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; font-family: 'Gowun Dodum', sans-serif;
                                            text-decoration-line: underline; cursor:pointer;" >
                                    {{scope.row.QUESTIONTITLE}}
                            </el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="content" label="내용" width="280" align="center">
                        <template #default="scope">
                            <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold;">{{scope.row.QUESTIONCONTENT}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="문의 일자" width="150" align="center">
                        <template #default="scope">
                            <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold;">{{scope.row.QUESTIONDATE}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="answer" label="답변상태" width="150" align="center">
                        <template #default="scope">
                            <p style="font-size:13px; color:#715036; margin:10px 0px 5px 0px; font-weight:bold; font-family: 'Gowun Dodum', sans-serif;">
                                {{scope.row.QUESTIONREPLY}}
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="title" label="기타" width="150" align="center">
                        <template #default="scope">
                            <el-button  @click="handleDelete(scope.row.QUESTIONCODE)" 
                                    style="font-size:13.5px; color:white; margin:10px 0px 5px 0px; background-color:#715036; font-weight:bold; font-family: 'Gowun Dodum', sans-serif;" >
                                    삭제
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>

    <!-- 문의글 답변 모달창(수정버튼 x) -->
    <el-dialog v-model="showModalANS" title="문의 답변확인 (수정 불가)">
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
                    <p class="form-select">[ {{QList_Modal.questionkind}} ]</p>
                </div>
                <div class="questionContent">
                    {{QList_Modal.questioncontent}}
                </div> 
            </div>
            <hr style="width:100%;"/>
            <div class="replysection">
                <p> 문의 답변 </p>
                <p>{{QAregdate}}</p>
            </div>
            <div class="questionContent">
                {{QAanswer}}
            </div>
        </div>
        <div class="modal-footer">
            <!-- 히든버튼 추가 -->
            <button type="button"  @click="showModalANS = false" id="closebtn">닫기</button>
        </div>
    </el-dialog>

    <!-- 문의글 답변 모달창(수정버튼 o) -> 수정시 문의제목, 내용, 문의종류 필요 -->
    <el-dialog v-model="showModalNoANS" title="문의글(수정 가능)">
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
                    <el-input v-model="QList_Modal.questiontitle" class="form-control" clearable style="font-family: 'Gowun Dodum', sans-serif;"/>
                    <el-select v-model="QList_Modal.questionkind" placeholder="Select" class="form-select">
                        <el-option v-for="select in firstQCateList"  :key="select.value" :label="select.label" :value="select.value"></el-option>
                    </el-select>
                </div>
                <textarea name="content" class="questionContent" row="30" v-model="QList_Modal.questioncontent" v-html="questioncontent" style="font-family: 'Gowun Dodum', sans-serif;"></textarea>
            </div>
            <hr style="width:100%;"/>
            <div class="replysection">
                <p> 문의 답변 </p>
                <p>{{QAregdate}}</p>
            </div>
            <div class="questionContent" v-html="QAnswer"></div>
        </div>
        <div class="modal-footer">
            <!-- 히든버튼 추가 -->
            <button type="button" @click="centerDialogVisible = false" id="btn_close" style="display:none">Close</button>
            <button type="button"  @click="showModalNoANS = false" id="closebtn">닫기</button>
            <button type="button"  @click="handleQaUpdate(QList_Modal.questioncode)" id="updatebtn">수정</button>
        </div>
    </el-dialog>
</template>

<script>
import axios from "axios";
import { ElMessageBox, ElMessage } from 'element-plus'
// import MyPage_Info from '@/components/MyPage_Info.vue';
    export default {
        setup(){
            const deleteConfirm = () => {
                ElMessageBox.confirm(
                    '삭제하시겠습니까?',
                    'Warning',
                    {
                    confirmButtonText: '삭제',
                    cancelButtonText: '취소',
                    type: 'warning',
                    }
                )
                .then(() => {
                    ElMessage({
                        type: 'success',
                        message: '해당 제품이 삭제되었습니다.',
                    })
                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: '삭제 취소',
                    })
                })
            }
            const failAlertMSG = () => {
                ElMessage.error('삭제 실패')
            }
            const infoAlertMSG = () => {
                ElMessage.message('장바구니가 비어있습니다.')
            }
            const warningAlertMSG = () => {
                ElMessage.error('주문하실 제품들을 체크해주세요.')
            }
            return {
                deleteConfirm,
                failAlertMSG,
                infoAlertMSG,
                warningAlertMSG
            }
        },
        data() {
            return {
                token : sessionStorage.getItem("token"),
                member : [],
                QAListData : [],
                showModalANS : false,
                showModalNoANS : false,
                QList_Modal : [],
                PList_Modal : [],
                BList_Modal : [],
                CList_Modal : [],
                QAReply : '',
                showEdit : '',
                QAanswer : '',
                QAregdate : '',
                firstQCateList : [
                    {value : 1, label : '상품문의'},
                    {value : 2, label : '배송문의'},
                    {value : 3, label : '기타'},
                ],
                selected : '',
                centerDialogVisible: false,
            }
        },
        async created() {
            await this.handleQaListGet();
        },
        computed: { 
            questioncontent() { 
                return this.QList_Modal.questioncontent.split('\n').join('<br>');
            },
            QAnswer(){
                return this.QAnswer.split('\n').join('<br>');
            }
        },
        methods : {
            async handleQaListGet() {
                const url = `REST/api/question/member/selectlist`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.get(url, {headers});
                // console.log(response);
                if(response.data.result === 1) {
                    this.QAListData = response.data.list;

                    for(var i=0; i<this.QAListData.length; i++){
                        if(this.QAListData[i].QUESTIONKIND === 1){
                            this.QAListData[i].QUESTIONKIND = '상품문의';
                        }
                        else if(this.QAListData[i].QUESTIONKIND === 2){
                            this.QAListData[i].QUESTIONKIND = '배송문의';
                        }else this.QAListData[i].QUESTIONKIND = '기타';
                    }

                    for(var j=0; j<this.QAListData.length; j++){
                        if(this.QAListData[j].QUESTIONREPLY === true){
                            this.QAListData[j].QUESTIONREPLY = '답변완료';
                        }
                        else {
                            this.QAListData[j].QUESTIONREPLY = '미답변';
                        }
                    }
                    // console.log(this.QAListData);

                }
                else if(response.data.result === 0) {
                    alert("데이터가 존재하지 않습니다.");
                }
            },
            async showQaReplay(val, boolean){
                if(boolean === '답변완료'){
                    this.showModalANS = true;

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
                    }

                    const url2 = `REST/api/member/question/answer?code=${val}`;
                    const headers = {"token" : this.token};
                    const response2 = await axios.get(url2, {headers});
                    // console.log(response2);
                    if(response2.data.answer !== null){
                        this.QAReply = response2.data.answer;
                        this.QAanswer = response2.data.answer.ANSWERCONTENT;
                        this.QAregdate = response2.data.answer.ANSWERDATE;
                    }
                }
                else if(boolean === '미답변'){
                    this.showModalNoANS = true;

                    const url = `REST/api/question/select?no=` + val;
                    const response = await axios.get(url);
                    // console.log(response);
                    if(response.data.result === 1){
                        this.QList_Modal = response.data.question;
                        console.log(this.QList_Modal);
                        this.PList_Modal = response.data.question.product;
                        // console.log(this.PList_Modal);
                        this.BList_Modal = response.data.question.product.brand;
                        // console.log(this.BList_Modal);
                        this.CList_Modal = response.data.question.product.category;
                    }

                    const url2 = `REST/api/member/question/answer?code=${val}`;
                    const headers = {"token" : this.token};
                    const response2 = await axios.get(url2, {headers});
                    if(response2.data.answer === null){
                        this.QAanswer = "해당문의에 대한 답변이 등록되지 않았습니다."
                        this.QAregdate = " ";
                    }
                }
            },
            async handleDelete(val){
                const url = `REST/api/question/delete?no=${val}`;
                const response = await axios.delete(url);
                // console.log(response);
                if(response.data === 1){
                    this.deleteConfirm();
                    await this.handleQaListGet()
                }
                else if(response.data === 0){
                    alert("문의코드가 넘어오지 않음");
                }
                else {
                    alert("error");
                }
            },
            async handleQaUpdate(val){
                const url = `REST/api/question/update?no=${val}`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const body = {
                    questionkind : this.QList_Modal.questionkind,
                    questiontitle : this.QList_Modal.questiontitle, 
                    questioncontent : this.QList_Modal.questioncontent
                }
                const response = await axios.put(url, body, {headers});
                if(response.data.result === 1){
                    alert("수정 성공");
                    await this.handleQaListGet();
                }
            }

        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
.info_list {
    /* border: 1px solid black; */
    width: 98.5%;
    height: 100%;
    margin-left: 30px;
}
.qa_title {
    color: #715036;
    font-weight: bold;
    display: flex;
    /* border: 1px solid black; */
    justify-content: space-between;
    align-items: flex-end;
}
.qa_title p:first-child {
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 20px;
    width: fit-content;
}
.qa_title p:last-child{
    width: fit-content;
    margin: 0 10px 5px 0px;
    font-size: 13px;
    color: rgb(201, 31, 31);
}
.qa_insert {
    border: 3px solid #715036;
    width: 100%;
    height: 93.5%;
    border-radius: 5px;
}
/* .insert_date {
    display: flex;
    margin-top: 10px;
    margin-left: 15px;
} */
.solid {
    border: 1px solid rgb(228, 227, 227);
    width: 90%;
    margin-bottom: 2px;
    margin-top: 10px;
    margin-left: 42px;
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
    display: inline-flex;
    justify-content: space-between;
    align-items: flex-end;
}
.replysection p:last-child{
    display: inline-flex;
    font-size: 14px;
    font-weight: 200;
    padding-right: 10px;
    justify-content: space-between;
}
.modal-footer{
    /* border: 1px solid black; */
    display: inline-flex;
    justify-content: flex-end;
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
    font-family: 'Gowun Dodum', sans-serif;
}
#updatebtn{
    border: none;
    border-radius: 3px;
    background-color: #49654E;
    width: 100px;
    height: 40px;
    margin: 0px 10px 0px 0px;
    color: white;
    font-family: 'Gowun Dodum', sans-serif;  
}
#closebtn {
    background-color: white;
    width: 100px;
    height: 40px;
    margin: 0px 10px 0px 0px;
    color: #49654E;
    border: 0.5px solid #49654E;
    font-weight: bold;
    font-family: 'Gowun Dodum', sans-serif;
}
.modal-footer button:hover{
    opacity: 0.8;
    cursor: pointer;

}

</style>