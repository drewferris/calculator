(function(ui) {
  ui.tabs = function(el, ini) {
    var t = $('#' + el).addClass('tabs');
    if(ini !== undefined) init();

    var hs = t.children('span');
    var ts = t.children('p');

    hs.first().addClass('on');
    ts.first().addClass('on');

    hs.click(function () {
      var t = $(this);
      if((t.hasClass('on')) && ini.col) {
        t.removeClass('on');
        ts.hide();
        return;
      }
      hs.removeClass('on');
      ts.hide();

      t.addClass('on');
      ts.eq(t.index()).fadeIn('slow');
    });

    function init() {
      for(var i = 0; i < ini.s.length; i++) {
        t.append("<span>" + ini.s[i] + "</span>");
      }
      for(var i = 0; i < ini.p.length; i++) {
        t.append("<p>" + ini.p[i] + "</p>");
      }
    }
  };

})(ui = {});
