<template>
  <section class="search p-8 mt-16">
    <h1 class="search-title text-h3">Search</h1>
    <v-text-field
      class="input mx-auto my-10"
      label="Type item code"
      hide-details="auto"
      v-model="searchInput"
    ></v-text-field>
    <div class="my-2">
      <v-btn color="primary" dark @click.stop.prevent="handleSearch">
        search
      </v-btn>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchInput: '',
    }
  },
  methods: {
    handleSearch() {
      console.log(this.searchInput)
    },
  },
}
</script>
<style scoped>
.search {
  height: 100vh;
  width: 100vw;
  text-align: center;
}

.input {
  width: 50%;
}
</style>
