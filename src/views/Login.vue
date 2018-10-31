<template>
  <div id="login">
    <Authenticator ></Authenticator>
  </div>
</template>

<script>
import { components } from 'aws-amplify-vue'
console.log(components)
export default {
  name: 'login',
  components: {
    ...components
  },
  data: function() {
    return {
      
    }
  },
}
</script>

<style></style>