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
 * @LastEditTime : 2020-12-15 16:28:53
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/components-demo/avatar-upload.vue
-->
<template>
  <div class="components-container">
    <aside>
      This is based on
      <a
        class="link-type"
        href="//github.com/dai-siki/vue-image-crop-upload"
      >
        vue-image-crop-upload
      </a>
    </aside>
    <pan-thumb :image="image" />
    <el-button
      type="primary"
      icon="el-icon-upload"
      tyle="position: absolute;bottom: 15px;margin-left: 40px;"
      @click="toggleShow"
    >
      Change Avatar
    </el-button>
    <avatar-upload
      v-model="showImageUpload"
      field="avatar"
      :width="300"
      :height="300"
      :params="params"
      :headers="headers"
      url="https://httpbin.org/post"
      @close="onClose"
      @crop-upload-success="onCropUploadSuccess"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AvatarUpload from '@/components/AvatarUpload/index.vue'
import PanThumb from '@/components/PanThumb/index.vue'

@Component({
  name: 'AvatarUploadDemo',
  components: {
    AvatarUpload,
    PanThumb
  }
})
export default class extends Vue {
  private showImageUpload = false
  private image = 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
  private params = { someParams: 'your_params_goes_here' }
  private headers = { smail: '*_~' }

  private toggleShow() {
    this.showImageUpload = !this.showImageUpload
  }

  private onCropUploadSuccess(jsonData: any, field: string) {
    this.showImageUpload = false
    this.image = jsonData.files[field]
  }

  private onClose() {
    this.showImageUpload = false
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
