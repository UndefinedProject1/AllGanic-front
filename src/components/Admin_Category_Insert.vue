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
                    <h5>Fashion <small>(100)</small></h5>
                    <h6>의류</h6>
                    <h6>잡화</h6>
                    <h5>Life-Style <small>(300)</small></h5>
                    <h6>주방</h6>
                    <h6>욕실</h6>
                    <h6>기타</h6>
                    <h5>Beauty <small>(400)</small></h5>
                    <h6>헤어</h6>
                    <h6>스킨</h6>
                    <h6>바디</h6>
                    <h5>Food <small>(200)</small></h5>
                    <h6>마실거리</h6>
                </div>

            </div>
            <div class="cate_insert_section">
                <div class="cate_insert_selector">
                    <select class="form-select"  aria-label="Default select example" @click="handle_catebig" v-model="selected1">
                        <option value="100" >100</option>
                        <option value="200" >200</option> 
                        <option value="300" >300</option>
                        <option value="400" >400</option>
                    </select>
                    <select class="form-select" aria-label="Default select example" @click="handle_catemiddle" @change="watching" v-model="selected2">
                        <!-- <option selected @click="handle_input">직접입력</option> -->
                        <option :value="select" v-for="select in resultset" v-bind:key="select">{{select}}</option>
                    </select>
                    <!-- <div class="form-group" v-for="(input,k) in inputs" :key="k" >
                                <input type="text" class="form-control" v-model="input.name">
                                    <span>
                                        <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1"></i>
                                    </span>
                    </div> -->
                </div>
                <div class="cate_insert_input">
                    <input type="text" class="form-control" id="formGroupExampleInput" name="selects.categoryname" v-model="selects.categoryname" placeholder="코드입력">
                    <input type="text" class="form-control" id="formGroupExampleName" v-model="cate_name" placeholder="이름 입력">
                    <button type="button" @click="handleInsertCate">카테고리 추가</button>
                </div>
                <div class="cate_insert_input">
                    <input type="text" class="form-control" id="formGroupExampleInput" v-model="cate_insert" placeholder="코드 입력">
                    <input type="text" class="form-control" id="formGroupExampleName" v-model="cate_name" placeholder="이름 입력">
                    <button type="button" @click="handleInsertCate">카테고리 추가</button>
                </div>
                <div class="cate_insert_note">
                    <h6>*<mark>ISBN코드</mark>활용법</h6>
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
    export default {
        data() {
            return {
                select : '',
                selected1 : '',
                selected2 : '',
                selects: [], 
                resultset : [],
                catetegorycode : '',
                categoryname : '',
                token : sessionStorage.getItem("token"),
                inputs : [
                    {
                        name : ''
                    }
                ],
            }
        },
        components : {
        },
        methods : {
            watching () {
                if(this.selected2 === "직접입력") {
                    alert("dd");
                }
            },
            async add() {
                this.inputs.push({ name: '' });
            },
            // async remove(index) {
            //     this.inputs.splice(index, 1);
            // },
            async handle_catemiddle() {
                const headers = {"Content-Type" : "application/json", token : this.token};
                const url = `REST/api/select_cproductnum?code=` + this.selected1;
                const response = await axios.get(url,headers);
                console.log(response);
                if(response.data.result ===1) {
                    this.selects = response.data.list;

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
            async handle_catebig() {
                const headers = {"Content-Type" : "application/json", token : this.token};
                const url = `REST/api/select_cproductnum?code=` + this.selected1;
                const response = await axios.get(url,headers);
                // console.log(response);
            },
            async handleInsertCate() {
                const headers = {"Content-Type" : "application/json", token : this.token};
                const body = {
                    categorycode : this.selected1 + this.selected2 + this.cate_insert,
                    categoryname : this.cate_name
                }
                // console.log(body);
                const url =  `REST/api/admin/category_insert`;
                const response = await axios.post(url, body, {headers});
                // console.log(response);
                if(response.data.result === 1) {
                   alert("dd");
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
    font-family: 'Gowun Dodum', sans-serif;
}
.aci_header {
    height : 15%;
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
    border : 0.3px solid black;
    height: 0.3px;
    width : 100%;
}
.aci_content{
    padding: 70px;
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
    font-size: 20px;
    font-weight: bold;
}
.cate_list {
    border : 1px solid rgb(206 212 217);
    border-radius: 3px;
    padding : 0px 92px 10px 29px;
}
.cate_list h5 {
    font-weight: bold;
    color: #49654E;
    margin-top: 20px;
}
small{
    font-size: 0.75em;
}
.cate_list h6{
    margin: 8px 0px 10px 10px;
}
.cate_insert_section{
    /* border: 1px solid black; */
    width: 60%;
    height: 400px;
    display: flex;
    flex-direction: column;
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
.form-control{
    width: 50%;
    height: 100%;
    margin-right: 10px;
}
button {
    height: 37px;
    width : 120px;
    background-color: #49654E;
    border-radius: 5px;
    color: white;
    font-size : 15px;
}
Button:hover{
    opacity: 0.9;
}
.cate_insert_note{
    border : 1px solid rgb(206 212 217);
    width : 100%;
    height : 50%;
    padding: 20px ;
    display: flex;
    flex-direction: column;
}
.cate_insert_note h6{
    font-weight: bold;
}
.cate_insert_note small {
    font-size: 0.85em;
}
.cate_insert_note p {
    margin-bottom: 5px;
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