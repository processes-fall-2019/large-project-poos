import axios from 'axios'

export default () => {
  return axios.create({
    baseUrl: 'http://localhost:8080/'
    // baseURL: `https://large-project-poos.herokuapp.com`
  })
}
