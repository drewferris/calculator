(function(ui) {
  ui.tabs = function() {



  };

  function operation(classEl) {
    var tab = document.getElementById(classEl),
      s = $(tab).next();

    var ps = [];
    var everyChild = document.querySelectorAll('#tabs p');
    for (var i = 0; i < everyChild.length; i++) {
      ps.push(everyChild[i].id);
    }

    tab.addEventListener('click', function() {
      for (var i = 0; i < ps.length; i++) {
        if (ps[i] !== s.attr('id')) {
          var h = document.getElementById(ps[i]);
          h.setAttribute("style", "display: none")
          console.log(h);
          // var l = $(ps[i]);
        } else if (ps[i] === s.attr('id')) {
          s.css("display", "block");
        }
      }
    });
  }


  function _init() {
    console.log('dom loaded');
    var tabs = [];
    var everyChild = document.querySelectorAll('#tabs span');
    for (var i = 0; i < everyChild.length; i++) {
      tabs.push(everyChild[i].id);
    }

    for (var j = 0; j < tabs.length; j++) {
      operation(tabs[j]);
    }
  }


  document.addEventListener('DOMContentLoaded', _init);
})(ui = {});
