import { Fragment } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'

import { useNavigate, useParams } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workout/workout-log.service'
import HeaderWorkout from './HeaderWorkout'
import ExerciseItem from './ExerciseItem'
import Loader from '../../../ui/loader/Loader'

import styles from './Workout.module.scss'
import Alert from '../../../ui/alert/Alert'
import Button from '../../../ui/button/Button'

const SingleWorkout = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const {
		data: workoutLog,
		isLoading,
		isSuccess,
		error: errorCompleted
	} = useQuery(['get workout log', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})

	const { mutate, isLoading: isLoadingCompleteWorkout } = useMutation(
		['complete workout', id],
		() => {
			WorkoutLogService.complete(id)
		},
		{
			onSuccess() {
				navigate('/workouts')
			}
		}
	)

	return (
		<>
			<HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{errorCompleted && <Alert type='error' text={errorCompleted} />}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map(exerciseLog => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
							</Fragment>
						))}
					</div>
				)}
				<Button
					disabled={isLoadingCompleteWorkout}
					clickHandler={() => mutate(workoutLog?.exerciseLogs)}
				>
					Complete workout
				</Button>
			</div>
		</>
	)
}
export default SingleWorkout
