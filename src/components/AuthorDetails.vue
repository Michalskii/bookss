<template>
  <div>
    <div v-if="this.tescik">
      <v-card-subtitle>Name - {{ this.name }}</v-card-subtitle>
      <v-card-text>
        <p>Id - {{ this.author }}</p>
        <p>Born - {{ this.authorYear }}</p>
      </v-card-text>
    </div>
    <div v-else>
      <v-card-subtitle>Name - {{ author.name }}</v-card-subtitle>
      <v-card-text>
        <p>Id - {{ author.slug }}</p>
        <p>Born - {{ author.yearBorn }}</p>
      </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  props: ["author", "name", "tescik", "authorYear"],
  computed: {},
  methods: {},
};
</script>
<style>
</style>


