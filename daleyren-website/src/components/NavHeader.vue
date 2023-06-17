<script setup>
defineProps({
  header: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex text-stone-400 text-lg font-rubik">
    <h1>/&nbsp</h1>
    <h1 class="underline">
      {{ header }}
    </h1>
  </div>
</template>
