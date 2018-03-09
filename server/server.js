const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

/* Local Libraries */
const config = require('./config/secret');

/* All routes */
const mainRoutes = require('./routes/main')

mongoose.connect(config.database, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});


app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(morgan('dev'));

  server.get('/', (req, res) => {
    return handle(req, res)
  })

  server.use('/api', mainRoutes);

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
