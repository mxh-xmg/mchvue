import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';


import Vue from 'vue';

Vue.use(ElementUI);

createApp(App).use(store).use(router).mount('#app')