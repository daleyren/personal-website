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
  <div class="md:mr-[10rem]">
    <NavHeader class="md:visible collapse" header="writing" />
    <div class="md:w-[32rem] md:mt-5 w-[80vw] mx-auto">
      <PageHeader header="Writing" />
      <PageContent content="[work in progress]" />
    </div>
  </div>
</template>
