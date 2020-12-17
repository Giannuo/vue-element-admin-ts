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
 * @LastEditTime : 2020-12-15 16:33:08
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/table/inline-edit-table.vue
-->
<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        align="center"
        label="ID"
        width="80"
      >
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="180px"
        align="center"
        label="Date"
      >
        <template slot-scope="{row}">
          <span>{{ row.timestamp | parseTime }}</span>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="Author"
        width="180px"
      >
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column
        width="105px"
        label="Importance"
      >
        <template slot-scope="{row}">
          <svg-icon
            v-for="n in +row.importance"
            :key="n"
            name="star"
            class="meta-item__icon"
          />
        </template>
      </el-table-column>

      <el-table-column
        class-name="status-col"
        label="Status"
        width="110"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status | articleStatusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        min-width="250px"
        label="Title"
      >
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input
              v-model="row.title"
              class="edit-input"
              size="small"
            />
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
            >
              cancel
            </el-button>
          </template>
          <span v-else>{{ row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        label="Actions"
        width="120"
      >
        <template slot-scope="{row}">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
          >
            Ok
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit=!row.edit"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getArticles } from '@/api/articles'
import { IArticleData } from '@/api/types'

@Component({
  name: 'InlineEditTable'
})
export default class extends Vue {
  private list: IArticleData[] = []
  private listLoading = true
  private listQuery = {
    page: 1,
    limit: 10
  }

  created() {
    this.getList()
  }

  private async getList() {
    this.listLoading = true
    const { data } = await getArticles(this.listQuery)
    const items = data.items
    this.list = items.map((v: any) => {
      this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
      v.originalTitle = v.title // will be used when user click the cancel botton
      return v
    })
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
  }

  private cancelEdit(row: any) {
    row.title = row.originalTitle
    row.edit = false
    this.$message({
      message: 'The title has been restored to the original value',
      type: 'warning'
    })
  }

  private confirmEdit(row: any) {
    row.edit = false
    row.originalTitle = row.title
    this.$message({
      message: 'The title has been edited',
      type: 'success'
    })
  }
}
</script>

<style lang="scss" scoped>
.edit-input {
  padding-right: 100px;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
