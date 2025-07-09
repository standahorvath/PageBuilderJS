import { defineCustomElement } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import BlockBuilder from '@/BlockBuilder/BlockBuilder.vue'
import styles from '@/assets/style.css?raw'
import colorPickerStyles from 'vue3-colorpicker/style.css?raw'
import { ColorPicker } from 'vue3-colorpicker'

const pinia = createPinia()
setActivePinia(pinia)

const BlockBuilderComponent = defineCustomElement(BlockBuilder, {
  styles: [styles, colorPickerStyles],
  components: {
    ColorPicker,
  },
})

BlockBuilderComponent.prototype._context = {
  provides: {
    pinia,
  },
}

class BlockBuilderElement extends BlockBuilderComponent {
  set uploader(fn) {
    this.__uploader = fn
    this.trySetUploader()
  }

  get uploader() {
    return this.__uploader
  }

  connectedCallback() {
    super.connectedCallback?.()
    this.trySetUploader()
  }

  trySetUploader() {
    const apply = () => {
      const exposed = this._instance?.exposed
      if (exposed?.setUploader) {
        exposed.setUploader(this.__uploader)
      } else {
        requestAnimationFrame(apply)
      }
    }
    requestAnimationFrame(apply)
  }
}

customElements.define('block-builder', BlockBuilderElement)
