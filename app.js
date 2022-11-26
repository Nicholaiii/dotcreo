const express = require("express");

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/services.html')
});

app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + '/public/portfolio.html')
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/public/blog.html')
});

app.get('/the-modern-attention-span', (req, res) => {
    res.sendFile(__dirname + '/public/the-modern-attention-span_blog.html')
});

app.get('/seo-optimisation-checklist', (req, res) => {
    res.sendFile(__dirname + '/public/seo-optimisation-checklist_blog.html')
});

app.get('/what-makes-a-great-website', (req, res) => {
    res.sendFile(__dirname + '/public/what-makes-a-great-website_blog.html')
});


app.listen(2022, () => {
    console.log(`This app is listening on port 2022`)
});
