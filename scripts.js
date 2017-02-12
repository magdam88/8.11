var add = document.getElementById('addElem');
var list = document.getElementById('Lista');
var itemsByTagName = document.getElementsByTagName('li');


add.addEventListener('click', function () {
    var number = itemsByTagName.length;
    list.innerHTML += '<li>item</li>' + number;

});