/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime: 2020-12-15 11:31:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kspcims-ts-vue-element-template-demo/src/router/modules/demos/nested.ts
 */
import { RouteConfig } from 'vue-router'

const nestedRoutes: RouteConfig = {
  path: '/demos/nested',
  redirect: '/demos/nested/menu1',
  component: () => import('@/views/demos/nested/index.vue'),
  name: 'Nested',
  meta: {
    title: 'nested',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      component: () => import(/* webpackChunkName: "menu1" */ '@/views/demos/nested/menu1/index.vue'),
      redirect: '/nested/menu1/menu1-1',
      name: 'Menu1',
      meta: { title: 'menu1' },
      children: [
        {
          path: 'menu1-1',
          component: () => import(/* webpackChunkName: "menu1-1" */ '@/views/demos/nested/menu1/menu1-1/index.vue'),
          name: 'Menu1-1',
          meta: { title: 'menu1-1' }
        },
        {
          path: 'menu1-2',
          component: () => import(/* webpackChunkName: "menu1-2" */ '@/views/demos/nested/menu1/menu1-2/index.vue'),
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          name: 'Menu1-2',
          meta: { title: 'menu1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import(/* webpackChunkName: "menu1-2-1" */ '@/views/demos/nested/menu1/menu1-2/menu1-2-1/index.vue'),
              name: 'Menu1-2-1',
              meta: { title: 'menu1-2-1' }
            },
            {
              path: 'menu1-2-2',
              component: () => import(/* webpackChunkName: "menu1-2-2" */ '@/views/demos/nested/menu1/menu1-2/menu1-2-2/index.vue'),
              name: 'Menu1-2-2',
              meta: { title: 'menu1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import(/* webpackChunkName: "menu1-3" */ '@/views/demos/nested/menu1/menu1-3/index.vue'),
          name: 'Menu1-3',
          meta: { title: 'menu1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      component: () => import(/* webpackChunkName: "menu2" */ '@/views/demos/nested/menu2/index.vue'),
      name: 'Menu2',
      meta: { title: 'menu2' }
    }
  ]
}

export default nestedRoutes
