import "./moving-form.scss";
import { FirstStep } from "./FirstStep/FirstStep";
import { SecondStep } from "./SecondStep/SecondStep";
import { ThirdStep } from "./ThirdStep/ThirdStep";

export const MovingForm = () => {
	return(
		<form action="#" className="moving-form">
			<FirstStep/>
			<SecondStep/>
			<ThirdStep/>
		</form>
	)
}