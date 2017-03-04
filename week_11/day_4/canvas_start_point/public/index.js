window.onload = function() {

  var canvas = document.getElementById('main');
  console.log(canvas);

  var context = canvas.getContext('2d');
  console.log(context);

  // context.fillStyle = "red";
  // context.fillRect(10, 10, 500, 50);
  // context.strokeStyle = "black";
  // context.strokeRect( 10, 10, 500, 50 );

  // context.beginPath();
  // context.moveTo( 100, 100 );
  // context.lineTo( 200, 300 );
  // context.stroke();

  // // triangle
  // context.beginPath();
  // context.moveTo( 200, 200 );
  // context.lineTo( 200, 300 );
  // context.lineTo( 100, 300 );
  // context.closePath();
  // context.stroke();


  // context.beginPath();
  // context.arc( 400, 100, 50, 0, Math.PI * 2 );
  // context.stroke();

  canvas.onmousemove = function( event ) {
    // canvas.clear();
    context.beginPath();
    context.arc( event.layerX, event.layerY, 50, 0, Math.PI * 2 );
    // context.fillStyle = getRandomColor();
    context.fill();
  }

  // canvas.onmousemove = drawCat;

  var img = document.createElement('img');
  img.src = "http://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png";

  var drawCat = function() {
    context.drawImage( img, 400, 200, 90, 90 );
  }
  
  img.onload = drawCat;

  var changeColor = function(  ) {
    console.log( this.value )
    context.fillStyle = this.value;
  }

  var colorPicker = document.querySelector("#color-picker");
  colorPicker.onchange = changeColor;

  function getRandomColor() {
      // stack overflow
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
}