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
 * @Date         : 2020-12-14 15:01:53
 * @LastEditTime : 2020-12-15 16:50:08
 * @FilePath     : /vue-element-template-ts/src/views/demos/clipboard/index.vue
-->
<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane
        label="use clipboard directly"
        name="directly"
      >
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width:400px; max-width:100%;"
        />
        <el-button
          type="primary"
          icon="el-icon-document"
          @click="handleClipboard(inputData, $event)"
        >
          copy
        </el-button>
      </el-tab-pane>
      <el-tab-pane
        label="use clipboard by v-directive"
        name="v-directive"
      >
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width:400px; max-width:100%;"
        />
        <el-button
          v-clipboard:copy="inputData"
          v-clipboard:success="clipboardSuccess"
          type="primary"
          icon="el-icon-document"
        >
          copy
        </el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { handleClipboard, clipboardSuccess } from '@/utils/clipboard' // use clipboard directly

@Component({
  name: 'Clipboard'
})
export default class extends Vue {
  private activeName = 'directly'
  private inputData = 'https://github.com/giannuo/vue-element-template-ts'
  private clipboardSuccess = clipboardSuccess
  private handleClipboard = handleClipboard
}
</script>
