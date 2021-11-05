<template>
    <div class="info_wapper">
        <MyPage_Info></MyPage_Info>
        <div class="info_list">
            <div class="order_list">
                <p>최근 주문내역</p>
                <p>더보기 <img :src="mypage" style="right" class="mypage_plus"/></p>
            </div>
            <div class="or_li_box1">
                        
            </div>
            <div class="or_li_box2">
                        
            </div>
            <div class="qna_list">
                <p>최근 문의내역</p>
                <p>더보기 <img :src="mypage" style="right" class="mypage_plus"/></p>
            </div>
            <div class="qna_li_box2">
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Footer from '@/components/Footer.vue';
import mypage_mail from '@/assets/mypage_mail.png';
import mypage_address from '@/assets/mypage_address.png';
import mypage from '@/assets/mypage.png';
import MyPage_Info from '@/components/MyPage_Info.vue';

    export default {
        data() {
            return {
                mypage_mail : mypage_mail,
                mypage_address : mypage_address,
                mypage : mypage,
            }
        },
        components : {
            Footer : Footer,
            MyPage_Info : MyPage_Info
        },
        methods : {

        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.info_wapper {
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;
    padding: 20px;
    display: inline-flex;
    font-family: 'Gowun Dodum', sans-serif;;
}
.info_list {
    /* border: 1px solid black; */
    width: 100%;
}
.order_list {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.order_list > p {
    /* border: 1px solid black; */
    display: inline-block;
    color: #715036;
    font-weight: 500;
}
.or_li_box1 {
    border: 2px solid black;
    width: 100%;
    height: 135px;
    margin-bottom: 10px;
    border-radius: 5px;
}
.or_li_box2 {
    border: 2px solid black;
    height: 135px;
    border-radius: 5px;
    margin-bottom: 31px;
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
}
.qna_li_box2 {
    border: 2px solid black;
    height: 165px;
    border-radius: 5px;
}
.order_list > p > img {
    /* border: 1px solid black; */
    width: 10px;
    height: 16px;
    margin-bottom: 3px;
}
.qna_list > p > img {
    /* border: 1px solid black; */
    width: 10px;
    height: 16px;
    margin-bottom: 3px;
}
</style>