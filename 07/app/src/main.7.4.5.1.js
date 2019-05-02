import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10
  },

  mutations: {
    increment (state) {
      state.count = state.count + 1
    }
  },

  // actions オプションでアクションを定義する
  actions: {
    incrementAction (ctx) {
      // increment ミューテーションを実行する
      ctx.commit('increment')
    }
  }
});


// eslint-disable-next-line no-console
console.log(store.state.count); // => 10

// store.dispatchでアクションをコールする
store.dispatch('incrementAction')

// eslint-disable-next-line no-console
console.log(store.state.count); // => 11


// --- default app ------
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
