(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.d3_extra = global.d3_extra || {})));
}(this, function (exports) { 'use strict';

  function extra() {
    var container = null,
        cell = null,
        data = [],
        extras = [],
        values = [];

    function extra(context) {
        data = context.data();
        container = container ? container : d3.select(context.node().parentNode);  // use selection's parent node unless container was explicitly set
        refresh();
        draw();
    }

    function draw() {
      var width = container.node().getAttribute("width") * 1;
      var cellWidth = width / values.length;
      var grid = container.selectAll(".cell")
          .data(values)
        .enter().append("g")
          .attr("class", "cell")
          .attr("transform", function(d, i) { return "translate(" + i * cellWidth + ", 0)"})
          .call(cell);
      return grid;
    }

    function refresh() {
        values = extras.map(function(foo) { return foo(data); });
        return extra;
    }

    extra.container = function(_) {
        return arguments.length ? (
          container = _,
          extra
        ) : container;
    };

    extra.cell = function(_) {
        return arguments.length ? (
          cell = _,
          extra
        ) : cell;
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
    extra.draw = draw;

    return extra;
  }

  exports.extra = extra;

}));