<template>
    <div class="admin_brand_insert_wrapper">
        <div class="br_in_header">
            <p>브랜드관리</p>
            <span> > </span>
            <p id="brand_section">브랜드추가</p>
        </div>
        <hr class="solid" />
        <div class="admin_bri_content">
            <div class="admin_name">
                <P>브랜드명</P>
                <input type="text" id="adbr_put"/>
            </div>
            <div class="admin_put_img">
                <!-- <div class="img_p"> -->
                    <P>이미지</P>
                <!-- </div> -->
                <img :src="uploadImageFile" class="popupImageItem" /><br/>
                <div class="ad_img">
                    <input type="file" @change="onFileSelected($event)">
                </div>
            </div>
            <div class="admin_history">
                <P>브랜드 설명</P>
                <textarea rows="5" id="adbr_history"></textarea>
            </div>
            <div class="ad_bri_btn">
                <button type="button" id="ad_btn_insert" @click="handleAdmin" >등록하기</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uploadImageFile : []
            }
        },
        methods : {
            onFileSelected(event) {
                var input = event.target;
                if (input.files.length>0) {
                    var reader = new FileReader();
                    reader.onload = (event) => {
                        this.uploadImageFile = event.target.result;
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
        }
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&family=Gowun+Dodum&family=Playfair+Display:wght@400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');

.admin_brand_insert_wrapper {
    height: 100%;
    display : grid;
    grid-template-rows: 14% 1% 85%;
    grid-template-columns: 100%;
    grid-template-areas: "br_in_header", "apl_divider" "apl_content";
    font-family: 'Exo', sans-serif;
}
.br_in_header {
    width: 100%;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Gowun Dodum', sans-serif;
}
.br_in_header p, span {
    width : fit-content;
    margin : 0 0px 0px 20px;
    color : rgba(29, 29, 29, 0.795);
    font-size: 20px;
}
.brand_section {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: bold;
    color: black;
}
#brand_section {
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: bold;
    color: black;
}
.solid {
    /* border: 0.8px solid black; */
    width : 100%;
    height: 3px;
    margin-top: 4px;
}
.admin_bri_content {
    /* border: 1px solid black; */
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
}
.admin_bri_content {
    /* border: 1px solid black; */
    margin: 0 auto;
}
.admin_name {
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    font-family: 'Gowun Dodum', sans-serif;
    margin-top: 20px;
    margin-bottom: 28px;
}
.admin_name p {
    /* border: 1px solid black; */
    margin-right: 15px;
    margin-top: 13px;
}
#adbr_put {
    width: 300px;
}
#adbr_history {
    width: 300px;
    margin-right: 19px;
}
.admin_history {
    /* border: 1px solid black; */
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 503px;
}
.admin_history p {
    /* border: 1px solid black; */
    margin-right: 15px;
    margin-top: 45px;
    font-family: 'Gowun Dodum', sans-serif;
    block-size: fit-content;
}
.admin_put_img {
    /* border: 1px solid black; */
    margin: 0 auto;
    width: 503px;
    margin-bottom: 28px;
}
.admin_put_img p {
    display: inline-block;
    width: fit-content;
    /* border: 1px solid black; */
    margin-right: 20px;
    margin-left: 74px;
    font-family: 'Gowun Dodum', sans-serif;
}
.popupImageItem{
    border: 1px solid rgb(211, 206, 206);
    width: 300px;
    height: 190px;
}
.ad_img {
    /* border: 1px solid black; */
    margin-left: 139px;
}
.ad_bri_btn {
    margin: 0 auto;
}
#ad_btn_insert{
    width: 140px;
    height: 45px;
    display: block;
    margin-left: 86px;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    background-color: #49654E;
    margin-top: 30px;
}
</style>