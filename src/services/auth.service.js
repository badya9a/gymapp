import Cookies from 'js-cookie'
import { axiosClassic } from '../api/api'
import { TOKEN } from '../shared/constants'

class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await axiosClassic.post(`/auth/${type}`, {
				email,
				password
			})
			if (data.token) Cookies.set(TOKEN, data.token)

			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default new AuthService()
