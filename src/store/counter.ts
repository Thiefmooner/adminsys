import { defineStore } from 'pinia'
const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    changeCounterAction(encounter: number) {
      this.counter = encounter
    }
  }
})

export default useCounterStore
