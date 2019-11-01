//var button = document.getElementsByTagName("button")[0]; //getElementsByTagName returns an array
//
//button.addEventListener("click", function() {
//	console.log("click");
//});
//
//button.addEventListener("mouseenter", function() {
//	console.log("mouseenter");
//});
//
//button.addEventListener("mouseleave", function() {
//	console.log("mouseleave");
//});

//for(var i = 0; i < lis.length; i += 1){
//lis[i].addEventListener('click', function (i) {	
//    this.classList.toggle("strikeThrough");
//});
//}

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li span");

function inputLength() {
	return input.value.length;
}

function addListItem () {	
	if(inputLength() > 0) {
		var li = document.createElement("li"); //create li
		var span = document.createElement("span"); //create span
		var del = document.createElement("button"); //create delete button
		span.appendChild(document.createTextNode(input.value)); //add the input text to the span
		del.appendChild(document.createTextNode("Remove from list")); 
		li.appendChild(span);
		li.appendChild(del);
		ul.appendChild(li);	
		
		span.addEventListener("click", function() {
			span.classList.toggle("strikeThrough");
		});
		
		del.addEventListener("click", function(){
			this.parentElement.remove();
		});
		
		input.value = "";
		input.focus();
		}
}

function addItemAfterEnter(evnt) {
	if(evnt.keyCode === 13) {
		addListItem();
	}
}

button.addEventListener("click", addListItem); //callback event 
input.addEventListener("keypress", addItemAfterEnter); //callback event 

//*******************************************************************************
//1. If you click on the list item, it toggles the .done  class on and off.
//*******************************************************************************
//AAAAAAAAAAAAAHHHHHHHHHHHHH!!!!!!!!!!!!




//2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
//3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)