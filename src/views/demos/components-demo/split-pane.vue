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
 * @LastEditTime : 2020-12-15 16:29:28
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/components-demo/split-pane.vue
-->
<template>
  <div class="components-container">
    <aside>
      <strong>SplitPane</strong> If you've used
      <a
        href="https://codepen.io/"
        target="_blank"
      > codepen</a>,
      <a
        href="https://jsfiddle.net/"
        target="_blank"
      > jsfiddle </a>will not be unfamiliar.
      <a
        href="https://github.com/PanJiaChen/vue-split-pane"
        target="_blank"
      > Github repository</a>
    </aside>
    <split-pane
      split="vertical"
      @resize="resize"
    >
      <template slot="paneL">
        <div class="left-container" />
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <div class="top-container" />
          </template>
          <template slot="paneR">
            <div class="bottom-container" />
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script lang="ts">
import SplitPane from 'vue-splitpane'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'SplitPaneDemo',
  components: {
    SplitPane
  }
})
export default class extends Vue {
  resize() {
    // Handle resize
  }
}
</script>

<style lang="scss" scoped>
.components-container {
  height: 100vh;
}

.left-container {
  background-color: #F38181;
  height: 100%;
}

.right-container {
  background-color: #FCE38A;
  height: 200px;
}

.top-container {
  background-color: #FCE38A;
  width: 100%;
  height: 100%;
}

.bottom-container {
  width: 100%;
  background-color: #95E1D3;
  height: 100%;
}
</style>
