import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { useMemo } from 'react'
import WorkoutService from '../../../services/workout/workout.service'
import { useProfile } from '../profile/useProfile'
import { useNavigate } from 'react-router-dom'

export const useNewWorkout = () => {
	const { data: profile } = useProfile()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({ mode: 'onChange' })

	const navigate = useNavigate()

	const { mutate, isLoading, error, isSuccess } = useMutation(
		['create workout'],
		body => WorkoutService.create({ ...body, userId: profile?.id }),
		{
			onSuccess: () => {
				navigate('/workouts')
				reset({
					name: '',
					exerciseIds: []
				})
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit,
			control,
			error,
			isSuccess
		}),
		[errors, isLoading, error]
	)
}
