/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime: 2020-12-15 11:23:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kspcims-ts-vue-element-template-demo/src/router/modules/demos/charts.ts
 */
import { RouteConfig } from 'vue-router'

const permissionRouter: RouteConfig = {
  path: '/demos/permission',
  redirect: 'noredirect',
  component: () => import(/* webpackChunkName: "permission-page" */ '@/views/demos/permission/index.vue'),
  meta: {
    title: 'permission',
    icon: 'lock',
    roles: ['admin', 'editor'], // you can set roles in root nav
    alwaysShow: true // will always show the root menu
  },
  children: [
    {
      path: 'page',
      component: () => import(/* webpackChunkName: "permission-page" */ '@/views/demos/permission/page.vue'),
      name: 'PagePermission',
      meta: {
        title: 'pagePermission',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'directive',
      component: () => import(/* webpackChunkName: "permission-directive" */ '@/views/demos//permission/directive.vue'),
      name: 'DirectivePermission',
      meta: {
        title: 'directivePermission'
        // if do not set roles, means: this page does not require permission
      }
    },
    {
      path: 'role',
      component: () => import(/* webpackChunkName: "permission-role" */ '@/views/demos/permission/role.vue'),
      name: 'RolePermission',
      meta: {
        title: 'rolePermission',
        roles: ['admin']
      }
    }
  ]
}

export default permissionRouter
