let sample = new Vue({
    el: '.sample',
    data: {
        isActive: false,
        color: 'blue'
    },
    methods: {

    },
    computed: {
        getCssClasses() {
            return {
                red: this.isActive,
                green: !this.isActive
            };
        }
    }
});