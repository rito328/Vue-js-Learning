// Section 7.4.1

// Vue Vuex をインポート
import Vue from 'vue'
import Vuex from 'vuex'

// Vue に Vuex を登録
Vue.use(Vuex);

// ストアを作成
const store = new Vuex.Store({
  // State
  state: {
    count: 0
  },

  // Mutation
  mutations: {
    increment (state, amount) {
      state.count += amount + 1
    }
  }
});

// State を参照
// eslint-disable-next-line no-console
console.log(store.state.count);

// Mutationを実行し、Stateを更新
store.commit('increment', 1)

// State の更新を確認
// eslint-disable-next-line no-console
console.log(store.state.count);


import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')