export function extra() {
  var data = [],
      extras = [],
      values = [];

  function extra(context) {
      //TODO: try to capture context data
  }

  function refresh() {
      values = extras.map(function(foo) { return foo(data); });
      return extra;
  }

  //TODO: alias for appending a map reduce function

  extra.extras = function(_) {
      return arguments.length ? (
        extras = Array.isArray(_) ? _ : [_],  //convert _ to array if it's a single element
        extra
      ) : extras;
  };  //TODO: additional utils -> max could return selection of max element, avg could draw a line of avg value etc.

  extra.data = function(_) {
      return arguments.length ? (
        data = _,
        refresh()
      ) : data;
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
