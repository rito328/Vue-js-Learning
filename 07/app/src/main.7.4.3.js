import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10
  },

  // gettersオプションでゲッターを定義する
  getters: {
    // ステートから別の値を計算する
    squared: (state) => state.count * state.count,

    // 他のゲッターから値を使うことも可能
    cubed: (state, getters) => state.count * getters.squared

  }
});

// store.gettersでゲッターを参照する
// eslint-disable-next-line no-console
console.log(store.getters.cubed);
// => 1000





// --- default app ------
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
