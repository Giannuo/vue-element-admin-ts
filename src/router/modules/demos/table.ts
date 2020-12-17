/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime: 2020-12-15 13:08:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kspcims-ts-vue-element-template-demo/src/router/modules/demos/table.ts
 */
import { RouteConfig } from 'vue-router'

const tableRoutes: RouteConfig = {
  path: '/demos/table',
  redirect: '/demos/table/complex-table',
  component: () => import(/* webpackChunkName: "table" */'@/views/demos/table/index.vue'),
  name: 'Table',
  meta: {
    title: 'table',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import(/* webpackChunkName: "dynamic-table" */ '@/views/demos/table/dynamic-table/index.vue'),
      name: 'DynamicTable',
      meta: { title: 'dynamicTable' }
    },
    {
      path: 'draggable-table',
      component: () => import(/* webpackChunkName: "draggable-table" */ '@/views/demos/table/draggable-table.vue'),
      name: 'DraggableTable',
      meta: { title: 'draggableTable' }
    },
    {
      path: 'inline-edit-table',
      component: () => import(/* webpackChunkName: "inline-edit-table" */ '@/views/demos/table/inline-edit-table.vue'),
      name: 'InlineEditTable',
      meta: { title: 'inlineEditTable' }
    },
    {
      path: 'complex-table',
      component: () => import(/* webpackChunkName: "complex-table" */ '@/views/demos/table/complex-table.vue'),
      name: 'ComplexTable',
      meta: { title: 'complexTable' }
    }
  ]
}

export default tableRoutes
