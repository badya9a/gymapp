import cn from 'clsx'
import { Controller } from 'react-hook-form'

import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import { useNewExercise } from './useNewExercise'

import styles from './NewExercise.module.scss'
import Alert from '../../ui/alert/Alert'
import { getIconPath } from './icon-path.util'
import { getImagePath } from '../../../utils/ImagePath.util'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

const NewExercise = () => {
	const {
		register,
		control,
		onSubmit,
		isLoading,
		handleSubmit,
		errors,
		error,
		isSuccess
	} = useNewExercise()

	return (
		<>
			<Layout
				heading='create new exercise'
				bgImage='images/new-exercise-bg.jpg'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
				{isLoading && <Loader />}
				<div className={styles.wrapper}>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						<Field
							register={register}
							name='name'
							placeholder='Name'
							error={errors.name?.message}
							options={{
								required: 'Name is required'
							}}
						/>
						<Field
							register={register}
							name='times'
							placeholder='Enter sets'
							error={errors.times?.message}
							options={{
								valueAsNumber: true,
								validate: value => value > 0 || 'Times must be number',
								required: 'Times is required'
							}}
						/>

						<Controller
							name='iconPath'
							control={control}
							render={({ field: { value, onChange } }) => (
								<div className={styles.images}>
									{data.map(name => (
										<div
											key={`ex ${name}`}
											className={cn({
												[styles.active]: value === getIconPath(name)
											})}
										>
											<img
												key={`ex img ${name}`}
												src={`${getImagePath(getIconPath(name))}`}
												alt={name}
												onClick={() => onChange(getIconPath(name))}
												draggable={false}
												height='45'
											/>
											<p>{name}</p>
										</div>
									))}
								</div>
							)}
						/>

						{errors?.iconPath && (
							<div className='error'>{errors.iconPath?.message}</div>
						)}

						<Button>Create</Button>
					</form>
				</div>
			</div>
		</>
	)
}
export default NewExercise
