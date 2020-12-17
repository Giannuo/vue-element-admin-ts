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
 * @LastEditTime : 2020-12-15 16:29:31
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/components-demo/sticky.vue
-->
<template>
  <div>
    <sticky
      :z-index="10"
      class-name="sub-navbar"
    >
      <el-dropdown trigger="click">
        <el-button plain>
          Platform<i class="el-icon-caret-bottom el-icon--right" />
        </el-button>
        <el-dropdown-menu
          slot="dropdown"
          class="no-border"
        >
          <el-checkbox-group
            v-model="platforms"
            style="padding: 5px 15px;"
          >
            <el-checkbox
              v-for="item in platformsOptions"
              :key="item.key"
              :label="item.key"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown trigger="click">
        <el-button plain>
          Link<i class="el-icon-caret-bottom el-icon--right" />
        </el-button>
        <el-dropdown-menu
          slot="dropdown"
          class="no-padding no-border"
          style="width: 300px"
        >
          <el-input
            v-model="url"
            placeholder="Please enter the content"
          >
            <template slot="prepend">
              Url
            </template>
          </el-input>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="time-container">
        <el-date-picker
          v-model="time"
          type="datetime"
          format="yyyy-MM-dd HH:mm:ss"
          placeholder="Release time"
          :picker-options="pickerOptions"
        />
      </div>

      <el-button
        style="margin-left: 10px;"
        type="success"
      >
        publish
      </el-button>
    </sticky>

    <div class="components-container">
      <aside>Sticky header, {{ $t('components.stickyTips') }}</aside>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <sticky :sticky-top="200">
        <el-button
          type="primary"
        >
          placeholder
        </el-button>
      </sticky>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
      <div>placeholder</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sticky from '@/components/Sticky/index.vue'

@Component({
  name: 'StickyDemo',
  components: {
    Sticky
  }
})
export default class extends Vue {
  private time = Date
  private url = ''
  private platforms = ['a-platform']
  private platformsOptions = [
    { key: 'a-platform', name: 'platformA' },
    { key: 'b-platform', name: 'platformB' },
    { key: 'c-platform', name: 'platformC' }
  ]

  private pickerOptions = {
    disabledDate(time: Date) {
      return time.getTime() > Date.now()
    }
  }
}
</script>

<style lang="scss" scoped>
.components-container div {
  margin: 10px;
}

.time-container {
  display: inline-block;
}
</style>
