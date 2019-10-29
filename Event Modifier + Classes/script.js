let sample = new Vue({
    el: '.sample',
    data: {
        divClass: '',
        flags: {
            'table-bordered': false,
            'table-hover': false,
            'table-some': false
        }
    },
    computed: {
        divClassName() {
            return 'alert-' + this.divClass;
        }
    }
});