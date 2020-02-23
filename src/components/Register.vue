<template>
  <div>
        <b-navbar toggleable="lg" type="dark" variant="info" sticky>
        <img class="image" src="@/assets/image1.png"/>
        <b-navbar-brand class="title" href="#">&nbsp;Image Drop</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-nav-item href="#/">Login</b-nav-item>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <br>
    <br>
    <b-container>
      <form class="register border border-dark p-5">
        <p class="h1 mb-4">Register</p>
        <b-alert v-model="dupUser" variant="danger" @dismissed="dupUser=false" dismissible>
            email is already in use <br>
        </b-alert>
        <input type="" class="form-control mb-4" placeholder="Username" v-model="username">
        <input type="" class="form-control mb-4" placeholder="Email" v-model="email">
        <input type="password" class="form-control mb-4" placeholder="Password" v-model="password">
        <br>
        <br>
        <!-- Error msg -->
        <div v-if="missingInfo" class="error" v-html="error"/>
        <br>
        <!-- Register -->
        <button @click="register" class="btn btn-info btn-block"> Register </button> <br>
        <!-- Cancel -->
        <router-link :to="{name: 'login'}">
          <button class="btn btn-info btn-block"> Cancel </button>
        </router-link>
      </form>
    </b-container>
    <br><br><br><br><br><br>
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
          // alert(user.data.error)
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
   .title{
    margin-top: 1.5%;
    font-size: 180%;
  }
  .image{
    margin-top: 0;
    height: 5%;
    width: 5%;
  }
  .register {
   width: 25rem;
  display:inline-block;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	margin-left: auto;
	margin-right: auto;
  background-color: white;
  }
</style>
