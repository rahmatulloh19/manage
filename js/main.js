// Slick js styles

$(document).ready(function () {
	$(".costumer__list").slick({
		infinite: true,
		centerMode: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		edgeFriction: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1110,
				settings: {
					dots: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});

// Menu open codes here

// invalid event of input

const elForm = document.querySelector(".site-footer__form");
const elInputWrapper = document.querySelector(".site-footer__input-wrapper");
const elInput = document.querySelector(".site-footer__input");

elForm.addEventListener("submit", (evt) => {
	elInputWrapper.innerHTML = "";
	elInputWrapper.appendChild(elInput);
	evt.preventDefault();

	if (elInput.value.length < 8) {
		elInputWrapper.classList.add("invalid");
		elInputWrapper.append("Please insert a valid email");
	} else {
		elInputWrapper.classList.remove("invalid");
	}
});

// Site menu JavaScript codes here

const elBtn = document.querySelector(".site-header__menu");

elBtn.addEventListener("click", () => {
	document.body.classList.toggle("menu-open");
});

AOS.init();
