<template>
  <v-app>
    <v-tabs>
      <v-tab to="/search">Search</v-tab>
      <v-tab to="/create">Create</v-tab>
    </v-tabs>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
