<template>
     <div class="info_wapper">
        <MyPage_Info></MyPage_Info>
        <div class="info_list">
            <div class="info_title">
                <p>My Page</p>
            </div>
            <div class="order_list" @click="mypage_orli_btn">
                <div class="order_list_name">
                     <p>최근 주문내역</p>
                    <p>더보기 <img :src="mypage" style="right" class="mypage_plus"/> </p>
                </div>
                <div class="or_li_box1" >
                </div>
            </div>
            <div class="qna_list">
                <div class="order_list_qa">
                    <p>최근 문의내역</p>
                    <p>더보기 <img :src="mypage" style="right" class="mypage_plus"/></p>
                </div>
                <div class="or_qa_box1">
                </div>
            </div>
        </div>
    </div>
    <!-- <Footer></Footer> -->
</template>

<script>
import mypage_mail from '@/assets/mypage_mail.png';
import mypage_address from '@/assets/mypage_address.png';
import mypage from '@/assets/mypage.png';
import MyPage_Info from '@/components/MyPage_Info.vue';
//import Footer from './Footer.vue';
    export default {
        data() {
            return {
                mypage_mail : mypage_mail,
                mypage_address : mypage_address,
                mypage : mypage,
            }
        },
        components : {
            MyPage_Info : MyPage_Info,
            //Footer : Footer
        },
        methods : {
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.info_wapper {
    /* border: 1px solsid black; */
    width: 100%;
    height: 100%;
    display: flex;
    font-family: 'Gowun Dodum', sans-serif;
} 
.info_list {
    /* border: 1px solid black; */
    width: 100%;
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
    font-weight: bold;
    display: flex;
    flex-direction: column;
}
.order_list_name, .order_list_qa {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
}
.order_list > p {
    /* border: 1px solid black; */
    margin-top: 0px;
    color: #715036;
    font-weight: bold;
}
.or_li_box1, .or_qa_box1 {
    border: 1px solid black;
    width: 100%;
    height: 215px;
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
</style>