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
 * @LastEditTime : 2020-12-15 16:31:03
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/icons/index.vue
-->
<template>
  <div class="icons-container">
    <!-- <aside>
      <a
        href="https://armour.github.io/vue-typescript-admin-docs/guide/advanced/icon.html"
        target="_blank"
      >Add and use
      </a>
    </aside> -->
    <el-tabs type="border-card">
      <el-tab-pane label="Icons">
        <div class="grid">
          <div
            v-for="item of svgIcons"
            :key="item"
            @click="handleClipboard(generateSvgIconCode(item),$event)"
          >
            <el-tooltip placement="top">
              <div slot="content">
                {{ generateSvgIconCode(item) }}
              </div>
              <div class="icon-item">
                <svg-icon
                  :name="item"
                  class="disabled"
                />
                <span>{{ item }}</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Element-UI Icons">
        <div class="grid">
          <div
            v-for="item of elementIcons"
            :key="item"
            @click="handleClipboard(generateElementIconCode(item),$event)"
          >
            <el-tooltip placement="top">
              <div slot="content">
                {{ generateElementIconCode(item) }}
              </div>
              <div class="icon-item">
                <i :class="'el-icon-' + item" />
                <span>{{ item }}</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { handleClipboard } from '@/utils/clipboard'
import elementIcons from './element-icons'
import svgIcons from './svg-icons'

@Component({
  name: 'Icons'
})
export default class extends Vue {
  private svgIcons = svgIcons
  private elementIcons = elementIcons
  private handleClipboard = handleClipboard

  private generateElementIconCode(symbol: string) {
    return `<i class="el-icon-${symbol}" />`
  }

  private generateSvgIconCode(symbol: string) {
    return `<svg-icon name="${symbol}" />`
  }
}
</script>

<style lang="scss" scoped>
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
