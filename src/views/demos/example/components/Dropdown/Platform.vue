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
 * @LastEditTime : 2020-12-15 16:30:07
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/example/components/Dropdown/Platform.vue
-->
<template>
  <el-dropdown
    :hide-on-click="false"
    :show-timeout="100"
    trigger="click"
  >
    <el-button plain>
      Platfroms({{ platforms.length }})
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown">
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'PlatformDropdown'
})
export default class extends Vue {
  @Prop({ required: true }) private value!: string[]

  private platformsOptions = [
    { key: 'a-platform', name: 'a-platform' },
    { key: 'b-platform', name: 'b-platform' },
    { key: 'c-platform', name: 'c-platform' }
  ]

  get platforms() {
    return this.value
  }

  set platforms(value) {
    this.$emit('input', value)
  }
}
</script>
