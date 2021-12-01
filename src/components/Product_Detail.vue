<template>
    <div class="pd_detail_wrapper">
        <div class="pd_detail_container">
            <div class="detail_section1">
                <div class="detail_imgcontainer">
                    <img :src="productmainimg">
                </div>
                <div class="pd_detail_info">
                    <div class="pd_detail_header">
                        <p id="brandname">{{detailcontents.brandname}}</p>
                        <p id="productname">{{detailcontents.productname}}</p>
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
                                    <td><s>{{productPrice}} 원</s></td>
                                </tr>
                                <tr>
                                    <th><span>할인가</span></th>
                                    <td id="saleprice">{{productPrice}} 원</td>
                                </tr>
                                <tr>
                                    <th><span>주문수량</span></th>
                                    <td><el-input-number v-model="quantity" :min="1" :max="10" @change="handleQuantityChange" /></td>
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
                                        <td>해당 브랜드 제품으로만 30000원 이상 구매시 무료배송 ( 미만시 배송비 2500원 )<br>
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
                <button id="addcartbtn" @click="addCartList">ADD CART</button>
                <button id="orderbtn" @click="GoCart">ORDER</button>
            </div>
            <div class="detail_section3">
                <div class="selection3_navButtons">
                    <button type="button" @click="clickDetail">상세설명</button>
                    <button type="button" @click="clickReview">상품후기</button>
                    <button type="button" @click="clickFaq">FAQ</button>
                    <button type="button" @click="clickRefund">교환 및 환불</button>
                </div>
                <div class="section3_detailSection">
                    <div class="detailInfo"><input type="text" ref="callDetailInfo">
                        <div v-for="subcode in subImgCodeList" v-bind:key="subcode" class="subImgContainer">
                            <img :src="`REST/api/select_subimage/find?no=${subcode.subcode}`">
                        </div>
                    </div>
                    <div class="productReview"><input type="text"  ref="callProductReview">
                        <div class="reviewContainer">
                            <div class="reviewTitle">
                                <h3>상품후기</h3>
                                <span @click="showWritingReview">리뷰 작성하기</span>
                            </div>
                            <div class="reviewTable" >
                                <div class="writeReviewSection" v-if="showWriting">
                                    <table>
                                        <colgroup>
                                            <col class="th_area">
                                            <col class="td_area">
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th><span class="th_title">아이디</span></th>
                                                <td>
                                                    <span>kyori0515</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th><span class="th_title">리뷰</span></th>
                                                <td>
                                                    <div class="reviewContents">
                                                        <div class="reviewImage">
                                                            <div class="main_image_container">
                                                                <img :src = "mainImg" id="mainImg">
                                                                <label for="insertmainImg">이미지 추가</label>
                                                                <input type="file" @change="handleMainImg($event)" name="파일첨부" id="insertmainImg">
                                                            </div>                                                            
                                                        </div>
                                                        <div class="form-floating">
                                                            <StarRating :star-size="15" @update:rating ="setReivewRating" :read-only="false" :border-width="1" 
                                                                active-color="#E6A23C" :show-rating="true" :rounded-corners="true" id="rating"></StarRating>
                                                            <textarea name="content" row="30" v-model="reviewContent" placeholder="리뷰는 300자 이하로 적어주세요" id="floatingTextarea2"></textarea>
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                            </tr>                                            
                                        </tbody>
                                    </table>
                                    <div class="writeReviewSection_warning">
                                        <span><strong>상품 리뷰 작성시 유의사항</strong></span>
                                        <p>후기 사진은 제품 당 한장씩만 등록가능합니다.</p>
                                        <p>상품 및 상품 구매 과정과 관련 없는 비방, 욕설, 명예훼손성 게시글 및 상품과 관련 없는 광고글 등<br/>
                                            부적절한 게시글 등록 시 글쓰기 제한 및 게시글이 삭제 조치 될 수 있습니다.</p>
                                    </div>
                                    <div class="reviewBtnContainer">
                                        <button id="writingReviewBtnClose" @click="closeWritingReview">닫기</button>
                                        <button id="writingReviewBtn" @click="writeReview">작성완료</button>
                                    </div>

                                </div>
                                <div class="reviewArea"  v-for="review in reviewList" v-bind:key="review">
                                    <div id="reviewTitle">
                                        <div id="titleSection">
                                            <StarRating :star-size="15" :rating="review.REVIEWRATING" :read-only="true" :border-width="1" active-color="#E6A23C" :show-rating="false" :rounded-corners="true" id="rating"></StarRating>
                                            <p>{{review.USEREMAIL}}</p>
                                        </div>
                                        <p>{{review.REVIEWDATE}}</p>
                                    </div>
                                    <div id="reviewContent">
                                        <img :src="`REST/api/review_image?no=${review.REVIEWCODE}`">
                                        <p>{{review.REVIEWCONTENT}}</p>
                                        <el-button type="text" class="report_btn" @click="handleReviewReport(review.USEREMAIL)">해당 리뷰 신고하기</el-button>
                                    </div>
                                </div>
                            </div>
                            <el-pagination layout="prev, pager, next" :page-count="pages" @current-change="handlePageChange" class="pagination"></el-pagination>
                        </div>
                    </div>
                    <div class="productFaq"><input type="text" ref="callProductFaq">
                        <div class="faqContainer">
                            <div class="faqTitleSection">
                                <h3>상품문의</h3>
                                <span @click="showWritingFaq">문의글 작성하기</span>
                            </div>
                            <div class="faqTable">
                                <div class="faqWriting" v-if="showFaqWriting">
                                    <table>
                                        <colgroup>
                                            <col class="th_area">
                                            <col class="td_area">
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th><span class="th_title">이메일</span></th>
                                                <td>
                                                    <span>{{member.USEREMAIL}}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th><span class="th_title">문의내용</span></th>
                                                <td>
                                                    <div class="faqWritingContents">
                                                        <div class="faqWritingSelect">
                                                            <el-select v-model="selected" placeholder="Select" @change="selectCate1" class="form-select">
                                                                <el-option v-for="select in firstQCateList"  :key="select.value" :label="select.label" :value="select.value"></el-option>
                                                            </el-select>
                                                        </div>
                                                        <div class="form-floating" style="height:30px;">
                                                            <el-input v-model="questionTitle" placeholder="문의제목 입력" class="form-control" clearable style="font-family: 'Gowun Dodum', sans-serif;"/>
                                                        </div>   
                                                        <div class="form-floating">
                                                            <textarea name="content" row="30" v-model="questionContent" placeholder="문의내용은 300자 이하로 적어주세요" id="floatingTextarea2" style="font-family: 'Gowun Dodum', sans-serif;"></textarea>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>                                            
                                        </tbody>
                                    </table>
                                    <div class="writeFaqSection_warning">
                                        <span><strong>상품 Q&A 작성 시 유의사항</strong></span>
                                        <p>교환, 반품, 취소는 1:1문의를 통해 접수 부탁드립니다.</p>
                                        <p>상품 및 상품 구매 과정과 관련 없는 비방, 욕설, 명예훼손성 게시글 및 상품과 관련 없는 광고글 등 <br>
                                            부적절한 게시글 등록 시 글쓰기 제한 및 게시글이 삭제 조치 될 수 있습니다.</p>
                                        <p>전화번호, 이메일 등 개인 정보가 포함된 글 작성이 필요한 경우 판매자만 볼 수 있도록 비밀글로 문의해 주시기 바랍니다.</p>
                                    </div>
                                    <div class="reviewBtnContainer">
                                        <button id="writingReviewBtnClose" @click="closeWritingFaq">닫기</button>
                                        <button id="writingReviewBtn" @click="writeQuestion">작성완료</button>
                                    </div>
                                </div>
                                <div class="faqList" v-for="question in questionList" v-bind:key="question">
                                    <p> [ {{question.QUESTIONKIND}} ] <i class="el-icon-view" :size="50"></i></p>
                                    <div class="faqContnet">
                                        <div class="faqLead">
                                            <p>제목 : {{question.QUESTIONTITLE}}.</p>
                                            <!-- <p>내용 : {{question.QUESTIONCONTENT}}.</p> -->
                                        </div>
                                        <div class="faqSecond">
                                            <p>{{question.MEMBER}}</p>
                                            <p>{{question.QUESTIONDATE}}</p>
                                            <el-popover
                                                placement="bottom"
                                                :width="200"
                                                trigger="hover"
                                                content="답변 내용은 마이페이지에서 확인하실 수 있습니다."
                                                style="font-family: 'Gowun Dodum', sans-serif; font-size:12px;"
                                            >
                                                <template #reference>
                                                    <el-button class="badge">{{question.QUESTIONREPLY}}</el-button>
                                                </template>
                                            </el-popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="productRefundPolicy"><input type="text" ref="callProductRefundPolicy">
                        <h3>교환, 환불, A/S 안내</h3>
                        <div class="policyContent">
                            <ul>
                                <li>상품 수령일로부터 7일 이내 반품 / 환불 가능합니다.</li>
                                <li>변심 반품의 경우 왕복배송비를 차감한 금액이 환불되며, 제품 및 포장 상태가 재판매 가능하여야 합니다.</li>
                                <li>동일상품 또는 동일상품 내 추가금액이 없는 옵션만 교환가능합니다.</li>
                                <li>상품 불량인 경우는 배송비를 포함한 전액이 환불됩니다.</li>
                                <li>출고 이후 환불요청 시 상품 회수 후 처리됩니다.</li>
                                <li>얼리 등 주문제작상품 / 카메라 / 밀봉포장상품 등은 변심에 따른 반품 / 환불이 불가합니다.</li>
                                <li>일부 완제품으로 수입된 상품의 경우 A/S가 불가합니다.</li>
                                <li>특정브랜드의 상품설명에 별도로 기입된 교환 / 환불 / AS 기준이 우선합니다.</li>
                                <li>구매자가 미성년자인 경우에는 상품 구입 시 법정대리인이 동의하지 아니하면 미성년자 본인 또는 법정대리인이 구매취소 할 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <CartPopup v-on:addEvent ="closeDrawer" v-on:handleEvent = "handleGoCart" v-model="CartPopup" ref="handlePopCart"></CartPopup>

    <el-dialog v-model="showReportModal" title="악성문의건 신고" width="40%" :before-close="handleClose" class="reportModal">
        <p id="reportTitle">해당 리뷰를 신고하시겠습니까?</p>

        <template #footer>
            <span class="dialog-footer">
            <el-button @click="showReportModal = false">취소</el-button>
            <el-button type="primary" @click="handleReviewReport">신고하기</el-button>
            </span>
        </template>
    </el-dialog>

    <!-- 추천 모달 -->
    <div v-show="showRecommend = true" v-bind:style="RecommendStyle">
        <!-- <img :src="cancel" @click="closeRecNav" id="cancelbtn"> -->
        <div class="RecommendedContainer">
            <div class="RecommendedTitle">
                <p>많은 분들이 이 상품을 함께 구매하셨어요!</p>
            </div>
            <div class="RecommendedTable">
                <img :src="`REST/api/select_productimage?no=${recommended.productcode}`" @mouseover="showRecommendText" >
                    <div class="RecommendedTableText" v-bind:style="RecommendTextStyle" @click="goRecommendProduct(recommended.productcode)">
                        <p>[ {{recommended.brandname}} ]</p>
                        <p>{{recommended.productname}}</p>
                        <p>{{RproductPrice}} 원</p>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import {getCurrentInstance} from '@vue/runtime-core';
