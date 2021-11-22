<template>
        <div class="info_list">
            <!-- <div class="info_title">
                <p>My Page</p>
            </div> -->
            <div class="order_list" @click="mypage_orli_btn">
                <div class="order_list_name">
                    <p>최근 주문내역</p>
                    <p @click="moreorderlist">더보기 <img :src="mypage" style="right" class="mypage_plus"/></p>
                </div>
                <div class="or_li_box1" >
                    <!-- <div class="insert_date_code">
                        <div class="insert_date">
                            <p style="margin-left:30px; color:#715036; font-weight: bold; margin-bottom:0px;">주문일자</p>
                            <p style="font-weight: bold; margin-left:10px; margin-bottom:0px;">2021.11.07</p>
                        </div>
                        <div class="insert_ordercode">
                            <p style="margin-left:40px; color:#715036; font-weight: bold; margin-bottom:0px;">주문번호</p>
                            <p style="font-weight: bold; margin-left:10px; margin-bottom:0px;">20111114-000856</p>
                        </div>
                    </div>
                    <hr class="solid" style="border-top-width: 0px;"/> -->
                    <!-- 주문내역 Table -->
                    <div class="orderlist_info_section">
                        <el-table ref="multipleTable" :data="OrderListData"  stripe style="width: 97%; margin-left:20px;" @selection-change="OrderListBtn">
                                <el-table-column label="주문일자" width="100" align="center">
                                    <template #default="scope">
                                        <p>{{scope.row.ORDERDATE}}</p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="주문번호" width="160" align="center">
                                    <template #default="scope">
                                        <p>{{scope.row.MERCHANT_UID}}</p>
                                    </template>
                                </el-table-column>                                                                
                                <el-table-column prop="img" label="이미지" align="center" width="130">
                                    <template #default="scope">
                                        <el-image style= "width: 110px; height: 100px;" :src="`REST/api/select_productimage?no=${scope.row.PRODUCTCODE}`" :fit="cover"></el-image>
                                    </template>
                                </el-table-column>
                                <el-table-column label="주문정보" width="410px;" align="center">
                                    <template #default="scope">
                                        <div class="product_detail_info">
                                            <p>{{scope.row.BRANDNAME}}</p>
                                            <p>{{scope.row.PRODUCTNAME}}</p>
                                            <p>{{scope.row.PRODUCTPRICE}}</p>        
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="수량" width="80" align="center">
                                    <template #default="scope">
                                        <p>{{scope.row.ORDERQUANTITY}}</p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="배송비" width="190" align="center">
                                    <template #default="scope">
                                        <p>[ {{scope.row.BRANDNAME}} ] 정책에 따름</p>
                                    </template>
                                </el-table-column>
                                <!-- <el-table-column label="주문상태" width="150" align="center">
                                    <template #default="scope">
                                        <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}상품 준비중</p>
                                    </template>
                                </el-table-column> -->
                        </el-table>
                    </div>
                </div>
            </div>
            <div class="qna_list">
                <div class="order_list_qa">
                    <p>최근 문의내역</p>
                    <p @click="morequestion">더보기 <img :src="mypage" style="right" class="mypage_plus"/></p>
                </div>
                <div class="or_qa_box1">
                    <div class="insert_date_code">
                        <div class="insert_date">
                            <p style="margin-left:30px; color:#715036; font-weight: bold; margin-bottom:0px;">주문일자</p>
                            <p style="font-weight: bold; margin-left:10px; margin-bottom:0px;">2021.11.07</p>
                        </div>
                        <div class="insert_ordercode">
                            <p style="margin-left:40px; color:#715036; font-weight: bold; margin-bottom:0px;">주문번호</p>
                            <p style="font-weight: bold; margin-left:10px; margin-bottom:0px;">20111114-000856</p>
                        </div>
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
    <!-- </div> -->
    <!-- <Footer></Footer> -->
</template>

<script>
import axios from "axios";
import mypage_mail from '@/assets/mypage_mail.png';
import mypage_address from '@/assets/mypage_address.png';
import mypage from '@/assets/mypage.png';
    export default {
        data() {
            return {
                token: sessionStorage.getItem("token"),
                mypage_mail : mypage_mail,
                mypage_address : mypage_address,
                mypage : mypage,
                OrderListData : []
            }
        },
        async created(){
            await this.orderListGet();
        },
        methods : {
            moreorderlist() {
                this.$emit("hadleClickUrl",4);
            },
            morequestion() {
                this.$emit("hadleClickUrl",5); 
            },
            async orderListGet() {
                const url = `REST/api/payments/member/list`;
                const headers = { token: this.token };
                const response = await axios.get(url, { headers });
                console.log(response);
                if(response.data.result === 1) {
                    this.OrderListData = response.data.list;
                    console.log(this.OrderListData);
                }
                else if(response.data.result === 0) {
                    alert(response.data.state);
                }
                
            },
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.info_list {
    /* border: 1px solid black; */
    width: 98.5%;
    height: 100%;
    margin-left: 30px;
}
.info_title {
    color: #715036;
    font-weight: bold;
    display: flex;
}
.info_title > p {
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 20px;
}
.order_list, .qna_list {
    /* border: 1px solid black; */
    color: #715036;
    height: 67%;
    font-weight: bold;
    display: flex;
    flex-direction: column;
}
.order_list_name, .order_list_qa {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
    margin-right: 8px;
}
.order_list > p {
    /* border: 1px solid black; */
    margin-top: 0px;
    color: #715036;
    font-weight: bold;
}
.or_li_box1 {
    border: 3px solid #715036;
    width: 100%;
    height: 90%;
    margin-bottom: 10px;
    border-radius: 3px;
}
.or_qa_box1 {
    border: 3px solid #715036;
    width: 100%;
    height: 30%;
    margin-bottom: 10px;
    border-radius: 3px;
}
.qna_list {
    /* border: 1px solid black; */
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
}
.qna_list > p {
    /* border: 1px solid black; */
    color: #715036;
    font-weight: bold;
}
.order_list_name > p > img {
    /* border: 1px solid black; */
    width: 10px;
    height: 14px;
}
.order_list_qa > p > img {
    /* border: 1px solid black; */
    width: 10px;
    height: 14px;
}
/* or_li_box 테이블 */
.insert_date_code {
    display: flex;
}
.insert_date, .insert_ordercode {
    display: flex;
    margin-top: 10px;
    margin-left: 12px;
}
.solid {
    border: 1px solid rgb(228, 227, 227);
    width: 90%;
    margin-bottom: 2px;
    margin-top: 10px;
    margin-left: 42px;
}
.order_list_name > p:last-child, .order_list_qa > p:last-child {
    cursor: pointer;
    opacity: 0.8;
}
.orderlist_info_section table tbody div{
    width: 100%; text-align:left; padding:5px 10px; margin-left:30px;
}
.orderlist_info_section table tbody p{
    font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;
}
</style>