const { addComment, getComment, deleteComment } = require('../functions/discussion.js');

const router = require('express').Router();

router.get('/',(req, res)=>{
    res.send("hello discussion page");
})

router.post('/add-comment', addComment)
        .get('/get-comment', getComment)
        .delete('/delete-comment/:id',deleteComment)

module.exports = router