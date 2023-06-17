<script setup>
import PageHeader from "../components/PageHeader.vue";
import PageContent from "../components/PageContent.vue";
import NavHeader from "../components/NavHeader.vue";
</script>

<template>
  <div class="mr-[10rem]">
    <!-- <NavHeader header="/ about" /> -->
    <div class="w-[32rem] mt-5">
      <PageHeader header="Hi there! &#128075" />
      <PageContent>
        <template #content>
          <div class="text-white text-lg mt-6 ml-6 font-rubik">
            I'm a builder and student @ UChicago studying Computer Science +
            Physics: trying to explore and learn as much as possible before I
            get pulled into the abyss of software.<br />
            <br />
            Currently, I'm a SWE intern at Shedd Capital working fullstack and a
            student venture scout for Soma Capital.<br />
            <br />
            Previously, I was a small business consultant intern at the Polsky
            Center, frontend software engineer intern at Haylon Technologies, 
            research intern dabbling in cavity quantum electrodynamics.
          </div>
        </template>
      </PageContent>
    </div>
  </div>
</template>
