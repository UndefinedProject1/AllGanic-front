<template>
    <div class="handleMember_wrapper">
        <div class="handleMember_box">
            <h2>회원관리</h2>
            <div class="memberList_box">
                <div class="memberList_table">
                    <el-table :data="tableData">
                        <el-table-column align="center" label="이메일" prop="email" />
                        <el-table-column align="center" label="이름" prop="name" />
                        <el-table-column align="center" label="구매건수" prop="orderhistory" />
                        <el-table-column align="center" label="악성리뷰 및 문의" prop="warningR">
                        </el-table-column>
                        <el-table-column align="center" label="위조금액 구매시도" prop="warningP" />
                        <el-table-column align="center" label="관리">
                            <el-button size="mini" type="danger">Delete</el-button>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableData: [
                    {
                        email: 'dd@gmail.com',
                        name: 'Tom',
                        orderhistory: '53',
                        warningR : ['2021-11-01', '2021-11-11'],
                        warningP : [],
                    },
                    {
                        email: 'ad@gmail.com',
                        name: 'John',
                        orderhistory: '47',
                        warningR : [],
                        warningP : [],
                    },
                    {
                        email: 'cd@gmail.com',
                        name: 'Morgan',
                        orderhistory: '42',
                        warningR : ['2021-11-11'],
                        warningP : [],
                    },
                    {
                        email: 'vbd@gmail.com',
                        name: 'Jessy',
                        orderhistory: '31',
                        warningR : ['2021-11-01'],
                        warningP : ['2021-12-01'],
                    },
                    {
                        email: 'cd@gmail.com',
                        name: 'Morgan',
                        orderhistory: '42',
                        warningR : ['2021-11-11'],
                        warningP : [],
                    },
                    {
                        email: 'vbd@gmail.com',
                        name: 'Jessy',
                        orderhistory: '31',
                        warningR : ['2021-11-01'],
                        warningP : ['2021-12-01'],
                    },
                    {
                        email: 'cd@gmail.com',
                        name: 'Morgan',
                        orderhistory: '42',
                        warningR : ['2021-11-11'],
                        warningP : [],
                    },
                    {
                        email: 'vbd@gmail.com',
                        name: 'Jessy',
                        orderhistory: '31',
                        warningR : ['2021-11-01'],
                        warningP : ['2021-12-01'],
                    },
                    {
                        email: 'cd@gmail.com',
                        name: 'Morgan',
                        orderhistory: '42',
                        warningR : ['2021-11-11'],
                        warningP : [],
                    },
                    {
                        email: 'vbd@gmail.com',
                        name: 'Jessy',
                        orderhistory: '31',
                        warningR : ['2021-11-01'],
                        warningP : ['2021-12-01'],
                    },                                        
                ],
            }
        }
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500&display=swap');

.handleMember_wrapper{
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