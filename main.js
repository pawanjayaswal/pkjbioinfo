/* Jayaswal Lab — publication filter and copy buttons. */
(function () {
  var list = document.getElementById('pubList');
  if (list) {
    var q = document.getElementById('pubSearch');
    var yr = document.getElementById('pubYear');
    var count = document.getElementById('pubCount');
    var items = Array.prototype.slice.call(list.querySelectorAll('.pub'));

    function apply() {
      var term = (q.value || '').trim().toLowerCase();
      var year = yr.value;
      var shown = 0;
      items.forEach(function (li) {
        var okText = !term || li.getAttribute('data-text').indexOf(term) !== -1;
        var okYear = !year || li.getAttribute('data-year') === year;
        var show = okText && okYear;
        li.hidden = !show;
        if (show) shown++;
      });
      count.textContent = shown + ' of ' + items.length + ' shown';
    }
    q.addEventListener('input', apply);
    yr.addEventListener('change', apply);
    apply();
  }

  document.querySelectorAll('.copybtn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var el = document.getElementById(btn.getAttribute('data-copy'));
      if (!el) return;
      var text = el.textContent.trim();
      var done = function () {
        var old = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = old; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { select(el); });
      } else {
        select(el);
      }
    });
  });

  function select(el) {
    var r = document.createRange();
    r.selectNodeContents(el);
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
  }
})();
