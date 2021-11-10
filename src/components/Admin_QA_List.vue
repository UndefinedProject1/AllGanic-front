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
                <select class="form-select" aria-label="Default select example" v-model="selected" @change="selectCate1">
                    <option value="1">상품문의</option>
                    <option value="2">배송문의</option> 
                    <option value="3">기타</option>
                </select>
            </div>
            <div class="qa_list_table">
                <table class="table table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">문의번호</th>
                            <th scope="col">문의제목</th>
                            <th scope="col">물품정보</th>
                            <th scope="col">작성일</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in QList" v-bind:key="list">
                            <th scope="row">{{list.QUESTIONCODE}}</th>
                            <td>{{list.QUESTIONTITLE}}</td>
                            <td><router-link :to="`/product_detail?code=${list.PRODUCTCODE}`">물품정보</router-link></td>
                            <td>{{list.QUESTIONDATE}}</td>
                            <td>
                                <button type="button" @click="showModal(list.QUESTIONCODE)"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">답글달기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">{{QList_Modal.questiontitle}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="questionContents">
                        <div class="productInfo">
                            <p id="productinfo">상품정보</p>
                            <div class="infoContainer">
                                <p>{{BList_Modal.brandname}}</p>
                                <img :src="`REST/api/select_productimage?no=${PList_Modal.productcode}`">
                                <p>{{PList_Modal.productname}}</p>
                            </div>

                        </div>
                        <div class="questionContent">
                            {{QList_Modal.questioncontent}}
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                selected : '',
                QList : [],
                QList_Modal : [],
                PList_Modal : [],
                BList_Modal : [],
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
                    // console.log(this.QList);
                }
            },
            async showModal(val){
                const url = `REST/api/question/select?no=` + val;
                const response = await axios.get(url);
                // console.log(response);
                if(response.data.result === 1){
                    this.QList_Modal = response.data.question;
                    // console.log(this.QList_Modal);
                    this.PList_Modal = response.data.question.product;
                    // console.log(this.PList_Modal);
                    this.BList_Modal = response.data.question.product.brand;
                    console.log(this.BList_Modal);
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
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
}
.qa_list_header {
    height : 15%;
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
    height: 0.3px;
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
.qa_list_table table th,
.qa_list_table table tbody td{
    text-align: center;
}
.qa_list_table table tbody button{
    border: none;
    width: 80px;
    height: 30px;
}

/* 모달 */
.questionContents{
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.questionContents .productInfo{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
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
.infoContainer{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    align-items: center;
}
.questionContents .infoContainer p{
    width: fit-content;
    height: fit-content;
    margin-bottom: 5px;
}
.questionContents .infoContainer img{
    width: 80px;
    height: 80px;
    margin: 0 auto;
}
.questionContents .questionContent{
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width : calc(100% - 200px);
    height: 300px;
}
</style>