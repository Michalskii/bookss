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
        
        <slot name ="card"></slot>
    
      </v-dialog>
   
</template>
<script>

export default {
    
data() {
        return {
    dialog: false, 
        }
}}

</script>

<style>

</style>