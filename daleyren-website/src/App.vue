<script setup>
import NavBar from "./components/NavBar.vue";
import PageNotFoundViewVue from "./views/PageNotFoundView.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="h-screen w-screen bg-zinc-900 overflow-hidden fixed">
    <div class="flex w-min mx-auto mt-20">
      <NavBar class="mr-20" />
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>
