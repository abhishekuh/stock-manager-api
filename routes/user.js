const express = require('express')
const router = express.Router()
const UserModel = require('../models/user.model')

const users = [
    {id:1,name:"abhi",age:25},
    {id:2,name:"gopi",age:24},
    {id:3,name:"anu",age:22}
]

// router.get('/',(req,res) => {
//     if(req.query.name) {
//         res.send(`You have requested a user $(req.query.name)`)
//     }
//     else {
//         res.send('You have requested a user')
//     }
// })

router.get('/getUser',(req,res) => {
    res.json(users)
})

// router.get('/getUsers',(req,res) => {
//     let model = new UserModel
//     model.get().then(doc => {
//       res.status(201).json(doc)  
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// })

router.post('/createUser',(req,res) => {
    console.log("create user",req.body)
    let model = new UserModel(req.body)
    model.save()
    .then(doc => {
        res.status(201).send(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/error',(req,res) => {
    res.sendStatus(500)
})

module.exports = router