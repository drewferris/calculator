(function(ui) {
  ui.tabs = function(el) {

    var t = $('#' + el).addClass('tabs');
    var hs = t.children('span');
    var ts = t.children('p');

    ts.first().addClass('on');

    hs.click(function () {
      ts.removeClass('on');
      ts.eq($(this).index()).addClass('on');
    });
  };
})(ui = {});
