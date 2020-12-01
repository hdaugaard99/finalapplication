// JavaScript Document

 function WriteIncome() {
               if( document.questions.income.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
             
               document.cookie="income=" + document.questions.income.value;
             
            } 

function WritePeople() {
               if( document.questions.people.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
             
               document.cookie="people=" + document.questions.people.value;
            
            }  

function WriteState() {
               if( document.questions.state.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
             
               document.cookie="state=" + document.questions.state.value;
             
            } 

function WriteGroceries() {
               if( document.questions.groceries.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
              var cookievalue= escape(document.questions.groceries.value);
               document.cookie="groceries=" + document.questions.groceries.value;
            
            } 

 function WriteGas() {
               if( document.questions.gas.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
             
               document.cookie="gas=" + document.questions.gas.value;
             
            } 

 function WriteHome() {
               if( document.questions.home.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
             
               document.cookie="home=" + document.questions.home.value;
             
            } 

 function WritePayments() {
               if( document.questions.payments.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
             
               document.cookie="payments=" + document.questions.payments.value;
             
            } 

 function WriteEntertainment() {
               if( document.questions.entertainment.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
             
               document.cookie="entertainment=" + document.questions.entertainment.value;
             
            } 

 function WriteSavings() {
               if( document.questions.savings.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
             
               document.cookie="savings=" + document.questions.savings.value;
             
            } 

 function WriteLongTermGoal() {
               if( document.questions.longTermGoal.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
             
               document.cookie="longTermGoal=" + document.questions.longTermGoal.value;
             
            } 

 function WriteShortTermGoal() {
               if( document.questions.shortTermGoal.value == "" ) {
                  alert("Enter some value!");
                  return;
               }
             
               document.cookie="shortTermGoal=" + document.questions.shortTermGoal.value;
             
            } 


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



switch (true) {
	case (numOfPeople == 1 && groceriesNumber <= 250):
		$("#groceriesAnalysis").append("Looks like your spending is about right in this area");
		$("#groceriesInput").append("Keep up the great work! you're spending less than $250 a month on groceries.  You're right where you need to be in this area.");
		break;
	case (numOfPeople == 1 && groceriesNumber > 250):
		$("#groceriesAnalysis").append("It looks like you may be overspending in this area");
		$("#groceriesInput").append("You may be overspending in this area. For a household of 1, the average recommended amount to spend on groceries and food each month is $250. If you eat out a lot, try making more meals at home. You can also try buying generic brands when shopping because they are usually cheaper. Also, remember that some grocers, like natural foods stores, mark up their prices more than places like Walmart.");
		break;
	case (numOfPeople == 2 && groceriesNumber <= 550):
		$("#groceriesAnalysis").append("Looks like your spending is about right in this area");
		$("#groceriesInput").append("Keep up the great work! you're spending less than $550 a month on groceries.  You're right where you need to be in this area.");
		break;
	case (numOfPeople == 2 && groceriesNumber > 550):
		$("#groceriesAnalysis").append("It looks like you may be overspending in this area");
		$("#groceriesInput").append("You may be overspending in this area. For a household of 2, the average recommended amount to spend on groceries and food each month is $550. If you eat out a lot, try making more meals at home. You can also try buying generic brands when shopping because they are usually cheaper. Also, remember that some grocers, like natural foods stores, mark up their prices more than places like Walmart.");
		break;
	case (numOfPeople == 3 && groceriesNumber <= 720):
		$("#groceriesAnalysis").append("Looks like your spending is about right in this area");
		$("#groceriesInput").append("Keep up the great work! you're spending less than $720 a month on groceries.  You're right where you need to be in this area.");
		break;
	case (numOfPeople == 3 && groceriesNumber > 720):
		$("#groceriesAnalysis").append("It looks like you may be overspending in this area");
		$("#groceriesInput").append("You may be overspending in this area. For a household of 3, the average recommended amount to spend on groceries and food each month is $720. If you eat out a lot, try making more meals at home. You can also try buying generic brands when shopping because they are usually cheaper. Also, remember that some grocers, like natural foods stores, mark up their prices more than places like Walmart.");
		break;
	case (numOfPeople == 4 && groceriesNumber <= 900):
		$("#groceriesAnalysis").append("Looks like your spending is about right in this area");
		$("#groceriesInput").append("Keep up the great work! you're spending less than $900 a month on groceries.  You're right where you need to be in this area.");
		break;
	case (numOfPeople == 4 && groceriesNumber > 900):
		$("#groceriesAnalysis").append("It looks like you may be overspending in this area");
		$("#groceriesInput").append("You may be overspending in this area. For a household of 4, the average recommended amount to spend on groceries and food each month is $900. If you eat out a lot, try making more meals at home. You can also try buying generic brands when shopping because they are usually cheaper. Also, remember that some grocers, like natural foods stores, mark up their prices more than places like Walmart.");
		break;
	case (numOfPeople == 5 && groceriesNumber <= 1060):
		$("#groceriesAnalysis").append("Looks like your spending is about right in this area");
		$("#groceriesInput").append("Keep up the great work! you're spending less than $1060 a month on groceries.  You're right where you need to be in this area.");
		break;
	case (numOfPeople == 5 && groceriesNumber > 1060):
		$("#groceriesAnalysis").append("It looks like you may be overspending in this area");
		$("#groceriesInput").append("You may be overspending in this area. For a household of 5, the average recommended amount to spend on groceries and food each month is $1060. If you eat out a lot, try making more meals at home. You can also try buying generic brands when shopping because they are usually cheaper. Also, remember that some grocers, like natural foods stores, mark up their prices more than places like Walmart.");
		break;
	case (numOfPeople == 6 && groceriesNumber <= 1230):
		$("#groceriesAnalysis").append("Looks like your spending is about right in this area");
		$("#groceriesInput").append("Keep up the great work! you're spending less than $1230 a month on groceries.  You're right where you need to be in this area.");
		break;
	case (numOfPeople == 6 && groceriesNumber > 1230):
		$("#groceriesAnalysis").append("It looks like you may be overspending in this area");
		$("#groceriesInput").append("You may be overspending in this area. For a household of 6 or more, the average recommended amount to spend on groceries and food each month is $1230. If you eat out a lot, try making more meals at home. You can also try buying generic brands when shopping because they are usually cheaper. Also, remember that some grocers, like natural foods stores, mark up their prices more than places like Walmart.");
		break;
	default:
		$("#groceriesAnalysis").append("More information needed");
		$("#groceriesInput").append("Error: Not enough info");
		break;
}


switch (true) {
	case (gasNumber <= 80):
		$("#gasAnalysis").append("Looks like your spending is about right in this area");
		$("#gasInput").append("You're spending less than $80 a month on gas.  That's amazing! Keep up the great work!");
		break;
	case (gasNumber > 80):
		$("#gasAnalysis").append("It looks like you may be overspending in this area");
		$("#gasInput").append("You're spending more than $80 on gas every month. Depending on your daily routine, the amount you're spending may be reasonable, but there are things you can try to reduce spending. If you're in a position to, you could trade-in your car and buy a more fuel efficient car. If that's not an option, or you already have a very fuel efficient car, you could look into public transportation in your area. If you commute to work everyday, it may be less costly to take public transportation. If you have friends that you meet up with frequently or who are going to the same place, try carpooling and taking turns driving so that you don't have to use the gas in your car every time you meet up with them.");
		break;
	default :
		$("#gasAnalysis").append("More information needed");
		$("#gasInput").append("Error: Not enough info");
		break;
}

switch (true) {
	case (paymentsNumber < 0):
		$("#paymentsAnalysis").append("You're doing great! Keeping payments low allows you to use your money for other things");
		$("#paymentsInput").append("It looks like you're not usually paying off credit card bills or car payments most months. Great job! Paying for things outright is a great way to insure that you won't have any extra or surprise expenses each month. Sometimes, it's not possible to avoid these expenses, like if you need a new car, but the less of thme you have, the easier it will be to stay on-budget.");
		break;
		
	case (paymentsNumber > 0):
		$("#paymentsAnalysis").append("Try reducing the amount of monthly payments you have to make");
		$("#paymentsInput").append("It looks like you are paying off some purchases every month.  There's nothing wrong with that! If you use a credit card frequently, try to reduce your credit card usage so that you have less to pay off each month. Paying for things outright is a great way to insure that you won't have any extra or surprise expenses each month. Sometimes, it's not possible to avoid these expenses, like if you need a new car, but the less of thme you have, the easier it will be to stay on-budget.");
		break;
		
	default:
		$("#paymentsAnalysis").append("More information needed");
		$("#paymentsInput").append("Error: Not enough info");
		break;
}

switch (true) {
	case (entertainmentNumber <= 200):
		$("#entertainmentAnalysis").append("Looks like your spending is about right in this area");
		$("#entertainmentInput").append("It looks like you're spending less than $200 a month in this area. You're doing great! Remember that it's okay to treat yourself every once in a while.");
		break;
	case (entertainmentNumber > 200):
		$("#entertainmentAnalysis").append("Looks like your spending is about right in this area");
		$("#entertainmentInput").append("It looks like you're spending more than $200 a month in this area. You may be overspending depending on how big your household is. Remember that it's okay to treat yourself every once in a while, but try not to go overboard. If you have a streaming subscription you don't use anymore, cancel it. If you pay for cable channels that you don't watch, try changing your cable package so that you're not paying for what you're not using. You can also spend less if you rent a movie to watch at home instead of going to the movie theater.");
		break;
	default:
		$("#entertainmentAnalysis").append("More information needed");
		$("#entertainmentInput").append("Error: Not enough info");
		break;
}