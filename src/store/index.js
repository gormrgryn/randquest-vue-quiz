import { createStore } from 'vuex'

const state = {
  quest: []
}
const mutations = {
  CREATE_QUEST(state, payload) {
    state.quest = [...state.quest, payload]
  }
}
const actions = {
  createQuest({ commit }, payload) {
    commit('CREATE_QUEST', payload)
  }
}
const getters = {
  getQuests (state) {
    return state.quest
  }
}
export default createStore({
  state,
  mutations,
  actions,
  getters
})
