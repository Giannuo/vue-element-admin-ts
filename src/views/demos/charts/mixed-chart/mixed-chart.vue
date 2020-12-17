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
 * @Date         : 2020-12-09 10:12:30
 * @LastEditTime : 2020-12-15 16:27:37
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/charts/mixed-chart/mixed-chart.vue
-->
<template>
  <div class="chart-container">
    <mixed-chart height="100%" width="100%" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MixedChart from '@/components/Charts/MixedChart.vue'

@Component({
  name: 'MixedChartDemo',
  components: {
    MixedChart
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.chart-container {
  margin: 1em;
  width: 100%;
  height: calc(100vh - #{$navbarHeight} - #{$tagsViewHeight});
}
</style>
