import Alert from '../../ui/alert/Alert'

const ExerciseError = ({ error }) => {
	if (!error) return null

	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Alert key={error} type='error' text={error} />
		</div>
	)
}
export default ExerciseError