import cancel from '@/assets/cancel.png';
import default_image from '@/assets/default_image.jpg';
import { ElMessage } from 'element-plus'
import axios from 'axios';
import StarRating from 'vue-star-rating'
import Cart_Popup from './Cart_Popup.vue';
    export default {
        setup() {
            const successAlertMSG = () => {
                ElMessage.success('작성완료')
            }
            const addProductAlertMSG = () => {
                ElMessage.message('상품 리스트 추가')
            }
            const failAlertMSG = () => {
                ElMessage.error('작성실패')
            }
            const successAlertMSG1 = () => {
                ElMessage.success('통과')
            }
            const failAlertMSG1 = () => {
                ElMessage.error('결제하신 상품이 아닙니다.')
            }
            const infoAlertMSG = () => {
                ElMessage.message('장바구니가 비어있습니다.')
            }
            const failAlertMSG2 = () => {
                ElMessage.error('error')
            }
            const infoAlertMSG1 = () => {
                ElMessage.message('회원전용 기능입니다. 로그인 페이지로 이동합니다.')
            }
            const infoAlertMSG2 = () => {
                ElMessage.error('회원정보를 불러오지 못했습니다.')
            }
            const successAlertMSG2 = () => {
                ElMessage.success('신고가 정상적으로 접수되었습니다.')
            }
            return{
                visibile : ref(false),
                successAlertMSG,
                successAlertMSG1,
                addProductAlertMSG,
                failAlertMSG,
                failAlertMSG1,
                infoAlertMSG,
                failAlertMSG2,
                infoAlertMSG1,
                infoAlertMSG2,
                successAlertMSG2
            }
        },
        data(){
            return{
                cancel : cancel,
                showRecommend :  false,
                $socket : '',
                CartPopup : false,
                gettoken : sessionStorage.getItem("token"),
                pcode : this.$route.query.code,
                detailcontents : '',
                productmainimg : '',
                subImgCodeList : [],
                reviewList : [],
                questionList : [],
                showWriting : false,
                showFaqWriting : false,
                showReportModal : false,
                mainfile : '',
                selected : '',
                mainImg : default_image,
                reviewContent : '',
                reviewRating : 0,
                questionTitle :'',
                questionContent :'',
                quantity : 1,
                firstQCateList : [
                    {value : 1, label : '상품문의'},
                    {value : 2, label : '배송문의'},
                    {value : 3, label : '기타'},
                ],
                productPrice : 0,
                member : [],
                pages : 0,
                page : 1,
                recommended : [],
                RproductPrice : 0,

                RecommendStyle : {
                    padding : '15px',
                    height: 'fit-content',
                    width: '0%',
                    position: 'fixed',
                    // zIndex: '100',
                    top: '15%',
                    right: '3%',
                    overflowX: 'hidden',
                    transition: '0.5s',
                    fontFamily: "'Gowun Dodum', sans-serif",
                    // border : '0.5px solid #333',
                },

                RecommendTextStyle :{
                    display : 'flex',
                    flexDirection : 'column',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: '1',
                    padding : '5px',
                    visibility : 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                }

            }
        },
        components : {
            StarRating : StarRating,
            CartPopup : Cart_Popup
        },
        async created() {
            await this.handleDetailContents();
            const app = getCurrentInstance();
            this.$socket = app.appContext.config.globalProperties.$socket;
            console.log(this.$socket);
        },
        watch: {
            async $route(to, from) {
                if(to.query !== from.query){
                    this.pcode = to.query.code;
                    await this.handleDetailContents();
                }
            }
        },
        methods : {
            closeRecNav(){
                this.showRecommend = false;
            },
            showRecommendText(){
                this.RecommendTextStyle.backgroundColor = "rgba(255, 255, 255, 0.534)";
                this.RecommendTextStyle.visibility = "visible";
                this.RecommendTextStyle.color = "black";
            },
            async goRecommendProduct(val){
                this.$router.push({ path: "/product_detail", query:{code : val} });
                await this.handleDetailContents();
            },
            // Scroll 버튼
            clickDetail(){
                this.$refs.callDetailInfo.focus();
            },
            clickReview(){
                this.$refs.callProductReview.focus();
            },
            clickFaq(){
                this.$refs.callProductFaq.focus();
            },
            clickRefund(){
                this.$refs.callProductRefundPolicy.focus();
            },

            // 리뷰, 문의 페이지네이션 -> 페이지 변경 감지
            async handlePageChange(val){
                this.page = val;
                await this.handleDetailContents();
            },

            // 자식 컴포넌트 (Cart_PopUp)에 전달하는 메소드
            // 1. 팝업 닫기
            closeDrawer(){
                this.CartPopup = false;
            },
            // 2. 장바구니 이동
            handleGoCart(){
                this.$router.push({ path: "/product_cart" });
            },

            // 바로 ORDER 버튼 눌렀을때 장바구니로 이동
            async GoCart(){
                const url = `REST/api/cart/create/insert?cnt=${this.quantity}&no=${this.pcode}`;
                const headers = {"Content-Type" : "application/json", "token" : this.gettoken};
                const response = await axios.post(url, { }, {headers});
                // console.log(response);
                if(response.data.result === 1){
                    this.$router.push({ path: "/product_cart" });
                }
            },

            // 상품 메인 이미지 표시
            handleMainImg(e){
                if(e.target.files.length > 0) {
                    this.mainfile = e.target.files[0];
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.mainImg = e.target.result;
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            },

            // 상품 수량 변경 감지
            handleQuantityChange(){
                console.log(this.quantity);
            },

            // 상품 상세 내용 호출(상품 정보, 상세이미지, 리뷰, 문의)
            async handleDetailContents(){
                // 상품 기본정보
                const url = `REST/api/product_one?code=${this.pcode}`;
                const header = {"Content-Type" : "application/json"};
                const response = await axios.get(url, header);
                // console.log(response);

                if(response.data.result === 1){
                    this.detailcontents = response.data.product;
                    this.productPrice = response.data.product.productprice.toLocaleString();
                    // console.log(this.detailcontents);
                    this.productmainimg = response.data.imgurl;
                }

                // 상세정보(상세이미지)
                const url1 = `REST/api/select_subimage?product=${this.pcode}`;
                const response1 = await axios.get(url1, header);
                // console.log(response1);
                if(response1.data.result === 1){
                    this.subImgCodeList = response1.data.list;
                    // console.log(this.subImgCodeList);
                }

                // 추천물품
                const url4 = `REST/api/recommend/product?code=${this.pcode}`;
                const response4 = await axios.get(url4);
                console.log(response4);
                if(response4.data.result === 2){
                    this.recommended = response4.data.recommend;
                    console.log(this.recommended);
                    this.RproductPrice = response4.data.recommend.productprice.toLocaleString();

                    this.showRecommend = true;
                    this.RecommendStyle.width = "20%";
                    setTimeout(() => {
                        this.RecommendStyle.width = "0%";
                        this.RecommendStyle.padding = "0px";
                    }, 10000)
                }

                // 리뷰 목록
                const url2 = `REST/api/review/list/product?code=${this.pcode}&page=${this.page}`;
                const response2 = await axios.get(url2, header);
                // console.log(response2);
                if(response2.data.result === 1){
                    this.reviewList = response2.data.list;
                    this.pages = response2.data.count;
                    // console.log(this.pages);
                }

                // 문의글 목록
                const url3 = `REST/api/question/product/selectlist?no=${this.pcode}&kind=`;
                const response3 = await axios.get(url3,header);
                // console.log(response3);
                if(response3.data.result === 1){
                    this.questionList = response3.data.list;

                    for(var i=0; i<this.questionList.length; i++){
                        if(this.questionList[i].QUESTIONKIND === 1){
                            this.questionList[i].QUESTIONKIND = '상품문의';
                        }
                        else if(this.questionList[i].QUESTIONKIND === 2){
                            this.questionList[i].QUESTIONKIND = '배송문의';
                        }else this.questionList[i].QUESTIONKIND = '기타';
                    }

                    for(var j=0; j<this.questionList.length; j++){
                        if(this.questionList[j].QUESTIONREPLY === true){
                            this.questionList[j].QUESTIONREPLY = '답변완료';
                        }
                        else this.questionList[j].QUESTIONREPLY = '미답변';
                    }

                    // console.log(this.questionList);
                }
            },

            // 리뷰 점수 주기
            setReivewRating(reviewRating){
                return this.reviewRating = reviewRating;
            },

            //  리뷰 작성 및 등록
            async writeReview(){
                const url = `REST/api/review/insert?no=${this.pcode}`;
                const headers = {"Content-Type" : "multipart/form-data","token" : this.gettoken};
                const formData = new FormData();
                formData.append("reviewrating", this.reviewRating);
                formData.append("reviewcontent", this.reviewContent);
                formData.append("file", this.mainfile);

                const response = await axios.post(url, formData, {headers});
                console.log(response);
                if(response.data.result === 1){
                    this.successAlertMSG();
                    this.showWriting = false;
                }else this.failAlertMSG();
            },

            // 리뷰 작성하는 칸 보여주기
            async showWritingReview(){
                const url = `REST/api/payments/paylist/check?no=${this.pcode}`;
                const headers = {"token" : this.gettoken};
                const response = await axios.get(url, {headers});
                // console.log(response.data);
                if(response.data === 1){
                    this.successAlertMSG1();
                    this.showWriting = true;
                }else if(response.data === 0){
                    this.failAlertMSG1();
                }else if(response.data === 2){
                    this.infoAlertMSG();
                }
                else this.failAlertMSG2();
            },
            closeWritingReview(){
                this.showWriting = false;
            },


            // 문의 작성 및 등록
            async writeQuestion(){
                const url = `REST/api/question/insert?no=${this.pcode}`;
                const headers = {"Content-Type" : "application/json", "token" : this.gettoken};
                const body = {
                    questiontitle : this.questionTitle,
                    questioncontent : this.questionContent,
                    questionkind : this.selected
                }

                const response = await axios.post(url, body, {headers});
                if(response.data.result === 1) {
                    this.$socket.emit('addQuestion', {data : {QuestionIn : 1}});
                    this.successAlertMSG();
                    this.showFaqWriting = false;
                    await this.handleDetailContents();
                }else this.failAlertMSG();
            },

            // 문의 작성하는 칸 보여주기
            async showWritingFaq(){
                this.showFaqWriting = true;
                const url = `REST/api/member/find`;
                const headers = { "token" : this.gettoken };
                const response = await axios.get(url, {headers});
                // console.log(response);
                if(response.data.result === 1){
                    this.member = response.data.member;
                    // console.log(this.member);
                }
            },

            // 문의 작성하는 칸 닫기
            closeWritingFaq(){
                this.showFaqWriting = false;
            },

            // 장바구니 추가 -> 팝업창 띄우기
            async addCartList(){
                const url = `REST/api/cart/create/insert?cnt=${this.quantity}&no=${this.pcode}`;
                const headers = {"Content-Type" : "application/json", "token" : this.gettoken};
                const response = await axios.post(url, { }, {headers});
                // console.log(this.token);

                // console.log(response);

                if(response.data.result === 1){
                    this.$refs.handlePopCart.getCartItem();
                    this.CartPopup = true;
                    // this.addProductAlertMSG();
                }
                else if(response.data.result === 0){
                    this.infoAlertMSG2();
                }
                else if(this.token === undefined){
                    // this.CartPopup = true;
                    this.infoAlertMSG1();
                    this.$router.push({ path: "/login" });
                }
            },

            // 리뷰 신고하기 기능
            async handleReviewReport(val){
                if(confirm('신고하기')){
                    const url = `REST/api/member/report`;
                    const headers = {"Content-Type" : "application/json", "token" : this.gettoken};
                    const body = {
                        useremail : val,
                        reportdate : new Date().getTime
                    }
                    const response = await axios.post(url, body, {headers});
                    if(response.data.result === 1){
                        this.successAlertMSG2();
                        await this.handleDetailContents();
                    }
                    else if(response.data === 0){
                        this.failAlertMSG2();
                    }
                }
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
.pd_detail_wrapper{
    width: 100%;
    /* height: 100%; */
    font-family: 'Gowun Dodum', sans-serif;
    /* overflow-y: scroll; */
    scroll-behavior: smooth;
    margin-top: 4.5%;
}
.pd_detail_container{
    /* border: 1px solid black; */
    margin: 0 auto;
    width: 69%;
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
    align-items: center;
}
.detail_imgcontainer{
    width:700px; 
    height:450px; 
    /* border : 1px solid black;  */
    margin-right : 20px
}
.detail_imgcontainer img {
    width : 100%;
    height : 100%;
    border-radius: 3px;
    object-fit: cover;
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
    font-size: 17px;
    /* font-family: 'Playfair Display', serif; */
}
.pd_detail_info .pd_detail_header #productname{
    margin: 0px 0px 10px 10px;
    color: black;
    font-size: 20px;
}
.pd_detail_info .pd_detail_infocontainer{
    width : 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid rgb(0, 0, 0) ;
    display: flex;
    flex-direction: column;
    padding : 15px 0px;
}
.pd_detail_table{
    width: 100%;
    height : fit-content;
}
.pd_detail_table table th{
    text-align: left;
}
#saleprice{
    color: rgb(201, 31, 31);
    font-weight:bold;
    font-size: 30px;
}
.pd_detail_table tbody th{
    padding: 20px 5px;
}
.pd_detail_table tbody th span{
    font-size: 23px;
    font-weight: bold;
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
    font-size: 17px;
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
    font-size: 13px;
    padding-left: 8px;
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
    width : 275px;
    height : 65px;
    background-color: #715036;
    color: white;
    font-weight: bold;
    margin: 10px;
    border-radius: 3px; 
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    border: none;
}
.detail_section2 #addcartbtn{
    width : 275px;
    height : 65px;
    background-color: #ffffff;
    color: #715036;
    font-weight: bold;
    border: 0.3px solid #715036;
    margin: 10px;
    border-radius: 3px; 
    font-family: 'Playfair Display', serif;
    font-size: 20px;
}
.detail_section2 button:hover{
    opacity: 0.9;
    cursor: pointer;
}
.detail_section3 {
    margin-top: 100px;
    display: block;
    position: relative;
    width: 100%;
    height: fit-content;
}
.section3_navSection{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.selection3_navButtons{
    display: inline-flex;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    z-index : 1;
    background-color: white;
    justify-content: center;
    border-bottom: 0.5px solid #49654E;
}
.selection3_navButtons button{
    width: 255px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    background-color: white;
    color: #49654E;
    border: 0.5px solid #49654E;
    border-bottom: none;
    border-radius: 3px;
    margin: 0px 3px 0.5px 0px;
    font-family: 'Gowun Dodum', sans-serif;
}
.section3_detailSection{
    display: flex;
    flex-direction: column;
}
.section3_detailSection .detailInfo{
    margin : 20px 0px 50px 0px;
}
.productReview, .productFaq, .productRefundPolicy{
    margin-bottom: 50px;
    height: fit-content;
}
.reviewTitle, .faqTitleSection{
    /* border: 1px solid black; */
    display: inline-flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
}
.fake{
    border : 1px solid black;
    width : 80%;
    height : 80%;
}
.RecommendedContainer{
    background-color: rgba(255, 255, 255);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius : 0.3em;
    padding: 10px;
}
#cancelbtn{
    position: fixed;
    top: 15.5%;
    right : 3.4%;
}
.RecommendedTitle{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.RecommendedTitle p {
    font-weight: bold;
    margin: 10px auto;
    width : fit-content;
    font-size: 0.8em;
}
h3{
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
    width : fit-content;
    font-size: 25px;
}
.reviewContainer .reviewTitle > span,
.faqTitleSection > span {
    width: 120px;
    height: fit-content;
    margin-bottom: 10px;
}
.reviewContainer .reviewTitle span:hover,
.faqTitleSection > span:hover {
    cursor: pointer;
    font-weight: bold;
}
.reviewTable, .faqTable, .policyContent{
    border-top: 2px solid #49654E;
    display: flex;
    flex-direction: column;
}
.reviewTable .writeReviewSection{ 
    width: 94%;
    border: 0.5px solid #49654E;
    padding: 20px 40px 0px 0px;
    margin-top: 10px;
    border-radius: 5px;
}   
table{ 
    width: 96%;
    height: fit-content;
}  
.writeReviewSection table th,
.faqWriting table th{ 
    width: 50px;
    height: fit-content;
    /* border: 1px solid black; */
    text-align: center;
}
table td{ 
    width: 50px;
    height: fit-content;
    /* border: 1px solid black; */
    padding: 10px 0px 10px 10px;
}
table th span{ 
    width : fit-content;
}
#floatingTextarea2{
    border: 0.5px solid #b6b6b6;
    margin-top: 10px;
    width: 100%;
    border-radius: 3px;
    height: 140px;
}
.writeReviewSection_warning{
    width: fit-content;
    margin-left:12em;
}
.writeReviewSection_warning span{
    font-size: 13px;
    width: fit-content;
}
.writeFaqSection_warning{
    width: fit-content;
    margin-left:13em;
}
.writeFaqSection_warning p{
    font-size: 12px;
    width: fit-content;
    margin : 0px;
}
.writeReviewSection_warning p{
    font-size: 12px;
    width: fit-content;
    margin : 0px;
}
.reviewBtnContainer{
    display: inline-flex;
    width: fit-content;
    float : right;
    margin: 20px 0px;
}
.reviewBtnContainer button:hover{
    cursor: pointer;
    opacity: 0.9;
}
#writingReviewBtnClose{
    width: 110px;
    height: 40px;
    color: #715036;
    background-color: white;
    border: 0.5px solid #715036;
    border-radius: 3px;
    margin : 10px 5px 20px 0px;
}
#writingReviewBtn{
    width: 110px;
    height: 40px;
    color: white;
    background-color: #715036;
    border: none;
    border-radius: 3px;
    margin : 10px 5px 20px 0px;
}
.reviewContents{
    display: flex;
    flex-direction: row;
}
.form-floating{
    width : 100%;
    /* margin: 0px 10px; */
}
.form-floating textarea{
    border: 0.5px solid #b6b6b6;
    width: 100%;
    height: 70%;
    margin-top: 5px;
    padding: 10px;
    border-radius: 3px;
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 14px;
}
.faqWritingContents .form-floating{
    width : 100%;
    margin-top: 10px;
    /* margin: 0px 10px; */
}
input[type="file"]{
    display: none;
}
.main_image_container{
    border-radius: 2px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
}
#mainImg{
    width :130px;
    border-radius: 2px;
}
.main_image_container > label {
    border: 1px solid rgb(206 212 217);
    width: fit-content;
    height: fit-content;
    padding: 5px;
    background-color: white;
    color: black;
    margin: 5px;
    border-radius: 3px;
}
.reviewArea, .faqList{
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #49654E;
    padding: 20px;
}
.reviewArea:hover, 
.faqList:hover{
    cursor: pointer;
    opacity: 0.9;
    background-color: #dbdbdbb9;
}
.reviewTable #reviewTitle{
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0;
}
.reviewTable #reviewTitle #rating{
    margin-top: 0;
}
.reviewTable #reviewTitle #rating, p{
    width: fit-content;
}
.reviewTable #reviewTitle p:last-child{
    margin: 0px 0px 0px 20px;
}
.reviewTable #titleSection{
    display: inline-flex;
    align-items: center;
}
.reviewTable #titleSection p{
    margin: 0px 0px 0px 15px;
}
.reviewTable .reviewArea #reviewContent{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}
.reviewTable .reviewArea #reviewContent img{
    width: 90px;
    height: 90px;
    border-radius: 3px;
}
.reviewTable .reviewArea #reviewContent p{
    margin : 0px 0px 0px 20px;
    width : 100%;
}
.report_btn{
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-family: 'Gowun Dodum', sans-serif;
    text-decoration-line: underline;
    color: #49654E;
    font-weight: bold;
}
.report_btn:hover{
    cursor: pointer;
    background-color: transparent;
    color: #49654E;
}
.pagination{
    width : fit-content;
    margin: 3% auto;

}
input[type="text"] {
    border: none;
}
input:focus{
    color: white;
    outline: none;
}
button:hover{
    background-color: #49654E;
    color: white;
}

