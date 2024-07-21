import { StatesList } from "../../../../../components/StatesList/StatesList.jsx";
import "./second-step.scss";
import { useContext } from "react";
import { MyContext } from "../../../../../components/ContextProvider/ContextProvider.jsx";

export const SecondStep = () => {

	// Старые данные
	const { oldStreet, setOldStreet } = useContext(MyContext); // Улица
	const { oldCity, setOldCity } = useContext(MyContext); // Город
	const { setOldState } = useContext(MyContext); // Штат
	const { oldZipCode, setOldZipCode } = useContext(MyContext); // Zip code
	// Новые данные
	const { newStreet, setNewStreet } = useContext(MyContext); // Улица
	const { newCity, setNewCity } = useContext(MyContext); // Город
	const { setNewState } = useContext(MyContext); // Штат
	const { newZipCode, setNewZipCode } = useContext(MyContext); // Zip code
	// Подтверждение, что резиденция была построена за последние 6 месяцев
	const { sixMonthsResidence, setSixMonthsResidence } = useContext(MyContext); // True or false

	const validateFields = ( state ) => {
		if ( state === null ) {
			return true
		} else if ( typeof state === "string" && state.length === 0 ) {
			return false
		} else {
			return true
		}
	}

	const handleCheckboxChange = () => {
    setSixMonthsResidence(!sixMonthsResidence);
  };

	return(
		<div className="second-step form-card">
			<div className="second-step__title-container form-card-title-container">
				<h2 className="second-step__title">
					Step 2: Address details
				</h2>
			</div>
			<div className="second-step__content form-card-content">

				<div className="second-step__old-address old-address content-section">
					<h4 className="old-address__title form-subtitle">
						Old address
					</h4>
					<input 
						onChange={(event) => setOldStreet(event.target.value)}
						type="text" 
						placeholder="Street address"
						className={`old-address__first-name form-input ${ !validateFields(oldStreet) ? "red-border" : "" }`}/>
					<input 
						onChange={(event) => setOldCity(event.target.value)}
						type="text" 
						placeholder="Old city"
						className={`old-address__first-name form-input ${ !validateFields(oldCity) ? "red-border" : "" }`}/>
					<StatesList stateData={setOldState}/>
					<input 
						onChange={(event) => setOldZipCode(event.target.value)}
						type="text" 
						placeholder="Old zip code"
						className={`old-address__first-name form-input ${ !validateFields(oldZipCode) ? "red-border" : "" }`}/>
				</div>

				<div className="second-step__new-address new-address content-section">
					<h4 className="new-address__title form-subtitle">
						New address
					</h4>
					<input 
						onChange={(event) => setNewStreet(event.target.value)}
						type="text" 
						placeholder="Street address"
						className={`new-address__first-name form-input ${ !validateFields(newStreet) ? "red-border" : "" }`}/>
					<input 
						onChange={(event) => setNewCity(event.target.value)}
						type="text" 
						placeholder="New city"
						className={`new-address__first-name form-input ${ !validateFields(newCity) ? "red-border" : "" }`}/>
					<StatesList stateData={setNewState}/>
					<input 
						onChange={(event) => setNewZipCode(event.target.value)}
						type="text" 
						placeholder="New zip code"
						className={`new-address__first-name form-input ${ !validateFields(newZipCode) ? "red-border" : "" }`}/>
				</div>

				<div className="second-step__checkbox ss-checkbox">
					<input
						checked={sixMonthsResidence}
						onChange={handleCheckboxChange}
						id="ss-check"
						type="checkbox"
						className="ss-checkbox__input"
					/>
					<label
						htmlFor="ss-check"
						className="ss-checkbox__label"
					>
						This residence was built in the last 6 months
					</label>
				</div>
			</div>
		</div>
	)
}