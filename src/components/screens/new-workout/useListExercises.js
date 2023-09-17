import { useQuery } from '@tanstack/react-query'
import ExercisesService from '../../../services/exercises/exercises.service'

export const useListExercises = () =>
	useQuery(['list exercises'], () => ExercisesService.getAll(), {
		select: ({ data }) => data
	})
