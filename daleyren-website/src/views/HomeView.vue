<script setup>
import PageHeader from "../components/PageHeader.vue";
import PageContent from "../components/PageContent.vue";
import NavHeader from "../components/NavHeader.vue";
</script>

<template>
  <div class="md:mr-[10rem]">
    <!-- <NavHeader header="/ about" /> -->
    <div class="md:w-[32rem] mt-5 w-[80vw] mx-auto">
      <PageHeader header="Hi there! &#128075" />
      <PageContent>
        <template #content>
          <div>
            <div class="text-white sm:text-lg mt-6 md:ml-6 font-rubik text-base">
              I'm a builder and student @ UChicago studying cs +
              stats: trying to explore and learn as much as possible before I
              get pulled into the abyss of software.<br />
              <br />
              Currently, I'm a student venture scout for Soma Capital. Previously, I was a a SWE
              intern at Shedd Capital working fullstack, small business
              consultant intern at the Polsky Center, frontend software engineer intern at Haylon
              Technologies, and research intern dabbling in cavity quantum electrodynamics.<br />
              <br />
            </div>
          </div>
        </template>
      </PageContent>
    </div>
  </div>
</template>
