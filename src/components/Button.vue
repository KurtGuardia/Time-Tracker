<template>
    <button
        :class="backgroundColor"
        class='p-1 px-14 text-gray-light font-semibold rounded-full w-max hover:scale-105 transition-all'
    >{{name}}</button>
</template>

<script>
export default {
    name: "buttonComponent",
    props: {
        name: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default: "default"
        }
    },
    computed: {
        backgroundColor () {
            return this.status === "enter" ? "bg-green" : this.status === "exit" ? "bg-pink" : "bg-gray"
        }
    }
}
</script>