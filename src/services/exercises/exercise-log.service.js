import { axiosClassic } from '../../api/api'

const LOG = '/exercises/log'

class ExercisesLogService {
	async getById(id) {
		return axiosClassic.get(`${LOG}/${id}`)
	}

	async create(exerciseId) {
		return axiosClassic.post(`${LOG}/${exerciseId}`)
	}

	// weight, repeat, isCompleted
	async updateSet(exerciseLogId, body) {
		return axiosClassic.put(`${LOG}/time/${exerciseLogId}`, body)
	}

	// isCompleted
	async complete(id, body) {
		return axiosClassic.patch(`${LOG}/complete/${id}`, body)
	}
}

export default new ExercisesLogService()
