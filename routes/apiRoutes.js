const router = require('express').Router();


router.get('/notes', function(req, res) {
    res
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.post('/notes', function(req, res) {
    res
        .addNotes(req.body)
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.delete('/notes', function(req, res) {
    res
        .removeNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;