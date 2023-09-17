import { axiosClassic } from '../../api/api'

const LOG = '/workouts/log'

class WorkoutLogService {
	async getById(id) {
		return axiosClassic.get(`${LOG}/${id}`)
	}

	async create(workoutId) {
		return axiosClassic.post(`${LOG}/${workoutId}`)
	}

	async complete(id) {
		return axiosClassic.patch(`${LOG}/complete/${id}`)
	}
}

export default new WorkoutLogService()
