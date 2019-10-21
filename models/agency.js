const mongoose = require('./connection.js')


const AgencySchema = new mongoose.Schema({
    name: String,
    listingFee: Number,
    description: String,
})

const agencyCollection = mongoose.model('agencys', AgencySchema)

//get all agencys
const getAllAgencys = () => {
    return agencyCollection.find({})
}
//get single agency
const getSingleAgency = (id) => {
    return agencyCollection.findById(id)
}
//create new agency
const createAgency = (newAgency) => {
    return agencyCollection.create(newAgency)
}
//update existing agency
const updateAgency = (id, newAgency) => {
    return agencyCollection.update({ _id: id }, newAgency)
}
//delete existing agency
const deleteAgency = (id) => {
    return agencyCollection.deleteOne({ _id: id })
}
module.exports = {
    getAllAgencys,
    getSingleAgency,
    createAgency,
    updateAgency,
    deleteAgency,
}
