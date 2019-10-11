<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email"/>&nbsp;&nbsp;
    <input type="password" name="password" v-model="password" placeholder="password"/>
    <br><br>
    <button> Register </button>
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      userName: '',
    }
  },
  methods: {
    async register () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
