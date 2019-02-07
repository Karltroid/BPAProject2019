function opennav()
{
	document.getElementById("mobile-nav-items").style.display = "block";
	document.getElementById("mobile-nav-header").style.animation = "slide-in .4s";
	document.getElementById("Home").style.animation = "slide-in 0.5s";
	document.getElementById("Maps").style.animation = "slide-in 0.6s";
	document.getElementById("Places").style.animation = "slide-in 0.7s";
	document.getElementById("Transit").style.animation = "slide-in 0.8s";
	document.getElementById("Attire").style.animation = "slide-in 0.9s";
	document.getElementById("Food").style.animation = "slide-in 1s";

}

function closenav()
{
	document.getElementById("mobile-nav-header").style.animation = "slide-out 1s";
	document.getElementById("Home").style.animation = "slide-out 0.9s";
	document.getElementById("Maps").style.animation = "slide-out 0.8s";
	document.getElementById("Places").style.animation = "slide-out 0.7s";
	document.getElementById("Transit").style.animation = "slide-out 0.6s";
	document.getElementById("Attire").style.animation = "slide-out 0.5s";
	document.getElementById("Food").style.animation = "slide-out 0.4s";

	setTimeout(hide, 400);
}

function hide()
{
	document.getElementById("mobile-nav-items").style.display = "none";
}