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
 * @LastEditTime : 2020-12-15 16:29:06
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/demos/components-demo/draggable-kanban.vue
-->
<template>
  <div class="components-container board">
    <draggable-kanban
      :key="1"
      :list="list1"
      :group="group"
      class="kanban todo"
      header-text="Todo"
    />
    <draggable-kanban
      :key="2"
      :list="list2"
      :group="group"
      class="kanban working"
      header-text="Working"
    />
    <draggable-kanban
      :key="3"
      :list="list3"
      :group="group"
      class="kanban done"
      header-text="Done"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DraggableKanban from '@/components/DraggableKanban/index.vue'

@Component({
  name: 'DraggableKanbanDemo',
  components: {
    DraggableKanban
  }
})
export default class extends Vue {
  private group = 'mission'
  private list1 = [
    { name: 'Mission', id: 1 },
    { name: 'Mission', id: 2 },
    { name: 'Mission', id: 3 },
    { name: 'Mission', id: 4 }
  ]

  private list2 = [
    { name: 'Mission', id: 5 },
    { name: 'Mission', id: 6 },
    { name: 'Mission', id: 7 }
  ]

  private list3 = [
    { name: 'Mission', id: 8 },
    { name: 'Mission', id: 9 },
    { name: 'Mission', id: 10 }
  ]
}
</script>

<style lang="scss">
.kanban {
  &.todo {
    .board-column-header {
      background: #4A9FF9;
    }
  }

  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }

  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
</style>

<style lang="scss" scoped>
.board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
</style>
