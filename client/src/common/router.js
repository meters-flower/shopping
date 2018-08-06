import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter);

const routes = [
  {
      path: '/',
      redirect: '/index'
  }, 
  {
    path: '/',
    component: resolve => require(['../components/layout'], resolve),
    children: [
      {
        path: '/index',
        component: resolve => require(['../page/index'], resolve)    
      },
      {
          path: '/goods',
          component: resolve => require(['../page/goods'], resolve)
      } 
    ]
  },  
  {
    path: '/login',
    meta: { auth: false },
    component: resolve => require(['../page/login'], resolve)
  },
  {
      path: '/404',
      meta: { auth: false },      
      component: resolve => require(['../page/404.vue'], resolve)
  },   
  {   
    path: '*', 
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  scrollBehavior (to, from, savedPosition) {/* 回到顶部 */
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
});

/* 登录验证 */
router.beforeEach(({meta, path}, from, next) => {
    let { auth = true } = meta; //是否需要登录
    let isLogin = localStorage.getItem('ms_username'); //true 用户已登录， false 用户未登录

    if (auth && !isLogin) {
        return next({ path: '/login' });
    }
    next();
});

export default router