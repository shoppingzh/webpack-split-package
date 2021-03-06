import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/packages/theme-chalk/lib/index.css'
import { now } from '@/utils/date'

Vue.use(ElementUI)

Vue.config.productionTip = false

console.log(now())

new Vue({
  render: h => h(App),
}).$mount('#app')
