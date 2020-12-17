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
 * @LastEditTime : 2020-12-15 16:32:51
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/table/dynamic-table/components/FixedHeaderTable.vue
-->
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-checkbox-group v-model="checkboxVal">
        <el-checkbox label="apple">
          apple
        </el-checkbox>
        <el-checkbox label="banana">
          banana
        </el-checkbox>
        <el-checkbox label="orange">
          orange
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <el-table
      :key="key"
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="fruitName"
        width="180"
      />
      <el-table-column
        v-for="fruit in formThead"
        :key="fruit"
        :label="fruit"
      >
        <template slot-scope="{row}">
          {{ row[fruit] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

const defaultFormThead = ['apple', 'banana']

@Component({
  name: 'FixedHeaderTable'
})
export default class extends Vue {
  private tableData = [
    {
      name: 'fruit-1',
      apple: 'apple-10',
      banana: 'banana-10',
      orange: 'orange-10'
    },
    {
      name: 'fruit-2',
      apple: 'apple-20',
      banana: 'banana-20',
      orange: 'orange-20'
    }
  ]

  private key = 1 // Table key
  private formTheadOptions = ['apple', 'banana', 'orange']
  private checkboxVal = defaultFormThead
  private formThead = defaultFormThead // Default header

  @Watch('checkboxVal')
  private onCheckboxValChange(value: string[]) {
    this.formThead = this.formTheadOptions.filter(i => value.indexOf(i) >= 0)
    this.key = this.key + 1 // Ensure the table will be re-rendered each time
  }
}
</script>
