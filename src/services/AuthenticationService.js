import Api from './Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  upload (credentials) {
    return Api().post('upload', credentials)
  },
  getFiles (credentials) {
    return Api().get('getFiles', credentials)
  }
  // addContact (credentials) {
  //   return Api().post('add-contact', credentials)
  // },
  // deleteContact (credentials) {
  //   return Api().delete('delete-contact', credentials)
  // },
  // searchContacts (credentials) {
  //   return Api().get('search-contacts', credentials)
  // }
}
