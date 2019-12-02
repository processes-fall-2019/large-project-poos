<template>
  <div>
    <b-container>
      <form class="login border border-dark p-5">
        <p class="h1 mb-4">Register</p>
        <b-alert v-model="dupUser" variant="danger" @dismissed="dupUser=false" dismissible>
            email is already in use <br>
            <a href="">Forgot password?</a>
          </b-alert> 
        <input type="" class="form-control mb-4" placeholder="Username" v-model="username">
        <input type="" class="form-control mb-4" placeholder="Email" v-model="email">
        <input type="password" class="form-control mb-4" placeholder="Password" v-model="password">
        <br>
        <br>
          <div v-if="missingInfo" class="error" v-html="error"/>
        <br>
        <button @click="register" class="btn btn-info btn-block"> Register </button>&nbsp;&nbsp;
        <router-link :to="{name: 'login'}">
          <button class="btn btn-info btn-block"> Cancel </button>
        </router-link>
      </form>
    </b-container>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  props: {
  },
  data () {
    return {
      missingInfo: false,
      dupUser: false,
      username: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.missingInfo = false;
      try {
        const user = await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password,
        })
        // eslint-disable-next-line
        console.log('user', user.data)

        if (user.data.error) {
          //alert(user.data.error)  // TODO: CHANGE do not use alert dialogs like Lienecker said, also add one that says "This username is alreayd in use."
          this.dupUser = true;
          this.missingInfo = false;
          return false
        }

        this.$router.push({
            name: 'login'
        })

        alert('Hello ' + this.username + ' your user was successfully registered!')
      } catch (error) {
        // eslint-disable-next-line
        console.log('Error registering.')
        this.missingInfo = true;
        this.dupUser = false;
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
