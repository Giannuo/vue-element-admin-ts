/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime : 2020-12-16 09:10:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath     : /vue-element-template-ts/src/router/modules/demos/excel.ts
 */
import { RouteConfig } from 'vue-router'

const excelRouter: RouteConfig = {
  path: '/demos/excel',
  redirect: '/demos/excel/export-excel',
  component: () => import(/* webpackChunkName: "excel" */ '@/views/demos/excel/index.vue'),
  meta: {
    title: 'excel',
    icon: 'excel'
  },
  children: [
    {
      path: 'export-excel',
      component: () => import(/* webpackChunkName: "export-excel" */ '@/views/demos/excel/export-excel.vue'),
      name: 'ExportExcel',
      meta: { title: 'exportExcel' }
    },
    {
      path: 'export-selected-excel',
      component: () => import(/* webpackChunkName: "select-excel" */ '@/views/demos/excel/select-excel.vue'),
      name: 'SelectExcel',
      meta: { title: 'selectExcel' }
    },
    {
      path: 'export-merge-header',
      component: () => import(/* webpackChunkName: "merge-header" */ '@/views/demos/excel/merge-header.vue'),
      name: 'MergeHeader',
      meta: { title: 'mergeHeader' }
    },
    {
      path: 'upload-excel',
      component: () => import(/* webpackChunkName: "upload-excel" */ '@/views/demos/excel/upload-excel.vue'),
      name: 'UploadExcel',
      meta: { title: 'uploadExcel' }
    }
  ]
}

export default excelRouter
