<template>
  <section class="create p-8 mt-16">
    <h1 class="create-title text-h3">Create</h1>
    <v-form class="form mx-auto" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="itemCode"
        label="Item code (ex: SN-3450CM)"
        :rules="itemCodeRules"
        :counter="15"
        required
      ></v-text-field>

      <v-text-field
        v-model="denier"
        label="Denier (ex: 4)"
        :rules="rules"
        type="number"
        required
      ></v-text-field>

      <v-text-field
        v-model="cutLength"
        label="Cut length (ex: 51)"
        :rules="rules"
        type="number"
        required
      ></v-text-field>

      <v-select
        v-model="category"
        :items="categories"
        :rules="rules"
        label="Category"
        required
      ></v-select>

      <v-select
        v-model="color"
        :items="colors"
        :rules="rules"
        label="Color"
        required
      ></v-select>

      <v-select
        v-model="whiteness"
        :items="whitenessOptions"
        :rules="rules"
        label="Whiteness"
        required
      ></v-select>

      <v-text-field v-model="feature" label="Feature"></v-text-field>

      <v-btn color="error" class="mr-4 mt-10" @click.stop.prevent="reset">
        Reset
      </v-btn>
      <v-btn color="primary" class="mt-10" :disabled="!valid"> Submit</v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      valid: true,
      itemCodeRules: [
        (v) => !!v || 'Item code is required',
        (v) =>
          (v && v.length <= 15) || 'Item code must be less than 15 characters',
      ],
      rules: [(v) => !!v || 'This is required'],
      itemCode: '',
      denier: '',
      cutLength: '',
      category: '',
      color: '',
      whiteness: '',
      feature: '',
      categories: [
        'LM',
        'CH',
        'Hycare',
        'PLA',
        'BK',
        'RA',
        'Specialty',
        'Others',
      ],
      colors: ['white', 'black', 'blue', 'green', 'purple', 'pink'],
      whitenessOptions: ['semi-dull', 'full-dull', 'null'],
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style scoped>
.create {
  height: 100vh;
  width: 100vw;
  text-align: center;
}

.form {
  width: 50%;
}
</style>
