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
         
          <slot name="title"></slot>
          <v-card-text>
            <v-container>
              
            </v-container>
           
          </v-card-text>
         
         
        
        </v-card>
      </v-dialog>
   
</template>
<script>

export default {
    

    
}
</script>

<style>

</style>