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
 * @LastEditTime : 2020-12-15 16:30:47
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/excel/upload-excel.vue
-->
<template>
  <div class="app-container">
    <upload-excel-component
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
    />
    <el-table
      :data="tableData"
      border
      highlight-current-row
      style="width: 100%;margin-top:20px;"
    >
      <el-table-column
        v-for="item of tableHeader"
        :key="item"
        :prop="item"
        :label="item"
      />
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UploadExcelComponent from '@/components/UploadExcel/index.vue'

@Component({
  name: 'UploadExcel',
  components: {
    UploadExcelComponent
  }
})
export default class extends Vue {
  private tableData: any = []
  private tableHeader: string[] = []

  private beforeUpload(file: File) {
    const isLt1M = file.size / 1024 / 1024 < 1
    if (isLt1M) {
      return true
    }
    this.$message({
      message: 'Please do not upload files larger than 1m in size.',
      type: 'warning'
    })
    return false
  }

  private handleSuccess({ results, header }: { results: any, header: string[]}) {
    this.tableData = results
    this.tableHeader = header
  }
}
</script>
