
const express = require('express')

const homeApi = require('../models/home.js')

const homeRouter = express.Router()

homeRouter.get('/home/new', (req, res) => {
  res.render('home/newHomeForm')
})
//get all home
homeRouter.get('/home', (req, res) => {
  homeApi.getAllHomes()
    .then((allHomes) => {
      //console.log('allHomes', allHomes)
      res.render('home/allHomes', { allHomes })
    })
})
//get single home
homeRouter.get('/home/:id', (req, res) => {
  homeApi.getSingleHome()
    .then((singleHome) => {
      console.log('home/singleHome', singleHome)
      res.render('home/singleHome', { singleHome })
    })
})
//create new home
homeRouter.post('/home/new', (req, res) => {
  homeApi.createHome()
    .then((createdHome) => {
      console.log('createdHome', createdHome)
      res.redirect('/home')
    })
})
//update existing home
homeRouter.put('/home/:id', (req,res) => {
  homeApi.updateHome()
  .then((updatedHome) => {
    console.log('updatedHome', updatedHome)
    res.redirect(`home/${req.params.id}`)
  })
})
//delete home
homeRouter.delete('/home/:id', (req,res) => {
  homeApi.deleteHome()
  .then((deletedHome) => {
    console.log('deletedHome', deletedHome)
    res.redirect('/home')
  })
})

module.exports = {
  homeRouter
}
