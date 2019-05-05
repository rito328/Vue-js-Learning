# Vuex - Store
  
# ストア
- 主にアプリケーションの状態を保持する役割を担う
- 状態管理に関する機能を盛り込んでいて、Vuexの根幹
  
## ストアの作成と代入
```
const store = new Vuex.Store({/* オプション */})
```

```$xslt
// Vue Vuex をインポート
import Vue from 'vue'
import Vuex from 'vuex'

// Vue に Vuex を登録
Vue.use(Vuex);

// ストアを作成
const store = new Vuex.Store();
```
```$xslt
<script src="https://unpkg.com/vue@latest"></script>
<script src="https://unpkg.com/vuex@latest"></script>

<script>
  // グローバル（window）にVuexが読み込まれている
  const store = new Vuex.Store();

  console.log(store);
</script>

```
Vuexは「信頼できる唯一の情報源」を前提に実装されている＝アプリケーション内で常に１つのストアのみが存在するようにする


# ストアの構成要素
* アプリケーションのステート（State）
* ステートの一部や、ステートから計算された値を返すゲッター（Getter）
* ステートを更新するミューテーション（Mutation）
* 主にAjaxリクエストのような非同期処理や、LocalStorageへの読み書きのような外部APIとのやりとりを行うアクション（Action）

「ステート」「ミューテーション」=> 状態・更新処理に対応  

Vuexにはビューに対応する概念はなく、Vue.jsのコンポーネントがその役割を担う  

# Vurex と Vue のデータフロー
```$xslt
  [ Vue.js ]       ￤          [ Vuex ]
                   ￤
                   ￤
        ┌──────────￤──> [ Action ] ──> [Mutation]
        │          ￤                       │
[ コンポーネント ]    ￤                       │
        ↑          ￤                       ↓
        └──────────￤── [ Getter ] <─── [ State ]
                   ￤
                   ￤
                   ￤

```

規模の大きいアプリケーションを作成する際には、上記４つの構成要素をモジュール（Module）単位で分割して見通しを良くする  

アプリケーションの状態を全て１つの場所においてしまうと逆に管理が大変になるのでは？  

＝＞モジュールを使う事で、信頼できる唯一の情報源を守りながら、状態やそれに関わる更新・取得のロジックを複数の単位に分割し、管理をシンプルに行える 

# ストアの作成
```$xslt
// Vue Vuex をインポート
import Vue from 'vue'
import Vuex from 'vuex'

// Vue に Vuex を登録
Vue.use(Vuex);

// ストアを作成
const store = new Vuex.Store({
  // State
  state: {
    count: 0
  },

  // Mutation
  mutations: {
    increment (state, amount) {
      state.count += amount + 1
    }
  }
});

// State を参照
// eslint-disable-next-line no-console
console.log(store.state.count);

// Mutationを実行し、Stateを更新
store.commit('increment', 1)

// State の更新を確認
// eslint-disable-next-line no-console
console.log(store.state.count);
```
ストア生成時にはいくつかのオプションを渡すことができる
* state
    * 「ステート」を定義する為のオプション
* getters
    * 「ゲッター」を定義する為のオプション
* mutations
    * 「ミューテーション」を定義する為のオプション
* actions
    * 「アクション」を定義する為のオプション
etc…  


* ストアは、アプリケーションの状態をステートとして表し、基本的にはそのステートの取得（ゲッター）と更新（ミューテーション）を中心に考えて実装していく
* 外部ストレージへのアクセスやAPI通信など、ゲッターとミューテーションだけではカバーできないその他の処理をアクションとして実装する

# ストアのモジュールの分割
* モジュールはオブジェクトとして定義し、new Vuex.Store() の mudules オプションに渡す

## namespacedオプションによる名前空間
|分類 |namespacedなし |namespacedあり |
|---|---|---|
|ステートvalue |store.state.example.value |store.state.example.value |
|ゲッターupper |store.getters.upper |store.getters[‘example/upper’] |
|ミューテーションupdate |store.commit(‘update’) |store.commit(‘example/update’) |
|アクションupdate |store.dispatch(‘update’) |store.dispatch(‘example/update’) |

### namespaced: true を指定したモジュール内
- ゲッターへのアクセスやミューテーション、アクションの呼び出しはすべてモジュールの名前空間に対して行われる
- 同一モジュールのものを利用する時には名前空間の文字列を付与する必要は無い
- グローバルな名前空間のものを利用する場合
  - ゲッター
    - 第三引数
      - rootState
    - 第四引数
      - rootGetters
  - アクション
    - コンテキストに rootState / rootGetters が渡される
  - commit / dispatch の第三引数に root: true オプションを渡すことでグローバルなアクション・ミューテーションを呼び出せる

# VuexストアとVueコンポーネント間の通信

### コンポーネントからストアにアクセスする
- コンポーネントからストアを使う為に、ルートのVueインスタンス生成時にストアを渡す
```$xslt
new Vue({
  el: '#app',
  store // ストアをコンポーネントに渡す
})
```
### this.$store によるアクセス
- this.$storeにはルートのコンポーネントのstoreオプションに渡されたストアのインスタンスが入っており、ステートの取得や、アクション、ミューテーションの実行などを直接行う事ができる

### ヘルパー関数によるアクセス
- コンポーネントからストアを使うために以下ヘルパー関数が用意されている
  - mapState
  - mapGetters
  - mapMutaions
  - mapActions
- これらのヘルパー関数に配列を渡す事で、ストア上のステートやミューテーションをそのままの名前でコンポーネントに結び付けられる
- 名前の変更も可能

## ストアにアクセスするコンポーネントを必要最小限にする
- ストアとコンポーネントのつながりを必要最小限に保つ事で、変更に強いアプリケーションが作れる
- ストアと通信することのできるコンポーネントを制限する為の規約
  - 表示コンポーネントとコンテナコンポーネント（Presentational and Container Components）
  - Atomic Design

## 表示コンポーネントとコンテナコンポーネント
* Reduxの作者 Dan Abramov氏が提唱している、Reactコンポーネントの分類パターン
* 「表示コンポーネント」は見た目を実現するためのもので、ストアへのアクセスはせず、外部のAPIリクエストも持たない
* 「コンテナコンポーネント」は動作にフォーカスしたもので、ストアに対してアクションを発行したり、データをストアから取得したできる
* ストアのアクセスはコンテナコンポーネントに制限される
* 表示コンポーネントはイベントをコンテナコンポーネントに伝えたり、ストアからのデータをコンテナコンポーネント経由でpropsから受け取る事しか行わない
* ストアとコンポーネントの繫がりを制限する事に加え、表示コンポーネントの再利用性が高くなる

## Atomic Designによるコンポーネントとストアの関係の整理
* Atomic Designの分類をコンポーネントに適用し、特定の種類のコンポーネントのみがストアを利用できるという規約を定める手法
* UIを以下５つの段階に分けて構築する
    * Atoms
    * Molecules
    * Organisms
    * Templates
    * Pages
* 大規模になるほどAtomic Designによる分類の方が適している


# VuexとVue Routerの連携
- vuex-router-sync でルーティングのデータをストア上に同期させる

```$xslt
npm install vuex-router-sync
npm install vue-router
npm install vuex
```

```$xslt
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
```
* ゲッターやアクション内からは、rootState経由でルーティングのデータを取得する


