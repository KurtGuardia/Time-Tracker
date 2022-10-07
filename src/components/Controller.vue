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
        <div class="tracking-wider">4:25:56</div>
        <Button
            name="Enter"
            status="enter"
        />
        <Avatar :status="employee.workStatus" />
        <p class="tracking-widest">{{employee.firstName}}
            {{employee.lastName}}
        </p>
    </div>
</template>

<script>
import Button from './Button.vue';
import Avatar from './Avatar.vue';

export default {
    name: "ControllerComponent",
    props: {
        employee: {
            type: Object,
            required: true
        }
    },
    components: { Button, Avatar }
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
</style>