<template>
  <div>
    <div v-if="this.bookDetail">
      <v-card-subtitle>Name - {{ name }}</v-card-subtitle>
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
  props: {
    author: {
      type: Object,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    bookDetail: {
      type: Boolean,
      required: false,
    },
    slug: {
      type: String,
      required: false,
    },
  },
  computed: {},
  methods: {},
};
</script>
<style>
</style>


