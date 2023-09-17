import { axiosClassic } from '../../api/api'

const EXERCISES = '/exercises'

class ExercisesService {
	async getAll() {
		return axiosClassic.get(EXERCISES)
	}

	async create(body) {
		return axiosClassic.post(EXERCISES, body)
	}

	async update(id, body) {
		return axiosClassic.put(`${EXERCISES}/${id}`, body)
	}

	async delete(id) {
		return axiosClassic.delete(`${EXERCISES}/${id}`)
	}
}

export default new ExercisesService()
