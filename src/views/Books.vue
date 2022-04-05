<template>
<div>     
      <v-dialog
        v-model="addAuthor"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
         <v-btn
            color="primary"
            fab
            dark
            v-bind="attrs"
            v-on="on"
            class="ma-4"
          >
             <v-icon dark>
          mdi-account-plus
        </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Add author</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Full name"
                    required
                    v-model='author.fullName'
                  ></v-text-field>
                </v-col>

                 <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Year born"
                    required
                    v-model='author.yearBorn'
                  ></v-text-field>
                </v-col>


                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="ID"
                    required
                    v-model='author.id' ></v-text-field>
                </v-col>
                
                
              </v-row>
            </v-container>
           
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="addAuthor = false; "
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="addAuthor = false; addNewAuthor()"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>



      <v-dialog
        v-model="addGenre"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
         <v-btn
            color="teal"
            fab
            dark
            v-bind="attrs"
            v-on="on"
            class="ma-4"
          >
             <v-icon dark>
          mdi-playlist-plus
        </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Add genre</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Genre"
                    required
                    v-model='genre.name'
                  ></v-text-field>
                </v-col>

               


                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="ID"
                    required
                    v-model='genre.id' ></v-text-field>
                </v-col>
                
                
              </v-row>
            </v-container>
           
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="addGenre = false; "
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="addGenre = false; addNewGenre()"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      

<v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
 <v-data-table
      :headers="headers"
      :items="bookList"
      :search="search"
      :items-per-page="5"
      class="elevation-2"
    ></v-data-table>

<v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
       
       
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Add book
          </v-btn></template>
      
      
        <v-card>
          <v-card-title>
            <span class="text-h5">Add new book</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
              
                <v-col cols="12">
                  <v-text-field
                    label="Title"
                    required
                    v-model="book.title"
                    ref="form"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Book Id"
                    required
                    v-model="book.id"
                    ref="form"
                  ></v-text-field>
                </v-col>


                <v-col cols="12">
                  <v-text-field
                    label="Year released"
                    v-model='book.released'
                    ref='form'
                    required
                  ></v-text-field>
                </v-col>
                
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    :items="authors"
                    label="Author"
                    item-text='fullName'
                    item-value='id'
                    required
                    v-model='book.author'></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >

          
                 <!-- <select v-model='book.genreId'>
                      <option v-for='genre in genres' :value="genre.id">{{genre.name}}</option>
                  </select> -->

        <v-select :items="genres" item-text='name' item-value="id" label="Genre" required  v-model='book.genreId'></v-select>
        <!-- <v-select :items="genres" label="Genre" required  v-model='book.genreId'></v-select> -->
                  </v-col>
              </v-row>  
            </v-container>
           
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false">Close</v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false; addNewBook()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</div>
</template>
<script>
  export default {
    name: 'Books',
    components: {},
    data () {
    return {
       search : '',
       dialog: false,
       bookList: [],
       book: {
           title:'',
           released: '',
           id: '',
           author: '',
           genreId:''
       },
       genre: {
           id:'',
           name:''
       },
       author: {
           id: '',
           yearBorn:'',
           fullName:''
       },
       addAuthor: false,
       addGenre: false,
       genres: [],
       authors: [],
       headers: [
        {
          text: 'Title',
          align: 'start',
          value: 'title',
        },
        { text: 'ID', value: 'id' },
        { text: 'Released', value: 'released' },
        { text: 'Author ID', value: 'author' },
        { text: 'Genre ID', value: 'genreId' },],
      }},
 methods: {

   addNewBook() {
     
     let book = {
         title: this.book.title,
         id: this.book.id,
         released: this.book.released,
         author: this.book.author,
         genreId: this.book.genreId }
      
      this.bookList.push(book);
       
       console.log(this.bookList)
       this.book.title = ''
       this.book.id = ''
       this.book.released =''
       this.book.author = ''
       this.book.genreId = ''
       },
      
      addNewGenre() {
           let genre = {
               name: this.genre.name,
               id: this.genre.id
           }
           this.genres.push(genre)
       },

       addNewAuthor() {
           let author = {
               fullName: this.author.fullName,
               id: this.author.id,
               yearBorn: this.author.yearBorn}
           this.authors.push(author)
       },
    },
  mounted() {
    if (localStorage.bookList) {
      this.bookList = JSON.parse(localStorage.bookList)
    }

   if (localStorage.genres) {
       this.genres = JSON.parse(localStorage.genres)
   }

   if (localStorage.authors) {
       this.authors = JSON.parse(localStorage.authors)
   }

  },
  watch: {
    bookList(newBooks) {
      localStorage.bookList = JSON.stringify(newBooks);
    },
    genres(newGenres) {
        localStorage.genres = JSON.stringify(newGenres)
    },
    authors(newAuthors) {
        localStorage.authors = JSON.stringify(newAuthors)
    }
    
    },}
</script>