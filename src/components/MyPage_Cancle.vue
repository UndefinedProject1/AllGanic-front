<template>
    <div class="cancle_list">
        <div class="cancle_name">
            <p>환불 내역</p>
        </div>
        <div class="cancle_insert">
            <div class="orderlist_info_section" style="width:100%; height: 93.5%; overflow-x:hidden">
                <el-scrollbar class="scrollbar">
                    <el-table ref="multipleTable" :data="CancleData"  stripe style="width: 98%; margin-left:10px;" @selection-change="OrderListBtn">
                            <el-table-column label="환불일자" width="240px;" align="center">
                                <template #default="scope">
                                    <p>{{scope.row.CANCELDATE}}</p>
                                </template>
                            </el-table-column>
                            <el-table-column prop="img" label="이미지" align="center" width="200"  style="margin-left:50px;">
                                <template #default="scope">
                                    <el-image style= "width: 110px; height: 100px;" :src="`REST/api/select_productimage?no=${scope.row.PRODUCTCODE}`" :fit="cover"></el-image>
                                </template>
                                
                            </el-table-column>
                            <el-table-column label="주문정보" width="380px;" align="center">
                                <template #default="scope">
                                    <div class="product_detail_info" style="width: 300px; text-align:left; padding:5px 10px; margin-left:30px;">
                                        <!-- <p>{{scope.row.BRANDNAME}}</p> -->
                                        <p>{{scope.row.PRODUCTNAME}}</p>
                                        <p>{{scope.row.PRODUCTPRICE}}</p>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="수량" width="150" align="center">
                                <template #default="scope">
                                    <p style="font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;">{{scope.row.CANCELQUANTITY}}</p>
                                </template>
                            </el-table-column>
                            <el-table-column label="환불완료일자" width="220px;" align="center">
                                <template #default="scope">
                                    <p>{{scope.row.CANCELDATE}}</p>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-scrollbar>
                </div>
            </div>
        </div>
</template>

<script>
// import MyPage_Info from '@/components/MyPage_Info.vue';
import vegan_cream_img from '@/assets/vegan_cream_img.jpg';
import axios from 'axios';
import { ElMessage } from 'element-plus'
    export default {
        setup() {
            const failAlertMSG = () => {
                ElMessage.error('환불내역이 없습니다.')
            }
            return {
                failAlertMSG
            }
        },
        data() {
            return {
                token: sessionStorage.getItem("token"),
                vegan_cream_img : vegan_cream_img,
                CancleData : [],
            }
        },
        async created() {
            await this.cancleListGet();
        },
        methods : {
            async cancleListGet() {
                const url = `REST/api/cancel/member/list`;
                const headers = {token : this.token};
                const response = await axios.get(url, {headers});
                console.log('=============================');
                console.log(response);
                if(response.data.result === 1) {
                    this.CancleData = response.data.list;
                    console.log(this.CancleData);
                }
                else if(response.data.result === 0) {
                    this.failAlertMSG();
                }
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.cancle_list {
    /* border: 1px solid black; */
    width: 98.5%;
    height: 100%;
    margin-left: 30px;
}
.cancle_name {
    color: #715036;
    font-weight: bold;
    display: flex;    
}
.cancle_name > p {
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 20px;
}
.cancle_insert {
    border: 3px solid #715036;
    width: 100%;
    height: 93.5%;
    /* float: right; */
    border-radius: 5px;
}
.cancle_date {
    display: flex;
    margin-top: 10px;
    margin-left: 15px;
}
.orderlist_info_section {
    width: 100%;
}
.product_detail_info {
    width: 100%; 
    text-align:left; 
    padding:5px 10px; 
    margin-left:30px;
}
</style>