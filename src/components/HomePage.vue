<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="info" sticky>
        <img class="image" src="@/assets/image1.png"/>
        <b-navbar-brand class="title" href="#">&nbsp;Document Drop</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#/homepage">Verify</b-dropdown-item>
              <b-dropdown-item href="#/">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <br>
    <h1> Welcome </h1>
    <br />

    <!-- <Timer/> -->
    <circular-count-down-timer
      :initial-value="timer"
      :stroke-width="5"
      :seconds-stroke-color="'#f00'"
      :minutes-stroke-color="'#0ff'"
      :hours-stroke-color="'#0f0'"
      :underneath-stroke-color="'lightgrey'"
      :seconds-fill-color="'#00ffff66'"
      :minutes-fill-color="'#00ff0066'"
      :hours-fill-color="'#ff000066'"
      :size="200"
      :padding="4"
      :hour-label="'hours'"
      :minute-label="'minutes'"
      :second-label="'seconds'"
      :show-second="true"
      :show-minute="true"
      :show-hour="true"
      :show-negatives="true"
      :notify-every="'minute'"
    ></circular-count-down-timer>

    <br />
    <!-- <DropZone/> -->
    <UploadFile/>
    <FilesTable/>
    <br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import UploadFile from './UploadFile'
import FilesTable from './FilesTable'
import AuthenticationService from '../services/AuthenticationService'
// import DropZone from './DropZone'

export default {
  components: {
    UploadFile,
    FilesTable,
    // DropZone,
  },
  data () {
    return {
      timer: 86400
    }
  },
  methods: {
  },
  async mounted () {
    try {
      const response = await AuthenticationService.verify({
      })

      // eslint-disable-next-line
      console.log("response", response);

      let time = (response.data.payload.exp - response.data.payload.iat)

      let expDate = new Date(response.data.payload.exp * 1000)

      this.timer = time

      // eslint-disable-next-line
      console.log(expDate);

      // eslint-disable-next-line
      console.log("time", time);

    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
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
