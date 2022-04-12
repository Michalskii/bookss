   

<template>
   <h1>Add genre dialog component</h1> 
   
 
</template>
<script>
import AddGenreDialog from '../components/AddGenreDialog.vue'

export default {
    data() {
        return {
    dialog: false
        }
    },
    components: {
        'AddGenreDialog' : AddGenreDialog
    }

}
</script>

<style>

</style>