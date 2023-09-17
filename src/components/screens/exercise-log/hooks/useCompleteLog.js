import { useMutation } from '@tanstack/react-query'
import ExerciseLogService from '../../../../services/exercises/exercise-log.service'
import { useNavigate, useParams } from 'react-router-dom'

export const useCompleteLog = () => {
	const { id } = useParams()

	const navigate = useNavigate()

	const { mutate, error: errorCompleted } = useMutation(
		['complete log'],
		body => ExerciseLogService.complete(id, body),
		{
			onSuccess: ({ data }) => {
				navigate(`/workout/${data.workoutLogId}`)
			}
		}
	)

	return { completeLog: mutate, errorCompleted }
}
