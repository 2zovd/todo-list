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
      const task = state.tasks.find(task => task.id === payload.id)
      // state.tasks[taskIndex] = payload
      Object.assign(task, payload)
    },
    saveTasksToLocalStorage(state) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    getTasksFromLocalStorage(state, payload) {
      state.tasks = payload
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
    },
    saveTasksToLocalStorage(context) {
      context.commit('saveTasksToLocalStorage')
    },
    getTasksFromLocalStorage(context, payload) {
      context.commit('getTasksFromLocalStorage', payload)
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    }
  }
})

export default store