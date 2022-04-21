<template>
<DialogWrapper title="Add new author">
   
   <v-card slot="card">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    label="Full name"
                    required
                    v-model='author.fullName'/>
                </v-col>

                 <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    label="Year born"
                    required
                    v-model='author.yearBorn'/>
                </v-col>


                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    label="ID"
                    required
                    v-model='author.id'  />
                </v-col>
                
                
              </v-row>
            </v-container>
           
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


   </DialogWrapper>
   <!-- <v-dialog
        v-model="dialog"
        persistent
        max-width="600px">
        
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on">
            Add new author
          </v-btn>
        </template>
        
        
     <v-card>
         
          <slot name="title"></slot>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    label="Full name"
                    required
                    v-model='author.fullName'/>
                </v-col>

                 <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    label="Year born"
                    required
                    v-model='author.yearBorn'/>
                </v-col>


                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    label="ID"
                    required
                    v-model='author.id'  />
                </v-col>
                
                
              </v-row>
            </v-container>
           
          </v-card-text>
         
         
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false; addNewAuthor(); clearInput()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    -->
</template>
<script>
import DialogWrapper from '../components/DialogWrapper.vue'

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
     components: {
        'DialogWrapper' : DialogWrapper
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