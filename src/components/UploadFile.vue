<template>
  <div>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <div class="field">
        <!-- <label for="file" class="label"> Upload File </label> -->
        <input type="file" ref="file" @change="selectFile"/>
      </div>

      <div>
        <button> Send </button>
      </div>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  data () {
    return {
      file: ""
    }
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0]
      console.log(this.file)
    },

    async sendFile() {
      const formData = new FormData()
      formData.append('file', this.file)

      try { // axios.post('/upload', formData)
        const file = await AuthenticationService.upload({
          file: this.file,
          formData: formData,
        })

        console.log(file);

      } catch (e) {
        console.log(e)
      }

    }
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
