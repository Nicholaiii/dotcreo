const express = require('express');
const router = require('./router');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(2022, () => {
    console.log(`This app is listening on port 2022`)
});
