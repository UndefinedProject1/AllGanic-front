<template>
    <div class="qa_list_Cwrapper">
        <div class="qa_list_Cheader">
            <p>FAQ관리</p>
            <span> > </span>
            <p id="chosen">문의글(답변완료)</p>
        </div>
        <div class="qa_list_Cdivider"></div>
        <div class="qa_list_Ccontent">
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="list in QCList" v-bind:key="list">
                            <th scope="row">{{list.QUESTIONCODE}}</th>
                            <td>{{list.QUESTIONTITLE}}</td>
                            <td><router-link :to="`/product_detail?code=${list.PRODUCTCODE}`">물품정보</router-link></td>
                            <td>{{list.QUESTIONDATE}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data(){
            return{
                token : sessionStorage.getItem("token"),
                selected : '',
                QCList : []
            }
        },
        async created(){
            await this.handleQCList();
        },
        methods : {
            async handleQCList(){
                const url = `REST/api/question/all/selectlist?reply=true&kind=${this.selected}`;
                const response = await axios.get(url);
                // console.log(response);
                if(response.data.result === 1){
                    this.QCList = response.data.list;
                    console.log(this.QList);
                }
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.qa_list_Cwrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
}
.qa_list_Cheader {
    height : 15%;
    width : 100%;
    display : flex;
    flex-direction: row;
    align-items: center;
}
.qa_list_Cheader p, span {
    width : fit-content;
    margin : 0 0px 0px 40px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight : 400;
}
.qa_list_Cheader > span {
    margin-left : 20px;
}
#chosen {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: 700;
    color: black;
    margin : 0 0px 0px 20px;
}
.qa_list_Cdivider{
    border : 0.3px solid black;
    height: 0.3px;
    width : 100%;
}
.qa_list_Ccontent{
    height : 80%;
    width : 1100px;
    display : flex;
    flex-direction: column;
    padding : 50px;
    margin: 0 auto;
}
.qa_list_Ccontent .selector_section{
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
.qa_list_table table th,
.qa_list_table table tbody td{
    text-align: center;
}
</style>