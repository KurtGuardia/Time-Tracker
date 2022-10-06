<template>
    <div class="
            controller
            bg-gray-light-1
            hover:bg-gray-light-2
            transition-all
            rounded-full
            p-3 px-8
            flex gap-8 items-center
            w-max
        ">
        <div>4:25:56</div>
        <Button
            name="Enter"
            status="enter"
        />
        <span>&#124;</span>
        <Avatar status="online" />
        <p>Kurt Guardia</p>
    </div>
</template>

<script>
import Button from './Button.vue';
import Avatar from './Avatar.vue';
export default {
    name: "ControllerComponent",
    components: { Button, Avatar }
}
</script>

<style>

</style>