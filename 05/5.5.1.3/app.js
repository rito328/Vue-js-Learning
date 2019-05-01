// ミックスインの定義
var Sharable = {
    data: function () {
        return {
            _isProcessing: false
        }
    },
    methods: {
        share: function () {
            if (this._isProcessing) {
                return
            }
            if (!window.confirm('シェアしますか？')) {
                return
            }
            this._isProcessing = true
            // 実際はここでSNSのSDKのAPIを呼び出す
            setTimeout(() => {
                window.alert('シェアしました')
                this._isProcessing = false
            }, 300)
        }
    },
    created: function () {
        console.log('Sharableミックスインのフックが呼ばれました');
    }
}

var IconShareButton = {
    mixins: [Sharable],
    template: `
        <button @click="share"><i class="fas fa-share-square"></i></button>
    `,
    created: function () {
        console.log('IconShareButtonのフックが呼ばれました');
    }
};

var TextShareButton = {
    mixins: [Sharable],
    template: `
        <button @click="share">{{ buttonLabel }}</button>
    `,
    data: function () {
        return {
            buttonLabel: 'シェアする',
        }
    },
    created: function () {
        console.log('TextShareButtonのフックが呼ばれました');
    }
};

new Vue({
    el: '#app',
    components: {
        IconShareButton,
        TextShareButton
    }
});