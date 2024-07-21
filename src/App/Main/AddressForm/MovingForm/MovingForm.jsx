import "./moving-form.scss";
import { FirstStep } from "./FirstStep/FirstStep";
import { SecondStep } from "./SecondStep/SecondStep";
import { ThirdStep } from "./ThirdStep/ThirdStep";
import PropTypes from 'prop-types';

export const MovingForm = ({ targetRef }) => {
	return(
		<div className="moving-form">
			<FirstStep targetRef={targetRef}/>
			<SecondStep/>
			<ThirdStep/>
		</div>
	)
}

MovingForm.propTypes = {
  targetRef: PropTypes.any.isRequired, // или PropTypes.bool, если проп не является обязательным
};