<template>
    <div class="info_list">
        <div class="order_list">
            <p>주문내역</p>
        </div>
        <div class="insert_list">
            <div class="orderlist_info_section" style="width:100%; height: 93.5%; overflow-x:hidden">
                <el-table ref="multipleTable" :data="OrderListData"  stripe style="width: 98%; margin-left:10px;" @selection-change="OrderListBtn">
                    <el-table-column label="주문일자" width="90" align="center">
                        <template #default="scope">
                            <p>{{scope.row.ORDERDATE}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="주문번호" width="150" align="center">
                        <template #default="scope">
                            <p>{{scope.row.MERCHANT_UID}}</p>
                        </template>
                    </el-table-column>                                                                
                    <el-table-column prop="img" label="이미지" align="center" width="130">
                        <template #default="scope">
                            <el-image style= "width: 110px; height: 100px;" :src="`REST/api/select_productimage?no=${scope.row.PRODUCTCODE}`" :fit="cover"></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column label="주문정보" width="370px;" align="center">
                        <template #default="scope">
                            <div class="product_detail_info">
                                <p>{{scope.row.BRANDNAME}}</p>
                                <p>{{scope.row.PRODUCTNAME}}</p>
                                <p>{{scope.row.PRODUCTPRICE}}</p>        
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="수량" width="50" align="center">
                        <template #default="scope">
                            <p>{{scope.row.ORDERQUANTITY}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="배송비" width="180" align="center">
                        <template #default="scope">
                            <p>[ {{scope.row.BRANDNAME}} ] 정책에 따름</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="기타" width="90" align="center">
                        <template #default="scope">
                            <button @click="handleCancelOrder([scope.row.MERCHANT_UID, scope.row.PRODUCTCODE, scope.row.ORDERQUANTITY])">주문취소</button>    
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data() {
            return {
                token: sessionStorage.getItem("token"),
                OrderListData: [],
                val : []
            }
        },
        async created() {
            await this.orderListGet();
        },
        methods : {
            async orderListGet() {
                const url = `REST/api/payments/member/list`;
                const headers = { token: this.token };
                const response = await axios.get(url, { headers });
                console.log('=============================');
                // console.log(response);
                if(response.data.result === 1) {
                    this.OrderListData = response.data.list;
                    console.log(this.OrderListData);
                }
                else if(response.data.result === 0) {
                    alert(response.data.state);
                }
                
            },
            async handleCancelOrder(val){
                const url = `REST/api/payments/cancel`;
                const body = {
                    merchant_uid : val[0],
                    product : val[1],
                    quantity : val[2]
                };
                const headers = {"Content-Type" : "application/json", token: this.token};
                const response = await axios.post(url, body, {headers});
                console.log(response);
                alert("환불완료");
                await this.orderListGet();
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
    border: 3px solid #715036;
    width: 100%;
    height: 93.5%;
    /* margin-bottom: 10px; */
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
.insert_date p:first-child{
    margin-left:30px; 
    color:#715036; 
    font-weight: bold; 
    margin-bottom:0px;
}
.insert_date p:last-child,
.insert_ordercode p:last-child {
    font-weight: bold; 
    margin-left:10px; 
    margin-bottom:0px;
}
.insert_ordercode { 
    display: flex;
    margin-top: 10px;
}
.insert_ordercode p:first-child{
    margin-left:40px; 
    color:#715036; 
    font-weight: bold; 
    margin-bottom:0px;
}
.solid {
    border: 1px solid rgb(228, 227, 227);
    width: 90%;
    margin-bottom: 2px;
    margin-top: 10px;
    margin-left: 42px;
}
.insert_content > img {
    width: 110px;
    height: 100px;
    margin-left: 30px;
}
.orderlist_info_section table tbody button{
    border: none;
    width: 80px;
    height: 30px;
    color: white;
    background-color: #49654E;
    border-radius: 3px;
    font-family: 'Gowun Dodum', sans-serif;
}
.orderlist_info_section table tbody button:hover{
    opacity: 0.9;
    cursor: pointer;
}
.orderlist_info_section table tbody div{
    width: 100%; text-align:left; padding:5px 10px; margin-left:30px;
}
.orderlist_info_section table tbody p{
    font-size:13px; color:black; margin:10px 0px 5px 0px; font-weight:bold; overflow : hidden;
}
</style>