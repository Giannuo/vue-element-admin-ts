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
 * @LastEditTime : 2020-12-15 16:29:03
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/components-demo/draggable-dialog.vue
-->
<template>
  <div class="components-container">
    <el-button
      type="primary"
      @click="dialogTableVisible=true"
    >
      Open a Draggable Dialog
    </el-button>
    <el-dialog
      v-el-draggable-dialog
      :visible.sync="dialogTableVisible"
      title="Shipping address"
      @on-dialog-drag="handleDialogDrag"
    >
      <el-select
        ref="select"
        v-model="value"
        placeholder="Please select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-table :data="gridData">
        <el-table-column
          property="date"
          label="Date"
          width="150"
        />
        <el-table-column
          property="name"
          label="Name"
          width="200"
        />
        <el-table-column
          property="address"
          label="Address"
        />
      </el-table>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Select } from 'element-ui'

@Component({
  name: 'DraggableDialogDemo'
})
export default class extends Vue {
  private dialogTableVisible = false
  private options = [
    { value: '选项1', label: '黄金糕' },
    { value: '选项2', label: '双皮奶' },
    { value: '选项3', label: '蚵仔煎' },
    { value: '选项4', label: '龙须面' }
  ]

  private value = ''
  private gridData = [{
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  }, {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  }, {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  }, {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District'
  }]

  // v-el-dialog-draggable on-dialog-drag callback function
  private handleDialogDrag() {
    (this.$refs.select as Select).blur()
  }
}
</script>
