<template>
  <div class="bg-gray-light h-screen flex flex-col">
    <h1 class="text-green h-full">Hello World</h1>
    <Controller />
    <img
      class="self-end m-12 opacity-10 w-4/6"
      :src="require('./assets/sesameLogo.svg')"
      alt="Sesame Logo"
    >
  </div>
</template>

<script>
import Controller from './components/Controller.vue';
export default {
  name: 'App',
  components: {
    Controller
  }
}
</script>
