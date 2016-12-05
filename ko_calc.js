(function(calc) {
  calc.AppViewModel = function() {
    var self = this;
    self.in1 = ko.observable('');
    self.in2 = ko.observable('');
    self.result = ko.observable('');
    self.add = function() {
      self.result(Number(self.in1()) + Number(self.in2()));
    };
    self.sub = function() {
      self.result(Number(self.in1()) - Number(self.in2()));
    };
    self.mult = function() {
      self.result(Number(self.in1()) * Number(self.in2()));
    };
    self.div = function() {
      self.result(Number(self.in1()) / Number(self.in2()));
    };
    self.clr = function() {
      self.result('');
      self.in1('');
      self.in2('');
    };
  };

  function _init() {
    ko.applyBindings(new calc.AppViewModel());
  }

  document.addEventListener('DOMContentLoaded', _init);
})(calc = {});
