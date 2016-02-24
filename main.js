'use strict';
var list = [];
var p2 = document.createElement('p');
//var randomPerson = list[Math.floor(Math.random() * list.length)];

document.addEventListener('DOMContentLoaded', function() {


  document.getElementById('nameBtn').addEventListener('click',function(event) {
    var text = document.getElementById('textArea').value;
    text = text.replace(/\s/g, '').split(',');

    if(Array.isArray(text)){
      text.forEach(function(item){
        list.push(item);
      });
    } else { list.push(text); }


    console.log(text);

    document.getElementById('textArea').value = '';


    list.forEach(function(item){
      var people = document.getElementById('people');
      var p = document.createElement('p');
      p.setAttribute('id','names');
      p.textContent = item;
      people.appendChild(p);
      list = [];
      console.log('p', p);
      console.log('people', people);
    });


  });

  document.querySelector('#randomName').addEventListener('click', function(){
    var randNames = document.getElementById('people').getElementsByTagName('p');
    var randomPeopleDiv = document.getElementById('randomPeople');
    var randomPer = randNames[Math.floor(Math.random() * randNames.length)].innerHTML;
    p2.textContent = randomPer;
    randomPeopleDiv.appendChild(p2);

    // paragraph.textContent.innerHTML;
    // randomPeopleDiv.appendChild(paragraph);
    // p2.textContent = randNames[Math.floor(Math.random() * randNames.length)];
    // randomPeopleDiv.appendChild(p2)
    // console.log(randNames[Math.floor(Math.random() * randNames.length)]);

  });



});
