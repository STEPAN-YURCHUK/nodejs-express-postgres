import db from '../db.js'

class PostService {
	async createPost(data) {
		const createPost = await db.query(
			'INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *',
			[data.title, data.content, data.user_id]
		)
		return createPost
	}
	async getPostsByUser(id) {
		const getPost = await db.query('SELECT * FROM post WHERE user_id = $1', [
			id,
		])
		if (getPost.rows.length == 0) {
			throw new Error(
				'Пользователя с таким ID не существует или у этого пользователя нет постов'
			)
		} else {
			return getPost.rows
		}
	}
}

export default new PostService()
