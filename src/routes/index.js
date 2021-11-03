import { createWebHistory, createRouter } from "vue-router";

import Main from '@/components/Main.vue';
import Join from '@/components/Join.vue';
import Login from '@/components/Login.vue';
import Cart_Popup from '@/components/Cart_Popup.vue';
import Admin_Page from '@/components/Admin_Page.vue';
import Restrict_Page from '@/components/Restrict_Page.vue';
import Product_Table from '@/components/Product_Table.vue';

const routes = [
    {path : '/' , name :'main', component : Main},
    {path : '/join' , name :'join', component : Join},
    {path : '/login' , name :'login', component : Login},
    {path : '/cart_popup' , name :'cart_popup', component : Cart_Popup},
    {path : '/admin_page' , name :'admin_page', component : Admin_Page},
    {path : '/restrict_page' , name :'restrict_page', component : Restrict_Page},
    {path : '/product_table' , name :'product_table', component : Product_Table},
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

// router.beforeEach( async (to, from, next) => {
//     console.log(to);
//     console.log(from);

//     const role = sessionStorage.getItem("role");
    
//     if(to.name === 'admin_page' && role !== 2){
//         next({name : 'restrict_page'});
//     }
//     else{
//         next()
//     }
// });

export default router;