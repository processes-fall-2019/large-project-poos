<template>
  <div>
    <h1> Welcome </h1>
    <UploadFile/>
  </div>
</template>

<script>
import UploadFile from './UploadFile'
export default {
  components: {
    UploadFile,
  },
  data () {
    return {
    }
  },
  methods: {
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
