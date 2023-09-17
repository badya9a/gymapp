/* eslint-disable react/prop-types */
import styles from './Button.module.scss'
import cn from 'clsx'

const Button = ({
	children,
	clickHandler = null,
	size = 'xl',
	disabled = false
}) => {
	return (
		<div className={styles.wrapper}>
			<button
				disabled={disabled}
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}
export default Button
