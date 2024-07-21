import { useEffect, useState } from "react";
import { DateInput } from "../../../../../components/DateInput/DateInput.jsx";
import { TelInput } from "../../../../../components/TelInput/TelInput.jsx";
import { useContext } from "react";
import { MyContext } from "../../../../../components/ContextProvider/ContextProvider.jsx";
import PropTypes from 'prop-types';
import "./first-step.scss";


export const FirstStep = ({ targetRef }) => {
	// Тип переезда
	const { typeOfMove, setTypeOfMove } = useContext(MyContext); // Тип переезда ( perm/temp )
	const { setTempDate } = useContext(MyContext); // Дата, до которой пользователь меняет место жительства
	// Персональная информация
	const { firstName, setFirstName } = useContext(MyContext); // Имя
	const { lastName, setLastName } = useContext(MyContext); // Фамилия
	const { setUserEmail } = useContext(MyContext); // Почта
	const { setUserPhone } = useContext(MyContext); // ТелContext
	// Каждый email по отдельности для валидации
	const [ firstEmail, setFirstEmail ] = useState(null);
	const [ secondEmail, setSecondEmail ] = useState(null);
	const [ coincidenceEmails, setCoincidenceEmails ] = useState(null);

	const handleChange = (event) => {
    setTypeOfMove(event.target.value);
  };

	const validateEmails = (firstEmail, secondEmail) => {
		if ( firstEmail !== null && secondEmail !== null && firstEmail === secondEmail ) {
			setUserEmail(secondEmail)
			setCoincidenceEmails(true)
		} else if ( firstEmail === null && secondEmail === null ) {
			setCoincidenceEmails(true)
		} else {
			setCoincidenceEmails(false)
		}
	}

	const validateFields = ( state ) => {
		if ( state === null ) {
			return true
		} else if ( typeof state === "string" && state.length === 0 ) {
			return false
		} else {
			return true
		}
	}

	useEffect(() => {
		validateEmails( firstEmail, secondEmail )
	}, [ secondEmail ])

	return(
		<div ref={targetRef} className="first-step form-card">
			<div className="first-step__title-container form-card-title-container">
				<h2 className="first-step__title">
					Step 1: Type of Move
				</h2>
			</div>
			<div className="first-step__content form-card-content">

				<div className="first-step__types content-section">
					<h4 className="personal-information__title form-subtitle">
						Type of move
					</h4>
					<div className="first-step__types-buttons">
						<div 
							onClick={() => setTypeOfMove("perm")}
							className={`first-step__type-perm type-card ${typeOfMove === "perm" ? "active-border" : "" }`}>
							<label >
								<input 
									onChange={handleChange}
									checked={typeOfMove === "perm"}
									value={"perm"} 
									name="type" 
									type="radio" />
								Permanent
							</label>
							<div>
								Select permanent if you have no plans to move back to your old address
							</div>
						</div>
						<div 
							onClick={() => setTypeOfMove("temp")}
							className={`first-step__type-temp type-card ${typeOfMove === "temp" ? "active-border" : "" }`}>
							<label >
								<input 
									onChange={handleChange}
									checked={typeOfMove === "temp"}
									value={"temp"} 
									name="type" 
									type="radio" />
								Temporary
							</label>
							<div>
								Select temporary if you plan to return to your old address within 6 months
							</div>
						</div>
					</div>
					<DateInput 
						active={typeOfMove === "temp" ? true : false}
						setTempDate={setTempDate}
					/>
				</div>

				<div className="first-step__personal-information personal-information content-section">
					<h4 className="personal-information__title form-subtitle">
						Personal information
					</h4>
					<input 
						onChange={(event) => setFirstName(event.target.value)}
						type="text" 
						placeholder="First name"
						className={`personal-information__first-name form-input ${ !validateFields(firstName) ? "red-border" : "" }`}/>
					<input 
						onChange={(event) => setLastName(event.target.value)}
						type="text" 
						placeholder="Last name"
						className={`personal-information__last-name form-input ${ !validateFields(lastName) ? "red-border" : "" }`}/>
					<input 
						onChange={(event) => setFirstEmail(event.target.value)}
						type="text" 
						placeholder="Email"
						className={`personal-information__email form-input ${ !validateFields(firstEmail) ? "red-border" : "" }`}/>
					<input 
						onChange={(event) => {setSecondEmail(event.target.value)}}
						type="text" 
						placeholder="Confirm email"
						className={`
							personal-information__confirm-email form-input 
							${ !coincidenceEmails ? "red-border" : "" }
							${ !validateFields(secondEmail) ? "red-border" : "" }
						`}/>
					<TelInput setUserPhone={setUserPhone}/>
				</div>

				<div className="first-step__agree">
					You acknowledge and agree that by using the site, any applications, and the services, you are at least 18 years of age and that you are the person, executor, power of attorney, guardian, authorized officer or agent of the person for whom mail should be forwarded by the usps, under this order.
				</div>
			</div>
		</div>
	)
}

FirstStep.propTypes = {
  targetRef: PropTypes.any.isRequired, // или PropTypes.bool, если проп не является обязательным
};