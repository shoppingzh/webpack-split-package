import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import { now } from '@/utils/date'

Vue.use(Antd)

Vue.config.productionTip = false

console.log(now())

new Vue({
  render: h => h(App),
}).$mount('#app')
