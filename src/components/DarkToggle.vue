<template>
  <button @click="toggleDarkMode" class="dark-mode">Toggle</button>
</template>

<script>
export default {
  name: 'DarkToggle',
  methods: {
    toggleDarkMode() {
      document.querySelector('html').classList.toggle('dark');
    },
  },
};
</script>

<style>
    .dark-mode {
        position: absolute;
        top: 20px;
        right: 20px;
    }
</style>
