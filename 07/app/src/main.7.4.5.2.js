import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 例示用に非同期処理を行う関数
// 実際のアプリではサーバからデータを取得する
function getCountNum (type) {
  return new Promise(resolve => {
    // 1秒後にtypeに応じたデータを返す
    setTimeout(() => {
      let amount;
      switch (type) {
        case 'one':
          amount = 1;
          break;
        case 'two':
          amount = 2;
          break;
        case 'ten':
          amount = 10;
          break;
        default:
          amount = 0
      }
      resolve({ amount })
    }, 1000)
  })
}

const store = new Vuex.Store({
  state: {
    count: 10
  },

  mutations: {
    increment (state, payload) {
      state.count = state.count + payload.amount
    }
  },

  // actions オプションでアクションを定義する
  actions: {
    incrementAsync ({ commit }, payload) {
      // 非同期にデータを取得する
      return getCountNum(payload.type)

          .then(data => {
            // レスポンスをログに表示
            // eslint-disable-next-line no-console
            console.log(data);

            // レスポンスをペイロードとして渡したミューテーションを実行する
            commit('increment', {
              amount: data.amount
            })
          })
    }
  }
});


// eslint-disable-next-line no-console
console.log(store.state.count); // => 10

// store.dispatchでアクションをコールする
store.dispatch('incrementAsync', { type: 'one' }).then(() => {

  // アクションの処理が完了した後に実行される
  // eslint-disable-next-line no-console
  console.log(store.state.count); // => 11

})




// --- default app ------
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
