import "./banner.scss";

export const Banner = () => {
	return(
		<div className="banner">
			<div className="banner__container">
				<img 
					src="/src/static/img/family-moving-boxes.webp" 
					alt="family moving boxes and changed address" 
					className="banner__image" />
				<div className="banner__text-container">
					<h3 className="banner__title">
						Change your address online
					</h3>
					<ul className="banner__advantages">
						<li className="banner__advantage-item">
							<img src="/src/static/img/icons/check-mark.png" alt="check mark"/>
							<span>Unlimited address changes for you and your family</span>
						</li>
						<li className="banner__advantage-item">
							<img src="/src/static/img/icons/check-mark.png" alt="check mark"/>
							<span>Exclusive e-book - make a smooth move & ayoid penalties</span>
						</li>
						<li className="banner__advantage-item">
							<img src="/src/static/img/icons/check-mark.png" alt="check mark"/>
							<span>Valuable coupons to get upto $750 in discounts</span>
						</li>
						<li className="banner__advantage-item">
							<img src="/src/static/img/icons/check-mark.png" alt="check mark"/>
							<span>Complimentary inclusion in the national do-not-call registry</span>
						</li>
					</ul>
					<button className="banner__button">
						<div className="banner__button-title">LETS GET YOU STARTED!</div>
						<div className="banner__button-subtitle">CHANGE YOUR ADDRESS NOW!</div>
					</button>
				</div>
			</div>
		</div>
	)
}