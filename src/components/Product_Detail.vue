<template>
    <div class="pd_detail_wrapper">
        <div class="pd_detail_container">
            <div class="detail_section1">
                <img :src="vegan_oil_img">
                <div class="pd_detail_info">
                    <div class="pd_detail_header">
                        <p id="brandname">Melixar</p>
                        <p id="productname">자연 100% 추출 어성초세럼</p>
                    </div>
                    <div class="pd_detail_infocontainer">
                        <table class="pd_detail_table">
                            <colgroup>
                                <col class="th_area">
                                <col class="td_area">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th><span>판매가</span></th>
                                    <td><s>28000</s></td>
                                </tr>
                                <tr>
                                    <th><span>할인가</span></th>
                                    <td id="saleprice">24500</td>
                                </tr>
                                <tr>
                                    <th><span>주문수량</span></th>
                                    <td>주문수량표시</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="pd_detail_shipping">
                            <p>배송정보</p>
                            <table class="pd_detail_shippingtable">
                                <colgroup>
                                    <col class="th_area1">
                                    <col class="td_area1">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th><span>배송비</span></th>
                                        <td>해당 브랜드 제품으로만 30000원 이상 구매시 무료배송 ( 미만시 배송비 2500원 발생 )<br>
                                            제주도를 포함한 도서/산간 지역 추가 배송비 없음</td>
                                    </tr>
                                    <tr>
                                        <th><span>배송예정</span></th>
                                        <td><mark>12 / 3  (수)</mark> 이내 도착 예정 88%</td>
                                    </tr>
                                </tbody>
                            </table>                          
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail_section2">
                <button id="addcartbtn">ADD CART</button>
                <button id="orderbtn">ORDER</button>
            </div>
            <div class="detail_section3">
                <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1">상세설명</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading2">상품후기</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading3">FAQ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading5">교환/환불</a>
                        </li>
                    </ul>
                </nav>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                    <h4 id="scrollspyHeading1">First heading</h4>
                        <p></p>
                    <h4 id="scrollspyHeading2">Second heading</h4>
                        <p></p>
                    <h4 id="scrollspyHeading3">Third heading</h4>
                        <p></p>
                    <h4 id="scrollspyHeading4">Fourth heading</h4>
                        <p>...</p>
                    <h4 id="scrollspyHeading5">Fifth heading</h4>
                        <p>...</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import vegan_oil_img from '@/assets/vegan_oil_img.jpg';
import Footer from '@/components/Footer.vue';
    export default {
        data(){
            return{
                vegan_oil_img : vegan_oil_img
            }
        },
        components : {
            Footer : Footer
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
.pd_detail_wrapper{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 40px;
    font-family: 'Gowun Dodum', sans-serif;
}
.pd_detail_container{
    /* border: 1px solid black; */
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.detail_section1{
    width: 100%;
    height : 40%;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: stretch;
}
.detail_section1 img {
    width : 43%;
    height : 43%;
    margin-right: 20px;
    border-radius: 3px;
}
.pd_detail_info{
    /* border: 1px solid black; */
    width: 100%;
    height : 100%;
    display: flex;
    flex-direction: column;
}
.pd_detail_info .pd_detail_header{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
}
.pd_detail_info .pd_detail_header p{
    margin: 10px 0px 3px 10px;
    font-weight: bold;
    letter-spacing: 0.5px;;
}
.pd_detail_info .pd_detail_header #brandname{
    color: rgb(153, 153, 153);
    font-size: 18px;
    font-family: 'Playfair Display', serif;
}
.pd_detail_info .pd_detail_header #productname{
    margin: 0px 0px 10px 10px;
    color: black;
    font-size: 20px;
}
.pd_detail_info .pd_detail_infocontainer{
    width : 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black ;
    display: flex;
    flex-direction: column;
    padding : 15px 0px;
}
.pd_detail_table{
    width: 100%;
    height : fit-content;
    font-family: 'Exo', sans-serif;
}
#saleprice{
    color: red;
}
.pd_detail_table tbody th{
    padding: 20px 10px;
    text-align: center;
}
.pd_detail_table tbody th span{
    font-size: 18px;
    font-weight: 600;
}
.pd_detail_table tbody td {
    font-size: 18px;
    font-weight: 600;
    padding: 20px;
}

.th_area {
    /* border: 1px solid black; */
    width : 20%;
    height: 50px;
}
.td_area {
    /* border: 1px solid black; */
    width : 80%;
    height: 50px;
}

.pd_detail_shipping{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
.pd_detail_shipping p{
    margin : 30px 0px 0px 15px;
    font-size: 18px;
    font-weight: bold;
}
.pd_detail_shippingtable tbody th span {
    font-weight: bold;
    color: rgb(102, 102, 102);
    margin-left: 15px;
}
.th_area1 {
    /* border: 1px solid black; */
    width : 15%;
    height: 50px;
}
.td_area1 {
    /* border: 1px solid black; */
    width : 90%;
    height: 50px;
}
.pd_detail_shippingtable tbody td {
    font-size: 14px;
    padding-left: 10px;
}

.detail_section2{
    width : 100%;
    height : 10%;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.detail_section2 #orderbtn{
    width : 170px;
    height : 65px;
    background-color: #715036;
    color: white;
    font-weight: bold;
    /* margin-top: 10px; */
    margin-right: 70px;
    border-radius: 3px; 
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    border: none;
}
.detail_section2 #addcartbtn{
    width : 170px;
    height : 65px;
    background-color: #ffffff;
    color: #715036;
    font-weight: bold;
    /* margin-top: 10px; */
    margin-right: 45px;
    border-radius: 3px; 
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    border: none;
}
.detail_section2 button:hover{
    box-shadow: 3px 2px 5px 0px #966d4f;
    opacity: 0.9;
}
</style>