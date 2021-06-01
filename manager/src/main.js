import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { generateRouter } from '@/libs/utils'

/* 路由守卫 */
router.beforeEach(async (to, from, next) => {
  if (!store.state.hasAuth) {   
    /* 
    dispatch：
    含有异步操作，数据提交至 actions,可用于向后台提交数据
    */
    await store.dispatch('setUserRouters');
    const newRoutes = generateRouter(store.state.userRouters);
    router.addRoutes(newRoutes);
    next({ path: to.path })
  } else {
    next();
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
