import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  // Stateオプションでステートの初期値を指定する
  state: {
    count: 10
  }
});

// store.stateでステートを参照する
// eslint-disable-next-line no-console
console.log(store.state.count);
// => 10





// --- default app ------
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
