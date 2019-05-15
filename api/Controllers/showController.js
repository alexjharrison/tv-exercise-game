const Show = require('../models/Show')
const Workout = require('../models/Workout')
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost/TvWorkoutDB'

module.exports = async (req, res, next) => {
  const db = await MongoClient.connect(url)
  console.log(db)
  res.send(req.method)
}
