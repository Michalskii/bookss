  <template>
  <v-dialog
    :value="active"
    max-width="600px"
    persistent
    @click:outside="closeDialog"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ title }}</span>
      </v-card-title>
      <slot></slot
    ></v-card>
  </v-dialog>
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

<style></style>
