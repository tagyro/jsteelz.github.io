var map54_1 = d3.select("#map_54_2")
      .attr("width", 355)
      .attr("height", 360);
var map523_1 = d3.select("#map_523_54")
      .attr("width", 355)
      .attr("height", 360);

var linepoints523_54 = [ [6, 0], [6, 12] ];

var scale3 = d3.scale.linear()
    .domain([0, 12])
    .range([margin, 355-margin]);

var line3 = d3.svg.line()
                .x(function(d) { return scale3(d[0]); })
                .y(function(d) { return scale3(d[1]); });

map54_1.append("text")
      .text("54-Only Stops: 68 b/wd")
      .attr("text-anchor", "middle")
      .attr("x", 355/2.0)
      .attr("y", 15);

map523_1.append("text")
      .text("54/523 Stops: 91 b/wd")
      .attr("text-anchor", "middle")
      .attr("x", 355/2.0)
      .attr("y", 15);

map54_1.append("path")
      .attr("stroke", "#147DC0")
      .attr("stroke-width", 2.5)
      .attr("fill", "none")
      .attr("d", line3(linepoints523_54));

map523_1.append("path")
      .attr("stroke", "#F89738")
      .attr("stroke-width", 2.5)
      .attr("fill", "none")
      .attr("d", line3(linepoints523_54));

var stops54_1 = [ ['Mathilda & Moffett Park', 6, 1.2, 0],
                  ['Mathilda & Ross', 6, 2.4, 24],
                  ['Mathilda & Almanor/San Aleso', 6, 3.6, 23],
                  ['Mathilda & Del Rey', 6, 4.8, 4],
                  ['Mathilda & Indio', 6, 8, 10],
                  ['Mathilda & California', 6, 10, 7] ];

var stops523_1 = [ ['Lockheed Martin Transit Center', 6, 0, 61],
                   ['Mathilda & Maude', 6, 6, 14],
                   ['Sunnyvale Transit Center', 6, 12, 16] ];

var circles54_1 = map54_1.selectAll("circle")
                    .data(stops54_1)
                  .enter()
                    .append("circle")
                    .attr("cx", function(d) { return scale3(d[1]); })
                    .attr("cy", function(d) { return scale3(d[2]); })
                    .attr("r", function(d) { return ridershipScale(d[3]); })
                    .attr("stroke-width", 1)
                    .attr("stroke", "#147DC0")
                    .style("fill", "white")
                    .on("mouseover", function(d) { tip54(d); })
                    .on("mouseout", function(d) { remove54(d); });

var circles523_1 = map523_1.selectAll("circle")
                     .data(stops523_1)
                   .enter()
                     .append("circle")
                     .attr("cx", function(d) { return scale3(d[1]); })
                     .attr("cy", function(d) { return scale3(d[2]); })
                     .attr("r", function(d) { return ridershipScale(d[3]); })
                     .attr("stroke-width", 1)
                     .attr("stroke", "#F89738")
                     .style("fill", "white")
                     .on("mouseover", function(d) { tip523_2(d); })
                     .on("mouseout", function(d) { remove523_2(d); });

function tip54(d) {
  map54_1.append("text")
   .text(d[0] + ": " + d[3] + " b/wd")
   .attr("id", "tip54")
   .attr("text-anchor", "start")
   .attr("x", 15)
   .attr("y", 345);
}

function remove54() {
  map54_1.selectAll('#tip54').remove();
}

function tip523_2(d) {
  map523_1.append("text")
   .text(d[0] + ": " + d[3] + " b/wd")
   .attr("id", "tip523_2")
   .attr("text-anchor", "start")
   .attr("x", 15)
   .attr("y", 345);
}

function remove523_2() {
  map523_1.selectAll('#tip523_2').remove();
}
