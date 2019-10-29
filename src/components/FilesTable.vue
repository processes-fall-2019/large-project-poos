<template>
  <div>
    <h3> Your Files </h3>
    <div class="table">
      <!-- <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config" @on-select-row="openVisitorModal"> -->
      <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config">
       <template slot="sort-asc-icon">
         <i class="fa fa-sort-up"></i>
       </template>
       <template slot="sort-desc-icon">
           <i class="fa fa-sort-down"></i>
       </template>
       <template slot="no-sort-icon">
           <i class="fa fa-sort"></i>
       </template>
       <!-- <template slot="open_modal" slot-scope="props"> -->
       <template slot="open_modal">
         <!-- <button class="btn btn-primary" @click="openVisitorModal(props.row)">View Details</button> -->
         <button class="btn btn-primary">View File</button>
       </template>
      </vue-bootstrap4-table>
    </div>

    <button @click="print"> test </button>
  </div>
</template>

<script>
import VueBootstrap4Table from 'vue-bootstrap4-table'
import AuthenticationService from '../services/AuthenticationService'
// import FileModal from "./FileModal.vue"
// import knex from "../../db/db.js"

export default {
  name: 'PastEvents',
  data () {
    return {
      userId: 0,
      rows: [],
      columns: [{
        label: "id",
        name: "id",
        sort: true,
      },
      {
        label: "File Name",
        name: "name",
        filter: {
          type: "simple",
          placeholder: "Search File Name"
        },
        sort: true,
      },
      {
        label: "Date uploaded",
        name: "created_at",
        sort: true,
        filter: {
          type: "simple",
          placeholder: "Search Date uploaded"
        },
      },
      {
        label: "Intended Recipient",
        name: "recipient",
        filter: {
          type: "simple",
          placeholder: "Search Intended Recipient"
        },
        sort: true,
      },
      {
        label: "",
        name: "open_modal",
        sort: false,
      }],
      config: {
        pagination: false,
        checkbox_rows: false,
        rows_selectable: true,
        global_search: {
          visibility: false,
        },
        per_page: 20,
        per_page_options:  [20,  40,  60],
        show_refresh_button:  false,
        show_reset_button:  false,
      }
    }
  },
  async created () { // mounted
    // this.$root.$on('files', (file) => {
    //   this.rows.push(file)
    // })

    try {
        const response = await AuthenticationService.getFiles({
          user_id: this.userId
        })

        // eslint-disable-next-line
        console.log('the resssssy', response)

        this.rows = response.data

        return response
      } catch (error) {
        this.error = error.response.data.error
      }
  },
  props: {
    msg: String
  },
  components: {
    VueBootstrap4Table
  },
  methods: {
    print () {
      // eslint-disable-next-line
      console.log("da ske", this.rows);
      // eslint-disable-next-line
      console.log("da skeeee (working)", this.rowss);

      let x = this.rows[0].map(x => x)
      this.rows = x

      // eslint-disable-next-line
      console.log(this.rows);

      this.$forceUpdate();

      // eslint-disable-next-line
      console.log(x);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  position:relative;
  display:inline-block;
  top:50%;
}
</style>