.subImgContainer{
    width: 100%;
    align-content: center;
}
.subImgContainer img{
    width: 100%;
}
.faqContainer{
    width: 100%;
    /* border: 1px solid black; */
}
.faqContainer .faqTable{
    /* border: 1px solid black; */
    width: 100%;
}
.faqWriting {
    width: 100%;
    border: 0.5px solid #49654E;
    padding: 30px 40px 0px 0px;
    margin-top: 10px;
    border-radius: 5px;
}
.faqTable .faqWritingContents{
    display: flex;
    flex-direction: column;
}
.faqWritingSelect{
    width: 150px;
}
.form-select {
    margin: 0px 0px 10px 0px;
}
.faqList > p{
    margin: 0;
    width: fit-content;
    padding: 10px;
    color: rgba(185, 185, 185, 0.933);
    font-weight: bold;
    font-size: 13px;
}
.faqContnet { 
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 10px;
}
.faqContnet .faqLead{
    display : inline-flex;
    width : 100%;
}
.faqLead {
    display: flex;
    flex-direction: column;
}
.faqContnet .faqSecond{
    display: inline-flex;
    width : fit-content;
    text-align: right;
    align-items: center;
}
.faqContnet .faqSecond p{
    margin: 0px 10px;
    width : max-content;
}
.faqContnet .faqSecond p:last-child{
    /* margin-right: 20px; */
    width : max-content;
    margin-left: 20px;
    height : fit-content
}
.faqSecond .badge{
    background-color: #49654E;
    /* border: 0.5px solid #49654E; */
    border-radius: 3px;
    padding: 5px;
    color: white;
    font-family: 'Gowun Dodum', sans-serif;
    height : 30px;
}
.productRefundPolicy .policyContent{
    padding-top: 15px;
    padding-left: 15px;
}

#reportTitle{
    font-weight: bold;
    font-size : 1rem;
}
.RecommendedTable{
    width: 100%;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    position: relative;
}
.RecommendedTable img:hover{
    width: 100%;
    height: 100%;
    z-index: 0;
}
.RecommendedTableText p:first-child {
    font-size: 19px;
    font-weight: bold;
    color: rgb(100, 100, 100);
    margin-bottom: 5px;
}
.RecommendedTableText p:nth-child(2){
    font-size: 17px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
}
.RecommendedTableText p:nth-child(3){
    font-size: 19px;
    font-weight: bold;
    color: #333;
}
</style>