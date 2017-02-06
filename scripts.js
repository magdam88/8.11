var add = document.getElementById('addElem');
var list = document.getElementById('Lista');
  var itemsByTagName = document.getElementsByTagName('li');
var number = itemsByTagName.lenght;

add.addEventListener('click', function() {
  list.innerHTML += '<li>item</li>' + number;
 
});