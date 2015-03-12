  
     
     google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Country', '2009', '2010'],
          ['Australia', 3848, 2761],
          ['Canada', 5131, 4000],
          ['United Kingdom', 13763, 11282],
          ['United States', 30154, 28831],

]);

        var options = {
          chart: {
            title: 'Aid Committed for Developing Countries',
            subtitle: 'Comparisons of development assistance offered by four OECD countries',
    
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, {
 
 		colors: ['#F5A9BC', '#FA5882']
 
});
      }