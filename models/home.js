const mongoose = require('./connection.js')


const HomeSchema = new mongoose.Schema({
 name: String,
 price: Number,
 location: String,
 sqFoot: Number,
 numberOfBedrooms: Number,
 numberOfBathrooms: Number,
})

const homeCollection = mongoose.model('homes', HomeSchema)

//get all homes
const getAllHomes = () => {
  return homeCollection.find({})
}
//get single home
const getSingleHome = (id) => {
  return homeCollection.findById(id)
}
//create new home
const createHome = (newHome) => {
  return homeCollection.create(newHome)
}
//update existing home
const updateHome = (id, newHome) => {
  return homeCollection.update({_id: id}, newHome)
}
//delete existing home
const deleteHome = (id) => {
  return homeCollection.deleteOne({_id: id})
}
module.exports = {
  getAllHomes,
  getSingleHome,
  createHome,
  updateHome,
  deleteHome
}
