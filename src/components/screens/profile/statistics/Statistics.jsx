import { useProfile } from '../useProfile'
import styles from './Statistics.module.scss'

const Statistics = () => {
	const { data } = useProfile()

	return (
		<div className={styles.statistic}>
			<ul className={styles.statlist}>
				{data?.statistics?.map((stat, index) => (
					<li className={styles.eachstat} key={index}>
						<p className={styles.title}>{stat.label}</p>
						<span className={styles.number}>{stat.value}</span>
					</li>
				))}
			</ul>
		</div>
	)
}
export default Statistics
