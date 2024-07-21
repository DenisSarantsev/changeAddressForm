import { useEffect, useRef, useState } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import "./telinput.scss";
import PropTypes from 'prop-types';


export const TelInput = ({ setUserPhone }) => {
	const inputRef = useRef(null);
	const [ phoneValue, setPhoneValue ] = useState()

  useEffect(() => {
    if (inputRef.current) {
      intlTelInput(inputRef.current, {
        initialCountry: 'us', // Укажите начальную страну, можно изменить
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js', // Для форматирования номера
      });
    }
  }, []);

	const validateFields = ( state ) => {
		if ( state === null || state === undefined ) {
			return true
		} else if ( typeof state === "string" && state.length < 7 && state.length > 15 ) {
			return false
		} else {
			return true
		}
	}

  return (
    <div className={`tel-input ${ !validateFields(phoneValue) ? "red-border" : "" }`}>
      <input 
				onKeyUp={(event) => {
					setUserPhone(event.target.value)
					typeof phoneValue !== "undefined" ? !validateFields(phoneValue) : null
				}}
				onBlur={(event) => setPhoneValue(event.target.value)}
				type="tel" 
				placeholder='Phone number'
				className={`tel-input__input`}
				ref={inputRef}/>
    </div>
  );
}

TelInput.propTypes = {
	setUserPhone:  PropTypes.func.isRequired,
};