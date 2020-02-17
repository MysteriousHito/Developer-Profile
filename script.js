let da = document.querySelector("input");

feather.replace()

da.addEventListener('animationend', function() { 
	doSomething() 
});

function doSomething(e) {
	da.style.animationDelay = "0s";
	event.target.classList.remove("infinite");
	event.target.classList.remove("fadeIn");
	event.target.classList.add("pulse");
	event.target.classList.add("infinite");
}