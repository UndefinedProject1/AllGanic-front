import { createWebHistory, createRouter } from "vue-router";
import axios from "axios";

import Main from '@/components/Main.vue';
import Join from '@/components/Join.vue';
import Login from '@/components/Login.vue';
import Cart_Popup from '@/components/Cart_Popup.vue';
import Admin_Page from '@/components/Admin_Page.vue';
import Restrict_Page from '@/components/Restrict_Page.vue';
import Product_Table from '@/components/Product_Table.vue';
import Product_Detail from '@/components/Product_Detail.vue';
import MyPage_Member_Update from '@/components/MyPage_Member_Update.vue';
import MyPage_Delete from '@/components/MyPage_Delete.vue';
import Order_Page from '@/components/Order_Page.vue';
import Product_Cart from '@/components/Product_Cart.vue';
import MyPage_Order_List from '@/components/MyPage_Order_List.vue';
import MyPage_QA_List from '@/components/MyPage_QA_List.vue';
import MyPage_Cancle from '@/components/MyPage_Cancle.vue';
import Brand_Product_Table from '@/components/Brand_Product_Table.vue';
import MyPage_Near_List from '@/components/MyPage_Near_List.vue';
import MyPage_Info from '@/components/MyPage_Info.vue';
import test from '@/components/test.vue';
import Admin_Handle_Member from '@/components/Admin_Handle_Member.vue';
import ForgotPassword from '@/components/ForgotPassword.vue';
import Login_callBack from '@/components/Login_callBack.vue';


const routes = [
    {path : '/' , name :'main', component : Main},
    {path : '/join' , name :'join', component : Join},
    {path : '/login' , name :'login', component : Login},
    {path : '/cart_popup' , name :'cart_popup', component : Cart_Popup},
    {path : '/admin_page' , name :'admin_page', component : Admin_Page},
    {path : '/restrict_page' , name :'restrict_page', component : Restrict_Page},
    {path : '/product_table' , name :'product_table', component : Product_Table},
    {path : '/product_detail' , name :'product_detail', component : Product_Detail},
    {path : '/mypage_member_update' , name :'mypage_member_update', component : MyPage_Member_Update},
    {path : '/mypage_delete' , name :'mypage_delete', component : MyPage_Delete},
    {path : '/order_page' , name :'order_page', component : Order_Page},
    {path : '/product_cart' , name :'product_cart', component : Product_Cart},
    {path : '/mypage_order_list' , name :'mypage_order_list', component : MyPage_Order_List},
    {path : '/mypage_qa_list' , name :'mypage_qa_list', component : MyPage_QA_List},
    {path : '/mypage_cancle' , name :'mypage_cancle', component : MyPage_Cancle},
    {path : '/brand_product_table' , name :'brand_product_table', component : Brand_Product_Table},
    {path : '/mypage_near_list' , name :'mypage_near_list', component : MyPage_Near_List},
    {path : '/mypage_info' , name :'mypage_info', component : MyPage_Info},
    {path : '/test' , name :'test', component : test},
    {path : '/admin_handle_member' , name :'admin_handle_member', component : Admin_Handle_Member},
    {path : '/forgotpassword' , name :'forgotpassword', component : ForgotPassword},
    {path : '/login_callback' , name :'login_callback', component : Login_callBack},
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

router.beforeEach( async(to, from, next ) => {
    console.log(to);
    console.log(from);

    // 로그인 인증
    var result = 0;
    // const token = sessionStorage.getItem("token");
    // next();
    if (token !== null) {
        // 유효한 토큰인지 확인
        const url = `REST/api/validtoken`;
        const headers = { 
            "Content-Type" : "application/json", 
            "token": sessionStorage.getItem("token")
        };
        const response = await axios.get(url, {headers});
        result = response.data.ret; //-1, 0, 1로 넘어옴
    }

    
    //URL을 등록을 하지 않는 페이지(Login, Join 등)
    sessionStorage.setItem("URL", 
        JSON.stringify({path:"/", query:{}})
    );

    // URL을 반드시 등록해야 하는 곳 (OrderAction, )
    if(to.name !== 'login' && to.name !== 'join' ){
        sessionStorage.setItem("URL", JSON.stringify({path:to.path, query: to.query})
        );
    }

    if(to.name === 'product_cart' && result !== 1) {
        // to.fullPath => 이동하고자하는 url전체 정보
        next({name:'login'}); // 로그인페이지로 이동
    }
    // else if(to.name === 'Menu2' && result !== 1) {
    //    next({name:'login'}); // 로그인페이지로 이동
    // }
    else {
        next() // 원래 이동하고자하는 페이지
    }
});

// router.beforeEach( async (to, from, next) => {
//     console.log(to);
//     console.log(from);

//     // const role = sessionStorage.getItem("role");
//     const token = sessionStorage.getItem("token");
//     var result = 0;


//     const url = `REST/api/member/validtoken`;
//     const headers = {"token" : token };
//     const response = await axios.get(url, {headers}); 
//     result = response.data.ret;

//     // URL 저장해서 마지막으로 있었던 페이지를 기억할 필요가 없는 경우(로그인, 조인 등)
//     sessionStorage.setItem("URL", JSON.stringify({path:"/", query:{}}));
    
//     // // URL 저장을 통해 마지막으로 있었던 페이지를 기억해야하는 경우
//     // if(to.name !== 'login' && to.name !== 'join' && to.name !== 'maypage' && result === 1){
//     //     sessionStorage.setItem("URL", JSON.stringify({path:to.path, query:to.query}));
//     // }

//     //로그인이 되지 않은채로 장바구니 접근시 -> 로그인 페이지로
//     // if(to.name === 'product_cart' && result !== 1){
//     //     if(result === 0){
//     //         next({name:'login'});
//     //     }
//     // }

//     // // 로그인이 되지 않은채로 주문 페이지 접근시 -> 로그인 페이지로
//     // if(to.name === 'order_page' && result !== 1){
//     //     if(result === 0){
//     //         next({name:'login'});
//     //     }
//     // }

//     // // 관리자 페이지 막기
//     // if(to.name === 'admin_page' && role !== 2){
//     //     next({name : 'restrict_page'});
//     // }
//     // else{
//     //     next()
//     // }
// });

export default router;