import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
require("dotenv").config();

//ui 설정
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import VueApexCharts from "vue3-apexcharts";
import AOS from 'aos'
import 'aos/dist/aos.css'
import io from 'socket.io-client'
const socket = io("http://127.0.0.1:3000/", {transports : ['websocket']});


window.$ = window.jQuery = require('jquery');
window.Kakao.init(process.env.KAKAO_INIT);

const app = createApp(App);
app.use(router);  //router
app.use(ElementPlus);
app.use(VueApexCharts);
app.use(AOS.init());
app.config.globalProperties.$socket = socket;
app.mount('#app');
