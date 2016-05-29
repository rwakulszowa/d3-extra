export function extra() {
  var cell = null,
      container = null,
      input = [],
      extras = [],
      output = [];

  function extra(context) {
      input = context.data();
      container = container ? container : d3.select(context.node().parentNode);  // use selection's parent node unless container was explicitly set
      compute();
      draw();
  }

  function draw() {
    var width = container.node().getAttribute("width") * 1;
    var cellWidth = width / output.length;
    var grid = container.selectAll(".cell")
        .data(output)
      .enter().append("g")
        .attr("class", "cell")
        .attr("transform", function(d, i) { return "translate(" + i * cellWidth + ", 0)"})
        .call(cell);
    return extra;
  }

  function compute() {
      output = extras.map(function(foo) { return foo(input); });
      return extra;
  }

  extra.cell = function(_) {
    return arguments.length ? (
      cell = _,
      extra
    ) : cell;
  };

  extra.container = function(_) {
      return arguments.length ? (
        container = _,
        extra
      ) : container;
  };

  extra.extras = function(_) {
    return arguments.length ? (
      extras = Array.isArray(_) ? _ : [_],  //convert _ to array if it's a single element
      extra
    ) : extras;
  };

  extra.input = function(_) {
      return arguments.length ? (
        input = _,
        extra
      ) : input;
  };

  extra.output = function(_) {
      return arguments.length ? (
        output = _,
        extra
      ) : output;
  };

  extra.compute = compute;
  extra.draw = draw;

  return extra;
}
