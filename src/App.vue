<template>
  <div>
    <BlockBuilder :blocks="30" :modules="DefaultModules" />
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import BlockBuilder from "@/BlockBuilder/BlockBuilder.vue";
import DefaultModules from "@/data/DefaultModules";

</script>