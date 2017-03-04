var PieChart = function() {

  var container = document.getElementById( 'pieChart' );

  var chart = new Highcharts.Chart({

    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: "Pokemon Types I've Caught"
    },
    series: [{
      name: "Types of Pokemon",
      data: [{
          name: "Fire",
          y: 74,
          color: 'tomato'
        },
        {
          name: "Water",
          y: 53,
          color: 'LIGHTSKYBLUE'
        },
        {
          name: "Grass",
          y: 16,
          color: 'OLIVEDRAB'
        }]
      }]
  })
}