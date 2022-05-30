<template>
  <div>
    <div v-if="this.tescik">
      <v-card-subtitle>Name - {{ author }}</v-card-subtitle>
      <v-card-text>
        <p>Id - {{ slug }}</p>
      </v-card-text>
    </div>
    <div v-else>
      <v-card-subtitle>Name - {{ author.name }}</v-card-subtitle>
      <v-card-text>
        <p>Id - {{ author.slug }}</p>
      </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  props: ["author", "name", "tescik", "authorYear", "slug"],
  computed: {},
  methods: {},
};
</script>
<style>
</style>


