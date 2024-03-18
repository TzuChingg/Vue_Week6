import './assets/main.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入 VeeValidate 元件跟功能
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// // 引入 VeeValidate 的驗證規則
import * as rules from '@vee-validate/rules'
// // 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json'
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})
configure({
  generateMessage: localize({
    zh_TW
  })
})
setLocale('zh_TW')
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
