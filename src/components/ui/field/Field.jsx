import styles from './Field.module.scss'

const Field = ({ register, placeholder, name, type, options, error }) => {
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				placeholder={placeholder}
				type={type}
				{...register(name, options)}
			/>
			{error && <small className={styles.error}>{error}</small>}
		</div>
	)
}
export default Field
