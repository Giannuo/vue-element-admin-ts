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
 * @LastEditTime : 2020-12-15 16:29:11
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/components-demo/draggable-select.vue
-->
<template>
  <div class="components-container">
    <draggable-select
      v-model="value"
      style="width:500px;"
      multiple
      placeholder="Please select"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </draggable-select>

    <div style="margin-top:30px;">
      <el-tag
        v-for="item of value"
        :key="item"
        style="margin-right:15px;"
      >
        {{ item }}
      </el-tag>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DraggableSelect from '@/components/DraggableSelect/index.vue'

@Component({
  name: 'DraggableSelectDemo',
  components: {
    DraggableSelect
  }
})
export default class extends Vue {
  private value = ['Apple', 'Banana', 'Orange']
  private options = [{
    value: 'Apple',
    label: 'Apple'
  }, {
    value: 'Banana',
    label: 'Banana'
  }, {
    value: 'Orange',
    label: 'Orange'
  }, {
    value: 'Pear',
    label: 'Pear'
  }, {
    value: 'Strawberry',
    label: 'Strawberry'
  }]
}
</script>
