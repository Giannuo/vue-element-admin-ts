/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime : 2020-12-16 09:11:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath     : /vue-element-template-ts/src/router/modules/demos/pdf.ts
 */
import { RouteConfig } from 'vue-router'

const pdfRouter: RouteConfig = {
  path: '/demos/pdf',
  redirect: '/demos/pdf/index',
  component: () => import(/* webpackChunkName: "pdf" */ '@/views/demos/pdf/index.vue'),
  children: [
    {
      path: 'index',
      component: () => import(/* webpackChunkName: "pdf" */ '@/views/demos/pdf/index.vue'),
      name: 'PDF',
      meta: {
        title: 'pdf',
        icon: 'pdf'
      }
    }
  ]
}

export default pdfRouter
