<template>
    <div class="dropdownMenu">
        <ul class="bg-white rounded-xl shadow-md w-max">
            <li
                class="list-item relative h"
                @mouseover="this.showSubDrop = true"
                @mouseleave="this.showSubDrop = false"
            >
                <span class="absolute left-5 top-4 text-xl">
                    &#8249;
                </span>
                Mis cuentas
                <div
                    v-if="showSubDrop"
                    class="dropdownSubMenu absolute top-0 right-64 pr-5"
                >
                    <ul
                        class="bg-white rounded-xl shadow-md w-max ">
                        <li
                            v-for="(account,i ) in this.accounts"
                            :key="i"
                            class="list-item"
                        >
                            <SubDropDown
                                :account="i+1"
                                :firstName="firstName"
                                :lastName="lastName"
                                :email="email"
                            />
                        </li>
                    </ul>
                </div>
            </li>
            <li class="list-item">Vista empleado</li>
            <li class="list-item">Mi perfil</li>
            <li class="list-item">Cerrar sesión</li>
        </ul>
    </div>
</template>

<script>
import SubDropDown from './SubDropDown.vue';
export default {
    name: "DropdownComponent",
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
        }
    },
    data () {
        return {
            showSubDrop: false,
            accounts: 2
        };
    },
    components: { SubDropDown }
}
</script>

<style>
.list-item {
    @apply border-b p-4 w-64 !flex justify-center hover:bg-green-light last:border-b-0
}

.dropdownMenu {
    position: relative;
}

.dropdownMenu:after {
    position: absolute;
    content: '';
    left: 222px;
    top: 28px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid white;
}
</style>