import ReactSelect from 'react-select'
import makeAnimated from 'react-select/animated'

import styles from './Select.module.scss'

const animatedComponents = makeAnimated()

const Select = ({ placeholder, error, field, options, isLoading, isMulti }) => {
	const onChange = newValue => {
		field.onChange(isMulti ? newValue.map(item => item.value) : newValue.value)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter(option => field.value.indexOf(option.value) >= 0)
				: options.find(option => option.value === field.value)
		} else {
			return isMulti ? [] : ''
		}
	}

	return (
		<div className={styles.selectContainer}>
			<label>
				<ReactSelect
					classNamePrefix='custom-select'
					placeholder={placeholder}
					options={options}
					value={getValue()}
					isMulti={isMulti}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
				/>
			</label>
			{error && <div className='error'>{error.message}</div>}
		</div>
	)
}
export default Select
