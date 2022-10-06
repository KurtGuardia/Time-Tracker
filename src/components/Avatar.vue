<template>
    <div class="icon relative">
        <img
            class="rounded-full h-12"
            :src="require('../assets/icon.png')"
            alt="user avatar"
        >
        <span
            class="bg-red h-3 w-3 rounded-full absolute top-1.5 -right-1"
        ></span>
    </div>
</template>

<script>
export default {
    name: "AvatarComponent",
    props: {
        status: {
            type: String,
            required: true
        }
    }
}
</script>
