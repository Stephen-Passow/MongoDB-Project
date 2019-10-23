const mongoose = require('./connection.js')


const AgentSchema = new mongoose.Schema({
  name: String,
  rating: String,
  yearsOfService: Number,
  agencyId: mongoose.ObjectId,
})

const agentCollection = mongoose.model('agents', AgentSchema)

//get all agents
const getAllAgents = () => {
  return agentCollection.find({})
}

//get all agents inside of specified agency
const getAllAgentsByAgencyId = (agencyId) => {
  return agentCollection.find({ agencyId: agencyId })
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
  return agentCollection.update({ _id: id }, newAgent)
}
//delete existing agent
const deleteAgent = (id) => {
  return agentCollection.deleteOne({ _id: id })
}
module.exports = {
  getAllAgents,
  getAllAgentsByAgencyId,
  getSingleAgent,
  createAgent,
  updateAgent,
  deleteAgent,
}