import './styles/unified.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { initializeI18n } from './i18n/setupI18n'
import { useUserStore } from './stores/user'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18n)

// 初始化i18n，确保在生产环境中正确加载语言包
initializeI18n(i18n)

// 初始化用户状态
const userStore = useUserStore()
userStore.initUser()

app.mount('#app')
