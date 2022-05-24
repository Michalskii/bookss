<template>
  <div>
    <v-card-subtitle>Name - {{ author.fullName }}</v-card-subtitle>
    <v-card-text
      ><p>Id - {{ author.id }}</p>
      <p>Born - {{ author.yearBorn }}</p>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ["author", "name"],
  computed: {},
  methods: {},
};
</script>
<style>
</style>


