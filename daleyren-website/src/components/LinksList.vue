<script setup>
const props = defineProps({
  content: {
    type: [Array],
    required: true,
  },
});
</script>

<template>
  <div class="text-white sm:text-lg mt-6 md:ml-6 font-rubik text-base">
    <ul class="list-disc list-inside">
      <li v-for="item of content" :key="item" class="text-stone-300 underline">
        <a
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="w-min hover:text-white"
        >
          {{ item.title }} 	&#x2197
        </a>
      </li>
    </ul>
  </div>
</template>
