/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime: 2020-12-15 13:13:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kspcims-ts-vue-element-template-demo/src/router/modules/demos/nested.ts
 */
import { RouteConfig } from 'vue-router'

const exampleRoutes: RouteConfig = {
  path: '/demos/example',
  redirect: '/demos/example/list',
  component: () => import(/* webpackChunkName: "example" */ '@/views/demos/example/index.vue'),
  meta: {
    title: 'example',
    icon: 'example'
  },
  children: [
    {
      path: 'create',
      component: () => import(/* webpackChunkName: "example-create" */ '@/views/demos/example/create.vue'),
      name: 'CreateArticle',
      meta: {
        title: 'createArticle',
        icon: 'edit'
      }
    },
    {
      path: 'edit/:id(\\d+)',
      component: () => import(/* webpackChunkName: "example-edit" */ '@/views/demos/example/edit.vue'),
      name: 'EditArticle',
      meta: {
        title: 'editArticle',
        noCache: true,
        activeMenu: '/example/list',
        hidden: true
      }
    },
    {
      path: 'list',
      component: () => import(/* webpackChunkName: "example-list" */ '@/views/demos/example/list.vue'),
      name: 'ArticleList',
      meta: {
        title: 'articleList',
        icon: 'list'
      }
    }
  ]
}

export default exampleRoutes
