import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Создаем контекст с начальным значением
export const MyContext = createContext();

// Провайдер контекста
export const ContextProvider = ({ children }) => {
		// ------------> Базовые
    const [ burgerMenuStatus, setBurgerMenuStatus ] = useState('close'); // Открытое или закрытое бургер меню

		// ------------> Форма
		// Тип переезда
		const [ typeOfMove, setTypeOfMove ] = useState('perm'); // Тип переезда ( perm/temp )
		const [ tempDate, setTempDate ] = useState(null); // Дата, до которой пользователь меняет место жительства
		// Персональная информация
		const [ firstName, setFirstName ] = useState(null); // Имя
		const [ lastName, setLastName ] = useState(null); // Фамилия
		const [ userEmail, setUserEmail ] = useState(null); // Почта
		const [ userPhone, setUserPhone ] = useState(null); // Телефон
		// Старые данные
		const [ oldStreet, setOldStreet ] = useState(null); // Улица
		const [ oldCity, setOldCity ] = useState(null); // Город
		const [ oldState, setOldState ] = useState(""); // Штат
		const [ oldZipCode, setOldZipCode ] = useState(null); // Zip code
		// Новые данные
		const [ newStreet, setNewStreet ] = useState(null); // Улица
		const [ newCity, setNewCity ] = useState(null); // Город
		const [ newState, setNewState ] = useState(""); // Штат
		const [ newZipCode, setNewZipCode ] = useState(null); // Zip code
		// Подтверждение, что резиденция была построена за последние 6 месяцев
		const [ sixMonthsResidence, setSixMonthsResidence ] = useState(false); // True or false
		// Тип переезда
		const [ moveType, setMoveType ] = useState("individual"); // Индивидуальный, Семейный, Бизнес

    return (
        <MyContext.Provider value={{				
					burgerMenuStatus, setBurgerMenuStatus, 
					typeOfMove, setTypeOfMove,
					tempDate, setTempDate,
					firstName, setFirstName,
					lastName, setLastName,
					userEmail, setUserEmail,
					userPhone, setUserPhone,
					oldStreet, setOldStreet,
					oldCity, setOldCity,
					oldState, setOldState,
					oldZipCode, setOldZipCode,
					newStreet, setNewStreet,
					newCity, setNewCity,
					newState, setNewState,
					newZipCode, setNewZipCode,
					sixMonthsResidence, setSixMonthsResidence,
					moveType, setMoveType
					}}> {children}
      </MyContext.Provider>
    );
};

ContextProvider.propTypes = {
  children: PropTypes.any.isRequired, // или PropTypes.bool, если проп не является обязательным
};
