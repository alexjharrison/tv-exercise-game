const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const SocketIO = require('socket.io')
const http = require('http')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

async function start() {
  // Add api routes
  // app.use('/api', require('./api'))
  const challengeController = require('./Controllers/challengeController')
  const eventsController = require('./Controllers/eventsController')
  app
    .route('/challenge')
    .get(challengeController.findAll)
    .post(challengeController.create)
  app
    .route('/challenge/:id')
    .get(challengeController.findById)
    .put(challengeController.update)
    .delete(challengeController.remove)
  app
    .route('/event')
    .get(eventsController.findAll)
    .post(eventsController.create)
  app
    .route('/event/:id')
    .get(eventsController.findById)
    .put(eventsController.update)
    .delete(eventsController.remove)
  app.get('/seed', require('./seed'))

  // Connect to mongodb
  const url = 'mongodb://localhost/TvWorkoutDB'
  await mongoose.connect(url, { useNewUrlParser: true })

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  server.listen(port, host)

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

// Add socket.io events
const server = http.createServer(app)
const io = SocketIO(server)
io.on('connection', function(socket) {
  // console.log('user connected');
  socket.on('clicked', ({ eventName, difficulty, show, challenges }) => {
    console.log(challenges)
    const chall = challenges[difficulty]
    const randInt = Math.floor(Math.random() * chall.length)
    const randChall = chall[randInt]
    io.emit('update', { eventName, randChall, show })
  })
})
