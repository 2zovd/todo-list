import {
  createStore
} from 'vuex';

const store = createStore({
  state() {
    return {
      tasks: []
    }
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload)
    },
    deleteTask(state, id) {
      const taskIndex = state.tasks.findIndex(task => task.id === id)
      state.tasks.splice(taskIndex, 1)
    },
    markAsDone(state, payload) {
      const taskIndex = state.tasks.findIndex(task => task.id === payload.id)
      state.tasks[taskIndex].done = payload.done
    }
  },
  actions: {
    addTask(context, payload) {
      context.commit('addTask', payload)
    },
    deleteTask(context, payload) {
      context.commit('deleteTask', payload)
    },
    markAsDone(context, payload) {
      context.commit('markAsDone', payload)
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    }
  }
})

export default store