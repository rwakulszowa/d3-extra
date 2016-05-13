export function extras() {
  var aggregates = [],
      data = [],
      values = [];

  function extras(context) {
      //TODO: try to capture context data
  }

  //TODO: alias for appending a map reduce function

  extras.aggregates = function(_) {  //TODO: bind names with aggregates
      return arguments.length ? (
        aggregates = Array.isArray(_) ? _ : [_],  //convert _ to array if it's a single element
        extras
      ) : aggregates;
  };  //TODO: additional utils -> max could return selection of max element, avg could draw a line of avg value etc.

  extras.data = function(_) {
      return arguments.length ? (
        data = _,
        values = aggregates.map(function(foo) { return foo(data); }),
        extras
      ) : data;
  };

  extras.values = function(_) {
      return arguments.length ? (values = _, extras) : values;
  };

  return extras;
}
