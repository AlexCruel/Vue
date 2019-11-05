let sample = new Vue({
    el: '.sample',
    data: {
        color: 'blue',
        height: 100
    },
    methods: {

    },
    computed: {
        circleClasses() {
            return {
                background: this.color,
                height: this.height + 'px'
            };
        }
    }
});