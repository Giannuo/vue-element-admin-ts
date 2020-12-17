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
 * @LastEditTime : 2020-12-15 16:30:42
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/excel/merge-header.vue
-->
<template>
  <div class="app-container">
    <el-button
      :loading="downloadLoading"
      style="margin-bottom:20px"
      type="primary"
      icon="el-icon-document"
      @click="handleDownload"
    >
      {{ $t('excel.export') }}
    </el-button>

    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        label="Id"
        width="95"
      >
        <template slot-scope="{$index}">
          {{ $index }}
        </template>
      </el-table-column>
      <el-table-column
        label="Main Information"
        align="center"
      >
        <el-table-column label="Title">
          <template slot-scope="{row}">
            {{ row.title }}
          </template>
        </el-table-column>
        <el-table-column
          label="Author"
          align="center"
          width="180"
        >
          <template slot-scope="{row}">
            <el-tag>{{ row.author }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="Readings"
          align="center"
          width="115"
        >
          <template slot-scope="{row}">
            {{ row.pageviews }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        align="center"
        label="Date"
        width="220"
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

@Component({
  name: 'MergeHeader'
})
export default class extends Vue {
  private list: IArticleData[] = []
  private listLoading = true
  private downloadLoading = false

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
    const multiHeader = [['Id', 'Main Information', '', '', 'Date']]
    const header = ['', 'Title', 'Author', 'Readings', '']
    const filterVal = ['id', 'title', 'author', 'pageviews', 'timestamp']
    const list = this.list
    const data = formatJson(filterVal, list)
    const merges = ['A1:A2', 'B1:D1', 'E1:E2']
    exportJson2Excel(header, data, 'merge-header', multiHeader, merges)
    this.downloadLoading = false
  }
}
</script>
