import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import WorkoutService from '../../../../services/workout/workout.service'
import WorkoutLogService from '../../../../services/workout/workout-log.service'
import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { useProfile } from '../../profile/useProfile'

export const useWorkout = () => {
	const { data: profile } = useProfile()

	const {
		data: workouts,
		isSuccess: isSuccessGetWorkouts,
		isLoading: isWorkoutsLoading
	} = useQuery(
		['get workouts by user'],
		() => WorkoutService.getWorkoutsByUser(profile.id),
		{
			select: ({ data }) => data
		}
	)

	const navigate = useNavigate()

	const {
		mutate: createWorkoutLog,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['Create new workout log'],
		workoutId => WorkoutLogService.create(workoutId),
		{ onSuccess: ({ data }) => navigate(`/workout/${data.id}`) }
	)

	const queryClient = useQueryClient()

	const { mutate: deleteWorkout } = useMutation(
		['delete workout'],
		workoutId => WorkoutService.delete(workoutId),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get workouts by user'])
			}
		}
	)

	return useMemo(
		() => ({
			workouts,
			isSuccessGetWorkouts,
			isWorkoutsLoading,
			createWorkoutLog,
			isLoading,
			isSuccessMutate,
			error,
			deleteWorkout
		}),
		[
			workouts,
			createWorkoutLog,
			isSuccessMutate,
			error,
			deleteWorkout,
			isWorkoutsLoading
		]
	)
}
