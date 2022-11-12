import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
    import "bootstrap/dist/css/bootstrap.css";
    import "bootstrap/dist/js/bootstrap.js";
    import "bootstrap-icons/font/bootstrap-icons.css";
import "./style/style.css";
import "three/build/three.js";

import { TroisJSVuePlugin } from 'troisjs';


createApp(App).use(store).use(router).use(TroisJSVuePlugin).mount('#app')
