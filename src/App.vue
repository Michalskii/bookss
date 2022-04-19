<template>
  <v-app>
    <nav class="nav">
      <router-link class="navLinks" to="/books"
        >Books <v-icon large>mdi-book-open-page-variant</v-icon></router-link
      >
      <router-link class="navLinks" to="/authors"
        >Authors <v-icon large>mdi-account-group</v-icon></router-link
      >
      <router-link class="navLinks" to="/genres"
        >Genres <v-icon large>mdi-format-list-bulleted</v-icon></router-link
      >
    </nav>

    <v-main class="mainSection">
      <router-view />
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

.navLinks {
  text-decoration: none;
  padding: 10px;
  font-size: 3em;
}
.mainSection {
  margin-top: 50px;
}
</style>
