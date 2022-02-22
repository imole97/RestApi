const express = require('express')
const router = express.Router()
const User =  require('../model/User')

//GET ALL USERS
router.get('/', async (req,res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.status(500).json({message: err.message})
    }
    
})

//GET ONE USER
router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        if(user === null){
            return res.status(404).json({message: 'cannot find user'})
        }
        res.json(user)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//ADD NEW USER TO DATABASE
router.post('/', async (req,res) =>{
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    })

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(error){
        res.status(400).json({message: error.message})
    }

})

//EDIT A USER BY ID
router.patch('/:id', async (req, res) => {
    let user = User.findById(req.params.id)
    console.log(user)
    
    if(req.body.firstName !== null){
        user.firstName === req.body.firstName
    }
    if(req.body.lastName !== null){
        user.lastName === req.body.lastName 
    }
    if(req.body.age !== null){
        user.age === req.body.age
    }

    try{
        const updatedUser = await user.save()
        res.json(updatedUser)
    }catch(err){
        res.status(400).json({message: err.message})
    }
} )

//REMOVE A USER BY ID
module.exports = router