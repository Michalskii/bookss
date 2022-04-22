<template>
<div>
  <v-card>
    <v-card-title>
          <span class="text-h5">tytul</span>
        </v-card-title>
          <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    label="Full name"
                    v-model="author.fullName"
                    required
                    />
                </v-col>

                 <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    label="Year born"
                    v-model="author.yearBorn"
                    required
                  />
                </v-col>


                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    label="ID"
                    v-model="author.id"
                    required
                   />
                </v-col>
              </v-row>
          </v-card-text>   
           <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click=" addNewAuthor(); clearInput()">
              Save
            </v-btn>
          </v-card-actions> 
  </v-card>
            
</div>

</template>
<script>
export default {

    data() {
        return {
     authors: [],
      author: {
           id: '',
           yearBorn:'',
           fullName:''
       },
        }
    },
  
    methods: {
          
          
          addNewAuthor() {
           
           let author = this.author 
           this.$emit('newAuthor', author)

       },
       clearInput() {
          
          this.author = ''
       }


    },
    

}
</script>

<style>

</style>