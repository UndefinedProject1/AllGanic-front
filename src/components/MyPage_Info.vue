<template>
    <div class="info_box">
            <div class="info_name">
                <span>정지희</span>
                <p>님</p>
            </div>
            <div class="info_info">
                <div class="info_email">
                    <img :src="mypage_mail"/>
                    <p>sksmsdiWkd!@naver.com</p>
                </div>
                <div class="info_ad_icon">
                    <img :src="mypage_address"/>
                    <div class="info_address">
                        <p>Address: 43 Oxford Road M13 4GR Manchester, UK
                            <button type="button" @click="handleAdUpdate">기본주소 수정</button>
                        </p>
                    </div>
                </div>
            </div>
            <hr class="solid" />
            <div class="info_menu">
                <span>Member</span>
                <p>회원정보변경</p>
                <p>회원탈퇴</p>
                <span>Order</span>
                <p>취소/교환/반품 내역</p>
                <p>주문내역</p>
                <span>QnA</span>
                <p>문의내역</p>
            </div>
        </div>
</template>

<script>
import mypage_mail from '@/assets/mypage_mail.png';
import mypage_address from '@/assets/mypage_address.png';
    export default {
        data() {
            return {
                mypage_mail : mypage_mail,
                mypage_address : mypage_address,
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Hahmlet&display=swap');
.info_box {
    border: 1px solid black;
    width: 500px;
    height: 100%;
    border-radius: 10px;
    margin-right: 20px;
}
.info_info {
    /* border: 1px solid black; */
    padding: 5px;
    margin-left: 60px;
}
.info_name {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: auto 0px;
    margin-top: 15px;
}
.info_name > span {
    /* border: 1px solid black; */
    color: #49654E;
    font-size: 30px;
    font-weight: 300;
    font-family: 'Gowun Dodum', sans-serif;
}
.info_name > p {
    /* border: 1px solid black; */
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 20px;
    color: black;
    margin-left: 5px;
    margin-top: 10px;
}
.info_email {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.info_email > img {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
.info_ad_icon {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 5px;
}
.info_ad_icon >img {
    /* border: 1px solid black; */
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-top: 12px;
}
.solid {
    width : 100%;
    height: 1px;
}
.info_address > p > button {
    /* border: 1px solid black; */
    width: auto 0px;
    height: auto 0px;
    border-radius: 5px;
    font-size: 13px;
    justify-content: center;
    background-color: #715036;
    color: white;
    margin-top: 3px;
}
.info_address > p {
    width: 80%;
}
.info_menu {
    /* border: 1px solid black; */
    width: auto 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
.info_menu > span {
    color: #715036;
    font-weight: 500;
    font-size: 20px;
}
</style>