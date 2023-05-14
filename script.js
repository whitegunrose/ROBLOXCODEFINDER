document.getElementById("gameForm").addEventListener("submit", handleSubmit)

function handleSubmit(event) {
  event.preventDefault();

  var userInput = document.getElementById("textInput").value;

  var newSentence = userInput + " roblox codes";

  var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(newSentence);

  // Open search results in a new tab
  var searchWindow = window.open(searchUrl, "_blank")

  searchWindow.onload = function(){
    var firstLink = searchWindow.document.querySelector("a");
    firstLink.click();
  }

  
}
