/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime: 2020-12-15 13:18:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kspcims-ts-vue-element-template-demo/src/router/modules/demos/charts.ts
 */
import { RouteConfig } from 'vue-router'

const tabRouter: RouteConfig = {
  path: '/demos/tab',
  redirect: '/demos/tab/index',
  component: () => import(/* webpackChunkName: "tab" */ '@/views/demos/tab/index.vue'),
  children: [
    {
      path: 'index',
      component: () => import(/* webpackChunkName: "tab" */ '@/views/demos/tab/index.vue'),
      name: 'Tab',
      meta: {
        title: 'tab',
        icon: 'tab'
      }
    }
  ]
}

export default tabRouter
