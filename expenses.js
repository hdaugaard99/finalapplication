// JavaScript Document

   var allcookies = document.cookie;
	var values = [];
               
               // Get all the cookies pairs in an array
               var cookiearray = allcookies.split(';');
               // Now take key value pair out of this array
               for(var i=0; i<cookiearray.length; i++) {
                 var name = cookiearray[i].split('=')[0];
                 var value = cookiearray[i].split('=')[1];
                  values.push(value);
               }
var numbers = values.map(Number);


var numOfPeople = numbers[9];
var groceriesNumber = numbers[7];
var gasNumber = numbers[6];
var paymentsNumber = numbers[5];
var entertainmentNumber = numbers[4];



document.getElementById('groceriesAmt').innerHTML = "$" + values[7];
document.getElementById('groceriesBreak').innerHTML = "$" + values[7];
document.getElementById('gasAmt').innerHTML = "$" + values[6];
document.getElementById('gasBreak').innerHTML = "$" + values[6];
document.getElementById('paymentsAmt').innerHTML = "$" + values[4];
document.getElementById('paymentsBreak').innerHTML = "$" + values[4];
document.getElementById('entertainmentAmt').innerHTML = "$" + values[3];
document.getElementById('entertainmentBreak').innerHTML = "$" + values[3];

var paragraph  = document.createElement("P");

function addGroceriesExpense() {
	$("#groceriesBreakdown").append("<p class='bold'>" + document.newGrocery.store.value + "</p><p class='normal'>$" + document.newGrocery.amount.value + "</p><br>");
}

function addGasExpense() {
	$("#gasBreakdown").append("<p class='bold'>" + document.newGas.store.value + "</p><p class='normal'>$" + document.newGas.amount.value + "</p><br>");
}

function addPaymentsExpense() {
	$("#paymentsBreakdown").append("<p class='bold'>" + document.newPayments.store.value + "</p><p class='normal'>$" + document.newPayments.amount.value + "</p><br>");
}

function addEntertainmentExpense() {
	$("#entertainmentBreakdown").append("<p class='bold'>" + document.newEntertainment.store.value + "</p><p class='normal'>$" + document.newEntertainment.amount.value + "</p><br>");
}

$(document).ready(function(){
	$("input[name='groceriesExpand']").click(function(){
		
		if($("#groceriesExpand").is(":visible")){
			$("#groceriesExpand").hide();
		}
		else if($("#groceriesExpand").is(":hidden")){
			$("#groceriesExpand").show();
		}
		
	});
});

$(document).ready(function(){
	$("input[name='gasExpand']").click(function(){
		
		if($("#gasExpand").is(":visible")){
			$("#gasExpand").hide();
		}
		else if($("#gasExpand").is(":hidden")){
			$("#gasExpand").show();
		}
		
	});
});

$(document).ready(function(){
	$("input[name='paymentsExpand']").click(function(){
		
		if($("#paymentsExpand").is(":visible")){
			$("#paymentsExpand").hide();
		}
		else if($("#paymentsExpand").is(":hidden")){
			$("#paymentsExpand").show();
		}
		
	});
});

$(document).ready(function(){
	$("input[name='entertainmentExpand']").click(function(){
		
		if($("#entertainmentExpand").is(":visible")){
			$("#entertainmentExpand").hide();
		}
		else if($("#entertainmentExpand").is(":hidden")){
			$("#entertainmentExpand").show();
		}
		
	});
});




document.getElementById("groceriesClose").onclick = function() {
	document.getElementById("groceriesExpand").style.display = "none";
}


document.getElementById("gasClose").onclick = function() {
	document.getElementById("gasExpand").style.display = "none";
}


document.getElementById("paymentsClose").onclick = function() {
	document.getElementById("paymentsExpand").style.display = "none";
}


document.getElementById("entertainmentClose").onclick = function() {
	document.getElementById("entertainmentExpand").style.display = "none";
}


var groceriesAdd = document.getElementById("groceriesAdd");

var groceriesAddBtn = document.getElementById("groceriesAddBtn");

var closeGroceriesAdd = document.getElementById("closeGroceriesAdd");

groceriesAddBtn.onclick = function() {
	groceriesAdd.style.display = "block";
}

closeGroceriesAdd.onclick = function() {
	groceriesAdd.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == groceriesAdd) {
    groceriesAdd.style.display = "none";
  }
}




var gasAdd = document.getElementById("gasAdd");

var closeGasAdd = document.getElementById("closeGasAdd");


function gasAddPopup() {
	gasAdd.style.display = "block";
}

closeGasAdd.onclick = function() {
	gasAdd.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == gasAdd) {
    gasAdd.style.display = "none";
  }
}


var paymentsAdd = document.getElementById("paymentsAdd");

var closePaymentsAdd = document.getElementById("closePaymentsAdd");

function paymentsAddPopup() {
	paymentsAdd.style.display = "block";
}

closePaymentsAdd.onclick = function() {
	paymentsAdd.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == paymentsAdd) {
    paymentsAdd.style.display = "none";
  }
}

var entertainmentAdd = document.getElementById("entertainmentAdd");

var closeEntertainmentAdd = document.getElementById("closeEntertainmentAdd");

function entertainmentAddPopup() {
	entertainmentAdd.style.display = "block";
}

closeEntertainmentAdd.onclick = function() {
	entertainmentAdd.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == entertainmentAdd) {
    entertainmentAdd.style.display = "none";
  }
}



