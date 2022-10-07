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
        <Timer :count="count" />
        {{employee.workStatus}}
        <Button
            v-if="workStatusUpdated === 'offline'"
            @click="this.postIn"
            name="Entrar"
            status="enter"
        />
        <Button
            v-if="workStatusUpdated === 'online'"
            name="Pausar"
        />
        <Button
            v-if="workStatusUpdated === 'online'"
            name="Salir"
            status="exit"
        />
        <Avatar :status="workStatusUpdated" />
        <p class="tracking-widest">{{firstName}}
            {{lastName}}
        </p>
        <span class="rotate-90 text-gray text-2xl">
            ></span>
    </div>
</template>

<script>
import Button from './Button.vue';
import Avatar from './Avatar.vue';
import Timer from './Timer.vue';
import axios from 'axios';

export default {
    name: "ControllerComponent",
    props: {
        employee: {
            type: Object,
            required: true
        }
    },
    components: { Button, Avatar, Timer },
    data () {
        return {
            count: false,
            enterHour: "",
            workStatus: null
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
                    "Authorization": "Bearer 16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f"
                }
            } ).then( response => { this.enterHour = response.data.data.workEntryIn.date; this.workStatus = response.data.data.employee.workStatus } )
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

.dropdown-arrow {
    height: 0;
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #333;
    position: relative;
    top: 45px;
    left: 350px;
}
</style>