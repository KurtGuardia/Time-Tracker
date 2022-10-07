<template>
    <div class="dropdownMenu">
        <ul class="bg-white rounded-xl shadow-md w-max">
            <li class="list-item relative h" 
            @mouseover="this.showSubDrop = true"
            @mouseleave="this.showSubDrop = false" >
                <span class="absolute left-5 top-4 text-xl">
                    &#8249;
                </span>
                Mis cuentas
                <div v-if="showSubDrop" class="dropdownSubMenu absolute top-0 right-64 pr-5">
                    <ul class="bg-white rounded-xl shadow-md w-max ">
                        <li class="list-item">1</li>
                        <li class="list-item">2</li>
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
export default {
    name: "DropdownComponent",
    data () {
        return {
            showSubDrop: false
        }
    },
}
</script>

<style>
.list-item {
    @apply  border-b p-5 w-64 !flex justify-center hover:bg-green-light last:border-b-0
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