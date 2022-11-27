const { Router } = require('express')

const router = Router()

const send = (file) => (req, res) => {
    res.sendFile(__dirname + file)
}

router.get('/', send('/public/blog.html'));
router.get('/the-modern-attention-span', send('/public/the-modern-attention-span_blog.html'));
router.get('/seo-optimisation-checklist', send('/public/seo-optimisation-checklist_blog.html'));
router.get('/what-makes-a-great-website', send('/public/what-makes-a-great-website_blog.html'));

module.exports = router;