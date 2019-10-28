<template>
  <div>
    <h1> Welcome </h1>
    <UploadFile/>
    <br>
    <br>
    <DropZone/>
    <br>
    <br>
    <FilesTable/>
  </div>
</template>

<script>
import UploadFile from './UploadFile'
import FilesTable from './FilesTable'
import DropZone from './DropZone'

export default {
  components: {
    UploadFile,
    FilesTable,
    DropZone
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
