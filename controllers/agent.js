const express = require('express')

const agentApi = require('../models/agent.js')

const agentRouter = express.Router()

agentRouter.get('/agent/new', (req, res) => {
  res.render('agent/newAgentForm')
})

//function to send the updated info to the editAgent form
agentRouter.get('/agent/edit/:id', (req,res) => {
  agentApi.getSingleAgent(req.params.id)
  .then((updated) => {
    res.render('agent/editAgent', {updated})
  })
})

//get all agent
agentRouter.get('/agent', (req, res) => {
  agentApi.getAllAgents()
    .then((allAgents) => {
      console.log('allAgents', allAgents)
      res.render('agent/allAgents', { allAgents })
      //res.json(allAgents)
    })
})

//get single agent
agentRouter.get('/agent/:id', (req, res) => {
  agentApi.getSingleAgent(req.params.id)
    .then((singleAgent) => {
      console.log('agent/singleAgent', singleAgent)
      res.render('agent/singleAgent', { singleAgent })
    })
})

//create new agent
agentRouter.post('/agent', (req, res) => {
  agentApi.createAgent(req.body)
    .then((createdAgent) => {
      console.log('createdAgent', createdAgent)
      res.redirect('/agent')
    })
})

//update existing agent
agentRouter.put('/agent/:id', (req,res) => {
  agentApi.updateAgent(req.params.id, req.body)
  .then((updatedAgent) => {
    console.log('updatedAgent', updatedAgent)
    res.redirect(`/agent/${req.params.id}`)
  })
})

//delete agent
agentRouter.delete('/agent/:id', (req,res) => {
  agentApi.deleteAgent(req.params.id)
  .then((deletedAgent) => {
    console.log('deletedAgent', deletedAgent)
    res.redirect('/agent')
  })
})

module.exports = {
  agentRouter
}
