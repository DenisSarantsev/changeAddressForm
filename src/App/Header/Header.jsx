import { useContext } from "react";
import { MyContext } from "../../components/ContextProvider/ContextProvider.jsx";
import "./header.scss";

export const Header = () => {

	const { burgerMenuStatus, setBurgerMenuStatus } = useContext(MyContext)

	return (
		<header className="header">
			<div className="header__container container-padding">
				<div className={`header__mobile-bg`}></div>
				<img 
					src="/src/static/img/logo.png" 
					alt="company logo" 
					className="header__logo" />
				<nav className={`header__navigation ${ burgerMenuStatus === "open" ? "mobile-open" : "mobile-close" }`}>
					<ul className="header__navigation-list">
						<li 
							onClick={() => setBurgerMenuStatus("close")}
							className="header__navigation-item">
							<a href="#" className="header__navigation-link">Home</a>
						</li>
						<li 
							onClick={() => setBurgerMenuStatus("close")}
							className="header__navigation-item">
							<a href="#" className="header__navigation-link">Change address</a>
						</li>
						<li 
							onClick={() => setBurgerMenuStatus("close")}
							className="header__navigation-item">
							<a href="#" className="header__navigation-link">About us</a>
						</li>
						<li 
							onClick={() => setBurgerMenuStatus("close")}
							className="header__navigation-item">
							<a href="#" className="header__navigation-link">FAQs</a>
						</li>
						<li 
							onClick={() => setBurgerMenuStatus("close")}
							className="header__navigation-item">
							<a href="#" className="header__navigation-link">Contact Us</a>
						</li>
					</ul>
				</nav>
				<button 
					onClick={() => {
						setBurgerMenuStatus( burgerMenuStatus === "open" ? "close" : "open");
					}} 
					className="header__burger burger">
					<img 
						src="/src/static/img/icons/burger.png" 
						alt="burder mobile menu icon" 
						className={`burger__burger-icon ${ burgerMenuStatus === "open" ? "hidden-icon" : "" }`} />
					<img 
						src="/src/static/img/icons/close.png" 
						alt="close menu icon" 
						className={`burger__close-icon ${ burgerMenuStatus === "close" ? "hidden-icon" : "" }`} />
				</button>
			</div>
		</header>
	)
}