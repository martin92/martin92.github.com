
console.log("Hola mundo");


// DOM
let links = document.querySelectorAll("a");

links.forEach(function(link) {

	let content = document.querySelector(".content");

	link.addEventListener('click', function(ev) {
		ev.preventDefault();

		content.classList.remove("animated");
		content.classList.remove("fadeInUp");

		content.classList.add("animated");
		content.classList.add("fadeOutUp");

		location.href = ("/");

	});


});




