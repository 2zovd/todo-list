<template>
  <the-header></the-header>
  <base-container>
    <base-card title="Create new task">
      <new-task></new-task>
    </base-card>
    <base-card title="Tasks list">
      <tasks-list></tasks-list>
    </base-card>
  </base-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheHeader from "./components/layout/TheHeader";
import BaseContainer from "./components/UI/BaseContainer";
import BaseCard from "./components/UI/BaseCard";
import NewTask from "./components/todo-list/NewTask";
import TasksList from "./components/todo-list/TasksList";

export default {
  name: "App",
  components: {
    BaseContainer,
    BaseCard,
    NewTask,
    TasksList,
    TheHeader
  },
  computed: {
    tasksList() {
      return this.$store.state.tasks;
    },
    ...mapGetters(["tasks"])
  },
  methods: {
    ...mapActions(["saveTasksToLocalStorage", "getTasksFromLocalStorage"])
  },
  mounted() {
    if (localStorage.getItem("tasks")) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      this.getTasksFromLocalStorage(tasks);
    } else {
      localStorage.setItem("tasks", []);
    }
  }
};
</script>

<style lang="postcss">
body {
  @apply font-sans bg-blue-100;
}
</style>
