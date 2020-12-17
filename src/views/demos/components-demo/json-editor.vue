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
 * @LastEditTime : 2020-12-15 16:29:20
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/components-demo/json-editor.vue
-->
<template>
  <div class="components-container">
    <aside>
      Json-Editor is base on <a
        href="https://github.com/codemirror/CodeMirror"
        target="_blank"
      >CodeMirrorr</a>. Lint
      base on <a
        href="https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js"
        target="_blank"
      >json-lint</a>.
    </aside>
    <div class="editor-container">
      <json-editor
        ref="jsonEditor"
        v-model="value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import JsonEditor from '@/components/JsonEditor/index.vue'

const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]'

@Component({
  name: 'JsonEditorDemo',
  components: {
    JsonEditor
  }
})
export default class extends Vue {
  private value = JSON.parse(jsonData)
}
</script>

<style lang="scss" scoped>
.editor-container {
  position: relative;
  height: 100%;
}
</style>
