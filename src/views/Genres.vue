<template>
  <div><AddGenreDialog />
  
   <v-data-table
      :headers="headers"
      :items="authorsList"
      :search="search"
      :items-per-page="5"
      class="elevation-2"
     /></div>
</template>

  </div>
</template>

<script>
  
 import AddGenreDialog from '../components/AddGenreDialog.vue'
                                                                                                           
  export default {
    name: 'Genres',
      data() {
      return {
      authorsList: [],
       headers: [
        {
          text: 'Genre',
          align: 'start',
          value: 'genre',
        },
       
        { text: 'Genre ID', value: 'GenreId' },
        ]
      }},

    components: {
      AddGenreDialog
      
    },


  }
</script>