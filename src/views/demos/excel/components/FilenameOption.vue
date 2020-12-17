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
 * @LastEditTime : 2020-12-15 16:30:35
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/excel/components/FilenameOption.vue
-->
<template>
  <div style="display:inline-block;">
    <label
      class="radio-label"
      style="padding-left:0;"
    >Filename: </label>
    <el-input
      v-model="filename"
      :placeholder="$t('excel.placeholder')"
      style="width:345px;"
      prefix-icon="el-icon-document"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'FilenameOption'
})
export default class extends Vue {
  @Prop({ required: true }) private value!: string

  get filename() {
    return this.value
  }

  set filename(value) {
    this.$emit('input', value)
  }
}
</script>
