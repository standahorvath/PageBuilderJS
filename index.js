import { defineCustomElement } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import BlockBuilder from '@/BlockBuilder/BlockBuilder.vue'
import styles from '@/assets/style.css?raw'
import colorPickerStyles from "vue3-colorpicker/style.css?raw";
import { ColorPicker } from 'vue3-colorpicker';

const pinia = createPinia()
setActivePinia(pinia)

const BlockBuilderComponent = defineCustomElement(BlockBuilder, {
  styles: [styles, colorPickerStyles],
  components: {
    ColorPicker,
  }
})

BlockBuilderComponent.prototype._context = {
  provides: {
    pinia,
  },
}

customElements.define('block-builder', BlockBuilderComponent)
