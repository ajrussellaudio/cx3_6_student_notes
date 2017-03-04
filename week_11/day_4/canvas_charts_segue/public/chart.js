document.addEventListener('DOMContentLoaded', function() {

  var data = ourFavouriteProgrammingLanguages;

  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');

  var width = canvas.width;
  var height = canvas.height;

  var topGutter = 40;
  var leftGutter = 40;
  var bottomGutter = 40;

  var graphHeight = height - bottomGutter - topGutter;
  var graphWidth = width - leftGutter;

  var barWidth = graphWidth / data.length;

  var yAxisLineWidth = 1;
  var xAxisLineHeight = 1;

  var yAxisLimit = (function() {
    
    // Decide what our Y-axis upper bound will be:
    // I.e., find the max-value in the data and round it up
    // to the nearest 10.

    var maxSoFar = 0;

    data.forEach(function(dataItem) {
      if (dataItem.value > maxSoFar) {
        maxSoFar = dataItem.value;
      }
    });

    return maxSoFar;
  }());

  var yAxisPixelMultiplier = graphHeight / yAxisLimit;

  var makeYAxisLabel = function(number) {

    var y = (yAxisLimit - number) * yAxisPixelMultiplier + topGutter;

    context.fillStyle = 'black';
    context.textBaseline = 'middle';
    context.textAlign = 'right';
    context.font = '12px sans-serif';
    context.fillText(number, leftGutter - 10, y);
    context.fillStyle = 'gray';
    context.fillRect(leftGutter - 5, y, 5, 1);

  };

  var renderAxes = function() {
    // Y-axis
    context.fillStyle = 'gray';
    context.fillRect(
      leftGutter,
      topGutter,
      yAxisLineWidth,
      height - bottomGutter - topGutter
    );

    // X-axis
    context.fillStyle = 'gray';
    context.fillRect(
      leftGutter,
      height - bottomGutter,
      width,
      xAxisLineHeight
    );

    makeYAxisLabel(0);
    makeYAxisLabel(yAxisLimit / 2);
    makeYAxisLabel(yAxisLimit);
  };

  var renderData = function(progress) {

    context.clearRect(
      leftGutter + yAxisLineWidth,
      topGutter,
      graphWidth,
      graphHeight
    );

    // Actually draw the data:
    data.forEach(function(dataItem, i) {

      var dataItemValue = dataItem.value * progress;

      var x = leftGutter + yAxisLineWidth + (barWidth * i);
      var y = topGutter + (yAxisLimit - dataItemValue) * yAxisPixelMultiplier;

      context.fillStyle = dataItem.color;
      context.fillRect(
        x,
        y,
        barWidth,
        dataItemValue * yAxisPixelMultiplier
      );

      context.textAlign = 'center';
      context.font = '20px sans-serif';
      context.fillStyle = 'black';
      context.fillText(
        dataItem.name,
        x + barWidth / 2,
        y - 20
      );
    });

  };

  renderAxes();
  renderData(0);

  var progress = 0;
  var timer = setInterval(function() {
    progress += .05;
    if (Math.floor(progress) === 1) {
      clearInterval(timer);
    }
    renderData(progress);
  }, 25);

});
