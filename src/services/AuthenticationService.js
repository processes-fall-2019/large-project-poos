import Api from './Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  // login (credentials) {
  //   return Api().post('login', credentials)
  // },
  // contacts (credentials) {
  //   return Api().get('contacts', credentials)
  // },
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
