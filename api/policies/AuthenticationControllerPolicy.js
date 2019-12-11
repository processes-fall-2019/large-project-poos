const Joi = require('joi')

module.exports = {
  async register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string(),
      username: Joi.string()
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Invalid password.'
          })
          break
        case 'username':
          res.status(400).send({
            error: 'Invalid username.'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid'
          })
      }
    } else {
      await next()
    }
  }
}

// module.exports = {
//   async verify (req, res, next) {
//     const schema = {
//       email: Joi.string().email(),
//     }

//     const {error, value} = Joi.validate(req.body, schema)

//     if (error) {
//       switch (error.details[0].context.key) {
//         case 'email':
//           res.status(400).send({
//             error: 'You must provide a valid email.'
//           })
//           break
//         default:
//           res.status(400).send({
//             error: 'Invalid'
//           })
//       }
//     } else {
//       await next()
//     }
//   }
// }
