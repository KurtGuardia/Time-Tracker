<template>
    <div class="timer">
        <span class="hour">{{hours}}</span>
        :
        <span class="minute">{{minutes}}</span>
        :
        <span class="second">{{seconds}}</span>
    </div>
</template>

<script>

export default {
    name: "TimerComponent",
    props: {
        count: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            seconds: 0,
            minutes: 0,
            hours: 0
        }
    },
    methods: {
        start () {
            let [sec, mins, hrs] = [0, 0, 0];
            return setInterval( () => {
                sec++;
                if ( sec == 60 ) {
                    sec = 0;
                    mins++;
                    if ( mins == 60 ) {
                        mins = 0;
                        hrs++;
                    }
                }
                this.hours = hrs < 10 ? "0" + hrs : hrs;
                this.minutes = mins < 10 ? "0" + mins : mins;
                this.seconds = sec < 10 ? "0" + sec : sec;
            }, 1000 );
        },
        pause () {
            clearInterval( this.start )
        }
    },
    watch: {
        count: function ( newVal, oldVal ) {
            newVal ? this.start() : console.error( 'oldVal: ' + oldVal, 'newVal: ' + newVal )
        }
    }
}

</script>

<style>

</style>