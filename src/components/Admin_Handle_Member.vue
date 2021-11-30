<template>
    <div class="handleMember_wrapper">
        <div class="handleMember_box">
            <h2>회원관리</h2>
            <div class="chart_divider"></div>
            <div class="memberList_box">
                <div class="memberList_table" >
                    <el-table :data="tableData">
                        <el-table-column align="center" label="이메일" prop="USEREMAIL" />
                        <el-table-column align="center" label="이름" prop="USERNAME" />
                        <el-table-column align="center" label="구매건수" prop="ORDERCNT" />
                        <el-table-column align="center" label="악성리뷰 및 문의"  prop="REPORTDATE" sortable width="180"/>
                        <!-- <el-table-column align="center" label="악성리뷰 및 문의 날짜"  prop="REPORTDATE" width="180"/> -->
                        <el-table-column align="center" label="위조금액 구매시도" prop="REPORTCOUNT" sortable width="180" :formatter="formatter"  />
                        <el-table-column align="center" label="관리">
                            <template #default="scope">
                                <el-button size="mini" type="danger" @click="handleDeleteModal(scope.row.USEREMAIL, scope.row.USERNAME)">Delete</el-button>
                            </template>
                            
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>

    <el-dialog v-model="showDeleteModal" title="회원 탈퇴 처리" width="30%" :before-close="handleClose" class="reportModal">
        <p id="reportTitle">다음 회원에 관하여 탈퇴 처리를 진행하시겠습니까?</p>
        <div class="reportInfoBox">
            <label>회원정보</label>
            <p>- {{firedName}} ( {{firedEmail}} )  </p>
            <label>탈퇴처리 사유</label>
            <el-radio-group v-model="kind" class="radioBox">
                <el-radio :label="1">악성리뷰 및 문의건</el-radio>
                <el-radio :label="2">위조금액 건</el-radio>
            </el-radio-group>
        </div>

        <template #footer>
            <span class="dialog-footer">
            <!-- 히든버튼 추가 -->
            <button type="button" @click="showDeleteModal = false" id="btn_close" style="display:none">Close</button>
            <el-button @click="showDeleteModal = false">취소</el-button>
            <el-button type="primary" @click="handleDeleteMember(firedName, firedEmail)">완료</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import axios from 'axios';
