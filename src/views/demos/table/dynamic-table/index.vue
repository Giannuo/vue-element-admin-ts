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
 * @LastEditTime : 2020-12-15 16:32:55
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/table/dynamic-table/index.vue
-->
<template>
  <div class="app-container">
    <div style="margin:0 0 5px 20px">
      {{ $t('table.dynamicTips1') }}
    </div>
    <fixed-header-table />

    <div style="margin:30px 0 5px 20px">
      {{ $t('table.dynamicTips2') }}
    </div>
    <unfixed-header-table />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FixedHeaderTable from './components/FixedHeaderTable.vue'
import UnfixedHeaderTable from './components/UnfixedHeaderTable.vue'

@Component({
  name: 'DynamicTable',
  components: {
    FixedHeaderTable,
    UnfixedHeaderTable
  }
})
export default class extends Vue {}
</script>
