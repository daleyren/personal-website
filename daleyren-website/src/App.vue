<script setup>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="h-screen w-screen bg-zinc-900 overflow-hidden fixed">
    <!-- <h1 class="text-3xl font-playfair font-medium text-white">dale ren</h1> -->
    <NavBar />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <!-- <RouterView /> -->
  </div>
</template>
