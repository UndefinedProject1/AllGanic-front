<template>
    <div class="info_wapper">
        <MyPage_Info></MyPage_Info>
            <div class="cancle_list">
                <div class="cancle_name">
                    <p>취소/교환/반품 내역</p>
                </div>
                <div class="cancle_insert">
                        <div class="cancle_date">
                            <p style="margin-left:30px; color:#715036; font-weight: bold; margin-bottom:0px;">주문일자</p>
                            <p style="font-weight: bold; margin-left:10px; margin-bottom:0px;">2021.11.11</p>
                                <div class="cancle_prdcode">
                                    <p style="margin-left:40px; color:#715036; font-weight: bold; margin-bottom:0px;">주문번호</p>
                                    <p style="font-weight: bold; margin-left:10px; margin-bottom:0px;">ORD20211019-tue10</p>
                                </div>
                        </div>
                        <hr class="solid" style="border-top-width: 0px;"/>
                        <!-- Cancle Table -->
                        <div class="orderlist_info_section" >
                        <el-table ref="multipleTable" :data="CancleData"  stripe style="width: 81%; margin-left:55px;" >
                                <el-table-column prop="img" label="이미지" align="center" width="110"  style="margin-left:50px;">
                                    <el-image style= "width: 110px; height: 100px;" :src="vegan_cream_img" :fit="fit"></el-image>
                                </el-table-column>
                                    <el-table-column label="주문정보" width="400px;" align="center">
                                        <template #default="scope">
                                            <div class="product_detail_info" style="width: 60%; text-align:left; padding:5px 10px; margin-left:30px;">
                                                <span style="font-size:14px; color:#333; font-weight:bold">{{scope.row.cancleName}}브랜드명</span>
                                                <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.canclePdName}}제품명</p>
                                                <p style="font-size:14px; color:black; margin:0;">옵션 : {{scope.row.calcelOption}}빨,주,노,초,파,남,보</p>        
                                            </div>
                                        </template>
                                    </el-table-column>
                                <el-table-column label="가격" width="150" align="center">
                                    <template #default="scope">
                                        <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}3개</p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="취소/반품/교환" width="150" align="center">
                                    <template #default="scope">
                                        <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.productName}}취소</p>
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
                CancleData : [
                    {

                    }
                ]
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
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.info_wapper {
    display: flex;
    padding: 40px;
    font-family: 'Gowun Dodum', sans-serif;
}
.cancle_list {
    width: 100%;
}
.cancle_name > p {
    margin-top: 0px;
    color: #715036;
    font-weight: bold;
    height: 20px;
}
.cancle_insert {
    border: 2px solid black;
    width: 100%;
    height: 475px;
    border-radius: 5px;
}
.cancle_date {
    display: flex;
}
.cancle_prdcode {
    display: flex;
}
.solid {
    border: 1px solid rgb(228, 227, 227);
    width: 95%;
    margin-bottom: 2px;
}
.orderlist_info_section {
    display: flex;
    align-items: center;
    margin-left: 70px;
}
</style>