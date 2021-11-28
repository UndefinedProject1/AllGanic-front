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
                        <el-table-column align="center" label="악성리뷰 및 문의"  prop="REPORTDATE" sortable width="180">
                            <template #default="scope">
                                <el-popover placement="right-end" title="Title" :width="200" trigger="hover">  
                                    <template #reference>
                                        <el-button>{{scope.row.REPORTDATE}}</el-button>
                                    </template>
                                    <el-table :data="gridData">
                                        <el-table-column width="150" property="date" label="date"></el-table-column>
                                    </el-table>
                                </el-popover>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="위조금액 구매시도" prop="REPORTCOUNT" sortable width="180" :formatter="formatter"  />
                        <el-table-column align="center" label="관리">
                        <el-button size="mini" type="danger" @click="handleMemberDelete">Delete</el-button>
                        </el-table-column>
                    </el-table>
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
                token: sessionStorage.getItem("token"),
                tableData: [],
                sorting : [],
                reportDateList : []
            }
        },
        async created() {
            await this.tableDataGet();
        },
        methods : {
            handleSorting(){
                const url = `REST/api/admin/member/list`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.get(url, { headers });
                console.log("===========================");
                // console.log(response);
                if(response.data.result === 1) {
                    this.tableData = response.data.list;
                    // console.log(this.tableData);
                }
            },
            async tableDataGet() {
                const url = `REST/api/admin/member/list`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.get(url, { headers });
                console.log("===========================");
                // console.log(response);
                if(response.data.result === 1) {
                    this.tableData = response.data.list;
                    // console.log(this.tableData);

                    for(var i=0; i<this.tableData.length; i++){
                        this.sorting[i] = Math.floor(this.tableData[i].REPORTDATE.length / 11);
                        this.tableData[i].REPORTDATE = this.sorting[i];
                    }
                    console.log(this.tableData);
                }
            },
            dateGet : async function(){
                for(var i=0; i<this.tableData.length; i++){
                    this.sorting[i] = this.tableData[i].split[','];
                    console.log(this.sorting);
                }
            },
            async handleMemberDelete() {
                const url = `REST/api/admin/delete/member`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const body = {
                    useremail : '',
                }
                const response = await axios.delete(url, {
                    headers:headers,
                    data : body
                });
                console.log(response);
                
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
    border: 1px solid black;
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

</style>