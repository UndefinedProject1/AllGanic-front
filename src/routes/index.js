import { createWebHistory, createRouter } from "vue-router";

import Main from '@/components/Main.vue';
import Join from '@/components/Join.vue';
import Login from '@/components/Login.vue';
import Cart_Popup from '@/components/Cart_Popup.vue';
import Admin_Page from '@/components/Admin_Page.vue';
import Admin_Brand_Insert from '@/components/Admin_Brand_Insert.vue';


const routes = [
    {path : '/' , name :'main', component : Main},
    {path : '/join' , name :'join', component : Join},
    {path : '/login' , name :'login', component : Login},
    {path : '/cart_popup' , name :'cart_popup', component : Cart_Popup},
    {path : '/admin_page' , name :'admin_page', component : Admin_Page},
    {path : '/admin_brand_insert' , name :'admin_brand_insert', component : Admin_Brand_Insert},
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});


export default router;