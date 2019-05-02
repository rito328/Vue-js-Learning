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

const counter = {
  state: {
    count: 10
  },

  getters: {
    squared: state => state.count * state.count
  },

  mutations: {
    increment (state, amount) {
      state.count += amount
    }
  },

  actions: {
    incrementAsync ({ commit }, payload) {
      // 非同期にデータを取得する
      return getCountNum(payload.type)
          .then(data => {
            commit('increment', {
              amount: data.amount
            })
          })
    }
  },

  modules: {
    childModule: {
      // 入れ子モジュールの定義
    }
  }
}

const store = new Vuex.Store({
  modules: {
    counter
  }

});

// ステートはモジュール名の下に登録される
// `counter`モジュールであれば`store.state.counter`
// eslint-disable-next-line no-console
console.log(store.state.counter.count); // => 10

// ゲッター・ミューテーション・アクションは
// モジュールを使用しない時と同様に登録される
// eslint-disable-next-line no-console
console.log(store.getters.squared); // => 100

store.commit('increment', 5)

store.dispatch('incrementAsync', { type: 'one' })




// --- default app ------
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
