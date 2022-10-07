<template>
    <div class="avatar-icon relative">
        <img
            class="rounded-full h-12"
            :src="require('../assets/icon.png')"
            alt="user avatar"
        >
        <span
            :class="status === 'offline' ? 'bg-red' : 'bg-green'"
            class="h-3.5 w-3.5 rounded-full absolute top-1.5 -right-1"
        ></span>
    </div>
</template>

<script>
export default {
    name: "AvatarComponent",
    props: {
        status: {
            type: String,
            default: "pause"
        }
    }
}
</script>
