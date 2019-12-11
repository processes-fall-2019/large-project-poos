import AuthenticationService from '../services/AuthenticationService'

function timer () {
  const res = AuthenticationService.verify({
  })

  Promise.resolve(res)

  let time = 120

  return time
}

export default timer()
