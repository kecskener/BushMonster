const express = require('express');
const mongoclient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
require('dotenv/config');
const app = express();

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

//Connect to database
mongoclient.connect(process.env.CONNECTION, { useUnifiedTopology: true })
    .then(client => {
        const database = client.db('database')
        const user = database.collection('user')
        const bumsters = database.collection('bushmonsters')
        let errormessage = ""

        app.get('/error', (req, res) => {
            res.send(errormessage)
        })

        app.get('/getDetails', (req, res) => {
            bumsters.find({}).toArray((err, result) => {
                res.send({ express: result })
            })
        })

        app.post("/makeLogin", (req, res) => {
            const username = req.body.username
            user.findOne({ username })
                .then(userface => {
                    if (!userface) {
                        errormessage = "Username not found"
                        res.redirect(process.env.REDIRECT)
                    } else {

                        const password = req.body.password

                        user.findOne({ password })
                            .then(auth => {
                                if (!auth) {
                                    errormessage = "Password not found"
                                    res.redirect(process.env.REDIRECT)
                                } else {
                                    const payload = { user: username }

                                    jwt.sign(payload, "secret", { expiresIn: 2100 }, (err) => {
                                        if (err) {
                                            throw err
                                        } else {
                                            res.redirect(process.env.AFTER)
                                        }
                                    })
                                }
                            })
                            .catch(error => console.error(error))
                    }
                })
        })

        app.post('/registerBumster', (req, res) => {
            bumsters.insertOne(req.body)

            res.redirect(process.env.AFTER)
        })

        app.post('/deleteBumster', (req, res) => {
            bumsters.deleteOne(req.body)

            res.redirect(process.env.AFTER)
        })

        app.post('/updateBumster', (req, res) => {
            bumsters.updateOne({_id: ObjectID(req.body._id)}, {$set: { name: req.body.name , age: req.body.age , color: req.body.color , gender: req.body.gender , description: req.body.description }})

            res.redirect(process.env.AFTER)
        })

    })
    .catch(error => console.error(error))

//Listen
app.listen(5000, 3000);
