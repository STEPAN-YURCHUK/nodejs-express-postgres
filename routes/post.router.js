import Router from 'express'
import PostController from '../controller/post.controller.js'

const router = new Router()

router.post('/post', PostController.createPost)
router.get('/posts', PostController.getPostsByUser)

export default router
