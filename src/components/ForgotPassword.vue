<template>
    <div class="forgotpassword_wrapper">
        <div class="forgotpassword_container">
            <div class="forgotpassword_insert">
                <div class="forgotpassword">
                    <p>비밀번호 찾기</p>
                    <div class="divider"></div>
                </div>
                <div class="forgotpassword_box">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.forgotpassword_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    justify-content: center;
    flex-direction: column;
    font-family: 'Gowun Dodum', sans-serif;
    margin-top: 4.5%;
}
.forgotpassword_container {
    /* border: 1px solid black; */
    width: 40%;
    height : 100%;
    display: inline-flex;
    margin: 0 auto;
    padding:40px;
    justify-content: center;
    align-items: center;
}
.forgotpassword_insert {
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.divider {
    border : 0.3px solid #49654E;
    height: 0.1px;
    width : 100%;
}
</style>