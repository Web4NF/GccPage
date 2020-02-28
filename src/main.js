import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入页面头部组件
import Gheader from './components/Header/PageHeader.vue'
import Gfooter from './components/Gfooter.vue'

Vue.component("Gheader", Gheader); //注册全局页面头部组件
Vue.component("Gfooter", Gfooter); //注册全局底部组件
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')