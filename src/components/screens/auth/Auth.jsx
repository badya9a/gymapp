import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Auth.module.scss'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
	const { setType, register, handleSubmit, errors, isLoading, onSubmit } =
		useAuthPage()

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						placeholder='Enter email'
						type='email'
						register={register}
						name='email'
						error={errors.email?.message}
						options={{
							required: 'Email is required',
							validate: {
								maxLength: v =>
									v.length <= 50 ||
									'The email should have at most 50 characters',
								matchPattern: v =>
									/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
									'Email address must be a valid address'
							}
						}}
					/>
					<Field
						placeholder='Enter password'
						type='password'
						register={register}
						name='password'
						error={errors.password?.message}
						options={{
							required: 'Password is required',
							validate: {
								minLength: v =>
									v.length >= 6 || 'Password should be at least 6 characters'
							}
						}}
					/>

					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Login</Button>
						<Button clickHandler={() => setType('register')}>Register</Button>
					</div>
				</form>
			</div>
		</>
	)
}
export default Auth
