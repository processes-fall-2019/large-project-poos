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
       <template slot="open_modal" slot-scope="props">
         <!-- <button class="btn btn-primary" @click="openVisitorModal(props.row)">View Details</button> -->
         <button @click="viewFile(props.row)" class="btn btn-primary">View File</button>
       </template>
       <template slot="delete_file" slot-scope="props">
         <!-- <button class="btn btn-primary" @click="openVisitorModal(props.row)">View Details</button> -->
         <button @click="deleteFile(props.row)" class="btn btn-danger">Delete</button>
       </template>
      </vue-bootstrap4-table>


      <modal
      :name="modalName"
      height="auto"
      width="1000px"
      :scrollable="true"
      @before-open="beforeOpen">

      <div>
        <img :src="fileUrl" />
      </div>

      </modal>


    </div>
  </div>
</template>

<script>
import VueBootstrap4Table from 'vue-bootstrap4-table'
import AuthenticationService from '../services/AuthenticationService'
// import FileModal from "./FileModal.vue"

export default {
  name: 'FilesTable',
  data () {
    return {
      userId: 0,
      fileUrl: '',
      modalName: 'files-modal',
      rows: [],
      columns: [
      {
        label: "File Name",
        name: "name",
        filter: {
          type: "simple",
          placeholder: "Search File Names"
        },
        sort: true,
      },
      {
        label: "Date uploaded",
        name: "created_at",
        sort: true,
        filter: {
          type: "simple",
          placeholder: "Search Dates uploaded"
        },
      },
      {
        label: "Intended Recipient",
        name: "contact_name",
        filter: {
          type: "simple",
          placeholder: "Search Intended Recipients"
        },
        sort: true,
      },
      {
        label: "",
        name: "open_modal",
        sort: false,
      },{
        label: "",
        name: "delete_file",
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
  async created () {
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
    async deleteFile (row) {
      // eslint-disable-next-line
      // console.log(row);

      let del = confirm("Are you sure you want to permanently delete this file?")

      if (del) {
        await AuthenticationService.deleteFile({
          data: row
        })
      } else {
        return false
      }

      location.reload()
    },
    viewFile (row) {
      // eslint-disable-next-line
      console.log(row);

      this.fileUrl = row.amazon_url

      this.$modal.show('files-modal', { row })

      // window.location.href = row.amazon_url;
    },
    beforeOpen () {
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
