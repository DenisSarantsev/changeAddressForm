import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './dateinput.scss';
import PropTypes from 'prop-types';

export const DateInput = ({ active }) => {
	const [selectedDate, setSelectedDate] = useState(0);

	return(
		<div className={`date-input ${active ? "" : "disabled-calendar"}`}>
			<div className="date-input__container">
				<h2>Start date</h2>
				<DatePicker
					selected={selectedDate}
					onChange={(date) => setSelectedDate(date)}
					dateFormat="MM/dd/yyyy"
					className='date-input__date-picker'
					placeholderText='MM/DD/YYYY'
				/>
			</div>
			<img 
				src="/src/static/img/icons/calendar.png" 
				alt="calendar icon" 
				className="date-input__icon"/>
		</div>
	)
}

DateInput.propTypes = {
  active: PropTypes.bool.isRequired, // или PropTypes.bool, если проп не является обязательным
};