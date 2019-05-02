import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10
  },

  mutations: {
    // ペイロード内の`amount`を使ってステートを更新
    increment (state, payload) {
      state.count = state.count + payload.amount
    }
  }
});


// eslint-disable-next-line no-console
console.log(store.state.count); // => 10

// store.commitの第二引数にペイロードを渡す
store.commit('increment', { amount: 5 })

// eslint-disable-next-line no-console
console.log(store.state.count); // => 15


// --- default app ------
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
