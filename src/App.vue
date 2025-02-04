<template>
  <div>
    <BlockBuilder :modules="DefaultModules" :toolbar="DefaultToolbar" :content="blocks" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import BlockBuilder from "@/BlockBuilder/BlockBuilder.vue";
import { DefaultModules } from "@/data/DefaultModules";
import { DefaultToolbar } from "./data/DefaultToolbar";
import { ModuleData } from "@/types";

const blocks = [
  {
    id: "space",
    structureData: [
      {
        id: "type",
        value: "space",
      },
      {
        id: "size",
        value: 20,
      },
      {
        id: "color",
        value: "#000000",
      },
      {
        id: "responsive-hide-desktop",
        value: false,
      },
      {
        id: "responsive-hide-tablet",
        value: false,
      },
      {
        id: "responsive-hide-mobile",
        value: false,
      },
      {
        id: "developer-id-attribute",
        value: "",
      },
      {
        id: "developer-css-attribute",
        value: "",
      }
    ]
  }
] as ModuleData[]

</script>