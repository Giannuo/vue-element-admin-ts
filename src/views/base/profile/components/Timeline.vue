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
 * @Date         : 2020-12-14 14:53:51
 * @LastEditTime : 2020-12-15 16:25:10
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/base/profile/components/Timeline.vue
-->
<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) of timeline"
        :key="index"
        :timestamp="item.timestamp"
        placement="top"
      >
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Timeline'
})
export default class extends Vue {
  private timeline = [
    {
      timestamp: '2019/4/20',
      title: 'Update Github template',
      content: 'Armour committed 2019/4/20 20:46'
    },
    {
      timestamp: '2019/4/21',
      title: 'Update Github template',
      content: 'Armour committed 2019/4/21 20:46'
    },
    {
      timestamp: '2019/4/22',
      title: 'Build Template',
      content: 'Armour committed 2019/4/22 20:46'
    },
    {
      timestamp: '2019/4/23',
      title: 'Release New Version',
      content: 'Armour committed 2019/4/23 20:46'
    }
  ]
}
</script>
