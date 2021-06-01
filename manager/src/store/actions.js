import { getUserRouters } from '@/services';
import { formatRouterTree } from '@/libs/utils'

export default {
  async setUserRouters ({ commit, state }){
    const userRouters = await getUserRouters(state.uid),
          payload = formatRouterTree(userRouters);
    /* 
    commit：
    同步操作，数据提交至 mutations,
    可用于读取用户信息写到缓存里 
    */
    commit('setUserRouters', payload);
    commit('setAuth', true);
  }
}