+<template>
            <div class="info_list">
                <div class="order_list">
                    <p>주문내역</p>
                </div>
                <div class="insert_list">
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
                    <!-- 주문목록 Table -->
                    <div class="orderlist_info_section">
                        <el-table ref="multipleTable" :data="OrderListData"  stripe style="width: 90%; margin-left:55px;" @selection-change="OrderListBtn">
                                <el-table-column prop="img" label="이미지" align="center" width="110"  style="margin-left:50px;">
                                    <el-image style= "width: 110px; height: 100px; object-fit:cover;" :src="vegan_cream_img" :fit="fit"></el-image>
                                </el-table-column>
                                    <el-table-column label="주문정보" width="400px;" align="center">
                                        <template #default="scope">
                                            <div class="product_detail_info" style="width: 100%; text-align:left; padding:5px 10px; margin-left:30px;">
                                                <span style="font-size:14px; color:#333; font-weight:bold">{{scope.row.brandName}}브랜드명</span>
                                                <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}제품명</p>
                                                <p style="font-size:14px; color:black; margin:0;">{{scope.row.productPrice}}38,000원</p>
                                                <p style="font-size:14px; color:black; margin:0;">옵션 : {{scope.row.option}}빨,주,노,초,파,남,보</p>        
                                            </div>
                                        </template>
                                    </el-table-column>
                                <el-table-column label="가격" width="150" align="center">
                                    <template #default="scope">
                                        <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}3개</p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="배송비" width="150" align="center">
                                    <template #default="scope">
                                        <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}3,000원</p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="주문상태" width="150" align="center">
                                    <template #default="scope">
                                        <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}상품 준비중</p>
                                    </template>
                                </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
</template>

<script>
import axios from "axios";
// import MyPage_Info from '@/components/MyPage_Info.vue';
import vegan_cream_img from '@/assets/vegan_cream_img.jpg';
    export default {
         data() {
            return {
                token: sessionStorage.getItem("token"),
                vegan_cream_img : vegan_cream_img,
                OrderListData: [],
            }
        },
        async created() {
            await this.orderListGet();
        },
        // components : {
        //     MyPage_Info : MyPage_Info,
        // },
        methods : {
            async orderListGet() {
                const url = `REST/api/payments/member/list`;
                const headers = { token: this.token };
                const response = await axios.get(url, { headers });
                console.log('=============================');
                console.log(response);
                if(response.data.result === 1) {
                    alert("주문 내역이 없습니다.");
                }
                else if(response.data.result === 0) {
                    alert(response.data.state);
                }
                
            }
        }
    }
</script>

<style scoped>
.info_list {
    /* border: 1px solid black; */
    width: 98.5%;
    height: 100%;
    margin-left: 30px;
}
.order_list {
    color: #715036;
    font-weight: bold;
    display: flex;   
}
.order_list > p {
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 20px;
}
.insert_list {
    border: 1px solid black;
    width: 100%;
    height: 94.5%;
    border-radius: 5px;
}
.insert_date_code {
    display: flex;
    
}
.insert_date {
    display: flex;
    margin-top: 10px;
    margin-left: 15px;
}
.insert_ordercode { 
    display: flex;
    margin-top: 10px;
}
.solid {
    border: 1px solid rgb(228, 227, 227);
    width: 90%;
    margin-bottom: 2px;
    margin-top: 10px;
    margin-left: 42px;
}
.insert_content {
    display: flex;
}
.insert_content > img {
    width: 110px;
    height: 100px;
    margin-left: 30px;
}
.insert_content_main {
    border: 1px solid black;
    display: inline-block;
    line-height: 10px;
    margin-left: 30px;
    width: 450px;
    margin-right: 30px;
}
.insert_price {
    border: 1px solid black;
    width: 150px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    justify-content: center;
}
.insert_delivery {
    border: 1px solid black;
    width: 150px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    justify-content: center;
}
.insert_state {
    border: 1px solid black;
    width: 150px;
    display: flex;
    align-items: center;
    color: #49654E;
    font-weight: bold;
    margin-right: 40px;
    justify-content: center;
}
.orderlist_info_section {
    font-family: 'Gowun Dodum', sans-serif;
    width: 100%;
    
}

</style>