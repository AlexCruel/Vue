let sample = new Vue({
    el: '.sample',
    data: {
        formSubmited: false,
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        guests: []
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    },
    methods: {
        addGuest() {
            this.guests.push('');
        },
        deleteGuest(index) {
            this.guests.splice(index, 1);
        }
    }
});