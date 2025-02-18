import { useState } from "react";
import "./states-list.scss";
import PropTypes from 'prop-types';

export const StatesList = ({ stateData }) => {
	const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
		stateData(event.target.value)
  };

	const validateSelect = ( state ) => {
		if ( state === "State" ) {
			return false
		} else {
			return true
		}
	}

  return (
    <div className={`states-list ${ !validateSelect(selectedOption) ? "red-border" : "" }`}>
      <select 
			value={selectedOption} 
			onChange={(event) => {
				handleChange(event)
				stateData(event.target.value)
			}
				}>
        <option value="State">State</option>
        <option value="AL">AL - Alabama</option>
				<option value="AK">AK - Alaska</option>
				<option value="AZ">AZ - Arizona</option>
				<option value="AR">AR - Arkansas</option>
				<option value="CA">CA - California</option>
				<option value="CO">CO - Colorado</option>
				<option value="CT">CT - Connecticut</option>
				<option value="DE">DE - Delaware</option>
				<option value="DC">DC - District of Columbia / Washington</option>
				<option value="FL">FL - Florida</option>
				<option value="GA">GA - Georgia</option>
				<option value="HI">HI - Hawaii</option>
				<option value="ID">ID - Idaho</option>
				<option value="IL">IL - Illinois</option>
				<option value="IN">IN - Indiana</option>
				<option value="IA">IA - Iowa</option>
				<option value="KS">KS - Kansas</option>
				<option value="KY">KY - Kentucky</option>
				<option value="LA">LA - Louisiana</option>
				<option value="ME">ME - Maine</option>
				<option value="MD">MD - Maryland</option>
				<option value="MA">MA - Massachusetts</option>
				<option value="MI">MI - Michigan</option>
				<option value="MN">MN - Minnesota</option>
				<option value="MS">MS - Mississippi</option>
				<option value="MO">MO - Missouri</option>
				<option value="MT">MT - Montana</option>
				<option value="NE">NE - Nebraska</option>
				<option value="NV">NV - Nevada</option>
				<option value="NH">NH - New Hampshire</option>
				<option value="NJ">NJ - New Jersey</option>
				<option value="NM">NM - New Mexico</option>
				<option value="NY">NY - New York</option>
				<option value="NC">NC - North Carolina</option>
				<option value="ND">ND - North Dakota</option>
				<option value="OH">OH - Ohio</option>
				<option value="OK">OK - Oklahoma</option>
				<option value="OR">OR - Oregon</option>
				<option value="PA">PA - Pennsylvania</option>
				<option value="RI">RI - Rhode Island</option>
				<option value="SC">SC - South Carolina</option>
				<option value="SD">SD - South Dakota</option>
				<option value="TN">TN - Tennessee</option>
				<option value="TX">TX - Texas</option>
				<option value="UT">UT - Utah</option>
				<option value="VT">VT - Vermont</option>
				<option value="VA">VA - Virginia</option>
				<option value="WA">WA - Washington</option>
				<option value="WV">WV - West Virginia</option>
				<option value="WI">WI - Wisconsin</option>
				<option value="WY">WY - Wyoming</option>
				<option value="AS">AS - American Samoa</option>
				<option value="GU">GU - Guam</option>
				<option value="MP">MP - Northern Mariana Islands</option>
				<option value="PR">PR - Puerto Rico</option>
				<option value="VI">VI - U.S. Virgin Islands</option>
				<option value="UM">UM - U.S. Minor Outlying Islands</option>
				<option value="MH">MH - Marshall Islands</option>
				<option value="FM">FM - Micronesia</option>
				<option value="PW">PW - Palau</option>
				<option value="AA">AA - U.S. Armed Forces – Americas</option>
				<option value="AE">AE - U.S. Armed Forces – Europe</option>
				<option value="AP">AP - U.S. Armed Forces – Pacific</option>
      </select>
    </div>
  );
}

StatesList.propTypes = {
  stateData: PropTypes.any.isRequired, // или PropTypes.bool, если проп не является обязательным
};