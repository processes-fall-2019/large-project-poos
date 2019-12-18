<template>
  <div>
    <h3> Your Images </h3>
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
       <template slot="recipient" slot-scope="props">
           <input placeholder="Input recipients email" v-model="props.row.contact_name" />
       </template>
       <template slot="open_modal" slot-scope="props">
         <button @click="viewFile(props.row)" class="btn btn-primary">View Image</button>
       </template>
       <template slot="transfer_file" slot-scope="props">
         <button @click="open(props.row)" class="btn btn-primary">Transfer Image</button>
       </template>
       <template slot="delete_file" slot-scope="props">
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


      <modal
        :name="modal2Name"
        height="auto"
        width="1000px"
        :scrollable="true"
        @before-open="beforeOpen">

        <br />
        <div>
          <h4> &nbsp; You are about to send the following file: {{ sendingFile }} </h4>
          <br />
          <h4> &nbsp; Intended Recipient: {{ recipient }}  </h4>
          <br />
          <h5> &nbsp; Please confirm below</h5>
          <br />
          <br />

          &nbsp;&nbsp;&nbsp;<button @click="transferFile()" class="btn btn-success"> Confirm</button>
          &nbsp;&nbsp;&nbsp;<button @click="close()" class="btn btn-danger"> Cancel </button>
        </div>
        <br />
      </modal>

      <!-- keep counter and keep track of num of files and sedn that to db -->
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
      form: {
        rep: []
      },
      n: 0,
      userId: 0,
      row: '',
      sendingFile: '',
      recipient: '',
      fileUrl: '',
      modalName: 'files-modal',
      modal2Name: 'send-modal',
      rows: [],
      columns: [
      {
        label: "Image Name",
        name: "name",
        filter: {
          type: "simple",
          placeholder: "Search Image Names"
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
        // name: "contact_name",
        name: "recipient",
        // filter: {
        //   type: "simple",
        //   placeholder: "Search Intended Recipients"
        // },
        sort: true,
      },
      {
        label: "",
        name: "open_modal",
        sort: false,
      },{
        label: "",
        name: "transfer_file",
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
        // console.log('the resssssy', response)

        this.rows = response.data

        // console.log(this.rows);

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
    async transferFile () {
      await AuthenticationService.transferFile({
        data: this.row
      })
      this.$modal.hide('send-modal')
    },
    open (row) {

      if (row.contact_name === null || row.contact_name === '') {
        // alert("Please enter a recipient before attemping to transfer a file.")
        return false
      }

      this.row = row
      this.fileUrl = row.amazon_url
      this.sendingFile = row.name
      this.recipient = row.contact_name

      // console.log("row", this.row);

      this.$modal.show('send-modal', { row })
    },
    close () {
      this.$modal.hide('send-modal')
    },
    viewFile (row) {
      // eslint-disable-next-line
      // console.log(row);

      this.fileUrl = row.amazon_url

      this.$modal.show('files-modal')

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
