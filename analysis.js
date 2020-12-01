// JavaScript Document

$(document).ready(function(){
	$("input[name='groceriesInfo']").click(function(){
		
		if($("#groceries").is(":visible")){
			$("#groceries").hide();
		}
		else if($("#groceries").is(":hidden")){
			$("#groceries").show();
		}
		
	});
});


$(document).ready(function(){
	$("input[name='gasInfo']").click(function(){
		
		if($("#gas").is(":visible")){
			$("#gas").hide();
		}
		else if($("#gas").is(":hidden")){
			$("#gas").show();
		}
		
	});
});

$(document).ready(function(){
	$("input[name='paymentsInfo']").click(function(){
		
		if($("#payments").is(":visible")){
			$("#payments").hide();
		}
		else if($("#payments").is(":hidden")){
			$("#payments").show();
		}
		
	});
});

$(document).ready(function(){
	$("input[name='entertainmentInfo']").click(function(){
		
		if($("#entertainment").is(":visible")){
			$("#entertainment").hide();
		}
		else if($("#entertainment").is(":hidden")){
			$("#entertainment").show();
		}
		
	});
});


document.getElementById("groceriesClose").onclick = function() {
	document.getElementById("groceries").style.display = "none";
}


document.getElementById("gasClose").onclick = function() {
	document.getElementById("gas").style.display = "none";
}


document.getElementById("paymentsClose").onclick = function() {
	document.getElementById("payments").style.display = "none";
}


document.getElementById("entertainmentClose").onclick = function() {
	document.getElementById("entertainment").style.display = "none";

}