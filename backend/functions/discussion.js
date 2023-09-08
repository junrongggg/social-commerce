const DiscussionSchema = require("../models/discussionModel.js");

exports.addComment = async (req, res) => {
    
	const { username, comments } = req.body;

	discussion = DiscussionSchema({
		username,
		comments
	});

	try{
        //validations
        if(!username || !comments){
            return res.status(400).json({message: 'There must be a valid input and all fields are required'});
        }
        await discussion.save() //saving input to the database
        res.status(200).json({message: 'Comment added'})
    } catch (error) {
        res.status(500).json({message: 'Server error', error})
    }

    console.log(discussion);
}

/** gets comments entries from the database to be displayed in the front end */
exports.getComment = async (req, res) => {
    try{
        const discussion = await DiscussionSchema.find().sort({createdAt: -1})
        res.status(200).json(discussion)
    } catch (error) {
        res.status(500).json({message: 'Server error', error})
    }
}

/** Allows the user to delete the comments from the database */
exports.deleteComment = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    DiscussionSchema.findByIdAndDelete(id)
        .then((item) => {
            res.status(200).json({message: 'Comment Deleted'})
        })
        .catch((error) => {
            res.status(500).json({message: 'Server error', error})
        })
}