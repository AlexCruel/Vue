let sample = new Vue({
    el: '.sample',
    data: {
        counter: 0,
        title: 'Счётчик'
    },
    methods: {
        addOne(x, str, event) {
            this.counter += x;
            this.title = str;

            if (x === 5) {
                event.target.style.color = 'blue';
            } else if (x === 10) {
                event.target.style.color = 'red';
            }
        }
    }
});