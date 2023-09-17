import styles from '../detail/Workout.module.scss'
import { useWorkout } from './useWorkouts'
import { BsTrash3 } from 'react-icons/bs'

const WorkoutItem = ({ workout }) => {
	const { createWorkoutLog, deleteWorkout } = useWorkout()

	return (
		<div
			className={styles.item}
			style={{
				backgroundImage: 'url(images/workout-bg-2.jpg)'
			}}
		>
			<button
				aria-label='Create new workout log'
				onClick={() => createWorkoutLog(workout.id)}
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<span
					style={{
						fontWeight: 'bolder',
						color: ''
					}}
				>
					{workout.name}
				</span>
			</button>

			<button
				onClick={() => deleteWorkout(workout.id)}
				style={{
					fontWeight: 'bolder',
					justifyContent: 'flex-end',
					width: '20%'
				}}
			>
				<BsTrash3 />
			</button>
		</div>
	)
}
export default WorkoutItem
