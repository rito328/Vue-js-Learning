import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10
  },

  // mutationsオプションでミューテーションを定義する
  mutations: {
    // `increment`ミューテーションを定義
    increment (state) {
      state.count = state.count + 1
    }
  }
});


// eslint-disable-next-line no-console
console.log(store.state.count); // => 10

// store.commitでincrementミューテーションをコールする
store.commit('increment')

// eslint-disable-next-line no-console
console.log(store.state.count); // => 11


// --- default app ------
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
