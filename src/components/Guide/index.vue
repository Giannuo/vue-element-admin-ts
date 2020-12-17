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
 * @Date         : 2020-12-16 14:32:57
 * @LastEditTime : 2020-12-17 11:02:13
 * @FilePath     : /vue-element-admin-ts/src/components/Guide/index.vue
-->
<template>
  <div id="navbarGuide">
    <svg-icon :name="guide" @click.prevent.stop="guide" />
  </div>
</template>

<script lang="ts">
import Guide from './'
export default Guide
</script>
