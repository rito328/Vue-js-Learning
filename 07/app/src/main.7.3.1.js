// Section 7.3.1

// Vue Vuex をインポート
import Vue from 'vue'
import Vuex from 'vuex'

// Vue に Vuex を登録
Vue.use(Vuex);

// ストアを作成
const store = new Vuex.Store();

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// eslint-disable-next-line no-console
console.log(store);