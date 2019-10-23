<template>
  <div>
    <h1>Login</h1>
    <br>
    <br>
    <input type="" name="username" v-model="username" placeholder="user name"/>&nbsp;&nbsp;
    <input type="password" name="password" v-model="password" placeholder="password"/>
    <br>
    <br>
      <div class="error" v-html="error"/>
    <br>
    <button @click="login"> Login </button>&nbsp;&nbsp;
    <router-link :to="{name: 'HelloWorld'}">
      <button> Cancel </button>
    </router-link>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null,
    }
  },
  methods: {
    async login () {
      console.log('hi')
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password   // TODO: salt and encrypt password
        })
        console.log('res', response)

        if (response.data.error) {
          alert('User does not exist.')
          return false
        }

        // this.$store.dispatch('setUser', response.data.user)
        // console.log('herrreee', this.$store.state.user[0].id)

        this.$router.push({
          name: 'homepage'
        })

        // console.log('ressy', response.data)
      } catch (error) {
        console.log('Error logging in.')
        this.error = error.response.data.error
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
  .center {
    margin:  auto;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
</style>
