const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  description: { type: String, required: true, unique: true },
  show: { type: String, required: true },
  category: { type: String, required: true },
  frequency: { type: String, required: true }
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event
