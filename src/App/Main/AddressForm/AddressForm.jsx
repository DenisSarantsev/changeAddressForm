import "./address-form.scss";
import { useRef } from "react";
import { Banner } from "../../../components/Banner/Banner";
import { MovingForm } from "./MovingForm/MovingForm";

export const AddressForm = () => {

	const targetRef = useRef(null);

  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

	return(
		<div className="address-form">
			<div className="address-form__wrapper">
				<Banner handleScroll={handleScroll}/>
				<MovingForm targetRef={targetRef}/>
			</div>
		</div>
	)
}