/*
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
 * @Date         : 2020-12-16 14:53:21
 * @LastEditTime : 2020-12-17 08:41:54
 * @FilePath     : /vue-element-template-ts/src/components/Guide/index.ts
 */
import { Vue, Component } from 'vue-property-decorator'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
@Component({
  name: 'Guide'
})
export default class extends Vue {
  private driver: Driver | null = null;
  private _lang: string | null = null;

  _create() {
    debugger
    return new Driver({
      prevBtnText: this.$t('guide.btntext.prevBtnText').toString(),
      nextBtnText: this.$t('guide.btntext.nextBtnText').toString(),
      doneBtnText: this.$t('guide.btntext.doneBtnText').toString(),
      closeBtnText: this.$t('guide.btntext.closeBtnText').toString(),
      allowClose: false,
      padding: 0
    })
  }

  mounted() {
    this._lang = this.$store.state.app.language
    this.driver = this._create()
  }

  get lang(): string {
    return this.$store.state.app.language
  }

  private guide() {
    debugger
    if (this._lang === this.lang) {
      if (this.driver) {
        this.driver.defineSteps(this.steps)
        this.driver.start()
      }
    } else {
      this._lang = this.$store.state.app.language
      this.driver = this._create()
      this.driver.defineSteps(this.steps)
      this.driver.start()
    }
  }

  get steps(): Array<Driver.Step> {
    return [
      {
        element: '#hamburger-container',
        popover: {
          title: this.$t('guide.hamburger.title').toString(),
          description: this.$t('guide.hamburger.desc').toString(),
          position: 'bottom'
        }
      },
      {
        element: '#breadcrumb-container',
        popover: {
          title: this.$t('guide.breadcrumb.title').toString(),
          description: this.$t('guide.breadcrumb.desc').toString(),
          position: 'bottom'
        }
      },
      {
        element: '#header-search',
        popover: {
          title: this.$t('guide.search.title').toString(),
          description: this.$t('guide.search.desc').toString(),
          position: 'left'
        }
      },
      {
        element: '#screenfull',
        popover: {
          title: this.$t('guide.screenfull.title').toString(),
          description: this.$t('guide.screenfull.desc').toString(),
          position: 'left'
        }
      },
      {
        element: '#size-select',
        popover: {
          title: this.$t('guide.size.title').toString(),
          description: this.$t('guide.size.desc').toString(),
          position: 'left'
        }
      },
      {
        element: '#tags-view-container',
        popover: {
          title: this.$t('guide.tags.title').toString(),
          description: this.$t('guide.tags.desc').toString(),
          position: 'bottom'
        }
      }
    ]
  }
}
