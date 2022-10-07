<template>
    <div class="
            controller
            bg-gray-light-1
            hover:bg-gray-light-2
            transition-all
            rounded-full
            m-20 mx-auto
            p-3 px-8
            flex gap-8 items-center
            w-max
        ">
        <Timer
            :pause="this.pause"
            :count="this.count"
            :entryHour="entryHour"
            :exitHour="exitHour"
        />
        <Button
            v-if="workStatusUpdated === 'offline'"
            @click="this.postIn"
            name="Entrar"
            status="enter"
        />
        <Button
            v-if="workStatusUpdated === 'online'"
            @click="this.pause = true"
            name="Pausar"
            :class="{disabled: this.pause}"
        />
        <Button
            v-if="workStatusUpdated === 'online'"
            @click="this.postOut"
            name="Salir"
            status="exit"
        />
        <Avatar :status="workStatusUpdated" />
        <div
            class="dropdown group flex items-center gap-3 relative"
            @mouseover="this.showDropdown = true"
            @mouseleave="this.showDropdown = false"
        >
            <p class="tracking-widest">{{firstName}}
                {{lastName}}
            </p>
            <span class="rotate-90 text-gray text-2xl">
                &#8250;
            </span>
            <Dropdown
                v-if="showDropdown"
                class="absolute top-6 -right-20 p-9"
                :firstName="firstName"
                :lastName="lastName"
                :email="employee.email"
            />
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';
import Avatar from './Avatar.vue';
import Timer from './Timer.vue';
import axios from 'axios';
import Dropdown from './Dropdown.vue';

export default {
    name: "ControllerComponent",
    props: {
        employee: {
            type: Object,
            required: true
        }
    },
    components: { Button, Avatar, Timer, Dropdown },
    data () {
        return {
            count: false,
            entryHour: "",
            exitHour: "",
            workStatus: null,
            pause: false,
            disabled: false,
            showDropdown: false
        }
    },
    methods: {
        postIn () {
            this.count = true
            axios.post( 'https://api-test.sesametime.com/schedule/v1/work-entries/clock-in', {
                "employeeId": this.employee.id,
                "workEntryIn": {
                    "coordinates": {
                        "latitude": 39.9810198,
                        "longitude": -0.0292415
                    }
                }
            }, {
                headers: {
                    "Authorization": "Bearer " + `${process.env.VUE_APP_BEARER_TOKEN}`
                }
            } ).then( response => { this.entryHour = response.data.data.workEntryIn.date; this.workStatus = response.data.data.employee.workStatus } )
        },
        postOut () {
            axios.post( 'https://api-test.sesametime.com/schedule/v1/work-entries/clock-out', {
                "employeeId": this.employee.id,
                "workEntryIn": {
                    "coordinates": {
                        "latitude": 39.9810198,
                        "longitude": -0.0292415
                    }
                }
            }, {
                headers: {
                    "Authorization": "Bearer " + `${process.env.VUE_APP_BEARER_TOKEN}`
                }
            } ).then( response => { this.exitHour = response.data.data.workEntryOut.date; this.workStatus = response.data.data.employee.workStatus } )
        }
    },
    computed: {
        firstName () {
            return this.employee.firstName
        },
        lastName () {
            return this.employee.lastName
        },
        workStatusUpdated () {
            return this.workStatus || this.employee.workStatus
        },
    }
}
</script>

<style>
.controller .avatar-icon {
    border-left: 2px solid #afafaf;
    padding-left: 1.5rem;
}

.controller:hover .avatar-icon {
    border-left: 2px solid #bfbfbf;
}

.controller .disabled {
    pointer-events: none;
    filter: brightness(0.5);
}

.controller .dropdown {
    border-bottom: 2px dotted #afafaf;
}
</style>