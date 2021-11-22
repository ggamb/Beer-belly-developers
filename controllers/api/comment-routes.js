const router = require('express').Router();
const Comment = require('../../models/Comment');


router.get('/', (req, res) => {
    Comment.findAll()
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // expects => {comment_text: "This is the comment", user_id: 1, BarList_id: example-bar-text}
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        BarList_id: req.body.BarList_id
    })
        .then(dbCommentData => { res.json(dbCommentData) })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/:barID', (req, res) => {
    let barID = req.params.barID;

    Comment.findAll({
        where: { BarList_id: barID }
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            res.status(500).json(err);
        });
});




module.exports = router;