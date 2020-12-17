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
 * @LastEditTime : 2020-12-15 16:30:33
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/excel/components/BookTypeOption.vue
-->
<template>
  <div style="display:inline-block;">
    <label class="radio-label">Book Type: </label>
    <el-select
      v-model="bookType"
      style="width:120px;"
    >
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'BookTypeOption'
})
export default class extends Vue {
  @Prop({ required: true }) private value!: string

  private options = ['xlsx', 'csv', 'txt']

  get bookType() {
    return this.value
  }

  set bookType(value) {
    this.$emit('input', value)
  }
}
</script>
