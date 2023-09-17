import HeaderExercise from './exerciseHeader/HeaderExercise'

import Loader from '../../ui/loader/Loader'

import styles from './ExerciseLog.module.scss'
import Alert from '../../ui/alert/Alert'
import { useExerciseLog } from './hooks/useExerciseLog'
import ExerciseError from './ExerciseError'

import ExerciseTableRow from './exerciseTable/ExerciseTableRow'

const ExerciseLog = () => {
	const {
		exerciseLog,
		isSuccess,
		isLoading,
		error,
		onChangeState,
		toggleSet,
		getState
	} = useExerciseLog()

	return (
		<>
			<HeaderExercise
				backLink={
					isSuccess ? `/workout/${exerciseLog?.workoutLogId}` : '/workouts'
				}
				isSuccess={isSuccess}
				exerciseLog={exerciseLog?.exercise}
			/>

			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError error={error} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{exerciseLog?.times.map(item => (
							<ExerciseTableRow
								onChangeState={onChangeState}
								toggleSet={toggleSet}
								getState={getState}
								set={item}
								key={item.id}
							/>
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Sets not found' />
				)}
			</div>
		</>
	)
}
export default ExerciseLog
