<template>
    <div class="info_wapper">
        <MyPage_Info></MyPage_Info>
            <div class="info_list">
                <div class="qa_title">
                    <p>문의내역</p>
                </div>
                <div class="qa_insert">
                    <div class="insert_date">
                        <p style="margin-left:30px; color:#715036; font-weight: bold; margin-bottom:0px;">문의일자</p>
                        <p style="font-weight: bold; margin-left:10px; margin-bottom:0px;">2021.11.11</p>
                    </div>
                    <hr class="solid" style="border-top-width: 0px;"/>
                    <!-- 문의내역 Table -->
                    <div class="insert_prdcode">
                        <el-table :data="QAListData" stripe style="width: 90%; margin-left:50px;" >
                            <el-table-column prop="select" label="문의유형" width="150" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.qaSelect}}배송</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="title" label="제목" width="200" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.qaTitle}}언제오나요?</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="content" label="내용" width="250" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.qaContent}}11일에 주문을 했는데 아직 안왔어요.</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" label="날짜" width="180" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.qaDate}}2021.11.11</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="answer" label="답변상태" width="180" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.qaAction}}답변완료</p>
                                </template>
                            </el-table-column>
                        </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import MyPage_Info from '@/components/MyPage_Info.vue';
    export default {
        data() {
            return {
                token : sessionStorage.getItem("token"),
                member : [],
                QAListData : [],
            }
        },
        async created() {
            await this.handleQaListGet();
        },
        components : {
            MyPage_Info : MyPage_Info,
        },
        methods : {
            async handleQaListGet() {
                const url = `REST/api/question/member/selectlist`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.get(url, {headers});
                console.log(response);
                if(response.data.result === 1) {
                    alert("문의 내역이 없습니다.");
                }
                else if(response.data.result === 0) {
                    alert("데이터가 존재하지 않습니다.");
                }
            }
        }
    }
</script>

<style scoped>
.info_wapper {
    width: 100%;
    height: 100%;
    display: flex;
    font-family: 'Gowun Dodum', sans-serif;
}
.info_list {
    /* border: 1px solid black; */
    width: 100%;
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
    height: 497px;
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
</style>