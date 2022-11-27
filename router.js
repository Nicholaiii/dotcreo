const { Router } = require('express');

const router = Router();

const send = (file) => (req, res) => {
    res.sendFile(__dirname + file)
};


router.get('/', send('/public/index.html'));
router.get('/services', send('/public/services.html'));
router.get('/portfolio', send('/public/portfolio.html'));

/* Blog post sub-router */
router.use('/blog', require('./blog.js'));

module.exports = router;
