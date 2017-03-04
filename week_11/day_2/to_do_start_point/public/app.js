var tasks = JSON.parse( localStorage.getItem( "tasks" ) );

var addToDoItem = function() {
  var input = document.querySelector('input');
  tasks.push( input.value );
  input.value = "";
  localStorage.tasks = JSON.stringify( tasks );
  location.reload();
}

var createUl = function() {
  var ul = document.createElement( "ul" );
  return ul;
}

var createLi = function( item ){
  var li = document.createElement( "li" );
  li.innerText = item;
  return li;
}

var createList = function( target, parent, children ){
  for( var i = 0; i < children.length; i++ ){
    parent.appendChild( children[i] );
  }

  var batman = document.querySelector( target );
  batman.appendChild( parent );
}

var populateList = function( toDoList ) {
  var listParent = createUl();
  var listItems = []
  for( var i = 0; i < tasks.length; i++ ){
    listItems.push( createLi( tasks[i] ) )
  }
  var target = "#to-do-list";
  createList( target, listParent, listItems )
}

var removeList = function() {

}

var app = function() {
  var toDoList = document.querySelector('#to-do-list');
  populateList(toDoList);

  var button = document.querySelector("button");
  button.onclick = addToDoItem;
}

window.onload = app;
