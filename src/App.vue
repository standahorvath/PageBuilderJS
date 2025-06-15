<template>
  <div>
    <BlockBuilder :modules="DefaultModules" :toolbar="DefaultToolbar" :content="content" ref="builderRef" :uploader="handleUploader" @onUpdate="handleUpdate" />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import BlockBuilder from "@/BlockBuilder/BlockBuilder.vue";
import { DefaultModules } from "@/data/DefaultModules";
import { DefaultToolbar } from "./data/DefaultToolbar";
import { ModuleData } from "@/types";

const builderRef = ref();

const handleUpdate = (data: any) => {
  console.log('Update from BlockBuilder:', data);
};

const handleUploader = (callback: (image: string) => void) => {
  setTimeout(() => {
    const uploadedImage = 'https://placecats.com/300/200';
    callback(uploadedImage);
  }, 1000);
};

onMounted(() => {
  if (builderRef.value) {
    builderRef.value.onUpdate = handleUpdate;
    console.log(builderRef.value)
  }
});

const content = [{"id":"column","children":[],"structureData":[{"id":"type","value":"space"},{"id":"size","value":6},{"id":"color","value":"#000000"}]}];

</script>