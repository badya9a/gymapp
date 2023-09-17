import { axiosClassic } from '../api/api'

const USERS = 'users'

class UserService {
	async getProfile() {
		return axiosClassic.get(`${USERS}/profile`)
	}
}

export default new UserService()
