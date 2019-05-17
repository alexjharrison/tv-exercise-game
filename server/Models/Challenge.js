const mongoose = require('mongoose')
const Schema = mongoose.Schema

const challengeSchema = new Schema({
  description: { type: String, required: true, unique: true },
  frequency: { type: String, required: true },
  game: { type: String, required: true }
})

const Challenge = mongoose.model('Challenge', challengeSchema)
module.exports = Challenge
