<template>
  <v-app>
    <nav class="nav">
      <v-btn class="" to="/books">books</v-btn>
      <v-btn to="/authors">authors</v-btn>
      <v-btn to="/genres">genres</v-btn>
    </nav>

    <v-main class="mainSection">
      <keep-alive><router-view /></keep-alive>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

.nav {
  margin: auto;
  margin-top: 100px;
  font-family: "Montserrat", sans-serif;
  border: 1px solid;
  border-radius: 50px;
  padding: 30px;
}

.mainSection {
  margin-top: 50px;
}
</style>
