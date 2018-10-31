
<template>
  <div id="login">
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>
<script>
// import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'

export default {
  name: 'app',
  components: {
  },
  // async beforeCreate() {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser()
  //     this.$router.push('/');
  //   } catch (err) {
  //   }
  //   AmplifyEventBus.$on('authState', info => {
  //     if (info === 'signedIn') {
  //       this.$router.push('/');
  //     } else {
  //       this.$router.push('/login');
  //     }
  //   });
  // },
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>