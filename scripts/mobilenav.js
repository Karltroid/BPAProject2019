speed = 1;

function opennav()
{
	document.getElementById("mobile-nav-items").style.display = "block";
	document.getElementById("mobile-nav-header").style.animation = "slide-in " + speed * 0.4 + "s";
	document.getElementById("Home").style.animation = "slide-in " + speed * 0.5 + "s";
	document.getElementById("Maps").style.animation = "slide-in " + speed * 0.6 + "s";
	document.getElementById("Places").style.animation = "slide-in " + speed * 0.7 + "s";
	document.getElementById("Transit").style.animation = "slide-in " + speed * 0.8 + "s";
	document.getElementById("Attire").style.animation = "slide-in " + speed * 0.9 + "s";
	document.getElementById("Food").style.animation = "slide-in " + speed * 1 + "s";

}

function closenav()
{
	document.getElementById("mobile-nav-header").style.animation = "slide-out " + speed * 1 + "s";
	document.getElementById("Home").style.animation = "slide-out " + speed * 0.9 + "s";
	document.getElementById("Maps").style.animation = "slide-out " + speed * 0.8 + "s";
	document.getElementById("Places").style.animation = "slide-out " + speed * 0.7 + "s";
	document.getElementById("Transit").style.animation = "slide-out " + speed * 0.6 + "s";
	document.getElementById("Attire").style.animation = "slide-out " + speed * 0.5 + "s";
	document.getElementById("Food").style.animation = "slide-out " + speed * 0.4 + "s";

	setTimeout(hide, 400);
}

function hide()
{
	document.getElementById("mobile-nav-items").style.display = "none";
}