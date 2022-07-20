// grab the input.
var go = document.querySelector("button"); //button tag is selected.
//click event is added
go.addEventListener("click", function () {
    var userinput = document.querySelector("input").value; //input value is selected.
    
    pushToDOM(userinput); // function called to display the result in container
});
// code for searching after pressing enter key.
var go = document.querySelector(".js-userinput");
go.addEventListener("keyup", function (e) {
    var userinput = document.querySelector("input").value;

    // if the enter key is pressed. 
    if (e.key === "Enter") {
        
        pushToDOM(userinput);
    }

});



// do the data stuff  with API
var url = "http://api.giphy.com/v1/gifs/search?q=" +userinput+ "&api_key=XXvc7rhCXDfiRnVuY47DJjm4zvaD4KNi";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function (e) {

    var data = e.target.response;
    pushToDOM(data);
});




    // Show me the gif
    function pushToDOM(input) {

        var response = JSON.parse(input);
      
        var imageUrls = response.data;
      
        imageUrls.forEach(function(image){
      
          var src = image.images.fixed_height.url;
          console.log(src);
      
          var container = document.querySelector(".js-container");
          container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
      
        });
      
      }
