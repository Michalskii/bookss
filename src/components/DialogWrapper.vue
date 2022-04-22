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
           {{title}}
          </v-btn>
        </template>
     <slot></slot>   
      
   
      </v-dialog>
   
</template>
<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Dupa'
    }
  },
    data(){
      return{
        dialog : false,
      }
    },
    methods: {

    }
}

</script>

<style>

</style>