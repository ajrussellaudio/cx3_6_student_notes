var createCanvas = function() {
  var canvas = document.getElementById('main');
  var context = canvas.getContext('2d');

  var coordX = 0;
  var coordY = 0;

  canvas.onclick = function( event ) {
    coordX = event.layerX;
    coordY = event.layerY;
    context.beginPath();
    context.moveTo( coordX, coordY );
  }

  window.addEventListener( 'keydown', function( event ) {
    var drawDirection = {
      ArrowRight: [ 5, 0 ],
      ArrowLeft:  [ -5, 0 ],
      ArrowUp:    [ 0, -5 ],
      ArrowDown:  [ 0, 5 ] 
    }

    var move = drawDirection[ event.key ];
    coordX += move[0];
    coordY += move[1]

    // console.log( coordX, coordY );
    context.lineTo( coordX, coordY );

    context.fillStyle = "black";
    context.stroke();
  })


}

window.onload = createCanvas;