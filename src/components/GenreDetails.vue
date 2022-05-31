<template>
  <div>
    <v-card-subtitle>Name - {{ genre.name }}</v-card-subtitle>
    <v-card-text
      ><p>Id - {{ genre.slug }}</p>
    </v-card-text>
  </div>
</template>

<script>
export default {
  // props: ["genre"],
  props: {
    genre: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {},
};
</script>
<style>
</style>