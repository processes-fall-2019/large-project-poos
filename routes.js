// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
// // const Contacts = require('../../src/components/Contacts.vue')
// var userId
//
// module.exports = (app, knex) => {
//   // app.get('/', function (req, res) {
//   //   res.redirect('/HelloWorld')
//   // })
//
//   app.post('/register', AuthenticationControllerPolicy.register, async (req, res) => {
//     (await knex('users')
//       .insert({
//         email: req.body.email,
//         password: req.body.password
//       })
//       .then(function (user) {
//         res.send({
//           message: `Hello ${req.body.email}, your user was registered!`
//         })
//       })
//       .catch(e => {
//         res.send({
//           error: 'This email is already in use.'
//         })
//       }))
//   })
//
//   app.post('/login', async (req, res) => {
//     const {email, password} = req.body
//     const user = await knex.select().from('users')
//       .where({ email: email, password: password })
//       .then()
//       .catch(e => {
//         res.send({
//           error: 'Error when fetching user from database.'
//         })
//       })
//
//     if (user.length === 0) {
//       return res.send({
//         error: 'User not found.'
//       })
//     }
//
//     userId = user[0].id
//
//     res.send({
//       message: `Hello ${req.body.email}, Welcome back.`,
//       user: user
//     })
//   })
//
//   app.get('/contacts', async (req, res) => {
//     // const userId = req.body.user_id
//     const contacts = await knex.select().from('contacts')
//       .where({ user_id: userId })
//       .then(function (contact) {
//         console.log('ske')
//         res.send(contact)
//       })
//       .catch(e => {
//         res.send({
//           message: req.body,
//           error: 'Error when fetching from database.'
//         })
//       })
//   })
//
//   app.post('/add-contact', async (req, res) => {
//     const contact = await knex('contacts')
//       .insert({
//         user_id: userId,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         phone_number: req.body.phone_number,
//         email: req.body.email
//       })
//       .then(function (contact) {
//         res.send({
//           message: `contact created!`
//         })
//       })
//       .catch(e => {
//         res.send({
//           error: 'Error when adding contact to database.'
//         })
//       })
//
//     // res.send({
//     //   message: `contact created!`,
//     //   contact: contact
//     // })
//   })
//
//   // app.delete('/delete-contact', async (req, res) => {
//   //   const contact = await knex('contacts')
//   //     .where({ user_id: userId, email:  })
//   //     .del()
//   //     .then(function (contact) {
//   //       res.send({
//   //         message: `contact deleted!`
//   //       })
//   //     })
//   //     .catch(e => {
//   //       res.send({
//   //         error: 'Error when deleting contact from database.'
//   //       })
//   //     })
//   // })
//
//   app.get('/search-contacts', async (req, res) => {
//     const {firstName} = req.body
//     const contacts = await knex.select().from('contacts')
//       .where({ user_id: userId, first_name: 'Alice' })
//       .then(function (contact) {
//         res.send(contact)
//       })
//       .catch(e => {
//         res.send({
//           message: req.body,
//           error: 'Error when fetching from database.'
//         })
//       })
//   })
//
//   // app.put('/update-contact', async (req, res) => {
//   //   const contact = await knex('contacts')
//   //     .insert({
//   //       user_id: userId,
//   //       first_name: req.body.first_name,
//   //       last_name: req.body.last_name,
//   //       phone_number: req.body.phone_number,
//   //       email: req.body.email
//   //     })
//   //     .then(function (contact) {
//   //       res.send({
//   //         message: `contact created!`
//   //       })
//   //     })
//   //     .catch(e => {
//   //       res.send({
//   //         error: 'Error when adding contact to database.'
//   //       })
//   //     })
//   // })
// }

const AuthenticationControllerPolicy = require('./api/policies/AuthenticationControllerPolicy')
const LoginPolicy = require('./api/policies/LoginPolicy')

var userId

module.exports = (app, knex, upload) => {
  app.post('/register', AuthenticationControllerPolicy.register, async (req, res) => {
    (await knex('users')
      .insert({
        user_name: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(function () {
        res.send({
          message: `Hello ${req.body.username}, your user was registered`
        })
      })
      .catch(e => {
        res.send({
          error: 'This email/username is already in use.'
        })
      }))
  })


  app.post('/login', LoginPolicy.login, async (req, res) => {
     const {username, password} = req.body
     const user = await knex.select().from('users')
       .where({ user_name: username, password: password })
       .then()
       .catch(e => {
         res.send({
           error: 'Error when fetching user from database.'
         })
       })

     if (user.length === 0) {
       return res.send({
         error: 'User not found.'
       })
     }

     userId = user[0].id

     res.send({
       message: `Hello ${req.body.username}, Welcome back.`,
       user: user
     })
   })

  // app.post('/upload', formData)
  // app.post('/upload', upload.array('files'), async (req, res) => {
  //   // res.send({
  //   //   message: `File Uploaded.`,
  //   //   file: req.body
  //   // })
  //   res.json({ files: req.files })
  // })

  app.post('/upload', upload.array('files'), async (req, res) => {
    const filesToInsert = req.files.map(file => {
      return {
        name: file.originalname,
        contact_id: null,
        user_id: userId,
        amazon_url: null
      }
    })

    console.log("this is files", req.files);
    console.log("this is query", filesToInsert);


    const files = await knex('files')
      .insert(filesToInsert)
      .then(function () {
        res.send({
          message: `file uploaded to database!`
        })
      })
      .catch(e => {
        res.send({
          error: 'Error when uploading file to database.'
        })
      })

  })
  

  app.get('/getFiles', async (req, res) => {
     const files = await knex.select().from('files')
       .where({ user_id: userId })
       .then(function (file) {
         console.log('ske')
         res.send(file)
       })
       .catch(e => {
         res.send({
           message: req.body,
           error: 'Error when fetching from database.'
         })
       })

       console.log("test", files);
   })
}
