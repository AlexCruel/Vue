let sample = new Vue({
    el: '.sample',
    data: {
        properties: {
            color: 'inherit',
            backgroundColor: 'none'
        },
        height: 0
    },
    computed: {
        minHeight() {
            return {
                minHeight: this.height + 'px'
            };
        }
    }
});