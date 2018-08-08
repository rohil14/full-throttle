"use strict";

function pounds() {
    
    let lbsresult = document.querySelector('#pounds-input').addEventListener('input',function(e) { 
        
        let lbs = e.target.value;
        document.querySelector("#kg-output").innerHTML= lbs/2.20462 + " Kg";
		document.querySelector("#gram-output").innerHTML=(lbs/2)*1000; + " Grams"
		document.querySelector("#ounce-output").innerHTML=lbs*16 + " Ounces";
    });};
        pounds();

function kg(){
	let kgresult = document.querySelector("#kg-input").addEventListener('input',function(e) {
		let kg = e.target.value;
		document.querySelector("#poundsKg-output").innerHTML= kg*2.20462 + " Pounds";
		document.querySelector("#gramKg-output").innerHTML= kg*1000 + " Grams";
		document.querySelector("#ounceKg-output").innerHTML= kg*35.274 + " Ounces";
		
		
	});
	
	
};
kg();



function ounce(){
	let ounceresult= document.querySelector("#ounce-input").addEventListener('input',function(e) {
				let ounce= e.target.value;
			document.querySelector("#poundOunce-output").innerHTML=ounce/16 + " Pounds";
	        document.querySelector("#gramOunce-output").innerHTML=ounce*28.3495 + " Grams";
	        document.querySelector("#kgOunce-output").innerHTML=ounce/35.274 + " Kg";

});
};
ounce();


function km() {
	var kmresult = document.querySelector("#km-input").addEventListener('input',function(e) {
		let km = e.target.value;
		document.querySelector("#kmTom-output").innerHTML=km*1000 + " m";
		document.querySelector("#kmToCm-output").innerHTML=km*100000 +" cm";
		document.querySelector("#kmToMM-output").innerHTML=km*1000000 + " mm";
	});
};
km();

function m() {
	var mresult = document.querySelector("#m-input").addEventListener('input',function(e) {
		let m = e.target.value;
		document.querySelector("#mToKm-output").innerHTML=m/1000 + " Km";
		document.querySelector("#mToCm-output").innerHTML=m*100 +" cm";
		document.querySelector("#mToMM-output").innerHTML=m*1000 + " mm";
	});
};
m();


function cm() {
	var cmresult = document.querySelector("#cm-input").addEventListener('input',function(e) {
		let cm = e.target.value;
		document.querySelector("#cmToKm-output").innerHTML=cm/100000 + " Km";
		document.querySelector("#cmTom-output").innerHTML=cm/100 +" m";
		document.querySelector("#cmToMM-output").innerHTML=cm*10 + " mm";
	});
};
cm();

function mm() {
	var mmresult = document.querySelector("#mm-input").addEventListener('input',function(e) {
		let mm = e.target.value;
		document.querySelector("#mmToKm-output").innerHTML=mm/1000000 + " Km";
		document.querySelector("#mmTom-output").innerHTML=mm/1000 +" m";
		document.querySelector("#mmToCm-output").innerHTML=mm/10 + " cmm";
	});
};
mm();

function hr() {
	var hrresult = document.querySelector("#hr-input").addEventListener('input',function(e) {
		let hr = e.target.value;
		document.querySelector("#hrToSec-output").innerHTML=hr*36000 +" seconds";
		document.querySelector("#hrToMin-output").innerHTML=hr*60 +" minutes";
		document.querySelector("#hrTodays-output").innerHTML=hr/24 +" days";
	});
};
hr();

function min() {
	var minresult = document.querySelector("#min-input").addEventListener('input',function(e) {
		let min = e.target.value;
		document.querySelector("#minToSec-output").innerHTML=min*60+" seconds";
		document.querySelector("#minToHr-output").innerHTML=min/60 +" hours";
		document.querySelector("#minToDays-output").innerHTML=min/1440 +" days";
	});
};
min();

function sec() {
	var secresult = document.querySelector("#sec-input").addEventListener('input',function(e) {
		let sec = e.target.value;
		document.querySelector("#secToMin-output").innerHTML=sec/60+" minute";
		document.querySelector("#secToHr-output").innerHTML=sec/3600 +" hours";
		document.querySelector("#secToDays-output").innerHTML=sec/86400 +" days";
	});
};
sec();


function day() {
	var dayresult = document.querySelector("#day-input").addEventListener('input',function(e) {
		let day = e.target.value;
		document.querySelector("#dayTohr-output").innerHTML=day*24 +" minute";
		document.querySelector("#dayToMin-output").innerHTML=day*1440 +" hours";
		document.querySelector("#dayToSec-output").innerHTML=day*86400 +" seconds";
	});
};
day();


function circleDiameter() {
	var radius =document.querySelector("#diameter-input");
	var calculate = document.querySelector("#calculate-button");
	function myFunction() {
		document.querySelector("#para").innerHTML= parseInt(radius.value,10)*2;
	}
	calculate.onclick=myFunction;
};
circleDiameter();