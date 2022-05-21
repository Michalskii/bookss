  <template>
  <div>
    <v-dialog
      :value="active"
      max-width="600px"
      persistent
      @click:outside="closeDialog"
      @close="closeDialog"
    >
      <v-card class="px-4">
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>
        <slot></slot>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog()">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      required: true,
      type: Boolean,
    },
    title: {
      required: true,
      type: String,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>