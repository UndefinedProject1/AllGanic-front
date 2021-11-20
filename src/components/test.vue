<template>
    <div>
        <h2>전화번호를 입력해보세요.</h2>
        <!-- <input type="text" @keyup="phone_format" id="m_id"/> -->
        <!-- <input type="text" @keyup="inputPhoneNumber(this);" maxlength="13" style="text-align:center;"/> -->
        <!-- <input type="text" oninput="autoHyphen(this)" maxlength="13" > -->
        <input type="text" class="phoneNumber" @keyup="handle">
        <!-- <input type="text" id="phoneNum" maxlength="13"> -->
    </div>
</template>


<script>
// import $ from 'jquery';
            // function inputPhoneNumber(obj) {



            //     var number = obj.value.replace(/[^0-9]/g, "");
            //     var phone = "";



            //     if(number.length < 4) {
            //         return number;
            //     } else if(number.length < 7) {
            //         phone += number.substr(0, 3);
            //         phone += "-";
            //         phone += number.substr(3);
            //     } else if(number.length < 11) {
            //         phone += number.substr(0, 3);
            //         phone += "-";
            //         phone += number.substr(3, 3);
            //         phone += "-";
            //         phone += number.substr(6);
            //     } else {
            //         phone += number.substr(0, 3);
            //         phone += "-";
            //         phone += number.substr(3, 4);
            //         phone += "-";
            //         phone += number.substr(7);
            //     }
            //     obj.value = phone;
            // }
    export default {
        data() {
            return {
                // document : '',
                // this : '',
                // phoneNum :'',
                // inputPhoneNumber : ''

                // const autoHyphen = (target) => {
                // target.value = target.value
                // .replace(/[^0-9]/, '')
                // .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
                // }
            }
        },
        methods : {

        // phone_format() { 
        //     var num = $("#m_id").val(); 
        //     var phone_num = num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3"); 
        //     $("#m_id").val(phone_num); 
        //     $("#mobile1").val(num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1")); 
        //     $("#mobile2").val(num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$2")); 
        //     $("#mobile3").val(num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$3")); }

            
            // handle() {
            // $(document).on("keyup", ".phoneNumber", function() { 
            //     $(this).val( $(this).val().replace(/[^0-9]/g, "")
            //     .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ); 
            //     });
            // }
            
            // autoHypenPhone = function(str){
            //     str = str.replace(/[^0-9]/g, '');
            //     var tmp = '';
            //     if( str.length < 4){
            //         return str;
            //     }else if(str.length < 7){
            //         tmp += str.substr(0, 3);
            //         tmp += '-';
            //         tmp += str.substr(3);
            //         return tmp;
            //     }else if(str.length < 11){
            //         tmp += str.substr(0, 3);
            //         tmp += '-';
            //         tmp += str.substr(3, 3);
            //         tmp += '-';
            //         tmp += str.substr(6);
            //         return tmp;
            //     }else{              
            //         tmp += str.substr(0, 3);
            //         tmp += '-';
            //         tmp += str.substr(3, 4);
            //         tmp += '-';
            //         tmp += str.substr(7);
            //         return tmp;
            //     }
            
            //     return str;
            // }
            // phoneNum = document.getElementById('phoneNum');

            // phoneNum.onkeyup = function(){
            // console.log(this.value);
            // this.value = autoHypenPhone( this.value ) ;  
            // }

            // function inputPhoneNumber(obj) {



            //     var number = obj.value.replace(/[^0-9]/g, "");
            //     var phone = "";



            //     if(number.length < 4) {
            //         return number;
            //     } else if(number.length < 7) {
            //         phone += number.substr(0, 3);
            //         phone += "-";
            //         phone += number.substr(3);
            //     } else if(number.length < 11) {
            //         phone += number.substr(0, 3);
            //         phone += "-";
            //         phone += number.substr(3, 3);
            //         phone += "-";
            //         phone += number.substr(6);
            //     } else {
            //         phone += number.substr(0, 3);
            //         phone += "-";
            //         phone += number.substr(3, 4);
            //         phone += "-";
            //         phone += number.substr(7);
            //     }
            //     obj.value = phone;
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
  margin-left: 50px;
}

h2 {
  color: #2a3189;
}
</style>