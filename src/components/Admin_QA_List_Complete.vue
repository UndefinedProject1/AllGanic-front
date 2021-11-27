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
                <el-select v-model="selected" placeholder="Select" @change="selectCate1" class="form-select">
                    <el-option v-for="select in firstQCateList"  :key="select.value" :label="select.label" :value="select.value"></el-option>
                </el-select>
            </div>
            <div class="qa_list_table">
                <el-table :data="QCList">
                    <el-table-column label="문의번호" align="center" prop="QUESTIONCODE" />
                    <el-table-column label="문의제목" align="center" prop="QUESTIONTITLE" />
                    <el-table-column label="물품정보" align="center" prop="PRODUCTCODE" />
                    <el-table-column label="작성일" align="center" prop="QUESTIONDATE" />
                </el-table>
            </div>
            <el-pagination layout="prev, pager, next" :page-count="pages" @current-change="handlePageChange" class="pagination"></el-pagination>
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
                QCList : [],
                firstQCateList : [
                    {value : 1, label : '상품문의'},
                    {value : 2, label : '배송문의'},
                    {value : 3, label : '기타'},
                ],
                pages : 0,
                page : 1
            }
        },
        async created(){
            await this.handleQCList();
        },
        methods : {
            async handlePageChange(val){
                this.page = val;
                await this.handleQCList();
            },
            async selectCate1(){
                await this.handleQCList();
            },
            async handleQCList(){
                const url = `REST/api/question/all/selectlist?reply=true&kind=${this.selected}&page=${this.page}`;
                const response = await axios.get(url);
                console.log(response);
                if(response.data.result === 1){
                    this.QCList = response.data.list;
                    this.pages = response.data.count;
                    console.log(this.QCList);
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
    overflow-x: hidden;
}
.qa_list_Cheader {
    height : 14%;
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
    width : 100%;
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
.pagination{
    width: fit-content;
    margin: 0 auto;
    margin-top: 5%;
}
</style>