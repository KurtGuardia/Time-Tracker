<template>
    <button
        :class="backgroundColor"
        class='text-white p-2 px-10 text-gray-light font-semibold rounded-full w-max hover:scale-105 transition-all'
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
            required: true
        }
    },
    computed: {
        backgroundColor () {
            return this.status === "enter" ? "bg-green" : this.status === "exit" ? "bg-pink" : "bg-gray"
        }
    }
}
</script>