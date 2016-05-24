export function extra() {
  var context = null,
      data = [],
      extras = [],
      values = [];

  function extra(c) {
      context = c;
      data = context.data();
      refresh();
  }

  function refresh() {
      values = extras.map(function(foo) { return foo(data, context); });
      return extra;
  }

  extra.context = function(_) {
      return arguments.length ? (
        context = _,
        extra
      ) : context;
  };

  extra.data = function(_) {
      return arguments.length ? (
        data = _,
        extra
      ) : data;
  };

  extra.extras = function(_) {
    return arguments.length ? (
      extras = Array.isArray(_) ? _ : [_],  //convert _ to array if it's a single element
      extra
    ) : extras;
  };

  extra.values = function(_) {
      return arguments.length ? (
        values = _,
        extra
      ) : values;
  };

  extra.refresh = refresh;

  return extra;
}
