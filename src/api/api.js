import axios from 'axios'

export const axiosClassic = axios.create({
	baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
	headers: {
		'Content-Type': 'application/json'
	}
})

export const setAuthToken = token => {
	if (token) {
		console.log('[axios] confirm new token update  ===>', token)
		axiosClassic.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete axiosClassic.defaults.headers.common['Authorization']
	}
}
