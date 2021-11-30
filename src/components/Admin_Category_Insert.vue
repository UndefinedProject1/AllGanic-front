<template>

    <div class="aci_wrapper">
        <div class="aci_header">
            <p>상품관리</p>
            <span> > </span>
            <p id="chosen">카테고리 추가</p>
        </div>
        <div class="aci_divider"></div>
        <div class="aci_content">
            <div class="cate_list_section">
                <p>현재 카테고리 목록</p>
                <div class="cate_list">
                    <h3>Fashion <small>(100)</small></h3>
                    <h4>의류</h4>
                    <h4>잡화</h4>
                    <h3>Life-Style <small>(300)</small></h3>
                    <h4>주방</h4>
                    <h4>욕실</h4>
                    <h4>기타</h4>
                    <h3>Beauty <small>(400)</small></h3>
                    <h4>헤어</h4>
                    <h4>스킨</h4>
                    <h4>바디</h4>
                    <h3>Food <small>(200)</small></h3>
                    <h4>마실거리</h4>
                </div>
            </div>
            <div class="cate_insert_section">
                <div class="cate_insert_selector">
                    <el-select v-model="selected1" placeholder="Select" class="form-select" >
                        <el-option v-for="item in firstCateList" :key="item.value" :label="item.value" :value="item.value">
                            <span style="float: left; font-size: 15px;">{{ item.value }}</span>
                            <span style="float: right; color: var(--el-text-color-secondary); font-size: 13px;">{{ item.label }}</span>
                        </el-option>
                    </el-select>
                    <el-select v-model="selected2" placeholder="Select" @click="handle_catemiddle" @change="watching" class="form-select">
                        <el-option v-for="select in resultset"  :key="select" :label="select" :value="select"></el-option>
                    </el-select>
                </div>
                <div class="cate_insert_input" v-if="openCateInput">
                    <el-input v-model="cate_insert1" placeholder="코드 입력" clearable class="form-control" style="width:275px; height:30px;"/>
                    <el-input v-model="cate_name1" placeholder="이름 입력" clearable class="form-control" style="width:275px; height:30px;"/>
                </div>
                <div class="cate_insert_input">
                    <el-input v-model="cate_insert" placeholder="코드 입력" clearable class="form-control"/>
                    <el-input v-model="cate_name" placeholder="이름 입력" clearable class="form-control"/>
                    <button type="button" @click="handleInsertCate">카테고리 추가</button>
                </div>
                <div class="cate_insert_note">
                    <h4>*<mark>ISBN코드</mark>활용법</h4>
                    <p><small>앞 세자리는 대분류 카테고리 코드, 중간 두자리는 중분류 카테고리 코드, 마지막 끝 한자리는 소분류 카테고리 코드</small></p>
                    <p><small><strong>예시) 핸드워시</strong></small></p>
                    <div class="cate_code_ex_container">
                        <div class="cate_code_ex">
                            <p><strong><u>400</u></strong></p>
                            <p><small>대분류</small></p>
                        </div>
                        <div class="cate_code_ex">
                            <p><strong><u>42</u></strong></p>
                            <p><small>중분류</small></p>
                        </div>
                        <div class="cate_code_ex">
                            <p><strong><u>5</u></strong></p>
                            <p><small>소분류</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { ElMessage } from 'element-plus'
    export default {
        setup() {
            const successAlertMSG = () => {
                ElMessage.success('카테고리등록 성공')
            }
            const failAlertMSG = () => {
                ElMessage.error('error')
            }
            return {
                successAlertMSG,
                failAlertMSG
            }
        },
        data() {
            return {
                select : '',
                selected1 : '',
                selected2 : '',
                selects: [], 
                resultset : [],
                catetegorycode : '',
                categoryname : '',
                cate_insert : '',
                cate_name : '',
                cate_insert1 : '',
                cate_name1 : '',
                token : sessionStorage.getItem("token"),
                openCateInput : false,
                firstCateList : [
                    {value : 100, label : '패션'},
                    {value : 200, label : '식품'},
                    {value : 300, label : '생활잡화'},
                    {value : 400, label : '뷰티'},
                ],
                value : ''
            }
        },
        components : {
        },
        methods : {
            watching () {
                if(this.selected2 === "직접입력") {
                    this.openCateInput = true;
                }
            },
            async handle_catemiddle() {
                const headers = {"Content-Type" : "application/json"};
                const url = `REST/api/select_catenum?code=` + this.selected1;
                const response = await axios.get(url, {headers});
                console.log(response);
                if(response.data.result ===1) {
                    this.selects = response.data.list;
                    console.log(this.selects);

                    //categorycode 추출
                    var arr = [];
                    for(var tmp of this.selects){
                        // console.log(tmp.categorycode);
                        const str1 = tmp.categorycode.substring(3,5);
                        arr.push(str1);
                    }
                    //categorycode 중복제거
                    const set = new Set(arr);
                    this.resultset = [...set];
                    this.resultset.push("직접입력");
                    
                    console.log(arr);
                    console.log(this.resultset);
                }
            },
            async handleInsertCate() {
                const headers = {"Content-Type" : "application/json", token : this.token};
                const body = {
                    categorycode : this.selected1 + this.selected2 + this.cate_insert,
                    categoryname : this.cate_name
                }
                const body1 = {
                    categorycode : this.selected1 + this.cate_insert1 + this.cate_insert,
                    categoryname : this.cate_name
                }
                // console.log(body);
                const url =  `REST/api/admin/category_insert`;
                if(this.selected2 !== "직접입력"){
                    const response = await axios.post(url, body, {headers});
                    console.log(response);
                    if(response.data.result === 1) {
                        this.successAlertMSG();
                    }
                    else {
                        this.failAlertMSG();
                    }
                }
                else {
                    const response1 = await axios.post(url, body1, {headers});
                    console.log(response1);
                    if(response1.data.result === 1) {
                        this.successAlertMSG();
                    }
                    else {
                        this.failAlertMSG();
                    }
                }
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');
.aci_wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    font-family: 'Gowun Dodum', sans-serif;
}
.aci_header {
    height : 14%;
    width : 100%;
    display : flex;
    flex-direction: row;
    align-items: center;
}
.aci_header p, span {
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
.aci_divider{
    border: 0.3px solid black;
    height: 0px;
    width: 100%;
}
.aci_content{
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.cate_list_section{
    /* border: 1px solid black; */
    width: 30%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cate_list_section P {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.cate_list {
    border : 1px solid rgb(206 212 217);
    border-radius: 3px;
    width : 70%;
    padding : 0px 0px 20px 60px;
}
.cate_list h3 {
    font-weight: bold;
    color: #49654E;
    margin-top: 15px;
}
small{
    font-size: 0.75em;
}
.cate_list h4{
    margin: 5px 0px 10px 10px;
}
.cate_insert_section{
    /* border: 1px solid black; */
    width: 60%;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
}
.cate_insert_selector{
    /* border: 1px solid black; */
    width : 100%;
    height : fit-content;
    display : inline-flex;
}
.cate_insert_selector .form-select{
    width : 50%;
    height : fit-content;
    margin-right : 10px;
}
.cate_insert_input{
    /* border: 1px solid black; */
    width: 100%;
    height : fit-content;
    display: inline-flex;
    justify-content: flex-end;
    padding: 10px;
}
.cate_insert_input{
    /* border: 1px solid black; */
    width: 100%;
    height : fit-content;
    display: inline-flex;
    justify-content: flex-start;
    padding: 10px;
}
.form-control{
    width: 50%;
    height: 100%;
    margin-right: 10px;
}
button {
    height: 37px;
    width : 125px;
    background-color: #49654E;
    border-radius: 5px;
    color: white;
    font-size : 14px;
    font-family: 'Gowun Dodum', sans-serif;
    border: none;
}
Button:hover{
    opacity: 0.9;
}
.cate_insert_note{
    border : 1px solid rgb(206 212 217);
    width : 100%;
    height : 60%;
    padding: 20px ;
    display: flex;
    flex-direction: column;
}
.cate_insert_note h4{
    font-weight: bold;
    margin : 10px 0px;
}
.cate_insert_note small {
    font-size: 0.89em;
}
.cate_insert_note p {
    margin-bottom: 3px;
}
.cate_code_ex_container{
    display: inline-flex;
    width: fit-content;
    margin: 0 auto;
}
.cate_code_ex {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
}
.cate_code_ex p{
    margin: 0;
}
.cate_code_ex strong{
    font-size: 18px;
}
input.form-control {
    
    width: 50% !important;
    height: 30px;
}
</style>