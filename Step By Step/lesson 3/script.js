let sample = new Vue({
    el: '.sample',
    data: {
        name: 'Vue',
        isOk: true,
        stringName: 'My name is Alex'
    },
    methods: {
        sayHello() {
            return 'I am a function!';
        }
    }
});