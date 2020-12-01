// JavaScript Document


google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Item', 'Amount Spent'],
          ['Groceries',        numbers[7]],
          ['Gas',              numbers[6]],
          ['Home',             numbers[5]],
          ['Payments',         numbers[4]],
          ['Entertainment',    numbers[3]],
		['Savings',            numbers[2]]
        ]);

        var options = {
          title: "Your Monthly Spending"
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }








            



