<template>
        <div class="info_list">
            <div class="order_list" @click="mypage_orli_btn">
                <div class="order_list_name">
                    <p>최근 주문내역</p>
                    <p @click="moreorderlist">더보기 <img :src="mypage" style="right" class="mypage_plus"/></p>
                </div>
                <div class="or_li_box1" >
                    <!-- 주문내역 Table -->
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
            <div class="qna_list">
                <div class="order_list_qa">
                    <div class="order_list_warning">
                        <p>최근 문의내역</p>
                        <p>*문의글 수정 및 삭제는 문의내역에서만 가능합니다.</p>
                    </div>
                    <p @click="morequestion">더보기 <img :src="mypage" style="right" class="mypage_plus"/></p>
                </div>
                <div class="or_qa_box1">
                    <!-- 문의내역 Table -->
                    <el-scrollbar class="scrollbar">
                        <el-table :data="QAListData" stripe style="width: 97%; margin-left:20px;" >
                            <el-table-column prop="select" label="문의유형" width="100" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.QUESTIONKIND}}</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="title" label="제목" width="300" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.QUESTIONTITLE}}</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="content" label="내용" width="320" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.QUESTIONCONTENT}}</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" label="문의일자" width="250" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.QUESTIONDATE}}</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="answer" label="답변상태" width="100" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.QUESTIONREPLY}}</p>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-scrollbar>
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
                OrderListData : [],
                QAListData : [],
            }
        },
        async created(){
            await this.orderListGet();
            await this.qaListGet();
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
                    // alert(response.data.state);
                }
            },
            async qaListGet() {
                const url = `REST/api/question/member/selectlist`;
                const headers = {"Content-Type" : "application/json", "token" : this.token};
                const response = await axios.get(url, {headers});
                console.log("======================================");
                console.log(response);
                if(response.data.result ===1) {
                    this.QAListData = response.data.list;

                    for(var i=0; i<this.QAListData.length; i++){
                        if(this.QAListData[i].QUESTIONKIND === 1){
                            this.QAListData[i].QUESTIONKIND = '상품문의';
                        }
                        else if(this.QAListData[i].QUESTIONKIND === 2){
                            this.QAListData[i].QUESTIONKIND = '배송문의';
                        }else this.QAListData[i].QUESTIONKIND = '기타';
                    }

                    for(var j=0; j<this.QAListData.length; j++){
                        if(this.QAListData[j].QUESTIONREPLY === true){
                            this.QAListData[j].QUESTIONREPLY = '답변완료';
                        }
                        else {
                            this.QAListData[j].QUESTIONREPLY = '미답변';
                        }
                    }
                }

            }
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
.order_list {
    /* border: 1px solid black; */
    color: #715036;
    height: 50%;
    font-weight: bold;
    display: flex;
    flex-direction: column;
}
.qna_list {
    /* border: 1px solid black; */
    color: #715036;
    height: 44%;
    margin-top: 10px;
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
    width:100%;
}
/* .order_list_warning{

} */
.order_list_warning p:first-child {
    margin-top: 0px;
    color: #715036;
    font-weight: bold;
    width: fit-content;
}
.order_list_warning p:last-child {
    width: fit-content;
    margin: 0px 0px 0px 5px;
    font-size: 13px;
    color: rgb(201, 31, 31);
    text-align: right;
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
    height: 90%;
    margin-bottom: 10px;
    border-radius: 3px;
}
.qna_list > p {
    /* border: 1px solid black; */
    color: #715036;
    font-weight: bold;
}
.order_list_qa {
    display: flex;
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
.order_list_name > p:last-child, .order_list_qa > p:last-child {
    cursor: pointer;
    opacity: 0.8;
    margin-right: 15px;
}
.or_li_box1 table tbody div{
    width: 100%; text-align:left; padding:5px 10px; margin-left:30px;
}
.or_li_box1 table tbody p{
    font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;
}
</style>