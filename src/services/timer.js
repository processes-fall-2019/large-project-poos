import AuthenticationService from '../services/AuthenticationService'

function timer () {
  const res = AuthenticationService.verify({
  })

  Promise.resolve(res)

  let time = 3600

  return time
}

export default timer()
