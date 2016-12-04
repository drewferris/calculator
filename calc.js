(function (ddf) {
  ddf.add = function(num1, num2) {
    return num1 + num2;
  };

  ddf.sub = function(num1, num2) {
    return num1 - num2;
  };

  ddf.mult = function(num1, num2) {
    return num1 * num2;
  };

  ddf.div = function(num1, num2) {
    return num1 / num2;
  };

  var operations = [ddf.add, ddf.sub, ddf.mult, ddf.div, 'clear'];

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


  function _init() {
    console.log('dom loaded');
    var buttons = [];

    var everyChild = document.querySelectorAll('.button-container button');
    for (var i = 0; i < everyChild.length; i++) {
      buttons.push(everyChild[i].id);
    }

    for (var j = 0; j < buttons.length; j++) {
      operation(buttons[j], operations[j]);
    }
  }

  document.addEventListener('DOMContentLoaded', _init);
})(ddf = {});
