let da = document.querySelector("input");
let footer = document.querySelector("footer");

// feather.replace()

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

footer.addEventListener('animationend', function() { 
	footerRemove() 
});

function footerRemove(e) {
	event.target.classList.remove("animated");
	event.target.classList.remove("bounceInLeft");
}



