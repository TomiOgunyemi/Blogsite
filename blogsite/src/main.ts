import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.scss'
import './assets/global.css'
// import './shims-jpg.d.ts'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).use(ElementPlus).use(VueAxios,axios).mount('#app')
