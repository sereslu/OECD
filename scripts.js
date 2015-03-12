  
     
     google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(oecdData);

        var options = {
          chart: {
            title: 'Aid Committed for Developing Countries',
            subtitle: 'Comparisons of development assistance offered by four OECD countries',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, options);
      }