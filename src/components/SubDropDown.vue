<template>
    <div class="container flex">
        <div
            class="icon rounded-full border border-1 border-b-gray bg-gray-light-2 font-medium w-8 text-center mr-4">
            S{{account}}
        </div>
        <div class="text leading-4">
            <p class="font-light">
                <span
                    class="font-normal">Sesame{{account}}</span>
                {{firstName}}
                {{lastName}}
            </p>
            <small class="font-light">{{email}}</small>
        </div>
    </div>
</template>

<script>
export default {
    name: "SubDropDownComponent",
    props: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        account: {
            type: Number,
            required: true
        }
    },
}
</script>

<style>

</style>