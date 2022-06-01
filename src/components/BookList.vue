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
        @click:row="showDetails"
        :items-per-page="5"
        class="elevation-2"
        :loading="loading"
    /></v-card>
    <v-btn @click="closeDialog">Close</v-btn>
    <details-wrapper
      v-if="DetailsWrapper"
      :active="DetailsWrapper"
      title="Book details"
      @close="closeDetailsWrapper"
    >
      <books-details :book="item"> </books-details>
    </details-wrapper>
  </v-dialog>
</template>
<script>
import DetailsWrapper from "../components/DetailsWrapper.vue";
import BooksDetails from "../components/BooksDetails.vue";
export default {
  components: {
    DetailsWrapper,
    BooksDetails,
  },
  props: {
    active: {
      required: true,
      type: Boolean,
    },
    books: {
      type: Array,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      DetailsWrapper: false,

      headers: [
        {
          text: "Book",
          align: "start",
          value: "title",
        },

        { text: "Genre ID", value: "slug" },
        { text: "Author", value: "author" },
        { text: "Genre", value: "genre" },
      ],
    };
  },

  methods: {
    closeDialog() {
      this.$emit("close");
    },
    showDetails(item) {
      this.item = item;
      this.DetailsWrapper = true;
      console.log(this.item);
    },
    closeDetailsWrapper() {
      this.DetailsWrapper = false;
    },
  },
};
</script>

<style></style>