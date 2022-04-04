<template>
  <v-app>
    <h1>Books <v-icon large>mdi-book-open-page-variant</v-icon></h1>
    <nav class="nav"><router-link class="navLinks" to="/authors">Authors</router-link>
    <router-link class="navLinks" to="/books">Books</router-link>
    <router-link class="navLinks" to="/genres">Genres</router-link></nav>

    <v-main class="mainSection">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
     
   
 





}
</script>


<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

h1 {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 3em;
  margin-top: 50px;
  
}
.nav {
  margin: auto;
  
  font-family: 'Montserrat', sans-serif;
  
}

.navLinks {
  text-decoration: none;
  padding: 10px;
  font-size: 1.5em;
  
}
.mainSection {
  margin-top: 50px;
}




</style>}