   <template>
   
   
   <v-dialog
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
          <!-- <v-card-title>
            <span class="text-h5">Add author</span>
          </v-card-title> -->
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
              @click="dialog = false; addNewAuthor()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
   
</template>
<script>
import AddAuthorDialog from '../components/AddAuthorDialog.vue'

export default {
    
    data() {
        return {
    dialog: false,
    authors: [],
     author: {
           id: '',
           yearBorn:'',
           fullName:''
       },
        }
    },
    components: {
        'AddAuthorDialog' : AddAuthorDialog
    },
    methods: {
          
          
          addNewAuthor() {
           
           let author = this.author 
       
       this.$emit('newAuthor', author)

       },
    },
    

}
</script>

<style>

</style>