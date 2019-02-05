document.addEventListener("DOMContentLoaded", function(event) // wait for the webpage to finish loading
{ 
	var myIndex = 0;
	carousel();

	function carousel()
	{
		var x = document.getElementsByClassName("mySlides");
		for (i = 0; i < x.length; i++)
		{
			x[i].style.display = "none"; // hide all images
		}
		myIndex++; // next image in array/list
		if (myIndex > x.length)
		{
			myIndex = 1 // reset to first image when end has been reached
		}    
		x[myIndex-1].style.display = "block"; // show current image 
		setTimeout(carousel, 8500); // display next image after 8.5 seconds
	}
});
