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
 * @LastEditTime : 2020-12-15 16:30:10
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/example/components/Dropdown/SourceUrl.vue
-->
<template>
  <el-dropdown
    :show-timeout="100"
    trigger="click"
  >
    <el-button plain>
      Link
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu
      slot="dropdown"
      class="no-padding"
      style="width:400px"
    >
      <el-form-item
        label-width="0px"
        style="margin-bottom: 0px"
        prop="sourceURL"
      >
        <el-input
          v-model="sourceURL"
          placeholder="Please enter the content"
        >
          <template slot="prepend">
            URL
          </template>
        </el-input>
      </el-form-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'SourceUrlDropdown'
})
export default class extends Vue {
  @Prop({ required: true }) private value!: string

  get sourceURL() {
    return this.value
  }

  set sourceURL(value) {
    this.$emit('input', value)
  }
}
</script>
