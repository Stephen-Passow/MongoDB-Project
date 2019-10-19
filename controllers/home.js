
const express = require('express')

const homeApi = require('../models/home.js')

const homeRouter = express.Router()

homeRouter.get('/home/new', (req, res) => {
  res.render('home/newHomeForm')
})
//get all home
homeRouter.get('/home', (req, res) => {
  homeApi.getAllHomes()
  res.render('home/allHomes', {allHomes})
})
//get single home
homeRouter.get('/home')
module.exports = {
  homeRouter
}
