import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import { FiArrowLeft } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				!isAuth && pathname === '/auth' ? null : (
					<>
						<button
							aria-label='Go to profile'
							onClick={() => navigate(isAuth ? backLink : '/auth')}
						>
							<FiArrowLeft color='white' />
						</button>
					</>
				)
			) : (
				<>
					<button
						aria-label='Go back arrow'
						onClick={() => navigate('/profile')}
					>
						<BsPerson />
					</button>
				</>
			)}
			{isAuth && <Hamburger />}
			{/* User profile */}
		</header>
	)
}
export default Header
