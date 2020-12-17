/*
 * @Author: your name
 * @Date: 2020-12-09 10:12:30
 * @LastEditTime: 2020-12-15 09:44:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kspcims-ts-vue-element-template-demo/src/router/modules/demos/charts.ts
 */
import { RouteConfig } from 'vue-router'

const chartsRouter: RouteConfig = {
  path: '/demos/charts',
  redirect: 'noredirect',
  component: () => import(/* webpackChunkName: "bar-chart" */ '@/views/demos/charts/index.vue'),
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'bar-chart',
      component: () => import(/* webpackChunkName: "bar-chart" */ '@/views/demos/charts/bar-chart/bar-chart.vue'),
      name: 'BarChartDemo',
      meta: {
        title: 'barChart',
        noCache: true
      }
    },
    {
      path: 'line-chart',
      component: () => import(/* webpackChunkName: "line-chart" */ '@/views/demos/charts/line-chart/line-chart.vue'),
      name: 'LineChartDemo',
      meta: {
        title: 'lineChart',
        noCache: true
      }
    },
    {
      path: 'mixed-chart',
      component: () => import(/* webpackChunkName: "mixed-chart" */ '@/views/demos/charts/mixed-chart/mixed-chart.vue'),
      name: 'MixedChartDemo',
      meta: {
        title: 'mixedChart',
        noCache: true
      }
    }
  ]
}

export default chartsRouter
