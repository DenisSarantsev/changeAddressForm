import { useEffect, useRef } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import "./telinput.scss";

export const TelInput = () => {
	const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      intlTelInput(inputRef.current, {
        initialCountry: 'us', // Укажите начальную страну, можно изменить
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js', // Для форматирования номера
      });
    }
  }, []);

  return (
    <div className='tel-input'>
      <input 
				type="tel" 
				placeholder='Phone number'
				className='tel-input__input'
				ref={inputRef} />
    </div>
  );
}