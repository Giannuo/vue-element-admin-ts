/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime: 2020-12-14 17:29:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kspcims-ts-vue-element-template-demo/src/router/modules/demos/nested.ts
 */
import { RouteConfig } from 'vue-router'

const downloadRoutes: RouteConfig = {
  path: '/demos/pdf-download-example',
  component: () => import(/* webpackChunkName: "pdf-download-example" */ '@/views/demos/pdf/download.vue'),
  meta: { hidden: true }
}

export default downloadRoutes
