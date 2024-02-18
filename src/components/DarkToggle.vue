<template>
  <button type="button" @click="toggleDarkMode" class="dark-mode dark:text-white">Toggle</button>
</template>

<script>
export default {
  name: 'DarkToggle',
  methods: {
    toggleDarkMode() {
      document.querySelector('html').classList.toggle('dark');
      if (localStorage.getItem('dark')) {
        localStorage.removeItem('dark');
      } else {
        localStorage.setItem('dark', 'true');
      }
    },
  },
  mounted() {
    if (localStorage.getItem('dark')) {
      document.querySelector('html').classList.add('dark');
    }
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
