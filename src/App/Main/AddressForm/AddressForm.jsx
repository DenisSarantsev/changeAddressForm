import "./address-form.scss";
import { Banner } from "../../../components/Banner/Banner";
import { MovingForm } from "./MovingForm/MovingForm";

export const AddressForm = () => {
	return(
		<div className="address-form">
			<div className="address-form__wrapper">
				<Banner/>
				<MovingForm/>
			</div>
		</div>
	)
}