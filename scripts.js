google.load('visualization', '1.1', {
	packages : ['bar']
});
google.setOnLoadCallback(drawChart);

function drawChart() {

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Country');
	data.addColumn('number', '2009');
	data.addColumn('number', '2010');

	data.addRows([['Australia', 384, 276], ['Canada', 513, 400], ['United Kingdom', 1376, 1128], ['United States', 3015, 2883]]);

	var options = {

		chart: {
          title: 'Motivation and Energy Level Throughout The Day',
          subtitle: 'Based on a scale of 1 to 10'
        },
		colors : ['#F5A9BC', '#FA5882'],

		width : 900,
		height : 600,
		hAxis : {
			title : 'Country',

			gridlines : {
				count : 7
			},
			textStyle : {
				fontName : 'Arial',
				fontSize : 12,
				color : '#424242',
				bold : false,
				italic : false
			},
			titleTextStyle : {
				fontName : 'Arial',
				fontSize : 16,
				color : '#424242',
				bold : false,
				italic : false
			}
		},
		vAxis : {
			title : 'Aid Commited',
			format : '# mil',
			textStyle : {
				fontSize : 12,
				color : '#424242',
				bold : false,
				italic : false
			},
			titleTextStyle : {
				fontSize : 16,
				color : '#424242',
				bold : false,
				italic : false
			}
		}
	};

	var chart = new google.visualization.ColumnChart(document.getElementById('ex8'));

	chart.draw(data, options);
}