import { ElMessage } from 'element-plus'
    export default {
        setup() {
            const failAlertMSG = () => {
                ElMessage.error('위조금액으로 세 번 적발된 회원이 있습니다.')
            }
            const successAlertMSG = () => {
                ElMessage.success('탈퇴 처리가 완료되었습니다.')
            }
            return {
                failAlertMSG,
                successAlertMSG
            }
        },
        data(){
            return{
                token: sessionStorage.getItem("token"),
                tableData: [],
                sorting : [],
                gridData : [],
                reportDateList : [],
                showPopUp : false,
                showDeleteModal : false,
                firedEmail : '',
                firedName : '',
                kind : '',
                count : 0,
                REPORTDATEN : [],
                DATE : [],
                TEST : []
            }
        },
        async created() {
            await this.tableDataGet();
            await this.getCount();
        },
        methods : {
            async getCount(){
                const url = `REST/api/admin/forge/member`;
                const headers = {"token" : this.token};
                const response = await axios.get(url, {headers});
                this.count = response.data;
                if(this.count >= 3){
                    this.failAlertMSG();
                }
            },
            // async handleSorting(val){
            //     this.showPopUp = true;
            //     const url = `REST/api/admin/member/list`;
            //     const headers = {"Content-Type" : "application/json", "token" : this.token};
            //     const response = await axios.get(url, { headers });
            //     console.log("===========================");
            //     // console.log(response);
            //     if(response.data.result === 1) {
            //         this.gridData = response.data.list;

            //         for(var i=0; i<this.gridData.length; i++){
            //             if(val === this.gridData[i].USEREMAIL){
            //                 return this.gridData[i].REPORTDATE;
            //             }
            //         }
            //     }
            // },
            async tableDataGet() {
                const url = `REST/api/admin/member/list`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.get(url, { headers });
                console.log("===========================");
                // console.log(response);
                if(response.data.result === 1) {
                    this.tableData = response.data.list;
                    // console.log(this.tableData);

                    // for(var j=0;j<this.tableData.length; j++){
                    //     var a, b, c, d, e, f, g;
                    //     a = this.tableData[j].REPORTDATEN;
                    //     b = this.tableData[j].REPORTDATE;
                    //     c = this.tableData[j].USEREMAIL;
                    //     d = this.tableData[j].USERNAME;
                    //     e = this.tableData[j].ORDERCNT;
                    //     f = this.tableData[j].REPORTCOUNT;

                    //     this.TEST = a.concat
                    //     this.TEST[j] = g;
                    //     this.DATE[j]= this.tableData[j].REPORTDATE;
                    //     console.log(this.DATE);
                    // }
                    // this.tableData.DATE.push(this.DATE);
                    // //this.tableData.push(this.DATE);
                    // console.log(this.tableData);

                    for(var i=0; i<this.tableData.length; i++){
                        this.sorting[i] = Math.floor(this.tableData[i].REPORTDATE.length / 11);
                        this.tableData[i].REPORTDATE = this.sorting[i];
                    }
                    console.log(this.tableData);
                }
            },
            // dateGet : async function(){
            //     for(var i=0; i<this.tableData.length; i++){
            //         this.sorting[i] = this.tableData[i].split[','];
            //         console.log(this.sorting);
            //     }
            // },
            handleDeleteModal(email, name){
                this.showDeleteModal = true;
                this.firedEmail = email;
                this.firedName = name;
            },
            async handleDeleteMember(name, email){
                const url = `REST/api/admin/delete/sendEmail?kind=${this.kind}`;
                console.log(this.kind);
                const body1 = {
                    useremail : email,
                    username : name
                }
                console.log(body1);
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.post(url, body1, {headers});
                console.log(response);
                if(response.data === 1){
                    const url1 = `REST/api/admin/delete/member`;
                    const body = {
                        useremail : email,
                    }
                    const response1 = await axios.delete(url1, {headers:headers, data : body});
                    console.log(response1);
                    if(response1.data === 1){
                        this.successAlertMSG();
                        document.getElementById('btn_close').click();
                        await this.tableDataGet();
                    }
                }
            }
        },
        formatter(row) {
            return row.REPORTDATE
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500&display=swap');

.handleMember_wrapper{
        /* height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    font-family: 'Gowun Dodum', sans-serif; */
    width : 100%;
    height: 100%;
    display : inline-flex;
    /* border: 1px solid black; */
    padding : 10px;
    font-family: 'Gowun Dodum', sans-serif;

}
.handleMember_box{
    /* border: 1px solid black; */
    width : 100%;
    height : 99% !important;
    margin : 10px;
    padding : 5px;
    display: flex;
    flex-direction: column;
    position: relative;
}
/* .chart_divider{
    border: 0.3px solid black;
    height: 0px;
    width: 100%;
} */
.handleMember_box > h2 {
    /* border: 1px solid black; */
    width : fit-content;
    margin: 20px 0px 20px 10px;
}
.memberList_box {
    position: relative;
    border: 0.3px solid #333333;
    width: 100%;
    height: fit-content;
    border-radius: 2px;
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.memberList_table table th,
.memberList_table table tbody td{
    /* border: 1px solid black; */
    text-align: center;
}
#reportTitle{
    /* font-weight: bold; */
    font-size : 1rem;
}
.reportInfoBox {
    width: 100%;
    margin-top: 20px;
}
.reportInfoBox p{
    margin-bottom: 10px;
}
.reportInfoBox label {
    font-weight: bold;
    font-size: 1rem;
    width: fit-content;
}
.reportInfoBox .radioBox {
    width: 100%;
    margin-top: 5px;
}
</style>