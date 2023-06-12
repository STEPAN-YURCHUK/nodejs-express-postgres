import db from '../db.js'

class UserService {
	async createUser(data) {
		const createUser = await db.query(
			'INSERT INTO person (name, surname) values ($1, $2) RETURNING *',
			[data.name, data.surname]
		)
		return createUser
	}
	async getUser() {
		const getUser = await db.query('SELECT * FROM person')
		return getUser
	}
	async getOneUser(id) {
		const getOneUser = await db.query('SELECT * FROM person WHERE id = $1', [
			id,
		])
		return getOneUser
	}
	async updateUser(data) {
		if (!data.id) {
			throw new Error('ID не указан')
		}
		const updateUser = await db.query(
			'UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *',
			[data.name, data.surname, data.id]
		)
		return updateUser
	}
	async deleteUser(id) {
		const deleteUser = await db.query(
			'DELETE FROM person WHERE id = $1 RETURNING *',
			[id]
		)
		return deleteUser
	}
}

export default new UserService()
