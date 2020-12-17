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
 * @LastEditTime : 2020-12-15 16:29:59
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/example/components/Dropdown/Comment.vue
-->
<template>
  <el-dropdown
    :show-timeout="100"
    trigger="click"
  >
    <el-button plain>
      {{ !disableComment?'Comment: opened':'Comment: closed' }}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu
      slot="dropdown"
      class="no-padding"
    >
      <el-dropdown-item>
        <el-radio-group
          v-model="disableComment"
          style="padding: 10px;"
        >
          <el-radio :label="true">
            Close comment
          </el-radio>
          <el-radio :label="false">
            Open comment
          </el-radio>
        </el-radio-group>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'CommentDropdown'
})
export default class extends Vue {
  @Prop({ required: true }) private value!: boolean

  get disableComment() {
    return this.value
  }

  set disableComment(value) {
    this.$emit('input', value)
  }
}
</script>
