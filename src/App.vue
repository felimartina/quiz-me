<template>
  <div id="app">
    <b-container fluid>
      <router-view/>
    </b-container>
  </div>
</template>
<script>
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  name: 'app',
  components: {
  },
  async beforeCreate() {
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.$router.push('/');
      } else if (info === 'signedOut') {
        this.$router.push('/login');
      }
    });
  },
}
</script>
<style></style>