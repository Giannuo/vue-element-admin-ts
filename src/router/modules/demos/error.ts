/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime: 2020-12-15 13:20:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kspcims-ts-vue-element-template-demo/src/router/modules/demos/nested.ts
 */
import { RouteConfig } from 'vue-router'

const errorRoutes: RouteConfig = {
  path: '/demos/error',
  redirect: 'noredirect',
  component: () => import(/* webpackChunkName: "error-page-401" */ '@/views/base/error-page/index.vue'),
  meta: {
    title: 'errorPages',
    icon: '404'
  },
  children: [
    {
      path: '401',
      component: () => import(/* webpackChunkName: "error-page-401" */ '@/views/base/error-page/401.vue'),
      name: 'Page401',
      meta: {
        title: 'page401',
        noCache: true
      }
    },
    {
      path: '404',
      component: () => import(/* webpackChunkName: "error-page-404" */ '@/views/base/error-page/404.vue'),
      name: 'Page404',
      meta: {
        title: 'page404',
        noCache: true
      }
    }
  ]
}

export default errorRoutes
