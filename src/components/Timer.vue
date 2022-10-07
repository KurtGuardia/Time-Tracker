<template>
    <div class="timer">
        {{hours}}
        :
        {{minutes}}
        :
        {{seconds}}
        <small v-if="this.timeWorked()[5]">/
            {{this.timeWorked()[3] }}
            :
            {{this.timeWorked()[4] }}
            :
            {{this.timeWorked()[5] }}
        </small>

    </div>
</template>

<script>

export default {
    name: "TimerComponent",
    props: {
        count: {
            type: Boolean,
            default: false
        },
        pause: {
            type: Boolean,
            default: false
        },
        entryHour: {
            type: String,
            default: ''
        },
        exitHour: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            sec: '00',
            min: '00',
            hrs: 0
        }
    },
    methods: {
        timer ( arg ) {
            let [sec, mins, hrs] = [0, 0, 0];

            arg ? clearInterval( init ) : null
            const init = setInterval( () => {
                sec++;
                if ( sec == 60 ) {
                    sec = 0;
                    mins++;
                    if ( mins == 60 ) {
                        mins = 0;
                        hrs++;
                    }
                }
                this.hrs = hrs;
                this.min = mins < 10 ? "0" + mins : mins;
                this.sec = sec < 10 ? "0" + sec : sec;
            }, 1000 )
        },
        timeWorked () {
            // For current woking hours
            const start = new Date( this.entryHour ).getTime()
            const end = new Date( this.exitHour ).getTime()
            let diff = end - start
            const hours = parseInt( diff / 1000 / 60 / 60 );
            diff -= hours * 60 * 60 * 1000
            const minutes = parseInt( diff / 1000 / 60 );
            diff -= minutes * 60 * 1000
            const seconds = parseInt( diff / 1000 );

            // For remaning working hours
            const now = new Date().getTime()
            let timeLeft = start + ( 8 * 3600000 ) - now
            const hoursLeft = parseInt( timeLeft / 1000 / 60 / 60 );
            timeLeft -= hoursLeft * 60 * 60 * 1000
            const minutesLeft = parseInt( timeLeft / 1000 / 60 );
            timeLeft -= minutesLeft * 60 * 1000
            const secondsLeft = parseInt( timeLeft / 1000 );
            console.log( secondsLeft )

            return [hours, minutes, seconds, hoursLeft, minutesLeft, secondsLeft]
        }
    },
    computed: {
        hours () {
            return this.timeWorked()[0] ? this.timeWorked()[0] : this.hrs
        },
        minutes () {
            return this.timeWorked()[1] ? this.timeWorked()[1] : this.min
        },
        seconds () {
            return this.timeWorked()[2] ? this.timeWorked()[2] < 10 ? "0" + this.timeWorked()[2] : this.timeWorked()[2] : this.sec
        }
    },
    watch: {
        count: function ( newVal, oldVal ) {
            newVal ? this.timer( oldVal ) : console.error( 'oldVal: ' + oldVal, 'newVal: ' + newVal )
        },
        pause: function ( newVal, oldval ) {
            newVal === true ? this.timer( newVal ) : this.timer( oldval )
        },
        exitHour: function () {
            this.timeWorked()
        }
    }
}

</script>

<style>

</style>