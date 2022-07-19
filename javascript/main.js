// grab the input.

var go = document.querySelector("button"); //button tag is selected.
//click event is added
go.addEventListener("click", function(){ 
    var userinput = document.querySelector("input").value; //input value is selected.
    console.log(userinput);
    pushToDOM(userinput); // function called to display the result in container
});
// code for searching after pressing enter key.
var go = document.querySelector(".js-userinput");
go.addEventListener("keyup", function(e){
    var userinput = document.querySelector("input").value;

    // if the enter key is pressed. 
    if(e.key === "Enter"){
        console.log(userinput);
        pushToDOM(userinput);
    }
    
});

// do the data stuff  with API



// Show me the gif
function pushToDOM(userinput){
    var container = document.querySelector(".js-container");
    container.innerHTML = userinput;
}
