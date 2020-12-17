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
 * @Date         : 2020-12-14 14:52:00
 * @LastEditTime : 2020-12-15 16:21:59
 * @FilePath     : /kspcims-ts-vue-element-template-demo/src/views/base/dashboard/admin/components/TodoList/Todo.vue
-->
<template>
  <li
    :class="{completed: todo.done, editing: editing}"
    class="todo"
  >
    <div class="view">
      <input
        :checked="todo.done"
        class="toggle"
        type="checkbox"
        @change="toggleTodo( todo)"
      >
      <label
        @dblclick="editing = true"
        v-text="todo.text"
      />
      <button
        class="destroy"
        @click="deleteTodo( todo )"
      />
    </div>
    <input
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      class="edit"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit"
    >
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface ITodo {
  text: string
  done: boolean
}

@Component({
  name: 'TodoDemo',
  directives: {
    focus: (el, { value }, { context }) => {
      if (value) {
        if (context) {
          context.$nextTick(() => {
            el.focus()
          })
        }
      }
    }
  }
})
export default class extends Vue {
  @Prop({ default: { text: '', done: false } }) private todo!: ITodo

  private editing = false

  private deleteTodo(todo: ITodo) {
    this.$emit('delete-todo', todo)
  }

  private editTodo({ todo, value }: { todo: ITodo, value: string }) {
    this.$emit('edit-todo', { todo, value })
  }

  private toggleTodo(todo: ITodo) {
    this.$emit('toggle-todo', todo)
  }

  private doneEdit(e: KeyboardEvent) {
    const value = (e.target as HTMLInputElement).value.trim()
    const { todo } = this
    if (!value) {
      this.deleteTodo(todo)
    } else if (this.editing) {
      this.editTodo({
        todo,
        value
      })
      this.editing = false
    }
  }

  private cancelEdit(e: KeyboardEvent) {
    (e.target as HTMLInputElement).value = this.todo.text
    this.editing = false
  }
}
</script>
