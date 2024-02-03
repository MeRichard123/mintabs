<template>
  <form class="form" @submit.prevent="search">
    <label for="Search" hidden>Search</label>
    <input
      type="text"
      v-model="searchQuery"
      id="Search"
      placeholder="Search the web without being tracked..."
    />
    <button type="submit">🔎</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      // Perform search logic here
      const urlEncodedSearchQuery = encodeURIComponent(this.searchQuery);
      window.open(`https://duckduckgo.com/?q=${urlEncodedSearchQuery}`);
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
.form {
  width: 100%;
  max-width: 40vw;
  position: relative;
  margin: 50px auto;
}

input {
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

button {
  padding: 0.5rem;
  margin: 0.5rem;
  margin-right: -0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f3f3f3;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}

input:focus + button {
  padding: calc(0.5rem - 1px) 0.5rem calc(0.5rem - 1px) 0.5rem;
  border: 2px solid black;
}

button:hover {
  background-color: #697ce988;
}
</style>
