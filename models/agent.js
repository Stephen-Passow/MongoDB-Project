const mongoose = require('./connection.js')


const AgentSchema = new mongoose.Schema({
 name: String,
 price: Number,
 location: String,
 sqFoot: Number,
 numberOfBedrooms: Number,
 numberOfBathrooms: Number,
})

const agentCollection = mongoose.model('agents', AgentSchema)

//get all agents
const getAllAgents = () => {
  return agentCollection.find({})
}
//get single agent
const getSingleAgent = (id) => {
  return agentCollection.findById(id)
}
//create new agent
const createAgent = (newAgent) => {
  return agentCollection.create(newAgent)
}
//update existing agent
const updateAgent = (id, newAgent) => {
  return agentCollection.update({_id: id}, newAgent)
}
//delete existing agent
const deleteAgent = (id) => {
  return agentCollection.deleteOne({_id: id})
}
module.exports = {
  getAllAgents,
  getSingleAgent,
  createAgent,
  updateAgent,
  deleteAgent,
}
