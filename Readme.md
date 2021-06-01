# 路由权限

1. uid -> 后端API -> 路由权限API
2. 后端 -> 用户对应路由权限列表 -> 前端 -> JSON
3. JSON -> 树形结构化
4. 树形结构化的数据 -> vue 路由结构
5. 路由结构 动态生成 -> 静态路由
6. 树形结构化的数据 -> 菜单组件（组件递归）


后端通过前端传递过来的uid比对出相对应的路由权限表，然后传递回前端

前端通过 vuex 保存 后端返回的路由权限表，然后通过 

formatRouterTree 形成树形结构；generateRouter 动态生成router结构

然后使用全局路由守卫 addRoutes 往 vue-router 添加动态生成的路由

之后，根据vuex中保存的路由生成menu列表