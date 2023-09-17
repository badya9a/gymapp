import Layout from '../../../layout/Layout'
import Alert from '../../../ui/alert/Alert'
import Loader from '../../../ui/loader/Loader'
import styles from '../detail/Workout.module.scss'
import WorkoutItem from './WorkoutItem'
import { useWorkout } from './useWorkouts'

const ListWorkouts = () => {
	const {
		workouts,
		isSuccessGetWorkouts,
		isSuccessMutate,
		error,
		isWorkoutsLoading
	} = useWorkout()

	return (
		<>
			<Layout bgImage='/images/workout-bg.jpg' heading='Workouts list' />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isWorkoutsLoading && <Loader />}
				{isSuccessGetWorkouts && (
					<div className={styles.wrapper}>
						{workouts?.map(workout => (
							<WorkoutItem workout={workout} key={workout.id} />
						))}
					</div>
				)}

				{isSuccessGetWorkouts && workouts?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	)
}
export default ListWorkouts
