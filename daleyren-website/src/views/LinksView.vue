<script setup>
import PageHeader from "../components/PageHeader.vue";
// import PageContent from "../components/PageContent.vue";
import NavHeader from "../components/NavHeader.vue";
import LinksList from "../components/LinksList.vue";

const links = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/dale-ren-5a4182177/",
  },
  {
    title: "GitHub",
    link: "https://github.com/daleyren",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/DaleRen2",
  },
  {
    title: "Goodreads",
    link: "https://www.goodreads.com/user/show/139093493-dale-ren",
  },
  {
    title: "Email",
    link: "mailto:daleren.y@gmail.com",
  },
];
</script>

<template>
  <div class="md:mr-[10rem]">
    <NavHeader class="md:visible collapse" header="links" />
    <div class="md:w-[32rem] md:mt-5 w-[80vw] mx-auto">
      <PageHeader header="Also Me" />
      <LinksList :content="links" />
    </div>
  </div>
</template>
