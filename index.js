const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => res.sendFile(__dirname + '/index.html'))
app.use(express.static(__dirname + ''));

app.get('/about', (req, res) => res.send('This is the about page.'))
app.get('/contact', (req, res) => res.send('This is the contact page.'))
app.get('*', (req, res) => res.send('404 Page not loading...'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

