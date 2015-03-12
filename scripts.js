  
     
      
    google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawStuff);

      function drawStuff() {
      	

        var data = new google.visualization.arrayToDataTable(oecdData);

        var options = {
          width: 900,
          chart: {
            title: 'Aid Committed for Developing Countries',
            subtitle: '2009 and 2010 comparisons of development assistance offered by four OECD countries'
          },
          series: {
            0: { axis: '2009' }, // Bind series 0 to an axis named '2009'.
            1: { axis: '2010' } // Bind series 1 to an axis named '2010'.
          },
          axes: {
            y: {
              distance: {label: 'Aid Committed'}, // Left y-axis.
             // brightness: {side: 'right', label: 'apparent magnitude'} // Right y-axis.
            }
          }
        };

      var chart = new google.charts.Bar(document.getElementById('dual_y_div'));
      chart.draw(data, options);
    };






