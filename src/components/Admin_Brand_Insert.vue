<template>
    <div class="admin_brand_insert_wrapper">
        <div class="br_in_header">
            <p>상품관리</p>
            <span> > </span>
            <p id="brand_section">제품등록</p>
        </div>
        <hr class="solid" />
        <div class="admin_bri_content">
            <div class="admin_name">
                <P>브랜드명</P>
                <input type="text" id="adbr_put"/>
            </div>
            <div class="admin_put_img">
                <input type="file" id="ad_img" @change="onFileSelected($event)" />
                <img :src="uploadImageFile" class="popupImageItem" />
            </div>
            <div class="admin_history">
                <P>브랜드 설명</P>
                <textarea rows="8" id="adbr_history"></textarea>
            </div>
        </div>
        <div class="admin_brand_img">

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

<style>
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
    border: 1px solid black;
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
    border: 0.8px solid #dc3545;
    height: 0.3px;
    width : 100%;
}
.admin_bri_content {
    width: 70%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 30px;
}
.admin_bri_content {
    border: 1px solid black;
}
.admin_name {
    border: 1px solid black;
    display: flex;
    justify-content: center;
}
.admin_name p {
    border: 1px solid black;
    margin-right: 15px;
    margin-top: 13px;
}
#adbr_put {
    width: 300px;
}
.admin_bri_content2 {
    border: 1px solid black;
}
#adbr_history {
    width: 300px;
}
.admin_history {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.admin_history p {
    border: 1px solid black;
    margin-right: 15px;
    margin-top: 75px;
    height: fit-content;
}
.admin_put_img {
    border: 1px solid black;
    width: 300px;
    height: 150px;
}
.admin_put_img input {
    border: 1px solid black;
}
.popupImageItem{
    width: 100px;
    height: 100px;
}


</style>