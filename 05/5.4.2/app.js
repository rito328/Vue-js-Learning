var MyButton = {
    props: ['href', 'tag'],
    /*
    template: `
        <a v-if="(!tag && href) || tag === 'a'" :href="href || '#'">
            <slot></slot>
        </a>
        <span v-else-if="tag === 'span'">
            <slot></slot>
        </span>
        <button v-else>
            <slot></slot>
        </button>
    `,
    */
    render: function (createElement) {
        var tag = this.tag || (this.href ? 'a' : 'button')

        return createElement(tag, {
            attrs: {
                href: this.href || '#'
            }
        }, this.$slots.default)
    }
}

new Vue({
    el: '#app',
    components: {
        MyButton: MyButton
    }
})


/*****************
 * createElement
 *****************/
/*
createElement(
  [第一引数] タグ名・コンポーネントオプション・もしくは非同期にそれらを解決する関数,
  [第二引数] オプション,
  [第三引数] 子ノード
)

[第一引数]
要素名として "h1" といった文字列を指定すれば、h1要素が作成される
 */