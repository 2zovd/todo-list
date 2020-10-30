<template>
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-100" v-model="isDone" />
    <span class="ml-4">
      <span :class="isDone ? 'line-through' : ''">{{ label }}</span>
    </span>
  </label>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isDone: false
    };
  },
  watch: {
    isDone: function(value) {
      this.markDone(value);
    }
  },
  methods: {
    markDone(value) {
      this.$store.dispatch("markAsDone", {
        id: this.id,
        title: this.label,
        done: value
      });
      this.$store.dispatch("saveTasksToLocalStorage");
    }
  },
  mounted() {
    this.isDone = this.done;
  }
};
</script>