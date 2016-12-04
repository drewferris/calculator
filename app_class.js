//var ddf = {};

//   var _count = 0;
//
// ddf.test = function () {
//   _count++;
//   console.log('test');
// };
//
//
// var t2 = function() {
//   console.log('t2');
// };
//
// function t3() {
//   console.log('t3');
// }

(function (ddf) {


  ddf.addCalc = function() {
    var buttonsArr = ['add', 'sub', 'mult', 'div', 'clr'];
    var container = document.createElement('div');
    container.setAttribute('class', 'button-container');

    for(var i = 0; i < buttonsArr.length; i++) {
      var button = document.createElement('button');
      button.setAttribute('id', buttonsArr[i]);
      container.appendChild(button);
    }
  };

  var newCalc = document.getElementById('newCalc');
  newCalc.addEventListener('click', function () {
    ddf.addCalc();
  });



  var buttons = [];
  var everyChild = document.querySelectorAll('.button-container button');
  for (var i = 0; i < everyChild.length; i++) {
    buttons.push(everyChild[i].id);
  }

  var add = function(num1, num2) {
    return num1 + num2;
  };

  var subtract = function(num1, num2) {
    return num1 - num2;
  };

  var mult = function(num1, num2) {
    return num1 * num2;
  };

  var divide = function(num1, num2) {
    return num1 / num2;
  };

  var operations = [add, subtract, mult, divide, 'clear'];

  function operation(classEl, opr) {
    var button = document.getElementById(classEl),
      userInput1 = document.getElementById('userInput1'),
      userInput2 = document.getElementById('userInput2'),
      result = document.getElementById('result');
    button.addEventListener('click', function() {
      if(opr !== 'clear') {
        result.innerHTML = opr(Number(userInput1.value), Number(userInput2.value));
      } else {
        userInput1.value = null;
        userInput2.value = null;
        result.innerHTML = null;
      }
    });
  }

  for (var j = 0; j < buttons.length; j++) {
    operation(buttons[j], operations[j]);
  }
})(ddf = {});
