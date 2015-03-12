google.load('visualization', '1', {
	packages : ['corechart']
});
google.setOnLoadCallback(drawChart);

function drawChart() {

	var data = new google.visualization.DataTable(oecdData);
	data.addColumn('string', 'Country');
	data.addColumn('number', '2009');
	data.addColumn('number', '2010');

	data.addRows(oecdData);
	
	//data.addColumn({type: 'string', role: 'annotation'});// annotation column
	
	//if (oecdData.Country == "United States"){
	//oecdData.push("us");
	//}else{
	//oecdData.push("");
	//}


// setting chart options
	var options = {
		colors : ['#F5A9BC', '#FA5882'], // color of my bars
		// size of my chart
        width : 900,
		height : 600,
		// title options
		title : 'Official Development Aid 2009 vs. 2010',
		titlePosition : 'out',
		titleTextStyle : {
			color : 'black',
			fontName : 'Arial',
			fontSize : 20
		},
		// hAxis options
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
		// vAxis options
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

	var chart = new google.visualization.ColumnChart(document.getElementById('ex0'));

	chart.draw(data, options);
}
