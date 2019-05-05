# 単一ファイルコンポーネント（Single File Components）
- Vue.jsのコンポーネントを単独のファイルとして作成する機能
- .vue拡張子
- 略して　SFC / sfc と呼ばれる
- Vueコンポーネント（Vue Components）も同義

## templateブロック
- `<template>`
- テンプレートを書き込むブロック
- コンポーネントにおいてHTMLのようなUIのセマンティックな構造をテンプレートとして書き込めるブロック
- SFCには最大１つの<template>ブロックを含められる
- 設定すればPug（https://pugjs.org）も使用可能

## scriptブロック
- `<script>`
- コンポーネントにおいてUIの振る舞いをスクリプトで制御するブロック要素
- SFCには最大１つのscriptブロックを含められる

## styleブロック
- `<style>`
- コンポーネントにおいてUIの見た目を制御する要素
- SFCには複数のstyleブロックを含められる
- スコープ付きスタイルが便利
- グローバルスタイルは最上部のコンポーネントで定義し、管理する