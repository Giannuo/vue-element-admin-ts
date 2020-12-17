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
 * @LastEditTime : 2020-12-15 16:29:09
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/components-demo/draggable-list.vue
-->
<template>
  <div class="components-container">
    <aside>
      draggable-list base on
      <a
        href="https://github.com/SortableJS/Vue.Draggable"
        target="_blank"
      >Vue.Draggable</a>
    </aside>
    <div class="editor-container">
      <draggable-list
        :list1="list1"
        :list2="list2"
        list1-title="List"
        list2-title="Article pool"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getArticles } from '@/api/articles'
import DraggableList from '@/components/DraggableList/index.vue'

@Component({
  name: 'DraggableListDemo',
  components: {
    DraggableList
  }
})
export default class extends Vue {
  private list1 = []
  private list2 = []

  created() {
    this.fetchData()
  }

  private async fetchData() {
    const { data } = await getArticles({ /* Your params here */ })
    this.list1 = data.items.splice(0, 5)
    this.list2 = data.items
  }
}
</script>
