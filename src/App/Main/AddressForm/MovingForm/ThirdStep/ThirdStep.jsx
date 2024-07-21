import "./third-step.scss";
import { useContext } from "react";
import { useState } from "react";
import { MyContext } from "../../../../../components/ContextProvider/ContextProvider.jsx";
import { fetchFormRequest } from "../../../../../assets/js/fetch.js";

export const ThirdStep = () => {

	const [ validateMessage, setValidateMessage ] = useState(true);

	const { 
		typeOfMove, 
		tempDate, 
		firstName, 
		lastName, 
		userEmail, 
		userPhone,  
		oldStreet,  
		oldCity, 
		oldState,  
		oldZipCode,  
		newStreet,  
		newCity, 
		newState, 
		newZipCode,
		sixMonthsResidence,
		moveType,
		setMoveType
	} = useContext(MyContext); 

	const resultData = {
		typeOfMove: typeOfMove, // String
		tempDate: tempDate, // Object
		firstName: firstName, // String
		lastName: lastName, // String
		userEmail: userEmail, // String
		userPhone: userPhone, // String
		oldStreet: oldStreet, // String
		oldCity: oldCity, // String
		oldState: oldState, // String
		oldZipCode: oldZipCode, // String
		newStreet: newStreet, // String
		newCity: newCity, // String
		newState: newState, // String
		newZipCode: newZipCode, // String
		sixMonthsResidence: sixMonthsResidence, // Boolean
		moveType: moveType, // // String
	}

	const simpleValidateData = () => {
		if (
			validateLength( resultData.typeOfMove ) &&
			validateLength( resultData.firstName ) &&
			validateLength( resultData.lastName ) &&
			validateLength( resultData.userEmail ) &&
			validateLength( resultData.userPhone ) &&
			validateLength( resultData.oldStreet ) &&
			validateLength( resultData.oldCity ) &&
			validateLength( resultData.oldState ) &&
			validateLength( resultData.oldZipCode ) &&
			validateLength( resultData.newStreet ) &&
			validateLength( resultData.newCity ) &&
			validateLength( resultData.newState ) &&
			validateLength( resultData.newZipCode ) &&
			validateLength( resultData.moveType ) 
		) {
				setValidateMessage(true)
				return true
			} else {
				setValidateMessage(false)
			}
	}

	const validateLength = ( data ) => {
		if ( typeof data === "string" && data.length > 0 ) {
			return true
		}
	}

	const sendFetch = () => {
		if ( simpleValidateData() ) {
			fetchFormRequest(resultData)
			.then((response) => {
				console.log(response)
			})
		}
	}

	const handleChange = (event) => {
    setMoveType(event.target.value);
  };

	return(
		<div className="third-step form-card">
			<div className="third-step__title-container form-card-title-container">
				<h2 className="third-step__title">
					Step 3: Who is moving?
				</h2>
			</div>
			<div className="third-step__content form-card-content">
				<div className="third-step__plan content-section">
					<h4 className="third-step__title form-subtitle">
						Select plan
					</h4>
					<div 
						onClick={() => setMoveType("individual")}
						className={`first-step__plan-indi type-card ${ moveType === "individual" ? "active-border" : "" }`}>
						<label>
							<input 
								onChange={handleChange}
								checked={moveType === "individual"}
								value={"individual"} 
								name="plan" 
								type="radio" />
							Individual
						</label>
						<div>
							Select permanent if you have no plans to move back to your old address
						</div>
					</div>

					<div 
						onClick={() => setMoveType("family")}
						className={`first-step__plan-family type-card ${ moveType === "family" ? "active-border" : "" }`}>
						<label>
							<input 
								onChange={handleChange}
								checked={moveType === "family"}
								value={"family"} 
								name="plan" 
								type="radio" />
							Family
						</label>
						<div>
							Select permanent if you have no plans to move back to your old address
						</div>
					</div>

					<div 
						onClick={() => setMoveType("business")}
						className={`first-step__plan-business type-card ${ moveType === "business" ? "active-border" : "" }`}>
						<label>
							<input 
								onChange={handleChange}
								checked={moveType === "business"}
								value={"business"} 
								name="plan" 
								type="radio" />
							Business
						</label>
						<div>
							Select permanent if you have no plans to move back to your old address
						</div>
					</div>

				</div>

				<button 
					onClick={() => {
						sendFetch()
					}}
					className="third-step__submit-button submit-button">
					SUBMIT
				</button>

				<div className="third-step__agree submit-agree">
					By clicking this button you agree to the site`s <a href="#">Terms & Conditions</a>
				</div>

				<div className={`third-step__validate-message ${ !validateMessage ? "" : "_hidden" }`}>
					To send, you must fill in all fields
				</div>
			</div>
		</div>
	)
}