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
 * @LastEditTime : 2020-12-15 16:29:23
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/components-demo/markdown.vue
-->
<template>
  <div class="components-container">
    <aside>
      Markdown is based on
      <a
        href="https://github.com/nhnent/tui.editor"
        target="_blank"
      >tui.editor</a> ，simply wrapped with Vue.
      <a
        target="_blank"
        href="https://armour.github.io/vue-typescript-admin-docs/features/components/markdown-editor.html"
      >
        Documentation </a>
    </aside>

    <div class="editor-container">
      <el-tag class="tag-title">
        Basic:
      </el-tag>
      <markdown-editor
        ref="markdownEditor"
        v-model="content1"
        height="300px"
      />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">
        Markdown Mode:
      </el-tag>
      <markdown-editor
        v-model="content2"
        height="200px"
        :options="{hideModeSwitch: true, previewStyle: 'tab'}"
      />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">
        Customize Toolbar:
      </el-tag>
      <markdown-editor
        v-model="content3"
        :options="{toolbarItems: ['heading','bold','italic']}"
      />
    </div>

    <div class="editor-container">
      <el-tag class="tag-title">
        I18n:
      </el-tag>
      <el-alert
        :closable="false"
        title="You can change the language of the admin system to see the effect"
        type="success"
      />
      <markdown-editor
        v-model="content4"
        height="300px"
        :language="language"
      />
    </div>

    <el-button
      style="margin-top:80px;"
      type="primary"
      icon="el-icon-document"
      @click="getHtml"
    >
      Get HTML
    </el-button>
    <!-- eslint-disable vue/no-v-html -->
    <div v-html="html" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import MarkdownEditor from '@/components/MarkdownEditor/index.vue'

const content = `
**This is test**

* vue
* element
* webpack
`

@Component({
  name: 'MarkdownDemo',
  components: {
    MarkdownEditor
  }
})
export default class extends Vue {
  private content1 = content
  private content2 = content
  private content3 = content
  private content4 = content
  private html = ''
  // Mapping for local lang to tuiEditor lang
  // https://github.com/nhnent/tui.editor/tree/master/src/js/langs
  private languageTypeList: { [key: string]: string } = {
    en: 'en_US',
    zh: 'zh_CN',
    es: 'es_ES',
    ja: 'ja_JP',
    ko: 'ko_KR'
  }

  mounted() {
    // FIXES weird focus issue caused by MarkdownEditor
    window.scrollTo(0, 0)
  }

  get language() {
    return this.languageTypeList[AppModule.language]
  }

  private getHtml() {
    this.html = (this.$refs.markdownEditor as MarkdownEditor).getHtml()
  }
}
</script>

<style lang="scss" scoped>
.editor-container {
  margin-bottom: 30px;
}

.tag-title {
  margin-bottom: 5px;
}
</style>
