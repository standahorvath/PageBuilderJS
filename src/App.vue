<template>
  <div>
    <BlockBuilder :modules="DefaultModules" :toolbar="DefaultToolbar" :content="content" ref="builderRef"  :links="links"
      :uploader="handleUploader" @onUpdate="handleUpdate" stylesheet="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import BlockBuilder from "@/BlockBuilder/BlockBuilder.vue";
import { DefaultModules } from "@/data/DefaultModules";
import { DefaultToolbar } from "./data/DefaultToolbar";
import { InputLinkCategory, ModuleData } from "@/types";

const builderRef = ref();

const handleUpdate = (data: any) => {
  console.log('Update from BlockBuilder:', data);
};


onMounted(() => {
  if (builderRef.value) {
    builderRef.value.onUpdate = handleUpdate;
    console.log(builderRef.value)

    builderRef.value.setUploader((callback: (image: string) => void) => {
      setTimeout(() => {
        const uploadedImage = 'https://placecats.com/300/200';
        callback(uploadedImage);
      }, 1000);
    });
  }
});

const content = [{ "id": "column", "children": [], "structureData": [{ "id": "type", "value": "space" }, { "id": "size", "value": 6 }, { "id": "color", "value": "#000000" }] }];
const links: InputLinkCategory[] = [
	{
		value: 'post',
		label: 'Post',
		links: [
			{ value: 'post-1', label: 'How to Write a Great Blog Post' },
			{ value: 'post-2', label: '10 Tips for Effective Writing' },
			{ value: 'post-3', label: 'Beginner’s Guide to SEO' }
		]
	},
	{
		value: 'page',
		label: 'Page',
		links: [
			{ value: 'about', label: 'About Us' },
			{ value: 'contact', label: 'Contact' },
			{ value: 'faq', label: 'Frequently Asked Questions' }
		]
	},
	{
		value: 'product',
		label: 'Product',
		links: [
			{ value: 'product-abc', label: 'Product ABC' },
			{ value: 'product-xyz', label: 'Product XYZ' },
			{ value: 'product-123', label: 'Product 123' }
		]
	}
]

</script>