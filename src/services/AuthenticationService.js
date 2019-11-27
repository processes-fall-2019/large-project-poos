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
  },
  deleteFile (credentials) {
    return Api().delete('deleteFile', credentials)
  },
}
