/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime: 2020-12-15 13:34:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kspcims-ts-vue-element-template-demo/src/router/modules/demos/nested.ts
 */
import { RouteConfig } from 'vue-router'

const errorLogRoutes: RouteConfig = {
  path: '/demos/error-log',
  redirect: '/demos/error-log/index',
  component: () => import(/* webpackChunkName: "error-log" */ '@/views/demos/error-log/index.vue'),
  children: [
    {
      path: 'log',
      component: () => import(/* webpackChunkName: "error-log" */ '@/views/demos/error-log/index.vue'),
      name: 'ErrorLog',
      meta: {
        title: 'errorLog',
        icon: 'bug'
      }
    }
  ]
}

export default errorLogRoutes
