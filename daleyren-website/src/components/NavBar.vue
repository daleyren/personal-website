<script setup>
import { ref, watch, onMounted} from "vue";
import { useRoute } from "vue-router";
const currPage = ref("about");
const route = ref(useRoute());

watch(
  () => route,
  () => {
    console.log(route.value.name)
    if (route.value.name == "" || route.value.name == "home") {
      currPage.value = "about";
    }
    else {
      currPage.value = route.value.name
    }
  },
  { deep: true }
);


</script>

<template>
  <div class="text-white font-rubik md:ml-5 sm:w-auto w-[90vw] md:mx-auto">
    <div class="flex text-3xl font-normal justify-center">
      <h1>dale</h1>
      <h1 class="text-lime-300">ren</h1>
    </div>
    <div
      class="flex md:flex-col flex-row md:text-2xl text-xl text-stone-300 text-right md:space-y-1 mt-4 mx-auto w-min"
    >
      <h3
        v-if="currPage != 'about'"
        class="hover:text-white w-min md:ml-auto mr-4 md:mr-0"
      >
        <router-link to="/"> about </router-link>
      </h3>
      <h3
        v-if="currPage == 'about'"
        class="focus w-min md:ml-auto mr-4 md:mr-0"
      >
        <router-link to="/"> about </router-link>
      </h3>
      <!-- DIVIDER -->
      <h3
        v-if="currPage != 'reading'"
        class="hover:text-white w-min md:ml-auto mr-4 md:mr-0"
      >
        <router-link to="/reading">
          reading
        </router-link>
      </h3>
      <h3
        v-if="currPage == 'reading'"
        class="focus w-min md:ml-auto mr-4 md:mr-0"
      >
        <router-link to="/reading">
          reading
        </router-link>
      </h3>
      <!-- DIVIDER -->
      <h3
        v-if="currPage != 'writing'"
        class="hover:text-white w-min md:ml-auto mr-4 md:mr-0"
      >
        <router-link to="/writing">
          writing
        </router-link>
      </h3>
      <h3
        v-if="currPage == 'writing'"
        class="focus w-min md:ml-auto mr-4 md:mr-0"
      >
        <router-link to="/writing">
          writing
        </router-link>
      </h3>
      <!-- DIVIER -->
      <h3 v-if="currPage != 'links'" class="hover:text-white w-min md:ml-auto">
        <router-link to="/links">
          links
        </router-link>
      </h3>
      <h3 v-if="currPage == 'links'" class="focus w-min md:ml-auto">
        <router-link to="/links">
          links
        </router-link>
      </h3>
    </div>
  </div>
</template>
