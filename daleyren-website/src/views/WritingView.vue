<script setup>
import PageHeader from "../components/PageHeader.vue";
import PageContent from "../components/PageContent.vue";
import NavHeader from "../components/NavHeader.vue";
// import { onMounted } from "vue";

// const emit = defineEmits([""]);
// onMounted(() => {
//   console.log("WRITING OPEN");
// });

// onUnmounted(() => {
//   console.log("WRITING CLOSE");
// }),
</script>

<template>
  <div class="mr-[10rem]">
    <NavHeader header="writing" />
    <div class="w-[32rem] mt-5">
      <PageHeader header="Writing" />
      <PageContent content="[work in progress]" />
    </div>
  </div>
</template>
