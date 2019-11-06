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
const sharp = require('sharp')
const fs = require('fs')
const AWS = require('aws-sdk')
var userId
var files = []

AWS.config.update({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
})

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


  async function uploadToS3(file) {
    const buffer = await sharp(file.path)
      // .resize(300) 600
      // .background('white')
      // .embed()
      .toBuffer()

    var params = {
      Bucket: 'large-project-files',
      Key: `${Date.now()}-${file.originalname}`,
      Body: buffer,
      ACL: 'public-read'
    }

    let fileToUpload = await new AWS.S3().upload(params).promise()

    files.push({
      name: file.originalname,
      contact_id: null,
      user_id: userId,
      amazon_url: fileToUpload.Location,
      contact_name: null
    })

    return fileToUpload
  }

  app.post('/upload', upload.array('files'), async (req, res) => {
    try {
      var promises = []

      for (var i = 0; i < req.files.length; i++) {
        var file = req.files[i]
        promises.push(uploadToS3(file))
      }

      Promise.all(promises).then(async function(data) {
        await knex('files')
          .insert(files)
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
      }).catch(function(err) {
        res.send(err.stack)
      })

    } catch (e) {
      console.log(e);
    }

    // const theFilesToInsert = req.files.map(file => {
    //   return {
    //     name: file.originalname,
    //     contact_id: null,
    //     user_id: userId,
    //     amazon_url: null, //files[file].Location, //s3Res.Location,
    //     contact_name: null
    //   }
    // })
    // console.log("this is query", filesToInsert);
    //
    // console.log("FILES TO INSERT: ", files);

    // fs.unlink(req.files.path, () => {
    //   res.json({ file: `./static/${req.files.originalname}` })
    // })

    // try {
    //   await sharp(req.files.path)
    //     .resize(300)
    //     .background('white')
    //     .embed()
    //     .toFile(`./static/${req.files.originalname}`)
    //
    //   fs.unlink(req.files.path, () => {
    //     res.json({ file: `./static/${req.files.originalname}` })
    //   })
    // } catch {
    //   res.send({
    //     error: 'Error when processing image.'
    //   })
    // }
  })


  app.get('/getFiles', async (req, res) => {
     const files = await knex.select().from('files')
       .where({ user_id: userId })
       .then(function (file) {
         res.send(file)
       })
       .catch(e => {
         res.send({
           message: req.body,
           error: 'Error when fetching from database.',
           errorBody: e
         })
       })
   })
}
