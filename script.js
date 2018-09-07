"use strict";




   
var form = document.querySelector("#input");
var button = document.querySelector("#demo-button2").addEventListener('click' , function(e) {
	e.preventDefault();
	if (form.value == "") {
		document.querySelector("#para2").style.color="red";
		document.querySelector("#para2").innerHTML="please "+ form.value + "enter your email address*";
	} else {
		document.querySelector("#para2").innerHTML="Thank you "+ form.value + "  for connecting with us";
	}
});



