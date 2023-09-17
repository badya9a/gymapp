import { axiosClassic } from '../../api/api'

const WORKOUTS = '/workouts'

class WorkoutService {
	async getAll() {
		return axiosClassic.get(WORKOUTS)
	}

	async getWorkoutsByUser(id) {
		return axiosClassic.get(`${WORKOUTS}/user/${id}`)
	}

	async getSpecificWorkout(id) {
		return axiosClassic.get(`${WORKOUTS}/${id}`)
	}

	// name, exerciseIds, userId
	async create(body) {
		return axiosClassic.post(WORKOUTS, body)
	}

	async update(id, body) {
		return axiosClassic.put(`${WORKOUTS}/${id}`, body)
	}

	async delete(id) {
		return axiosClassic.delete(`${WORKOUTS}/${id}`)
	}
}

export default new WorkoutService()
