const express = require('express')

const homeApi = require('../models/home.js')

const homeRouter = express.Router()

homeRouter.get('/home/new', (req, res) => {
  res.render('home/newHomeForm')
})
//function to send the updated info to the editHome form
homeRouter.get('/home/edit/:id', (req,res) => {
  homeApi.getSingleHome(req.params.id)
  .then((updated) => {
    res.render('home/editHome', {updated})
  })
})

//get all home
homeRouter.get('/home', (req, res) => {
  homeApi.getAllHomes()
    .then((allHomes) => {
      //console.log('allHomes', allHomes)
      res.render('home/allHomes', { allHomes })
      //res.json(allHomes)
    })
})

//get single home
homeRouter.get('/home/:id', (req, res) => {
  homeApi.getSingleHome(req.params.id)
    .then((singleHome) => {
      console.log('home/singleHome', singleHome)
      res.render('home/singleHome', { singleHome })
    })
})

//create new home
homeRouter.post('/home', (req, res) => {
  homeApi.createHome(req.body)
    .then((createdHome) => {
      console.log('createdHome', createdHome)
      res.redirect('/home')
    })
})

//update existing home
homeRouter.put('/home/:id', (req,res) => {
  homeApi.updateHome(req.params.id, req.body)
  .then((updatedHome) => {
    console.log('updatedHome', updatedHome)
    res.redirect(`/home/${req.params.id}`)
  })
})

//delete home
homeRouter.delete('/home/:id', (req,res) => {
  homeApi.deleteHome(req.params.id)
  .then((deletedHome) => {
    console.log('deletedHome', deletedHome)
    res.redirect('/home')
  })
})

module.exports = {
  homeRouter
}
