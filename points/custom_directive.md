# カスタムディレクティブ
ディレクティブは、内部で与えられたデータに応じてDOM操作を行う  

例）v-show => 値の真偽値に応じてDOM要素のstyleの　displayプロパティの値を変更する

＝＞ビルトインディレクティブだけに留まらない開発者のニーズに応じた独自のディレクティブ＝カスタムディレクティブ

## グローバルディレクティブ
- アプリケーション全体、任意の要素で利用できる  
- 一般的に、ディレクティブは特定のコンポーネントに依存しない汎用的な機能を持つ場合が多い。大抵のディレクティブはグローバルとして定義すれば良い。

## ローカルディレクティブ
- そのディレクティブを登録したコンポーネント内のテンプレートでのみ使用可能
- あるコンポーネントでのみ使用する必要のあるカスタムディレクティブがある場合に使用する  

例）１つのコンポーネントだけで動作するドロップダウンの選択リスト  
例）ブログエントリのタグ付けのUI  