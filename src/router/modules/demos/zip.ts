/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime : 2020-12-16 10:26:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath     : /vue-element-template-ts/src/router/modules/demos/zip.ts
 */
import { RouteConfig } from 'vue-router'

const zipRouter: RouteConfig = {
  path: '/demos/zip',
  redirect: 'noredirect',
  component: () => import(/* webpackChunkName: "zip" */ '@/views/demos/zip/index.vue'),
  meta: {
    title: 'zip',
    icon: 'zip',
    alwaysShow: true // will always show the root menu
  },
  children: [
    {
      path: 'download',
      component: () => import(/* webpackChunkName: "zip" */ '@/views/demos/zip/index.vue'),
      name: 'ExportZip',
      meta: { title: 'exportZip' }
    }
  ]
}

export default zipRouter
