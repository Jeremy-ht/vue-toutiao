import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式
import './styles/index.less'

// 引入 vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 动态设置 REM 基准值
import 'amfe-flexible'

// 全局注册vant
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
