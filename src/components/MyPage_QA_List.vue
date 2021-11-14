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
    <Footer></Footer>
</template>

<script>
import MyPage_Info from '@/components/MyPage_Info.vue';
import Footer from '@/components/Footer.vue';
    export default {
        data() {
            return {
                token : sessionStorage.getItem("token"),
                QAListData : [
                    {
                        qaSelect : '',
                        qaTitle : '',
                        qaContent : '',
                        qaDate : '',
                        qaAction : '',
                    },
                ],
            }
        },
        components : {
            MyPage_Info : MyPage_Info,
            Footer : Footer,
        },
        methods : {

        }
    }
</script>

<style scoped>
.info_wapper {
    display: flex;
    padding: 40px;
    font-family: 'Gowun Dodum', sans-serif;
}
.info_list {
    width: 100%;
}
.qa_title > p {
    margin-top: 0px;
    color: #715036;
    font-weight: bold;
}
.qa_insert {
    border: 2px solid black;
    width: 100%;
    height: 475px;
    border-radius: 5px;
}
.insert_date {
    display: flex;
}
.solid {
    border: 1px solid rgb(228, 227, 227);
    width: 95%;
    margin-bottom: 2px;
}
</style>