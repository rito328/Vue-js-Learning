// Vue / Vue Router / Vuex をインポートする
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// vuex-router-sync の sync関数をインポートする
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)
Vue.use(Vuex);

// ルーターを生成
const router = new VueRouter({
  routes: [
      // ルーティングの定義
  ]
})

// ストアを生成
const store = new Vuex.Store({
  // ストアの定義
})

// ルーターとストアを同期する
sync(store, router)

// store.state.route 以下にルーティングのデータが入る
// eslint-disable-next-line no-console
console.log(store.state.route);





// --- default app ------
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
