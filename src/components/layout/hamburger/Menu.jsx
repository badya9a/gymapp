import { menu } from './menu.data'
import cn from 'clsx'
import styles from './Hamburger.module.scss'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import Cookies from 'js-cookie'
import { TOKEN } from '../../../shared/constants'

const Menu = ({ isShow, setIsShow }) => {
	const { setIsAuth } = useAuth()
	const location = useLocation()
	const navigate = useNavigate()

	const handleLogout = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)

		navigate('/auth')
	}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, idx) => (
					<li key={`_menu_${idx}`}>
						<Link
							to={item.link}
							className={item.link === location.pathname ? styles.active : ''}
						>
							{item.title}
						</Link>
					</li>
				))}
				<li>
					<button onClick={handleLogout} className={styles.logout}>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	)
}
export default Menu
