new Vue({
    el: '#app',
    data: {
        health: 100,
        endgame: false,
        pain: false,
        flash_message:{
            start: '<h3 style="color: violet">Cắn con lợn này đi</h3>',
            end: '<h3 style="color: red">Ly heo</h3>'
        },
    },
    methods: {
        bite: function(inc) {
            this.health -= inc;
            this.pain = !this.pain;
            if (this.health <= 0) {
                this.pain = false;
                this.endgame = true;
            }
        },
        reset: function() {
            this.health = 100;
            this.endgame = false;
        }
    },
    computed: {

    },
})