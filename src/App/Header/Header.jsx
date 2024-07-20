import "./header.scss";

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container container-padding">
				<img 
					src="/src/static/img/logo.png" 
					alt="company logo" 
					className="header__logo" />
				<nav className="header__navigation">
					<ul className="header__navigation-list">
						<li className="header__navigation-item">
							<a href="#" className="header__navigation-link">Home</a>
						</li>
						<li className="header__navigation-item">
							<a href="#" className="header__navigation-link">Change address</a>
						</li>
						<li className="header__navigation-item">
							<a href="#" className="header__navigation-link">About us</a>
						</li>
						<li className="header__navigation-item">
							<a href="#" className="header__navigation-link">FAQs</a>
						</li>
						<li className="header__navigation-item">
							<a href="#" className="header__navigation-link">Contact Us</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}