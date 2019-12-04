<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="info" sticky>
        <img class="image" src="@/assets/image1.png"/>
        <b-navbar-brand class="title" href="#">&nbsp;Document Drop</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- <b-nav-item href="#">Register</b-nav-item> -->
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">


            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Verify</b-dropdown-item>
              <b-dropdown-item href="#/">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <br>
    <h1> Welcome </h1>
    <br />
    <DropZone/>
    <UploadFile/>
    <FilesTable/>
    <br><br><br><br><br><br><br><br><br>
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
  .right {
  float: right;
  }
</style>
