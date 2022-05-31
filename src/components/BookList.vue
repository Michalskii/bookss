  <template>
  <v-dialog
    :value="active"
    max-width="600px"
    persistent
    @click:outside="closeDialog"
  >
    <v-card>
      <v-data-table
        :headers="headers"
        :items="books"
        :items-per-page="5"
        class="elevation-2"
    /></v-card>
    <v-btn @click="closeDialog">Close</v-btn>
  </v-dialog>
</template>
<script>
export default {
  props: {
    active: {
      required: true,
      type: Boolean,
    },
    books: {
      type: Array,
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Book",
          align: "start",
          value: "title",
        },

        { text: "Genre ID", value: "slug" },
        { text: "Genre", value: "genre" },
      ],
    };
  },

  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>