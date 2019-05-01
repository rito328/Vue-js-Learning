/*
var MyButton = {
    props: ['href', 'tag'],
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
    render: function (createElement) {
        return createElement('my-button', {
            attrs: {
                href: this.url
            },
            props: {
                tag: 'a'
            }
        })
    },
    components: {
        MyButton: MyButton
    }
})
*/

new Vue({
    el: '#app',
    data: function () {
        return {
            counter: 0
        }
    },
    render: function (createElement) {
        return createElement(
            'div',
            [
                createElement(
                    'button',
                    {
                        on: { click: () => this.counter += 1 }
                    },
                    'クリックでカウントアップ'
                ),
                createElement(
                    'p',
                    [
                        'クリックされた回数: ',
                        createElement(
                            'b',
                            this.counter + '回'
                        )
                    ]
                )
            ]
        )
    }
})