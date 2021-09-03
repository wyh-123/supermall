import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Fastclick from 'fastclick'
import Vuelazyload from 'vue-lazyload'
/* 使用图片懒加载的插件 */
Vue.use(Vuelazyload, {
  loading:require('./assets/img/common/placeholder.png')
})
Vue.config.productionTip = false
/* 解决300ms延迟 */
Fastclick.attach(document.body)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
