<template>
  <div>
    <BlockBuilder :modules="ExtendedModules" :toolbar="ExtendedToolbar" :content="blocks" ref="builderRef" />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import BlockBuilder from "@/BlockBuilder/BlockBuilder.vue";
import { DefaultModules } from "@/data/DefaultModules";
import { ExtendedModules } from "@/data/ExtendedModules";
import { DefaultToolbar, ExtendedToolbar } from "./data/DefaultToolbar";
import { ModuleData } from "@/types";

const builderRef = ref();

const handleUpdate = (data: any) => {
  console.log('Update from BlockBuilder:', data);
};

onMounted(() => {
  if (builderRef.value) {
    builderRef.value.onUpdate = handleUpdate;
    console.log(builderRef.value)
  }
});

const blocks = [
] as ModuleData[]

</script>