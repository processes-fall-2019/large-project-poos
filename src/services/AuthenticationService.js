import Api from './Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  verifyEmail (credentials) {
    return Api().post('verifyEmail', credentials)
  },
  emailCode (credentials) {
    return Api().post('emailCode', credentials)
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
  transferFile (credentials) {
    return Api().post('transferFile', credentials)
  },
  verify (credentials) {
    return Api().post('verify', credentials)
  },
  bulkFileTransfer (credentials) {
    return Api().post('bulkFileTransfer', credentials)
  },
}
