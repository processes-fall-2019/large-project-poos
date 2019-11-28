<template>
  <div>
    <h1>Register</h1>
    <input type="" name="username" v-model="username" placeholder="user name"/>&nbsp;&nbsp;
    <br>
    <br>
    <input type="email" name="email" v-model="email" placeholder="email"/>&nbsp;&nbsp;
    <input type="password" name="password" v-model="password" placeholder="password"/>
    <br>
    <br>
      <div class="error" v-html="error"/>
    <br>
    <button @click="register"> Register </button>&nbsp;&nbsp;
    <router-link :to="{name: 'login'}">
      <button> Cancel </button>
    </router-link>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  props: {
  },
  data () {
    return {
      username: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const user = await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password,
        })
        // eslint-disable-next-line
        console.log('user', user.data)

        if (user.data.error) {
          alert(user.data.error)  // TODO: CHANGE do not use alert dialogs like Lienecker said, also add one that says "This username is alreayd in use."
          return false
        }

        this.$router.push({
            name: 'login'
        })

        alert('Hello ' + this.username + ' your user was successfully registered!')
      } catch (error) {
        // eslint-disable-next-line
        console.log('Error registering.')
        this.error = error.response.data.error
      }
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
