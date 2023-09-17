import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import ExercisesService from '../../../services/exercises/exercises.service'
import { useMemo } from 'react'

export const useNewExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({ mode: 'onChange' })

	const { mutate, isLoading, error, isSuccess } = useMutation(
		['create new exercise'],
		body => ExercisesService.create(body),
		{
			onSuccess: () => {
				reset()
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
