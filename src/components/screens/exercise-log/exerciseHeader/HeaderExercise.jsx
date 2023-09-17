import cn from 'clsx'

import stylesLayout from '../../../layout/Layout.module.scss'
import styles from '../ExerciseLog.module.scss'
import Header from '../../../layout/header/Header'
import { getImagePath } from '../../../../utils/ImagePath.util'

const HeaderExercise = ({ exerciseLog, isSuccess, backLink }) => {
	return (
		<div
			className={cn(stylesLayout.layout, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/ex-bg-1.jpg')`,
				height: 300
			}}
		>
			<Header backLink={backLink} />

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={getImagePath(exerciseLog.iconPath)}
						alt={exerciseLog.name}
						height='36'
					/>
					<h1 className={stylesLayout.heading}>{exerciseLog.name}</h1>
				</div>
			)}
		</div>
	)
}
export default HeaderExercise
