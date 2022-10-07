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
          "Authorization": "Bearer " + `${process.env.VUE_APP_BEARER_TOKEN}`
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
