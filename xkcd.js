// Get the navbar
var navbar = document.getElementsByClassName("comicNav")[0];

//Get the current xkcd number
var xkcdNum = window.location.href.split('/')[3];

// Generate the explainxkcd link
var link = "https://explainxkcd.com/"+xkcdNum;

// Add the link!
navbar.innerHTML = navbar.innerHTML + "<li><a href=\"" + link + "\"> Explain</a><li>"
