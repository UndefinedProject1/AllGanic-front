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
                    <el-table-column label="문의번호" prop="QUESTIONCODE" />
                    <el-table-column label="문의제목" prop="QUESTIONTITLE" />
                    <el-table-column label="물품정보" prop="PRODUCTCODE" />
                    <el-table-column label="작성일" prop="QUESTIONDATE" />
                    <el-table-column align="right">
                        <template #default="scope">
                            <el-button size="mini" @click="handleEdit(scope.row.QUESTIONCODE)">답글달기</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
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
            <div class="questionContent">
                {{QList_Modal.questioncontent}}
            </div>
            <hr/>
            <div class="modalReply">
                <el-input v-model="replyContent" :rows="6" type="textarea" placeholder="답글 작성란"  class="form-control"/>
            </div>
        </div>
        <div class="modal-footer">
            <!-- 히든버튼 추가 -->
            <button type="button" id="btn_close" style="display:none" @click="showModal = false">Close</button>
            <button type="button"  @click="showModal = false" id="closebtn">닫기</button>
            <button type="button" @click="handleReply(QList_Modal.questioncode)">작성완료</button>
        </div>
    </el-dialog>


</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                token : sessionStorage.getItem("token"),
                selected : '',
                showModal :  false,
                QList : [],
                QList_Modal : [],
                PList_Modal : [],
                BList_Modal : [],
                CList_Modal : '',
                replyContent : '',
                firstQCateList : [
                    {value : 1, label : '상품문의'},
                    {value : 2, label : '배송문의'},
                    {value : 3, label : '기타'},
                ],
            }
        },
        async created(){
            await this.handleGetQList();
        },
        methods : {
            async selectCate1(){
                await this.handleGetQList();
            },
            async handleGetQList(){
                const url = `REST/api/question/all/selectlist?reply=false&kind=${this.selected}`;
                const response = await axios.get(url);
                // console.log(response);
                if(response.data.result === 1){
                    this.QList = response.data.list;
                    console.log(this.QList);
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
                    this.PList_Modal = response.data.question.product;
                    // console.log(this.PList_Modal);
                    this.BList_Modal = response.data.question.product.brand;
                    // console.log(this.BList_Modal);
                    this.CList_Modal = response.data.question.product.category;
                }
            },
            async handleReply(val){
                const url = `REST/api/admin/question/reply/insert?code=` + val;
                const headers = {"Content-Type" : "application/json", token : this.token};
                const body = {
                    answercontent : this.replyContent
                }

                const response = await axios.post(url, body, {headers});
                console.log(response);
                if(response.data.result === 1){
                    alert("답글등록완료");
                    // alert버튼 누르면 모달창 사라짐
                    document.getElementById('btn_close').click();
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
    font-family: 'Gowun Dodum', sans-serif;
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
    font-family: 'Gowun Dodum', sans-serif;
    font-weight : 400;
}
.aci_header > span {
    margin-left : 20px;
}
#chosen {
    font-family: 'Gowun Dodum', sans-serif;
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
    width : 1100px;
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
    font-family: 'Gowun Dodum', sans-serif;
}
.qa_list_table table tbody button:hover{
    opacity: 0.9;
    cursor: pointer;
}

/* 모달 */
.questionContents{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
.questionContents .productInfo{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
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
.productInfo table tbody img{
    width: 60px;
    height: 60px;
}
.questionContents .questionContent{
    border: 1px solid rgb(180, 180, 180);
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    margin: 10 auto;
    width: 97%;
    height: 150px;
    padding : 10px;
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