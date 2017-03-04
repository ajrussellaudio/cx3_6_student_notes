document.addEventListener("DOMContentLoaded", function() {
  var data = ourFavouriteProgrammingLanguages;

  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');

  var width = canvas.width;
  var height = canvas.height;

  var leftGutter = 40;
  var rightGutter = 40;
  var topGutter = 40;
  var bottomGutter = 40;

  var yAxisMaximum = ( function() {
    var maxSoFar = 0;
    data.forEach( function(dataItem) {
      if( dataItem.value > maxSoFar ) maxSoFar = dataItem.value;
    });
    return maxSoFar;
  }() );

  var makeYAxisLabel = function( number ) {
    var y = ( yAxisMaximum - number ) * ( height / yAxisMaximum )

    context.fillStyle = 'black';
    context.font = "40px sans-serif"
    context.fillText(number, leftGutter, y)
  }

  var renderAxes = function() {
    context.fillStyle = 'gray';
    context.fillRect(
      leftGutter,
      topGutter, 
      1, 
      height - topGutter - bottomGutter
    );

    context.fillRect(
      leftGutter,
      height - bottomGutter,
      width - leftGutter - rightGutter,
      1
    ); 

    makeYAxisLabel(0);

  }

  renderAxes();
  
})