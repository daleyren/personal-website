<script setup>
const props = defineProps({
  content: {
    type: [Array],
    required: true,
  },
});
</script>

<template>
  <div class="text-white text-lg mt-6 ml-6 font-rubik">
    <ul class="list-disc list-inside">
      <li v-for="item of content" :key="item" class="text-stone-200">
        <a
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="w-min hover:underline"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
