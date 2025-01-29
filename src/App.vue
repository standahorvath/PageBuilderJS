<template>
  <div>
    <BlockBuilder :blocks="30" />
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import BlockBuilder from "@/BlockBuilder/BlockBuilder.vue";

</script>