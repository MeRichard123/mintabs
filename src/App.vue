<template>
  <section class="bg-white dark:bg-black h-screen">
    <nav>
      <router-link to="/">University</router-link> |
      <router-link to="/personal">Personal</router-link>
    </nav>
    <Clock />
    <DarkToggle/>
    <router-view/>
  </section>
</template>

<script>
import Clock from './components/Clock.vue';
import DarkToggle from './components/DarkToggle.vue';

export default {
  // watch routes and edit the title accordingly without helmet.
  name: 'App',
  components: {
    Clock,
    DarkToggle,
  },
  watch: {
    $route(to) {
      document.title = to.meta.title;
    },
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@layer components{
  .themeText{
    @apply text-textLight dark:text-textDark
  }
  .flexBasic{
    @apply flex items-center justify-center
  }
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
