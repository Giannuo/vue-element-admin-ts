/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime: 2020-12-15 08:37:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kspcims-ts-vue-element-template-demo/src/router/modules/demos/charts.ts
 */
import { RouteConfig } from 'vue-router'

const iconsRouter: RouteConfig = {
  path: '/demos/icon',
  redirect: '/demos/icon/index',
  component: () => import(/* webpackChunkName: "icons" */ '@/views/demos/icons/index.vue'),
  children: [
    {
      path: 'index',
      component: () => import(/* webpackChunkName: "icons" */ '@/views/demos/icons/index.vue'),
      name: 'Icons',
      meta: {
        title: 'icons',
        icon: 'icon',
        noCache: true
      }
    }
  ]
}

export default iconsRouter
