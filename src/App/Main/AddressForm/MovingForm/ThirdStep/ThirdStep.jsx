import "./third-step.scss";

export const ThirdStep = () => {
	return(
		<div className="third-step form-card">
			<div className="third-step__title-container form-card-title-container">
				<h2 className="third-step__title">
					Step 3: Who is moving?
				</h2>
			</div>
			<div className="third-step__content">
				<div className="third-step__plan">
					<h4 className="third-step__title">
						Select plan
					</h4>
					<div className="first-step__plan-indi type-card">
						<label>
							<input value={"individual"} name="plan" type="radio" />
							Individual
						</label>
						<div>
							Select permanent if you have no plans to move back to your old address
						</div>
					</div>

					<div className="first-step__plan-family type-card">
						<label>
							<input value={"family"} name="plan" type="radio" />
							Family
						</label>
						<div>
							Select permanent if you have no plans to move back to your old address
						</div>
					</div>

					<div className="first-step__plan-business type-card">
						<label>
							<input value={"business"} name="plan" type="radio" />
							Business
						</label>
						<div>
							Select permanent if you have no plans to move back to your old address
						</div>
					</div>

				</div>

				<button className="third-step__submit-button submit-button">
					SUBMIT
				</button>

				<div className="third-step__agree submit-agree">
					By clicking this button you agree to the site`s <a href="#">Terms & Conditions</a>
				</div>
			</div>
		</div>
	)
}