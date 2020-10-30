<template>
  <div class="mb-6 max-w-md mx-auto">
    <div class="bg-white p-4 rounded-sm mx-4 shadow">
      <h2 class="font-bold text-xl mb-4">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>