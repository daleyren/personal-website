<script setup>
const props = defineProps({
  content: {
    type: [String, Array],
    // required: true,
  },
});
const isList = Array.isArray(props.content);
</script>

<template>
  <div class="text-white sm:text-lg mt-6 md:ml-6 font-rubik text-base">
    <div v-if="isList">
      <div>
        <ul class="list-disc list-inside">
          <li v-for="item of content" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>
        {{ content }}
      </p>
    </div>
  </div>

  <slot name="content"> </slot>
</template>
