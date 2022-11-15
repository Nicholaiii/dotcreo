const express = require("express");

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/services.html')
})

app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + '/public/portfolio.html')
})

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/public/blog.html')
})


app.listen(2022, () => {
    console.log(`This app is listening on port 2022`)
})
