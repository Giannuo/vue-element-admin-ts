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
 * @LastEditTime : 2020-12-15 16:32:46
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/tab/index.vue
-->
<template>
  <div class="tab-container">
    <el-tag>mounted times ：{{ createdTimes }}</el-tag>
    <el-alert
      :closable="false"
      style="width:200px; display:inline-block; vertical-align:middle; margin-left:30px;"
      title="Tab with keep-alive"
      type="success"
    />
    <el-tabs
      v-model="activeName"
      style="margin-top:15px"
      type="border-card"
    >
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <keep-alive>
          <tab-pane
            v-if="activeName === item.key"
            :type="item.key"
            @create="showCreatedTimes"
          />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import TabPane from './components/TabPane.vue'

@Component({
  name: 'Tab',
  components: {
    TabPane
  }
})
export default class extends Vue {
  private tabMapOptions = [
    { label: 'China', key: 'CN' },
    { label: 'USA', key: 'US' },
    { label: 'Japan', key: 'JP' },
    { label: 'Eurozone', key: 'EU' }
  ]

  private activeName = 'CN'
  private createdTimes = 0

  @Watch('activeName')
  private onActiveNameChange(value: string) {
    this.$router.push(`${this.$route.path}?tab=${value}`).catch(err => {
      console.warn(err)
    })
  }

  created() {
    // Init the default selected tab
    const tab = this.$route.query.tab as string
    if (tab) {
      this.activeName = tab
    }
  }

  private showCreatedTimes() {
    this.createdTimes = this.createdTimes + 1
  }
}
</script>

<style lang="scss" scoped>
.tab-container {
  margin: 30px;
}
</style>
