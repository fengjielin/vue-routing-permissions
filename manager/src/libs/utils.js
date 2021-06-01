function formatRouterTree(data){
  /* 格式化路由数据形成树形结构  递归*/
  let parents = data.filter(p => p.pid === 0),
      children = data.filter(c => c.pid !== 0);

  /* 遍历 判断谁是谁的父亲，谁是谁的儿子 */
  dataToTree(parents, children);
  function dataToTree (parents, children){
    parents.map((p) => {
      children.map((c,i) => {
        if(c.pid === p.id){
          let _c = JSON.parse(JSON.stringify(children));
          /* 因为自身要成为父亲，所有需要把自身给排除出去 */
          _c.splice(i, 1);
          /* 递归 */
          dataToTree([c], _c);
          /* 
          往 p.children 里面 push c, 
          因为判断了c.pid === p.id, 说明c 是 p 的而在
          */
          if(p.children){
            p.children.push(c);
          }else{
            p.children = [c];
          }
        }
      })
    })
  }
  return parents  
} 

function generateRouter(userRouters){
  /* 动态生成路由 */
  let newRouters = userRouters.map((r) => {
    let routes = {
      path: r.path,
      name: r.name,
      component: () => import(`@/views/${r.name}`)
    }
    /* 如果有子路由，则进行递归 */
    if(r.children){
      routes.children = generateRouter(r.children);
    }
    return routes;
  });
  return newRouters;
}

export {
  formatRouterTree,
  generateRouter
}