const express = require('express')
const app = express()
const port = 3000

var data = [
    {
        id: 'the lost cavia',
        title: 'The Lost Cavia',
        plot: 'Stuck in a icecube for 182 days but managed to get out by a thunderstorm.',
        description: 'Stuck in a icecube for 182 days but managed to get out by a thunderstorm.'
    },
    {
        id: 'barbeque goes wrong III',
        title: 'Barbeque goes wrong III',
        plot: 'Sam came back from the grave to get his revenge and destroy them all at the local park.',
        description: 'Sam came back from the grave to get his revenge and destroy them all at the local park.'
    },
    {
        id: 'milkman wasnt a man',
        title: 'Milkman wasnt a man',
        plot: 'A guy that really likes to drink milk, he drinks alot, alot.',
        description: 'A guy that really likes to drink milk, he drinks alot, alot.'
    }
]

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/index', (req, res) => {
    res.render('index.ejs');
})
app.get('/match', (req, res) => {
    res.render('match.ejs');
})

app.get('/new', (req, res) => {
    res.render('new.ejs', { data: data })
})




// app.get('/home', (req, res) => res.sendFile(__dirname + '/index.html'))
// app.use(express.static(__dirname + ''));

// app.get('/about', (req, res) => res.send('This is the about page.'))
// app.get('/contact', (req, res) => res.send('This is the contact page.'))
// app.get('/test', (req, res) => {
//     res.send('This is the test page with console.');
//     console.log(req.headers.host + req.url);
// })

// app.get('/mp3', (req, res) => {
//     res.sendFile(__dirname + '/0001.mp3');
//     console.log(req.headers.host + req.url);
// })
// app.get('*', (req, res) => res.send('404 Page not loading...'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



