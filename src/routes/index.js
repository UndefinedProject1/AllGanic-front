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
    const token = sessionStorage.getItem("token");
    // var referrer = document.referrer;
    // console.log(token);
    // next();
    if (token !== null) {
        // 유효한 토큰인지 확인
        const url = `REST/api/validtoken`;
        const headers = { 
            "Content-Type" : "application/json", 
            "token": sessionStorage.getItem("token")
        };
        const response = await axios.get(url, {headers});
        result = response.data;
    }

    //URL을 등록을 하지 않는 페이지(Login, Join 등)
    // if( sessionStorage.setItem("URL", JSON.stringify({path:"/", query:{}})) ) {
    //     if(to.path !== '/login' || to.path !== '/join' ){
    //         sessionStorage.setItem("URL", JSON.stringify({path:to.path, query: to.query})
    //         );
    //     }
    // }
    // URL을 반드시 등록해야 하는 곳 (OrderAction, )
    if(to.path !== '/login' && to.path !== '/join' ){
        sessionStorage.setItem("URL", JSON.stringify({path:to.path, query: to.query})
        );
    }
    // console.log(to.path);
    if(to.path === '/product_cart' && result === 0) {
        // console.log("aaa");
        // to.fullPath => 이동하고자하는 url전체 정보
        next({path:'/login'}); // 로그인페이지로 이동
    }
    else {
        next() // 원래 이동하고자하는 페이지
    }
});


export default router;