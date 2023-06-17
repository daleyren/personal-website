<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
const currPage = ref("about");
</script>

<template>
  <div class="text-white font-rubik">
    <div class="flex text-3xl font-normal">
      <h1>dale</h1>
      <h1 class="text-lime-300">ren</h1>
    </div>
    <div class="flex-col text-stone-300 text-right space-y-1 mt-4 text-2xl">
      <h3 v-if="currPage != 'about'" class="hover:text-white w-min ml-auto">
        <router-link to="/" @click="currPage = 'about'"> about </router-link>
      </h3>
      <h3 v-if="currPage == 'about'" class="focus w-min ml-auto">
        <router-link to="/" @click="currPage = 'about'"> about </router-link>
      </h3>
      <!-- DIVIDER -->
      <h3 v-if="currPage != 'reading'" class="hover:text-white w-min ml-auto">
        <router-link to="/reading" @click="currPage = 'reading'">
          reading
        </router-link>
      </h3>
      <h3 v-if="currPage == 'reading'" class="focus w-min ml-auto">
        <router-link to="/reading" @click="currPage = 'reading'">
          reading
        </router-link>
      </h3>
      <!-- DIVIDER -->
      <h3 v-if="currPage != 'writing'" class="hover:text-white w-min ml-auto">
        <router-link to="/writing" @click="currPage = 'writing'">
          writing
        </router-link>
      </h3>
      <h3 v-if="currPage == 'writing'" class="focus w-min ml-auto">
        <router-link to="/writing" @click="currPage = 'writing'">
          writing
        </router-link>
      </h3>
      <!-- DIVIER -->
      <h3 v-if="currPage != 'links'" class="hover:text-white w-min ml-auto">
        <router-link to="/links" @click="currPage = 'links'">
          links
        </router-link>
      </h3>
      <h3 v-if="currPage == 'links'" class="focus w-min ml-auto">
        <router-link to="/links" @click="currPage = 'links'">
          links
        </router-link>
      </h3>
    </div>
  </div>
</template>
