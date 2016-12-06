(function(calc) {

  calc.AppViewModel = function() {
    var self = this;
    self._val = ko.observable('');
  };

  var vm = { viewModel: new calc.AppViewModel() };

  calc.add = function(num) {
    vm.viewModel._val((Number(vm.viewModel._val()) + num));
    return this;
  };

  calc.sub = function(num) {
    vm.viewModel._val((Number(vm.viewModel._val()) - num));
    return this;
  };

  calc.mult = function(num) {
    vm.viewModel._val((Number(vm.viewModel._val()) * num));
    return this;
  };

  calc.div = function(num) {
    vm.viewModel._val((Number(vm.viewModel._val()) / num));
    return this;
  };

  var operations = [calc.add, calc.sub, calc.mult, calc.div, 'clear'];

  function operation(classEl, opr) {
    var button = document.getElementById(classEl),
      userInput1 = document.getElementById('userInput1');

    button.addEventListener('click', function() {
      if (opr !== 'clear') {
        opr((Number(userInput1.value)));
      } else {
        userInput1.value = null;
        vm.viewModel._val(0);
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

    ko.applyBindings(vm);

  }

  document.addEventListener('DOMContentLoaded', _init);
})(calc = {});
