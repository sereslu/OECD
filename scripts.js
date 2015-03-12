 google.load('visualization', '1.1', {packages: ['bar']});
    google.setOnLoadCallback(drawChart);
    
    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Country');
      data.addColumn('number', '2009');
      data.addColumn('number', '2010');

      data.addRows([
          ['Australia', 3848, 2761],
          ['Canada', 5131, 4000],
          ['United Kingdom', 13763, 11282],
          ['United States', 30154, 28831]
      ]);

      var options = {
        
         	title: 'Aid Committed for Developing Countries',
            subtitle: 'Comparisons of development assistance offered by four OECD countries',
   			colors: ['#F5A9BC', '#FA5882'],
        
       
        width: 900,
        height: 600,
        hAxis: {
          title: 'Country',
        
          gridlines: {count: 7},
          textStyle: {
            fontName: 'Arial',
            fontSize: 12,
            color: '#424242',
            bold: false,
            italic: false
          },
          titleTextStyle: {
            fontName: 'Arial',
            fontSize: 12,
            color: '#424242',
            bold: false,
            italic: false
          }
        },
        vAxis: {
          title: 'Aid Commited in Thousands',
          textStyle: {
            fontSize: 12,
            color: '#424242',
            bold: false,
            italic: false
          },
          titleTextStyle: {
            fontSize: 12,
            color: '#424242',
            bold: false,
            italic: false
          }
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('ex3'));

      chart.draw(data, options);
    }
      