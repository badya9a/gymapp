import { useQuery } from '@tanstack/react-query'
import ExerciseLogService from '../../../../services/exercises/exercise-log.service'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUpdateSet } from './useUpdateLogSet'

export const useExerciseLog = () => {
	const { id } = useParams()

	const [sets, setSets] = useState([])

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(['get exercise log', id], () => ExerciseLogService.getById(id), {
		select: ({ data }) => data,
		onSuccess: data => {
			if (data.times?.length) setSets(data.times)
		}
	})

	const { updateSet, error } = useUpdateSet(sets)

	const onChangeState = (setId, key, value) => {
		const newSets = sets.map(set => {
			if (set.id === setId) {
				return { ...set, [key]: value }
			}

			return set
		})

		setSets(newSets)
	}

	const getSet = setId => {
		return sets.find(set => set.id === setId)
	}

	const getState = (setId, key) => {
		const set = getSet(setId)
		return set ? set[key] : key === 'isCompleted' ? false : null
	}

	const toggleSet = (setId, isCompleted) => {
		const set = getSet(setId)
		updateSet({
			setId,
			body: {
				isCompleted,
				repeat: +set.repeat,
				weight: +set.weight
			}
		})
	}

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		onChangeState,
		toggleSet,
		error,
		getState
	}
}
