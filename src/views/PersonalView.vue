<template>
  <section class="flexBasic flex-wrap">
    <a v-for="link in links" :key="link.name" :href="link.link">
      <div class="p-8 text-2xl m-5 card text-center themeText flexBasic">
        <h3>{{ link.name }}</h3>
      </div>
    </a>
  </section>
</template>

<script>
export default {
  name: 'PersonalView',
  data() {
    return {
      links: [
        { name: 'Netflix', link: 'https://www.netflix.com/browse' },
        { name: 'Youtube', link: 'https://www.youtube.com/' },
        { name: 'Discord', link: 'https://discord.com/' },
        { name: 'Github', link: 'https://github.com' },
      ],
    };
  },
};
</script>
<style>
.card {
  width: 220px;
  height: 220px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.card:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
