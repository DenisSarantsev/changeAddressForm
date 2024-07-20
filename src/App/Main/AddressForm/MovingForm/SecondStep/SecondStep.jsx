import { StatesList } from "../../../../../components/StatesList/StatesList.jsx";
import "./second-step.scss";

export const SecondStep = () => {
	return(
		<div className="second-step form-card">
			<div className="second-step__title-container form-card-title-container">
				<h2 className="second-step__title">
					Step 2: Address details
				</h2>
			</div>
			<div className="second-step__content">

				<div className="second-step__old-address old-address">
					<h4 className="old-address__title">
						Old address
					</h4>
					<input 
						type="text" 
						placeholder="Street address"
						className="old-address__first-name form-input"/>
					<input 
						type="text" 
						placeholder="Old city"
						className="old-address__first-name form-input"/>
					<StatesList/>
					<input 
						type="text" 
						placeholder="Old zip code"
						className="old-address__first-name form-input"/>
				</div>

				<div className="second-step__new-address new-address">
					<h4 className="new-address__title">
						New address
					</h4>
					<input 
						type="text" 
						placeholder="Street address"
						className="new-address__first-name form-input"/>
					<input 
						type="text" 
						placeholder="New city"
						className="new-address__first-name form-input"/>
					<StatesList/>
					<input 
						type="text" 
						placeholder="New zip code"
						className="new-address__first-name form-input"/>
				</div>

				<div className="second-step__checkbox ss-checkbox">
					<input id="ss-check" type="checkbox" className="ss-checkbox__input" />
					<label htmlFor="ss-check" className="ss-checkbox__label">This residence was built in the last 6 months</label>
				</div>
			</div>
		</div>
	)
}