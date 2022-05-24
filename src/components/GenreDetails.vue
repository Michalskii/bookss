<template>
  <div>
    <v-card-subtitle>Name - {{ genre.name }}</v-card-subtitle>
    <v-card-text
      ><p>Id - {{ genre.id }}</p>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ["genre"],
  computed: {},
  methods: {},
};
</script>
<style>
</style>