<template>
    <div>
        <h2>전화번호를 입력해보세요.</h2>
        <input type="text" class="phoneNumber" maxlength="13" >
        <!-- <input type="text" oninput="autoHyphen(this)" maxlength="13"> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
            $(document).on("keyup", ".phoneNumber", function() { $(this).val( $(this).val().replace(/[^0-9]/g, "")
            .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ); });
        },
        methods : {
            
                // $(document).on("keyup", ".phoneNumber", function() { $(this).val( $(this).val().replace(/[^0-9]/g, "")
                // .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ); });
                
                // const autoHyphen = (target) => {
                // target.value = target.value
                // .replace(/[^0-9]/, '')
                // .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
                // console.log(autoHyphen);

                //     if(autoHyphen >= 13) {
                //         alert("OK");
                //     }
                // }
            
        }
    }
</script>

<style scoped>
input {
  width: 20rem;
  height: 3rem;
  border-radius: 5px;
  padding-left: 1rem;
}

h2 {
  color: #2a3189;
}
</style>