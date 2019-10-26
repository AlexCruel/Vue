let sample = new Vue({
    el: '.sample',
    data: {
        phone: ''
    },
    beforeCreate() {
        console.log('bc');
    },
    created() {
        console.log('c');
    },
    beforeMount() {
        console.log('bm');
    },
    mounted() {
        console.log('m');
    },
    beforeUpdate() {
        let pattern = /^[0-9]*$/;
        let pattern2 = /[^0-9]/g;

        if (!pattern.test(this.phone)) {
            this.phone = this.phone.replace(pattern2, '');
        }
    },
    updated() {
        console.log('u');
    }
});