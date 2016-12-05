(function(calc) {
  calc.AppViewModel = function() {
    var self = this;
    self.in1 = ko.observable('');
    self.result = ko.observable('');

    self.add = function() {
      self.result(Number(self.result()) + Number(self.in1()));
      self.in1('');
    };
    self.sub = function() {
      self.result(Number(self.result()) - Number(self.in1()));
      self.in1('');
    };
    self.mult = function() {
      self.result(Number(self.result()) * Number(self.in1()));
      self.in1('');
    };
    self.div = function() {
      self.result(Number(self.result()) / Number(self.in1()));
      self.in1('');
    };
    self.clr = function() {
      self.result(0);
      self.in1('');
    };

  };

  function _init() {
    ko.applyBindings(new calc.AppViewModel());
  }

  document.addEventListener('DOMContentLoaded', _init);
})(calc = {});
