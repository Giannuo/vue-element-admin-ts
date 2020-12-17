/*
 * @Author: your name
 * @Date: 2020-12-14 15:05:25
 * @LastEditTime : 2020-12-16 10:22:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath     : /vue-element-template-ts/src/router/modules/demos/index.ts
 */
import { RouteConfig } from 'vue-router'

/* Router modules */
import componentsRouter from './components'
import chartsRouter from './charts'
import tableRouter from './table'
import nestedRouter from './nested'
import permissionRouter from './permission'
import iconsRouter from './icons'
import exampleRoute from './example'
import tabRouter from './tab'
import errorRouter from './error'
import errorLogRouter from './errorLog'
import excelRouter from './excel'
import zipRouter from './zip'
import pdfRouter from './pdf'
import downloadRouter from './download'

const demosRoute: RouteConfig = {
  path: '/demos',
  redirect: 'noredirect',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: 'demos',
    icon: 'guide',
    roles: ['admin'], // you can set roles in root nav
    alwaysShow: false // will always show the root menu
  },
  children: [
    /** when your routing map is too long, you can split it into small modules **/
    permissionRouter,
    iconsRouter,
    componentsRouter,
    chartsRouter,
    nestedRouter,
    tableRouter,
    exampleRoute,
    tabRouter,
    errorRouter,
    errorLogRouter,
    excelRouter,
    zipRouter,
    pdfRouter,
    downloadRouter,
    {
      path: '/demos/theme',
      redirect: '/demos/theme/index',
      component: () => import(/* webpackChunkName: "theme" */ '@/views/demos/theme/index.vue'),
      children: [
        {
          path: 'index',
          component: () => import(/* webpackChunkName: "theme" */ '@/views/demos/theme/index.vue'),
          name: 'Theme',
          meta: {
            title: 'theme',
            icon: 'theme'
          }
        }
      ]
    },
    {
      path: '/demos/clipboard',
      redirect: '/demos/clipboard/index',
      component: () => import(/* webpackChunkName: "clipboard" */ '@/views/demos/clipboard/index.vue'),
      children: [
        {
          path: 'index',
          component: () => import(/* webpackChunkName: "clipboard" */ '@/views/demos/clipboard/index.vue'),
          name: 'Clipboard',
          meta: {
            title: 'clipboard',
            icon: 'clipboard'
          }
        }
      ]
    },
    {
      path: '/demos/i18n',
      redirect: '/demos/i18n/index',
      component: () => import(/* webpackChunkName: "i18n-demo" */ '@/views/demos/i18n-demo/index.vue'),
      children: [
        {
          path: 'index',
          component: () => import(/* webpackChunkName: "i18n-demo" */ '@/views/demos/i18n-demo/index.vue'),
          name: 'I18n',
          meta: {
            title: 'i18n',
            icon: 'international'
          }
        }
      ]
    }
  ]
}
export default demosRoute
