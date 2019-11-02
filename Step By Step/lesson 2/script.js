let sample = new Vue({
    el: '.sample',
    data: {
        name: 'Vue'
    },
    methods: {
        changeName(event) {
            this.name = event.target.value;
        }
    }
});