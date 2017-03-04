var addQuoteArticle = function() {
  var quoteArticle = document.createElement( "article" );
  quoteArticle.classList.add( "quote" );
  return quoteArticle;
}

var addBlockquote = function( text ){
  var blockquote = document.createElement( "blockquote" );
  blockquote.innerText = text;
  return blockquote;
}

var addCite = function( name ) {
  var cite = document.createElement( "cite" );
  cite.innerText = " " + name;
  return cite;
}

var addToDom = function( parent, child, grandchild, target ) {
  child.appendChild( grandchild );
  parent.appendChild( child );

  var target = document.getElementById( target );
  target.appendChild( parent );
}

var addQuote = function( name, quote ) {
  var quoteArticle = addQuoteArticle();
  var blockquote = addBlockquote( quote );
  var cite = addCite( name );

  addToDom( quoteArticle, blockquote, cite, "quotes" );
}

var app = function() {
  addQuote("Alan", "JavaScript? Piece of pish mate.");
  addQuote("Phil", "I believe in abstractions. Lots.");
  addQuote("Hannah", "Pub?");
}

window.onload = app;
