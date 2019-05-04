import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 状態`Auth`と状態`Board`をVuexのstateで一元管理できるように定義する

const state = {
  // 状態`Auth`
  auth: {
    // `token`は nullで初期化
    token: null,
    // 'userId'は nullで初期化
    userId: null
  },
  // 状態`Board`
  board: {
    // 'lists'は空配列で初期化
    lists: []
  }
}

export default new Vuex.Store({
  // 定義したstateを`state`オプションに指定
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
