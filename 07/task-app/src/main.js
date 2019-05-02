import Vue from 'vue'
import App from './App.vue' // App.vue の読み込み
import store from './store' // store.js の読み込み

// プロダクションチップ(productionTip)
// productionTip を false にすると、起動時の製品ヒント情報の出力を抑止します。
Vue.config.productionTip = false

new Vue({
  el: '#app',

  // コンポーネントからストアを利用できるようにする
  store,

  render: h => h(App)
})
