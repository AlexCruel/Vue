let sample = new Vue({
    el: '.sample',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        handleMouseMove(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});