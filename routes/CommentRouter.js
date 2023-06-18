const Router = require('express').Router()

const controller = require('../controllers/CommentController')

Router.post('/create_comment', controller.CreateComment )
Router.get('/find_comments', controller.GetAllComment)
Router.get('/find_comments/:comment_id', controller.GetCommentById)
Router.get('/find_comments/by_postId/:post_id', controller.GetCommentByPostId)
Router.put('/update_comment/:comment_id', controller.UpdateComment)
Router.delete('/delete_comment/:comment_id', controller.DestroyComment)

module.exports = Router