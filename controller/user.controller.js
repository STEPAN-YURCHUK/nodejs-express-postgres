import UserService from '../service/user.service.js'

class UserController {
	async createUser(req, res) {
		try {
			const createUser = await UserService.createUser(req.body)
			res.json(createUser.rows[0])
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async getUser(req, res) {
		try {
			const getUser = await UserService.getUser()
			res.json(getUser.rows)
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async getOneUser(req, res) {
		try {
			const getOneUser = await UserService.getOneUser(req.params.id)
			res.json(getOneUser.rows[0])
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async updateUser(req, res) {
		try {
			const updateUser = await UserService.updateUser(req.body)
			res.json(updateUser.rows[0])
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
	async deleteUser(req, res) {
		try {
			const deleteUser = await UserService.deleteUser(req.params.id)
			res.json(deleteUser.rows[0])
		} catch (e) {
			res.status(500).json(e)
		}
	}
}

export default new UserController()
