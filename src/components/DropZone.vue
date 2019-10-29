<template>
  <div>
    <div v-if="message">
      <div>
        {{ message }}
      </div>
    </div>

    <form enctype="multipart/form-data">
      <div class="dropzone">
        <input
          type="file"
          ref="files"
          @change="sendFile"
          class="input-field"
        />

        <p v-if="!uploading" class="call-to-action">
          Or drag and drop a file onto here to upload it directly...
        </p>

        <p v-if="uploading" class="progress-bar">

        </p>
      </div>
    </form>
  </div>
</template>

<script>
// import AuthenticationService from '../services/AuthenticationService'
import axios from 'axios'
import { forEach } from 'lodash'
export default {
  data () {
    return {
      files: [],
      message: "",
      error: false,
      uploading: false
    }
  },
  methods: {
    async sendFile() {
      const files = this.$refs.files.files
      this.files = [ ...this.files, ...files ]

      const formData = new FormData()
      forEach(this.files, file => {
        formData.append('files', file)
      })
      // eslint-disable-next-line
      console.log(formData);

      try {
        await axios.post('/upload', formData)
        this.message = "Files have been uploaded."
        this.files = []
      } catch(err) {
        this.message = err.response.data.error
        this.error = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dropzone {
    min-height: 200px;
    padding: 10px 10px;
    position: relative;
    cursor: pointer;
    outline: 2px dashed grey;
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
  }

  .dropzone:hover {
    background: lightblue;
  }

  .dropzone .call-to-action {
    font-size: 1.2rem;
    text-align: center;
    padding: 70px;
  }

  .input-field {
    opacity: 0;
    width: 100px;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

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
