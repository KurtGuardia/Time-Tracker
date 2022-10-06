<template>
    <div class="
            controller
            bg-gray-light-1
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
        <p>Kurt Guardia</p>
    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    name: "ControllerComponent",
    components: { Button }
}
</script>

<style>

</style>