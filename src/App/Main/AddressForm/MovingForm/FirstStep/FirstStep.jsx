import { DateInput } from "../../../../../components/DateInput/DateInput.jsx";
import { TelInput } from "../../../../../components/TelInput/TelInput.jsx";
import "./first-step.scss";

export const FirstStep = () => {
	return(
		<div className="first-step form-card">
			<div className="first-step__title-container form-card-title-container">
				<h2 className="first-step__title">
					Step 1: Type of Move
				</h2>
			</div>
			<div className="first-step__content">

				<div className="first-step__types">
					<h4 className="personal-information__title">
						Type of move
					</h4>
					<div className="first-step__types-buttons">
						<div className="first-step__type-perm type-card">
							<label>
								<input value={"perm"} name="type" type="radio" />
								Permanent
							</label>
							<div>
								Select permanent if you have no plans to move back to your old address
							</div>
						</div>
						<div className="first-step__type-temp type-card">
							<label>
								<input value={"perm"} name="type" type="radio" />
								Temporary
							</label>
							<div>
								Select temporary if you plan to return to your old address within 6 months
							</div>
						</div>
					</div>
					<DateInput active={true}/>
				</div>

				<div className="first-step__personal-information personal-information">
					<h4 className="personal-information__title">
						Personal information
					</h4>
					<input 
						type="text" 
						placeholder="First name"
						className="personal-information__first-name form-input"/>
					<input 
						type="text" 
						placeholder="Last name"
						className="personal-information__last-name form-input"/>
					<input 
						type="text" 
						placeholder="Email"
						className="personal-information__email form-input"/>
					<input 
						type="text" 
						placeholder="Confirm email"
						className="personal-information__confirm-email form-input"/>
					<TelInput/>
				</div>

				<div className="first-step__agree">
					You acknowledge and agree that by using the site, any applications, and the services, you are at least 18 years of age and that you are the person, executor, power of attorney, guardian, authorized officer or agent of the person for whom mail should be forwarded by the usps, under this order.
				</div>
			</div>
		</div>
	)
}