const Joi = require('joi')

module.exports = {
  async login (req, res, next) {
    const schema = {
      username: Joi.string(),
      password: Joi.string(),
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'Invalid username.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Invalid password.'
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
