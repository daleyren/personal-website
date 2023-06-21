<script setup>
import PageHeader from "../components/PageHeader.vue";
import PageContent from "../components/PageContent.vue";
import NavHeader from "../components/NavHeader.vue";

const readings = {
  books: [
    "Amp It Up",
    "Freakonomics",
    "Outliers",
    "Principles",
    "The Startup of You",
    "Salt",
    "The Power of Habit",
  ],
  articles: [],
};
</script>

<template>
  <div class="md:mr-[10rem]">
    <NavHeader class="md:visible collapse" header="reading" />
    <div class="md:w-[32rem] md:mt-5 w-[80vw] mx-auto">
      <PageHeader header="Books" />
      <PageContent :content="readings.books" />
    </div>
  </div>
</template>
