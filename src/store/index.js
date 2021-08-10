import Vue from 'vue'
import Vuex from 'vuex'
import hotels from '@/data/hotels'

Vue.use(Vuex)

const loadHotels = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(hotels)
    }, 1000)
  })
}

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async loadHotels() {
      try {
        const hotels = await loadHotels()
        return hotels
      } catch (e) {
        console.log(e);
      }
    }
  },
  modules: {}
})
