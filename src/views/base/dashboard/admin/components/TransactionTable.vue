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
 * @LastEditTime : 2020-12-15 16:22:28
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/base/dashboard/admin/components/TransactionTable.vue
-->
<template>
  <el-table
    :data="list"
    style="width: 100%;padding-top: 15px;"
  >
    <el-table-column
      label="OrderID"
      min-width="200"
    >
      <template slot-scope="{row}">
        {{ row.orderId | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column
      label="Price"
      width="195"
      align="center"
    >
      <template slot-scope="{row}">
        ¥{{ row.price | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column
      label="Status"
      width="100"
      align="center"
    >
      <template slot-scope="{row}">
        <el-tag :type="row.status | transactionStatusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getTransactions } from '@/api/transactions'
import { ITransactionData } from '@/api/types'

@Component({
  name: 'TransactionTable',
  filters: {
    transactionStatusFilter: (status: string) => {
      const statusMap: { [key: string]: string } = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter: (str: string) => str.substring(0, 30),
    // Input 10000 => Output "10,000"
    toThousandFilter: (num: number) => {
      return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    }
  }
})
export default class extends Vue {
  private list: ITransactionData[] = []

  created() {
    this.fetchData()
  }

  private async fetchData() {
    const { data } = await getTransactions({ /* Your params here */ })
    this.list = data.items.slice(0, 8)
  }
}
</script>
