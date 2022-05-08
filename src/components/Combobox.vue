<template>
  <v-row>
    <v-col cols="12">
      <v-autocomplete color="blue"> </v-autocomplete>
    </v-col>
  </v-row>
</template>



<script>
export default {
  props: {
    items: Array,
    label: String,
  },
  data() {
    return {
      select: "",
    };
  },
};
</script>

<style>
</style>