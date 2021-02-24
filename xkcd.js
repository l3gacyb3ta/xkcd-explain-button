var element = document.getElementsByClassName("comicNav")[0];
var xkcdNum = window.location.href.split('/')[3];
var link = "https://explainxkcd.com/"+xkcdNum;
element.innerHTML = element.innerHTML + "<li><a href=\"" + link + "\"> Explain</a><li>"
