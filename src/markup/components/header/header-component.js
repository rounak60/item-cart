// $('.hamburger-menu').click(function() {
// 	$(this).toggleClass('change');
// 	$('.ham-burger-block').toggle();
// });

var menuElement = document.querySelector('.hamburger-menu');
if (menuElement) {
	menuElement.addEventListener('click', (event) => {
		var element = event.target;
		var styleClass = element.getAttribute("class");
		if (styleClass.includes("change")) {
			styleClass = styleClass.replace(" change", "");
			element.setAttribute("class", styleClass);
		} else {
			styleClass += " change";
			element.setAttribute("class", styleClass);
		}
		var hamburgerMenuDomEle = document.querySelector('.ham-burger-block');
		if (hamburgerMenuDomEle) {
			var hamburgerMenuStyleClass = hamburgerMenuDomEle.getAttribute("style");
			if (hamburgerMenuStyleClass) {
				hamburgerMenuDomEle.removeAttribute("style");
			} else {
				hamburgerMenuDomEle.setAttribute("style", "display: block;");
			}
		}
	});
}