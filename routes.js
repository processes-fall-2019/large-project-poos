const AuthenticationControllerPolicy = require('./api/policies/AuthenticationControllerPolicy');
const bcrypt = require('bcrypt');
const LoginPolicy = require('./api/policies/LoginPolicy');
var jwt = require('jsonwebtoken');
const sharp = require('sharp');
const fs = require('fs');
const AWS = require('aws-sdk');
var userId
var token
var files = []

AWS.config.update({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
})

module.exports = (app, knex, upload) => {
  app.post('/register', AuthenticationControllerPolicy.register, async (req, res) => {

    bcrypt.hash(req.body.password, 8, function(err, hash) {
      knex('users')
      .insert({
        user_name: req.body.username,
        email: req.body.email,
        password: hash
      })
      .then(function () {
        res.send({
          message: `Hello ${req.body.username}, your user was registered`
        })
      })
      .catch(e => {
        res.send({
          error: 'This email/username is already in use.' + e
        })
      })
  })
})


  app.post('/verify', async (req, res) => {
    try {
      var decoded = jwt.verify(token, 'shhh')

      console.log("decoded: ", decoded)

      res.send({
        payload: decoded
      })
    } catch (e) {
      res.send({
        error: 'Authentication error: ' + e
      })
    }
  })


  app.post('/transferFile', async (req, res) => {
    // console.log(req.body);

    const sendgrid = require('@sendgrid/mail')

    sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

    const message = {
      to: req.body.data.contact_name, // TODO: also make this go to database for future use
      from: 'admin@documentdrop.com',
      subject: 'You\'ve been sent some secret documents',
      text: 'here',
      html: `
         <p>
           Hello, You\'ve been sent some secret documents from Document Drop.
         </p>
         <p>
           You can view or download the document by clicking on the link below.
         </p>
         <a href=${req.body.data.amazon_url}> Click here to view file </a>
         `
    }

    // send the email
    sendgrid.send(message)

   await knex('files')
     .where({
       id: req.body.data.id
     })
     .update({
       contact_name: req.body.data.contact_name,
     })
     .then(function () {
       res.send({
         message: `Recipient created`,
         data: req.body
       })
     })
     .catch(e => {
       res.send({
         error: 'Error adding recipient to database.' + e
       })
     })

    // res.send({
    //   data: req.body
    // })
  })


  // app.post('/bulkFileTransfer', async (req, res) => {
  //   const sendgrid = require('@sendgrid/mail')
  //
  //   sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
  //
  //   const message = {
  //     to: 'fhfranco32@gmail.com', //req.body.email,
  //     from: 'admin@documentdrop.com',
  //     subject: 'You\'ve been sent some secret documents',
  //     text: 'here',
  //   }
  //
  //   // send the email
  //   sendgrid.send(message)
  //
  //   res.send({
  //     data: req.body
  //   })
  // })


  app.post('/login', LoginPolicy.login, async (req, res) => {
     const {username, password} = req.body
     bcrypt.hash(req.body.password, 8, async function(err, hash) {
     const user = await knex.select().from('users')
       .where({ user_name: username, password: hash })
       .then()
       .catch(e => {
         res.send({
           error: 'Error when fetching user from database.' + e
         })
       })

     if (user.length === 0) {
       return res.send({
         error: 'User not found.'
       })
     }

     userId = user[0].id
     console.log()
    })
     token = jwt.sign({
       username: username,
       password: password,
       user_id: userId
     }, 'shhh', { expiresIn: '1h' })

     console.log("token: ", token);

     res.send({
       message: `Hello ${req.body.username}, Welcome back.`,
       // user: user,
       Authorization:  `Bearer: ${token}`
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

      Promise.all(promises).then(async function() {
        await knex('files')
          .insert(files)
          .then(function () {
            res.send({
              message: `file uploaded to database!`
            })
          })
          .catch(e => {
            res.send({
              error: 'Error when uploading file to database.' + e
            })
          })
          files = []
      }).catch(function(err) {
        res.send(err.stack)
      })

    } catch (e) {
      res.send({
        error: 'File upload failed.' + e
      })
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


   app.delete('/deleteFile', async (req, res) => {
     await knex('files')
       .where({
         id: req.body.id
       })
       .del()
       .then(function () {
         res.send({
           message: `File deleted`
         })
       })
       .catch(e => {
         res.send({
           error: 'Error deleting file' + e
         })
       })
    })
}
