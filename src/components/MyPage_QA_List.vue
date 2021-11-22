<template>
    <div class="info_list">
        <div class="qa_title">
            <p>문의내역</p>
        </div>
        <div class="qa_insert">
            <!-- 문의내역 Table -->
            <div class="insert_prdcode">
                <el-table :data="QAListData" stripe style="width: 95%; margin-left:25px;" >
                    <el-table-column prop="select" label="문의유형" width="150" align="center">
                        <template #default="scope">
                            <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.QUESTIONKIND}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="title" label="제목" width="200" align="center">
                        <template #default="scope">
                            <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;" >{{scope.row.QUESTIONTITLE}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="content" label="내용" width="320" align="center">
                        <template #default="scope">
                            <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.QUESTIONCONTENT}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="날짜" width="250" align="center">
                        <template #default="scope">
                            <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.QUESTIONDATE}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="answer" label="답변상태" width="130" align="center">
                        <template #default="scope">
                            <el-button size="small" 
                                        style="font-size:13px; color:white; margin:10px 0px 5px 0px; 
                                                font-weight:bold; background-color:#715036; font-family: 'Gowun Dodum', sans-serif;"
                                        @click="showQaReplay(scope.row.QUESTIONCODE)">
                                        {{scope.row.QUESTIONREPLY}}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>

    <!-- 문의글 답변 모달창 -->
    <el-dialog v-model="showModal" title="답글 현황">
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
            <div class="questionContent">
                {{QList_Modal.questioncontent}}
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
import axios from "axios";
// import MyPage_Info from '@/components/MyPage_Info.vue';
    export default {
        data() {
            return {
                token : sessionStorage.getItem("token"),
                member : [],
                QAListData : [],
                showModal : false,
                QList_Modal : [],
                PList_Modal : [],
                BList_Modal : [],
                CList_Modal : []
            }
        },
        async created() {
            await this.handleQaListGet();
        },
        methods : {
            async handleQaListGet() {
                const url = `REST/api/question/member/selectlist`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.get(url, {headers});
                console.log(response);
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
                        else this.QAListData[j].QUESTIONREPLY = '미답변';
                    }
                }
                else if(response.data.result === 0) {
                    alert("데이터가 존재하지 않습니다.");
                }
            },
            async showQaReplay(val){
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

                const url2 = `REST/api/member/question/answer?code=${this.QList_Modal.questioncode}`;
                const headers = {"token" : this.token};
                const response2 = await axios.get(url2, headers);
                console.log(response2);
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
}
.qa_title > p {
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 20px;
}
.qa_insert {
    border: 1px solid black;
    width: 100%;
    height: 93.5%;
    border-radius: 5px;
}
.insert_date {
    display: flex;
    margin-top: 10px;
    margin-left: 15px;
}
.solid {
    border: 1px solid rgb(228, 227, 227);
    width: 90%;
    margin-bottom: 2px;
    margin-top: 10px;
    margin-left: 42px;
}
.insert_prdcode {
    width: 100%;
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