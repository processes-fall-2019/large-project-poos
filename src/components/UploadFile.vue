<template>
  <div>
    <div v-if="message">
      <div>
        {{ message }}
      </div>
    </div>
    <form class="align" @submit.prevent="sendFile" enctype="multipart/form-data">
      <div class="field">
        <div class="file is-boxed is-primary">
          <label class="file-label">
            <input
              multiple
              type="file"
              ref="files"
              @change="selectFile"
              class="file-input"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file...
              </span>
            </span>

            <!-- <span v-if="files" class="file-name"> {{ files.name }}</span> -->

          </label>
        </div>

      </div>

      <div class="field">
        <div v-for="(file, index) in files" :key="index" class="level">
          <div class="level-left">
            <div class="level-item"> {{ file.name }}</div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <a @click.prevent="files.splice(index, 1)" class="delete"></a>
            </div>
          </div>
        </div>

      </div>

      <div class="field">
        <button :disabled="disable" class="button is-info"> Send files to database </button>
      </div>
    </form>

  </div>
</template>

<script>
import axios from 'axios'
import { forEach } from 'lodash'
export default {
  data () {
    return {
      files: [],
      message: "",
      error: false,
      disable: false
    }
  },
  components: {
  },
  methods: {
    selectFile() {
      const files = this.$refs.files.files
      this.files = [ ...this.files, ...files ]
      this.error = false
      this.message = ''
      // eslint-disable-next-line
      console.log(this.files)
    },

    async sendFile() {
      this.disable = true
      const formData = new FormData()
      forEach(this.files, file => {
        formData.append('files', file)
      })

      let files = this.files
      // eslint-disable-next-line
      console.log("The files: ", files)
      this.$root.$emit("files", files)

      try {
        await axios.post('/upload', formData)
        this.message = "Files have been uploaded."
        this.files = []
        location.reload()
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
  .error {
    color: red;
  }
  .align {
    text-align: left;
    padding: 20px;
  }
</style>
