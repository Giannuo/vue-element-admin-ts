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
 * @LastEditTime : 2020-12-15 16:29:52
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/error-log/index.vue
-->
<template>
  <div class="errPage-container">
    <error-a />
    <error-b />
    <h3>{{ $t('errorLog.tips') }}</h3>
    <aside>
      {{ $t('errorLog.description') }}
      <a
        target="_blank"
        class="link-type"
        href="https://armour.github.io/vue-typescript-admin-docs/guide/advanced/error.html"
      >
        {{ $t('errorLog.documentation') }}
      </a>
    </aside>
    <aside>
      {{ $t('errorLog.description2') }}
    </aside>

    <a href="#">
      <img
        src="https://wpimg.wallstcn.com/360e4842-4db5-42d0-b078-f9a84a825546.gif"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ErrorA from './components/ErrorTestA.vue'
import ErrorB from './components/ErrorTestB.vue'

@Component({
  name: 'ErrorLog',
  components: {
    ErrorA,
    ErrorB
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.errPage-container {
  padding: 30px;
}
</style>
