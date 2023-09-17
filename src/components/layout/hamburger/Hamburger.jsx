import { useState } from 'react'
import { useClickAway } from '@uidotdev/usehooks'
import styles from './Hamburger.module.scss'
import { IoCloseSharp } from 'react-icons/io5'
import { CgMenuRight } from 'react-icons/cg'
import Menu from './Menu'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)
	const ref = useClickAway(() => {
		setIsShow(false)
	})

	return (
		<div className={styles.wrapper} ref={ref}>
			<button aria-label='open menu' onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoCloseSharp /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}
export default Hamburger
