import { defineCustomElement } from "vue";
import BlockBuilder from "@/BlockBuilder/BlockBuilder.vue";
import styles from "@/assets/style.css?raw";

const BlockBuilderComponent = defineCustomElement(BlockBuilder, {
	  styles: [styles],
});
customElements.define("block-builder", BlockBuilderComponent);