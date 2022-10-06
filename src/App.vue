<template>
  <div class="bg-gray-light h-screen flex flex-col">
    <h1 class="text-green h-full">Hello World</h1>
    <Button
      name="Enter"
      status="enter"
    />
    <img
      class="self-end m-12 opacity-10 w-4/6"
      :src="require('./assets/sesameLogo.svg')"
      alt="Sesame Logo"
    >
  </div>
</template>

<script>
import Button from './components/Button.vue';
export default {
  name: 'App',
  components: {
    Button
  }
}
</script>
