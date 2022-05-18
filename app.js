const express = require('express')
const morgan = require('morgan')

// express app
const app = express()
//registers view engine
app.set('view engine', 'ejs')

// listen for requests
app.listen(3000)
// middlware and static files
app.use(express.static('public'))

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  const blogs = [
    { title: 'yoshi kills toad', snippet: 'die you fungal fucker' },
    { title: 'yoshi kills Wario', snippet: 'die you freak' },
    { title: 'yoshi kills Princess', snippet: 'Off with your head' },
  ]

  res.render('index', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' })
})

//404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})
