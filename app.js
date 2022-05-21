const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blogRoutes')
console.log(blogRoutes)

// express app
const app = express()

// connect to mongodb & listen for requests
const dbURI =
  'mongodb+srv://admin:mibapab23@nodetuts.0t71h.mongodb.net/nodetuts?retryWrites=true&w=majority'

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('connected to DB')
    app.listen(3000)
  })
  .catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use((req, res, next) => {
  res.locals.path = req.path
  next()
})

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})
// blog routes (gone to routers folder)
app.use('/blogs', blogRoutes)
//look we're using the router, just like middleware!!!!

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})
