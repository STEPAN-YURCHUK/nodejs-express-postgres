import PostService from '../service/post.service.js'

class PostController {
	async createPost(req, res) {
		try {
			const createPost = await PostService.createPost(req.body)
			res.json(createPost.rows[0])
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async getPostsByUser(req, res) {
		try {
			const getPost = await PostService.getPostsByUser(req.query.id)
			res.json(getPost)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
}

export default new PostController()
