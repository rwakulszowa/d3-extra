export function extras() {
  var data = [],
      aggregates = [],
      values = [];

  function extras(context) {
    var selection = context.selection ? context.selection() : context,
        values = this.values(),
        extras = selection.selectAll(".extras")
            .data(values);
  }

  extras.data = function(_) {
      return arguments.length ? (data = _, extras) : data;
  };

  extras.aggregates = function(_) {  //TODO: alias for appending a reduce function
      return arguments.length ? (aggregates = _, extras) : aggregates;  //TODO: if not array, convert to array
  };

  extras.values = function() {
      return aggregates.map(function(fun) { return fun(data); });
  };

  return extras;
}
