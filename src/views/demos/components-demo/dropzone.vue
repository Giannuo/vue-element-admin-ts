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
 * @LastEditTime : 2020-12-15 16:29:15
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/components-demo/dropzone.vue
-->
<template>
  <div class="components-container">
    <aside>
      Based on
      <a
        class="link-type"
        href="https://github.com/rowanwins/vue-dropzone"
      >vue-dropzone</a>.
    </aside>
    <div class="editor-container">
      <dropzone
        id="myVueDropzone"
        url="https://httpbin.org/post"
        @dropzone-success="dropzoneSuccess"
        @dropzone-removed-file="dropzoneRemovedFile"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Dropzone from '@/components/Dropzone/index.vue'

@Component({
  name: 'DropzoneDemo',
  components: {
    Dropzone
  }
})
export default class extends Vue {
  private dropzoneSuccess(file: File, response: any) {
    this.$message({ message: 'Upload success', type: 'success' })
    console.log(file, response)
  }

  private dropzoneRemovedFile(file: File, error: Error, xhr: XMLHttpRequest) {
    this.$message({ message: 'Delete success', type: 'success' })
    console.log(file, error, xhr)
  }
}
</script>
