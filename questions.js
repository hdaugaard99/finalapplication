// JavaScript Document

$(document).ready(function(){
	$("input[name='incomeSubmit']").click(function(){
		
		if($("#income").is(":visible") && document.questions.income.value !== "") {
			$("#income").hide();
		}
		else if($("#income").next().is(":hidden")){
			$("#income").show();
		}
		if(document.questions.income.value !== ""){
		$("#numOfPeople").show();
			}
	});
});

$(document).ready(function(){
	$("input[name='numOfPeopleSubmit']").click(function(){
		
		if($("#numOfPeople").is(":visible") && document.questions.people.value !== ""){
			$("#numOfPeople").hide();
		}
		else if($("#numOfPeople").next().is(":hidden")){
			$("#numOfPeople").show();
		}
		if (document.questions.people.value!== "") {
		$("#state").show();
		}
	});
});

$(document).ready(function(){
	$("input[name='stateSubmit']").click(function(){
		
		if($("#state").is(":visible") && document.questions.state.value !== "---"){
			$("#state").hide();
		}
		else if($("#state").next().is(":hidden")){
			$("#state").show();
		}
		if (document.questions.state.value !== "---") {
		$("#grocerySpending").show();
		}
	});
});

$(document).ready(function(){
	$("input[name='grocerySubmit']").click(function(){
	
		if($("#grocerySpending").is(":visible") && document.questions.groceries.value !== ""){
			$("#grocerySpending").hide();
		}
		else if($("#grocerySpending").next().is(":hidden")){
			$("#grocerySpending").show();
		}
		if (document.questions.groceries.value !== "") {
		$("#gasSpending").show();
		}
	});
});

$(document).ready(function(){
	$("input[name='gasSubmit']").click(function(){
	
		if($("#gasSpending").is(":visible") && document.questions.gas.value !== ""){
			$("#gasSpending").hide();
		}
		else if($("#gasSpending").next().is(":hidden")){
			$("#gasSpending").show();
		}
		if (document.questions.gas.value !== "") {
		$("#homeSpending").show();
		}
	});
});

$(document).ready(function(){
	$("input[name='homeSubmit']").click(function(){

		if($("#homeSpending").is(":visible") && document.questions.home.value !== ""){
			$("#homeSpending").hide();
		}
		else if($("#homeSpending").next().is(":hidden")){
			$("#homeSpending").show();
		}
		if (document.questions.home.value !== "") {
		$("#payments").show();
		}
	});
});

$(document).ready(function(){
	$("input[name='paymentSubmit']").click(function(){

		if($("#payments").is(":visible") && document.questions.payments.value !== ""){
			$("#payments").hide();
		}
		else if($("#payments").next().is(":hidden")){
			$("#payments").show();
		}
		if (document.questions.payments.value !== "") {
		$("#entertainmentSpending").show();
		}
	});
});

$(document).ready(function(){
	$("input[name='entertainmentSubmit']").click(function(){

		if($("#entertainmentSpending").is(":visible") && document.questions.entertainment.value !== ""){
			$("#entertainmentSpending").hide();
		}
		else if($("#entertainmentSpending").next().is(":hidden")){
			$("#entertainmentSpending").show();
		}
		if (document.questions.entertainment.value !== "") {
		$("#savingsAccount").show();
		}
	});
});

$(document).ready(function(){
	$("input[name='savingsAccountSubmit']").click(function(){

		if($("#savingsAccount").is(":visible") && document.questions.savings.value !== ""){
			$("#savingsAccount").hide();
		}
		else if($("#savingsAccount").next().is(":hidden")){
			$("#savingsAccount").show();
		}
		if (document.questions.savings.value !== "") {
		$("#longTermGoal").show();
		}
	});
});

$(document).ready(function(){
	$("input[name='longTermGoalSubmit']").click(function(){

		if($("#longTermGoal").is(":visible") && document.questions.longTermGoal.value !== ""){
			$("#longTermGoal").hide();
		}
		else if($("#longTermGoal").next().is(":hidden")){
			$("#longTermGoal").show();
		}
		if (document.questions.longTermGoal.value !== "") {
		$("#shortTermGoal").show();
		}
	});
});

$(document).ready(function(){
	$("input[name='shortTermGoalSubmit']").click(function(){

		if($("#shortTermGoal").is(":visible") && document.questions.shortTermGoal.value !== ""){
			$("#shortTermGoal").hide();
		}
		else if($("#shortTermGoal").next().is(":hidden")){
			$("#shortTermGoal").show();
		}
		if (document.questions.shortTermGoal.value !== "") {
		$("#submitProfile").show();
		}
	});
});