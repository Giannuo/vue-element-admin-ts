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
 * @LastEditTime : 2020-12-15 16:30:38
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/excel/export-excel.vue
-->
<template>
  <div class="app-container">
    <div>
      <filename-option v-model="filename" />
      <auto-width-option v-model="autoWidth" />
      <book-type-option v-model="bookType" />
      <el-button
        :loading="downloadLoading"
        style="margin:0 0 20px 20px;"
        type="primary"
        icon="el-icon-document"
        @click="handleDownload"
      >
        {{ $t('excel.export') }} Excel
      </el-button>
      <a
        href="https://armour.github.io/vue-typescript-admin-docs/features/components/excel.html"
        target="_blank"
        style="margin-left:15px;"
      >
        <el-tag type="info">Documentation</el-tag>
      </a>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading..."
      border
      fit
      highlight-current-row
    >
      <el-table-column
        width="95"
        align="center"
        label="Id"
      >
        <template slot-scope="{$index}">
          {{ $index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="{row}">
          {{ row.title }}
        </template>
      </el-table-column>
      <el-table-column
        label="Author"
        width="180"
        align="center"
      >
        <template slot-scope="{row}">
          <el-tag>{{ row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        width="115"
        align="center"
        label="Readings"
      >
        <template slot-scope="{row}">
          {{ row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column
        width="220"
        align="center"
        label="Date"
      >
        <template slot-scope="{row}">
          <i class="el-icon-time" />
          <span>{{ row.timestamp | parseTime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getArticles } from '@/api/articles'
import { IArticleData } from '@/api/types'
import { formatJson } from '@/utils'
import { exportJson2Excel } from '@/utils/excel'
import FilenameOption from './components/FilenameOption.vue'
import AutoWidthOption from './components/AutoWidthOption.vue'
import BookTypeOption from './components/BookTypeOption.vue'

@Component({
  name: 'ExportExcel',
  components: {
    AutoWidthOption,
    BookTypeOption,
    FilenameOption
  }
})
export default class extends Vue {
  private list: IArticleData[] = []
  private listLoading = true
  private downloadLoading = false
  private filename = ''
  private autoWidth = true
  private bookType = 'xlsx'

  created() {
    this.fetchData()
  }

  private async fetchData() {
    this.listLoading = true
    const { data } = await getArticles({ /* Your params here */ })
    this.list = data.items
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
  }

  private handleDownload() {
    this.downloadLoading = true
    const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
    const filterVal = ['id', 'title', 'author', 'pageviews', 'timestamp']
    const list = this.list
    const data = formatJson(filterVal, list)
    exportJson2Excel(tHeader, data, this.filename !== '' ? this.filename : undefined, undefined, undefined, this.autoWidth, this.bookType)
    this.downloadLoading = false
  }
}
</script>

<style lang="scss">
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
</style>
