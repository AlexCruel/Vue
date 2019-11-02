let sample = new Vue({
    el: '.sample',
    data: {
        counter: 0,
        counter2: 0
    },
    methods: {
        addOne() {
            this.counter += 1;
        },
        onHover(event) {
            event.target.style.color = 'red';
        }
    }
});