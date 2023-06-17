<script setup>
import PageHeader from "../components/PageHeader.vue";
import PageContent from "../components/PageContent.vue";
import NavHeader from "../components/NavHeader.vue";

const readings = {
  books: [
    "Amp It Up - [Slootman]",
    "Freakonomics - [Levitt, Dubner]",
    "Outliers - [Gladwell]",
    "Principles - [Dalios]",
    "The Startup of You - [Hoffman, Casnocha]",
    "Salt - [Kurlansky]",
    "The Power of Habit - [Duhigg]",
  ],
  articles: [],
};
</script>

<template>
  <div class="mr-[10rem]">
    <NavHeader header="reading" />
    <div class="w-[32rem] mt-5">
      <PageHeader header="Books" />
      <PageContent :content="readings.books" />
    </div>
  </div>
</template>
