<template>
    <div class="info_wapper">
        <MyPage_Info></MyPage_Info>
            <div class="info_list">
                <div class="qa_title">
                    <p>문의내역</p>
                </div>
                <div class="qa_insert">

                </div>
                
            </div>

    </div>
    <Footer></Footer>
</template>

<script>
import MyPage_Info from '@/components/MyPage_Info.vue';
import Footer from '@/components/Footer.vue';
    export default {
        data() {
            return {
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
.qa_title > p {
    margin-top: 0px;
    color: #715036;
    font-weight: bold;
}
.qa_insert {
    border: 2px solid black;
    width: 100%;
    height: 475px;
    border-radius: 5px;
}
</style>