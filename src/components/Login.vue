<template>
    <div>
      <!-- <h1>Document Drop</h1> -->
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <img class="image" src="@/assets/image1.png"/>
          <b-navbar-brand class="title" href="#">&nbsp;Document Drop</b-navbar-brand>
  
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
            </b-navbar-nav>
  
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <!-- <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
                <b-nav-item href="#/register">Register</b-nav-item>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
  </div>
      <br>
      <br>
      <b-container>
        <form class="login border border-dark p-5">
          <p class="h1 mb-4">Login</p>
          <br />
          <!-- Email -->
          <input type="" class="form-control mb-4" placeholder="Username" v-model="username">
          <!-- Password -->
          <input type="password" class="form-control mb-4" placeholder="Password" v-model="password">
          <div class="error" v-html="error"/>
          <br />
          <div class="d-flex justify-content-around">
              <div>
                  <!-- Remember me -->
                  <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                      <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                  </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                  <!-- Forgot password -->
                  <a href="">Forgot password?</a>
              </div>
          </div>
          <br />
          <br />
          <!-- Sign in button -->
          <button @click="login" class="btn btn-info btn-block my-4" type="submit">Sign in</button>
          <div>
              <router-link :to="{name: 'register'}">
                <a href="">Not a member? Click here to sign up.</a>
              </router-link>
          </div>
        </form>
      </b-container>
      <br><br><br><br><br><br><br><br>
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
        // eslint-disable-next-line
        console.log('hi')
        try {
          const response = await AuthenticationService.login({
            username: this.username,
            password: this.password   // TODO: salt and encrypt password
          })
          // eslint-disable-next-line
          console.log('res', response)
          // this.$root.$emit('userId', response.data.user[0].id)
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
          // eslint-disable-next-line
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
    .title{
      margin-top: 1.5%;
      font-size: 180%;
    }
    .image{
      margin-top: 0;
      height: 5%;
      width: 5%;
    }
    .center {
      margin:  auto;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
    }
    .login {
    /* width: 50%; */
    /* height: 650px; */
    /* position:relative; */
    display:inline-block;
    /* top:50%; */
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /* color: #2c3e50; */
    margin-left: auto;
    margin-right: auto;
    background-color: white;
  }
  </style>
  
