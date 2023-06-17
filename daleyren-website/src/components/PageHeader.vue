<script setup>
defineProps({
  header: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="text-white text-2xl font-rubik">
    {{ header }}
  </h1>
</template>
