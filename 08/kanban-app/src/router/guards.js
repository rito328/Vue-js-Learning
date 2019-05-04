import store from '../store'

// ログイン済みかどうかをチェックしてページ遷移を防ぐナビゲーションガード
// authorizeToken関数で認証済みかどうかを判断して処理を切り替える
export const authorizeToken = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // マッチしたルートにおいて、メタフィールドに`requiresAuth`が付与されている場合は
    // ログインした際に付与される認証トークンがあるかどうかチェックする
    // 注意:
    // このアプリケーションでは簡略化のため`auth.token`があるかどうかのみで
    // ログイン済みであるかどうかチェックしているが、
    // 本来ならば付与された認証トークンをバックエンドのAPI経由などで検証すべき
    if (!store.state.auth || !store.state.auth.token) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
}
