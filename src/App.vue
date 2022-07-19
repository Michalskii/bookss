<template>
  <v-app>
    <nav class="nav text-center">
      <router-link class="links" to="/books">Books</router-link>
      <router-link class="links" to="/authors">Authors</router-link>
      <router-link class="links" to="/genres">Genres</router-link>

      <!-- <v-btn class="links" to="/books">books</v-btn>
      <v-btn class="links" to="/authors">authors</v-btn>
      <v-btn class="links" to="/genres">genres</v-btn> -->
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

.nav {
  margin-top: 0px;

  font-family: "Montserrat", sans-serif;
  padding: 10px;
  background: #eceff1;
}

.mainSection {
  margin-top: 5px;
}
.links {
  padding: 20px;
  text-decoration: none;
  font-size: 2rem;
  color: #455a64;
}
/* .links.v-application a {
  color: red;
} */
</style>
