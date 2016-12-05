(function(calc) {
  calc.AppViewModel = function() {
    var self = this;
    self.in1 = ko.observable('');
    self.in2 = ko.observable('');
    self.result = ko.observable('');
    self.resData = ko.observable('');
    self.plainJSON = ko.toJSON(self.resData);


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

    self.loadXMLDoc = function() {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          if (xmlhttp.status == 200) {
            document.getElementById('myDiv').innerHTML = xmlhttp.responseText;
            self.resData(JSON.parse(xmlhttp.response));
          } else if (xmlhttp.status == 400) {
            alert('There was an error 400');
          } else {
            alert('something else other than 200 was returned');
          }
        }
      };

      xmlhttp.open('GET', 'https://api.github.com/users/drewferris', true);
      xmlhttp.send();
    };
  };

  function _init() {
    ko.applyBindings(new calc.AppViewModel());
  }

  document.addEventListener('DOMContentLoaded', _init);
})(calc = {});
