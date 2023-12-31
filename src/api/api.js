import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from '../shared/constants'

export const axiosClassic = axios.create({
	baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookies.get(TOKEN)}`
	}
})

export const setAuthToken = token => {
	if (token) {
		axiosClassic.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		return
	}
}
