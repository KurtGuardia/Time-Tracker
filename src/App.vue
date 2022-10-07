<template>
  <div
    class="bg-gray-light h-screen flex flex-col justify-between"
  >
    <Controller :employee="employee" />
    <img
      class="self-end m-12 opacity-10 w-4/6"
      :src="require('./assets/sesameLogo.svg')"
      alt="Sesame Logo"
    >
  </div>
</template>

<script>
import Controller from './components/Controller.vue';
import axios from 'axios'
export default {
  name: 'App',
  mounted () {
    axios
      .get( 'https://api-test.sesametime.com/schedule/v1/work-entries', {
        headers: {
          "Authorization": "Bearer 16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f"
        }
      } )
      .then( response => ( this.employee = response.data.data[0].employee ) )
  },
  components: {
    Controller
  },
  data () {
    return {
      employee: {}
    }
  }
}
</script>
