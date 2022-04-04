<template>
  <section class="search p-8 mt-16">
    <h1 class="search-title text-h3">Search</h1>
    <v-text-field
      class="input mx-auto my-10"
      label="Type item code"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <div class="my-2">
      <v-btn color="primary" dark> search </v-btn>
    </div>
  </section>
</template>

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
