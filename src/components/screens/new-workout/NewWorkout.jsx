import cn from 'clsx'

import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import { useNewWorkout } from './useNewWorkout'

import styles from './NewWorkout.module.scss'
import Alert from '../../ui/alert/Alert'

import { useListExercises } from './useListExercises'
import { Controller } from 'react-hook-form'
import Select from '../../ui/select/Select'

const NewWorkout = () => {
	const {
		register,
		onSubmit,
		isLoading,
		handleSubmit,
		errors,
		error,
		control,
		isSuccess
	} = useNewWorkout()

	const { data, isLoading: isExercisesLoading } = useListExercises()

	return (
		<>
			<Layout
				heading='create new Workout'
				bgImage='images/new-workout-bg.jpg'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && <Loader />}
				<div className={styles.wrapper}>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						<Field
							register={register}
							name='name'
							placeholder='Name'
							error={errors?.name?.message}
							options={{
								required: 'Name is required'
							}}
						/>

						<Controller
							name='exerciseIds'
							control={control}
							render={({ field, fieldState: { error } }) => (
								<Select
									error={error}
									field={field}
									options={
										data?.map(exercise => {
											return {
												id: exercise.id,
												value: exercise.id,
												label: exercise.name
											}
										}) || []
									}
									isLoading={isExercisesLoading}
									isMulti
									placeholder='Select exercises'
								/>
							)}
							rules={{ required: 'Select at least one exercise' }}
						/>

						<Button>Create</Button>
					</form>
				</div>
			</div>
		</>
	)
}
export default NewWorkout
