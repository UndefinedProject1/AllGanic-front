<template>
    <div class="info_wapper">
        <MyPage_Info></MyPage_Info>
            <div class="info_list">
                <div class="order_list" style="margin-top: 0px;">
                    <p>주문내역</p>
                </div>
                <div class="insert_list">
                    <div class="insert_date">
                        <p style="margin-left:30px; color:#715036; font-weight: bold; margin-bottom:0px;">주문일자</p>
                        <p style="font-weight: bold; margin-left:10px; margin-bottom:0px;">2021.11.07</p>
                    <div class="insert_prdcode">
                        <p style="margin-left:40px; color:#715036; font-weight: bold; margin-bottom:0px;">주문번호</p>
                        <p style="font-weight: bold; margin-left:10px; margin-bottom:0px;">ORD20211019-tue10</p>
                    </div>
                    </div>
                    <hr class="solid" style="border-top-width: 0px;"/>
                    <!-- 주문목록 Table -->
                    <div class="orderlist_info_section">
                        <el-table ref="multipleTable" :data="OrderListData"  stripe style="width: 90%; margin-left:50px;" @selection-change="OrderListBtn">
                                <el-table-column prop="img" label="이미지" style="width: 110px; height: 100px;">
                                    <el-image style= "width: 110px; height: 100px;" :src="vegan_cream_img" :fit="fit"></el-image>
                                </el-table-column>
                                    <el-table-column label="주문정보" width="410px; margin-left:100px;">
                                        <template #default="scope">
                                            <div class="product_detail_info" style="width: 100%; text-align:left; padding:5px 10px; margin-left:30px;">
                                                <span style="font-size:14px; color:#333; font-weight:bold">{{scope.row.brandName}}브랜드명</span>
                                                <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}제품명</p>
                                                <p style="font-size:14px; color:black; margin:0;">{{scope.row.productPrice}}38,000원</p>
                                                <p style="font-size:14px; color:black; margin:0;">옵션 : {{scope.row.option}}빨,주,노,초,파,남,보</p>        
                                            </div>
                                        </template>
                                    </el-table-column>
                                <el-table-column label="가격" width="150">
                                    <template #default="scope">
                                        <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}3개</p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="배송비" width="150">
                                    <template #default="scope">
                                        <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}3,000원</p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="주문상태" width="150">
                                    <template #default="scope">
                                        <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}상품 준비중</p>
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
import vegan_cream_img from '@/assets/vegan_cream_img.jpg';
    export default {
         data() {
            return {
                vegan_cream_img : vegan_cream_img,
                OrderListData: [
                    {
                    img : '',
                    info: '2016-05-03',
                    price: 'Tom',
                    delivery: 'No. 189, Grove St, Los Angeles',
                    state : '배송완료',
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
.order_list > p {
    margin-top: 0px;
    color: #715036;
    font-weight: bold;
}
.insert_list {
    border: 1px solid black;
    width: 100%;
    height: 475px;
    border-radius: 5px;
}
.insert_date {
    display: flex;
}
.insert_prdcode { 
    display: flex;
}
.solid {
    border: 1px solid rgb(228, 227, 227);
    width: 90%;
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
    border-bottom:3px solid #715036;
    font-family: 'Gowun Dodum', sans-serif;
    width: 100%;
    height: fit-content;
}
/* .orderlist_info_section {
    display: flex;
    align-items: center;
} */

</style>