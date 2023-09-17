/* eslint-disable react/prop-types */
import cn from 'clsx'

import styles from '../ExerciseLog.module.scss'

const ExerciseTableRow = ({ set, onChangeState, toggleSet, getState }) => {
	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: getState(set.id, 'isCompleted')
			})}
			key={`time ${set.id}`}
		>
			<div className={styles.field}>
				<input
					type='tel'
					pattern='[0-9]*'
					value={getState(set.id, 'weight')}
					disabled={set.isCompleted}
					onChange={e => onChangeState(set.id, 'weight', e.target.value)}
				/>
				<p>Kgs</p>
			</div>
			<div className={styles.field}>
				<input
					type='number'
					value={getState(set.id, 'repeat')}
					disabled={set.isCompleted}
					onChange={e => onChangeState(set.id, 'repeat', e.target.value)}
				/>
				<p>Reps</p>
			</div>

			<div key={`Completed ${set.id}/${set.isCompleted}`}>
				<img
					src={
						getState(set.id, 'isCompleted')
							? '/images/exercises/check-completed.svg'
							: '/images/exercises/check.svg'
					}
					className={styles.checkbox}
					alt=''
					onClick={() => {
						toggleSet(set.id, !getState(set.id, 'isCompleted'))
					}}
				/>
			</div>
		</div>
	)
}
export default ExerciseTableRow
