<template>
    <div class="table">
    <el-table
        :data="tableData"
        :default-sort="{ prop: 'address, name', order: 'ascending' }"
        style="width: 100%"
    >
        <el-table-column prop="date" label="Date" width="180"  />
        <el-table-column prop="name" label="Name" sortable width="180" :formatter="formatter" />
        <el-table-column prop="address" label="Address" sortable width="180" :formatter="formatter" />
    </el-table>
    </div>
    <!-- <div>
<div class="fly">
    <button><a href="#">위로</a></button>
</div>
<div class="con"></div>
    <div class="box">
        <p class="sky"></p>
    </div> -->

        <!-- <h2>전화번호를 입력해보세요.</h2> -->
        <!-- <input type="text" @keyup="phone_format" id="m_id"/> -->
        <!-- <input type="text" @keyup="inputPhoneNumber(this);" maxlength="13" style="text-align:center;"/> -->
        <!-- <input type="text" oninput="autoHyphen(this)" maxlength="13" > -->
        <!-- <input type="text" class="phoneNumber" @keyup="handle"> -->
        <!-- <input type="text" id="phoneNum" maxlength="13"> -->
    <!-- </div> -->
</template>


<script>


//import $ from 'jquery';

// console.clear();
// $(window).scroll(function() {
//     let scrollTop = $(this).scrollTop();
//     console.log(scrollTop)
    
//     if ( scrollTop < 100 ) {
//         scrollTop = 100;
//     }
//     else if ( scrollTop > 9600 ) {
//         scrollTop = 9600;
//     }
    
//     let duration = 1000;
//     $('.fly').stop().animate({top:scrollTop}, duration);
    
//     //console.log(scrollTop);
// });

    // $(function () {
    //     $(window).scroll(function () { //브라우저에 스크롤이 발생하는 순간부터
    //         var curpos = $(window).scrollTop()+40; //스크롤바의 상단 위치값+20 보관
    //         $(".sky").stop().animate({"top":curpos}); //스카이메뉴의 상단위치값 애니
    //     });
    // });

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
                tableData: [
                    {
                    date: '2016-05-03',
                    name: 'c',
                    address: 'aaaaaaaaa',
                    },
                    {
                    date: '2016-05-02',
                    name: 'a',
                    address: 'bbbbbbbbbb',
                    },
                    {
                    date: '2016-05-04',
                    name: 'd',
                    address: 'cccccccccc',
                    },
                    {
                    date: '2016-05-01',
                    name: 'b',
                    address: 'dddddddddddd',
                    },
                ],
            }
        },
                // document : '',
                // this : '',
                // phoneNum :'',
                // inputPhoneNumber : ''

                // const autoHyphen = (target) => {
                // target.value = target.value
                // .replace(/[^0-9]/, '')
                // .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
            
                // }


        methods : {
            formatter(row, column) {
                return row.address
            }
        },

    }

            
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
    
    
</script>



<style scoped>

.table {
    margin-top: 150px;
    margin-left: 100px;
}

#sidebox { background-color:#F0F0F0; position:absolute; width:120px; top:433px; right:420px; padding: 3px 10px }



body{text-align:center;}
#wrap{text-align:left;margin:0 auto;width:600px;}
#slidemenu{background:#12cf3d;position:absolute;width:100px;top:50px;right:10px;}

/* 스크롤 따라오기test */
body {
    margin:0;
    padding:0;
}

.fly {
    position:absolute;
    left:50%;
    width:100px;
    top:100px;
    height:500px;
    margin-left:520px;
    background-color:red;
}

div.con {
    width:1000px;
    margin: 100px auto;
    margin-bottom:1000px;
    height:10000px;
    background: linear-gradient(to bottom, red, yellow);
}


</style>