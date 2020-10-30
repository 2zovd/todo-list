<template>
  <form @submit.prevent="addNewTask">
    <input
      type="text"
      placeholder="Enter your task"
      class="rounded-sm shadow-xs px-4 py-2 border-2 border-gray-400 w-full mb-4 focus:border-blue-400 focus:outline-none"
      :class="!isValidField ? 'border-red-400' : ''"
      v-model="inputValue"
    />
    <p v-if="!isValidField" class="text-red-400 mb-4 -mt-3 ml-1">Please, enter some data</p>
    <base-button type="submit">Create task</base-button>
  </form>
</template>

<script>
import BaseButton from "../UI/BaseButton";
export default {
  components: {
    BaseButton
  },
  data() {
    return {
      inputValue: "",
      isValidField: true
    };
  },
  watch: {
    inputValue: function(value) {
      if (value) this.isValidField = true;
    }
  },
  methods: {
    addNewTask() {
      if (this.inputValue.trim() === "") {
        this.inputValue = "";
        this.isValidField = false;
      } else {
        this.$store.dispatch("addTask", {
          id: new Date().toISOString(),
          title: this.inputValue,
          done: false
        });
        this.$store.dispatch("saveTasksToLocalStorage");
        this.inputValue = "";
      }
    }
  }
};
</script>