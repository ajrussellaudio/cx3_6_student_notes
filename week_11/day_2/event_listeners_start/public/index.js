var clickCounter = 0;

var handleSelectChange = function() {
  var pTag = document.querySelector("#select-result");
  pTag.innerText = "Ah pure luve " + this.value + " so ah dae!";
}

var handleKeyPress = function() {
  var pTag = document.querySelector("#text-result");
  // var input = document.querySelector('input');
  // var input = this;
  if( this.value ){
    pTag.innerText = this.value;
  } else {
    pTag.innerText = "Pure shan pal, nae typing."
  }
}

var handleButtonClick = function() {
  clickCounter++;
  var pTag = document.querySelector('#button-result');

  var plural = clickCounter === 1 ? "" : "s"
  var drawl = "a";

  pTag.innerText = "Pure been clicked " + clickCounter + " time" + plural + " 'n 'at, m" + drawl.repeat(clickCounter) + "n.";
}

var app = function(){
  var button = document.querySelector( "button" );
  button.onclick = handleButtonClick;

  var input = document.querySelector("input");
  input.onkeyup = handleKeyPress;

  var select = document.querySelector("select");
  select.onchange = handleSelectChange;
}

window.onload = app;
