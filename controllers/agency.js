const express = require('express')

const agencyApi = require('../models/agency.js')
const agentApi = require('../models/agent.js')

const agencyRouter = express.Router()

agencyRouter.get('/agency/new', (req, res) => {
  res.render('agency/newAgencyForm')
})
//function to send the updated info to the editAgency form
agencyRouter.get('/agency/edit/:id', (req, res) => {
  agencyApi.getSingleAgency(req.params.id)
    .then((updated) => {
      res.render('agency/editAgency', { updated })
    })
})

// agencyRouter.get('/agency/edit/:id', (req, res) => {
//   agencyApi.getSingleAgency(req.params.id)
//     .then((singleAgency) => {
//       res.render('agency/editAgencyForm', {singleAgency})
//     })
// })

//get all agency
agencyRouter.get('/agency', (req, res) => {
  agencyApi.getAllAgencys()
    .then((allAgencys) => {
      //console.log('allAgencys', allAgencys)
      res.render('agency/allAgencys', { allAgencys })
      //res.json(allAgencys)
    })
})

//get single agency with agency id
agencyRouter.get('/agency/:id', (req, res) => {
  agencyApi.getSingleAgency(req.params.id)
    .then((singleAgency) => {

      //console.log('agency/singleAgency', singleAgency)
      agentApi.getAllAgentsByAgencyId(req.params.id)
        .then((agentAgency) => {
          res.render('agency/singleAgency', { singleAgency, agentAgency })
        })
    })
})

//create new agency
agencyRouter.post('/agency', (req, res) => {
  agencyApi.createAgency(req.body)
    .then((createdAgency) => {
      console.log('createdAgency', createdAgency)
      res.redirect('/agency')
    })
})

//update existing agency
agencyRouter.put('/agency/:id', (req, res) => {
  agencyApi.updateAgency(req.params.id, req.body)
    .then((updatedAgency) => {
      console.log('updatedAgency', updatedAgency)
      res.redirect(`/agency/${req.params.id}`)
    })
})

//delete agency
agencyRouter.delete('/agency/:id', (req, res) => {
  agencyApi.deleteAgency(req.params.id)
    .then((deletedAgency) => {
      console.log('deletedAgency', deletedAgency)
      res.redirect('/agency')
    })
})

module.exports = {
  agencyRouter
}
