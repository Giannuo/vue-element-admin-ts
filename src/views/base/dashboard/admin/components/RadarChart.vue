<!--
 * @Copyright 2020 姚嘉乐（Giannuo）
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @Author       : Giannuo
 * @Github       : https://github.com/Giannuo
 * @Date         : 2020-12-14 14:52:00
 * @LastEditTime : 2020-12-15 16:22:25
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/base/dashboard/admin/components/RadarChart.vue
-->
<template>
  <div
    :class="className"
    :style="{height: height, width: width}"
  />
</template>

<script lang="ts">
import echarts, { EChartOption } from 'echarts'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import ResizeMixin from '@/components/Charts/mixins/resize'

const animationDuration = 3000

@Component({
  name: 'RadarChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '300px' }) private height!: string

  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  }

  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  }

  private initChart() {
    this.chart = echarts.init(this.$el as HTMLDivElement, 'macarons')
    this.chart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      radar: {
        radius: '66%',
        center: ['50%', '42%'],
        splitNumber: 8,
        splitArea: {
          areaStyle: {
            color: 'rgba(127,95,132,.3)',
            opacity: 1,
            shadowBlur: 45,
            shadowColor: 'rgba(0,0,0,.5)',
            shadowOffsetX: 0,
            shadowOffsetY: 15
          }
        },
        indicator: [
          { name: 'Sales', max: 10000 },
          { name: 'Administration', max: 20000 },
          { name: 'Information Technology', max: 20000 },
          { name: 'Customer Support', max: 20000 },
          { name: 'Development', max: 20000 },
          { name: 'Marketing', max: 20000 }
        ]
      },
      legend: {
        left: 'center',
        bottom: '10',
        data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
      },
      series: [{
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
          shadowBlur: 13,
          shadowColor: 'rgba(0,0,0,.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          opacity: 1
        },
        data: [
          {
            value: [5000, 7000, 12000, 11000, 15000, 14000],
            name: 'Allocated Budget'
          },
          {
            value: [4000, 9000, 15000, 15000, 13000, 11000],
            name: 'Expected Spending'
          },
          {
            value: [5500, 11000, 12000, 15000, 12000, 12000],
            name: 'Actual Spending'
          }
        ],
        animationDuration: animationDuration
      }]
    } as EChartOption<EChartOption.SeriesRadar>)
  }
}
</script>
