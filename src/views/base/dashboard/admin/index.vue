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
 * @LastEditTime : 2020-12-17 15:30:06
 * @FilePath     : /vue-element-admin-ts/src/views/base/dashboard/admin/index.vue
-->
<template>
  <div class="dashboard-admin-container">admin</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'DashboardAdmin',
  components: {}
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.dashboard-admin-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

}

</style>
