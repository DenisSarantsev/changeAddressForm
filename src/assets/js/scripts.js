document.addEventListener("DOMContentLoaded", () => {
	// ------------------------------------------------> Блокировка прокрутки при открытом меню

	const observer = new MutationObserver((mutationsList, observer) => {
		const burgerButton = document.querySelector('.header__burger');
		const headerNavigation = document.querySelector(".header__navigation");
		if ( burgerButton && headerNavigation ) {
				// Ваш скрипт здесь
				const bodyElement = document.querySelector('body');
				burgerButton.addEventListener("click", () => blockBodyScrollByOpenMobileMenu( headerNavigation, bodyElement ))
				// Остановить наблюдение
				observer.disconnect();
		}
	});
	// Начать наблюдение за изменениями в документе
	observer.observe(document.body, {
		childList: true,
		subtree: true
	});

	// Функция блокировки скролл при открытом мобильном меню
	const blockBodyScrollByOpenMobileMenu = ( markerElement, bodyElement ) => {
		if ( markerElement.classList.contains("mobile-open") ) {
			bodyElement.style.overflowY = "scroll";
		} else {
			bodyElement.style.overflowY = "hidden";
		}
	}

	// ------------------------------------------------> Другие скрипты

})