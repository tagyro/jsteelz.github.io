//COMMON VARIABLES FOR ALL .JS FILES

var margin = 30;

var ridershipScale = d3.scale.linear()
  .domain([0, 916])
  .range([2, 20]);

function tooltip(map, d) {
  if (map == '23') {
    document.getElementById('stop23').style.display = 'inline';
    document.getElementById('stop23').innerHTML = "<strong>" + d[0] + "<br/></strong> <span>" + d[3] + " b/wd</span>";
  }
}

function clearTool(map) {
  if (map == '23') {
    document.getElementById('stop23').style.display = 'none';
  }
}

//END COMMON VARIABLES FOR ALL .JS FILES

var map23 = d3.select("#map_23")
      .attr("width", 720)
      .attr("height", 240);
var map523 = d3.select("#map_523")
      .attr("width", 720)
      .attr("height", 240);

map23.append("text")
      .text("23-Only Stops: 2298 b/wd")
      .attr("text-anchor", "middle")
      .attr("x", 720/2.0)
      .attr("y", 15);

map523.append("text")
      .text("23/323/523 Stops: 3837 b/wd")
      .attr("text-anchor", "middle")
      .attr("x", 720/2.0)
      .attr("y", 15);

var linepoints23 = [ [39.5, 0], [34, 5.5], [36.5, 8], [34, 10.5], [18, 10.5], [18, 8.5], [16, 8.5], [16, 10.5], [0, 10.5] ];
var linepoints523 = [ [39.5, 0], [34, 5.5], [36.5, 8], [34, 10.5], [0, 10.5] ];

var scale23 = d3.scale.linear()
    .domain([0, 39.5])
    .range([margin, 720-margin]);

var line23 = d3.svg.line()
                .x(function(d) { return scale23(d[0]); })
                .y(function(d) { return scale23(d[1]); });

map23.append("path")
      .attr("stroke", "#EF3B39")
      .attr("stroke-width", 2.5)
      .attr("fill", "none")
      .attr("d", line23(linepoints23));

map523.append("path")
      .attr("stroke", "#F89738")
      .attr("stroke-width", 2.5)
      .attr("fill", "none")
      .attr("d", line23(linepoints523));

var stops23 = [ ['Alum Rock & 33rd/34th', 39.041, 0.458, 65],
                ['Santa Clara & 26th/28th', 38.583, 0.458*2, 143],
                ['Santa Clara & 20th-22nd', 37.4375, 2.0625, 111],
                ['Santa Clara & 13th-15th', 36.40625, 3.09375, 77],
                ['Santa Clara & 11th', 36.0625, 3.4375, 67],
                ['Santa Clara & 7th', 35.71875, 3.71825, 140],
                ['San Carlos & Market/2nd', 36.5, 8, 84],
                ['San Carlos & Woz', 35.5, 9, 21],
                ['San Carlos & Delmas', 35, 9.5, 12],
                ['San Carlos & Gifford', 34.5, 10, 29],
                ['San Carlos & Sunol', 32.66, 10.5, 11],
                ['San Carlos & Lincoln', 31.33, 10.5, 31],
                ['San Carlos & Willard', 28.2, 10.5, 147],
                ['San Carlos & Leigh', 26.4, 10.5, 80],
                ['San Carlos & Leland', 24.6, 10.5, 58],
                ['San Carlos & Arleta', 22.8, 10.5, 53],
                ['Stevens Creek & Bradley', 20.5, 10.5, 31],
                ['Di Salvo/Bellerose/Bailey', 18, 9.5, 11],
                ['OConnor Hospital', 17.5, 8.5, 54],
                ['Valley Fair/Monroe', 16.5, 8.5, 326],
                ['Winchester & Dorcich', 16, 9.5, 9],
                ['Stevens Creek & Maplewood', 15.375, 10.5, 38],
                ['Stevens Creek & Henry', 14.75, 10.5, 8],
                ['Stevens Creek & Cypress', 14.125, 10.5, 52],
                ['Stevens Creek & Boynton', 12.67, 10.5, 29],
                ['Stevens Creek & Saratoga', 11.83, 10.5, 97],
                ['Stevens Creek & Lopina', 10.25, 10.5, 44],
                ['Stevens Creek & Woodhams', 9.5, 10.5, 74],
                ['Stevens Creek & Albany/Casa View', 8.75, 10.5, 27],
                ['Stevens Creek & I-280/Stern', 7.25, 10.5, 64],
                ['Stevens Creek & Tantau', 6.5, 10.5, 38],
                ['Stevens Creek & Finch', 5.75, 10.5, 101],
                ['Stevens Creek & Portal', 4.25, 10.5, 33],
                ['Stevens Creek & Blaney', 3.5, 10.5, 32],
                ['Stevens Creek & Torre', 2.75, 10.5, 38],
                ['Stevens Creek & Bandley', 1, 10.5, 62] ];

//POINTS FOR 523
var stops323 = [ ['Alum Rock & King', 39.5, 0, 110],
                 ['Santa Clara & 24th', 38.125, 1.375, 76],
                 ['Santa Clara & 17th', 36.75, 2.75, 59],
                 ['City Hall', 35.375, 4.125, 135],
                 ['Santa Clara & 1st/2nd', 34, 5.5, 590],
                 ['Paseo de San Antonio', 35.5, 7, 533],
                 ['Convention Center', 36, 8.5, 204],
                 ['San Carlos & Bird', 34, 10.5, 126],
                 ['San Carlos & Race/Meridian', 30, 10.5, 228],
                 ['San Carlos & Bascom', 21, 10.5, 243],
                 ['Stevens Creek & Santana Row', 16, 10.5, 48],
                 ['Stevens Creek & San Tomas', 13.5, 10.5, 56],
                 ['Stevens Creek & Kiely', 11, 10.5, 133],
                 ['Stevens Creek & Lawrence', 8, 10.5, 106],
                 ['Stevens Creek & Wolfe', 5, 10.5, 158],
                 ['Stevens Creek & De Anza', 2, 10.5, 116],
                 ['Stelling & Stevens Creek', 0, 10.5, 916] ];

var circles23 = map23.selectAll("circle")
                     .data(stops23)
                   .enter()
                     .append("circle")
                     .attr("cx", function(d) { return scale23(d[1]); })
                     .attr("cy", function(d) { return scale23(d[2]); })
                     .attr("r", function(d) { return ridershipScale(d[3]); })
                     .attr("stroke-width", 1)
                     .attr("stroke", "#EF3B39")
                     .style("fill", "white")
                     .on("mouseover", function(d) { tip23(d); })
                     .on("mouseout", function(d) { remove23(); });

var circles323 = map523.selectAll("circle")
                      .data(stops323)
                    .enter()
                      .append("circle")
                      .attr("cx", function(d) { return scale23(d[1]); })
                      .attr("cy", function(d) { return scale23(d[2]); })
                      .attr("r", function(d) { return ridershipScale(d[3]); })
                      .attr("stroke-width", 1)
                      .attr("stroke", "#F89738")
                      .style("fill", "white")
                      .on("mouseover", function(d) { tip523(d); })
                      .on("mouseout", function(d) { remove523(); });

function tip23(d) {
  map23.append("text")
    .text(d[0] + ": " + d[3] + " b/wd")
    .attr("id", "tip23")
    .attr("text-anchor", "end")
    .attr("x", 705)
    .attr("y", 225);
}

function remove23() {
  map23.selectAll('#tip23').remove();
}

function tip523(d) {
  map523.append("text")
    .text(d[0] + ": " + d[3] + " b/wd")
    .attr("id", "tip523")
    .attr("text-anchor", "end")
    .attr("x", 705)
    .attr("y", 225);
}

function remove523() {
  map523.selectAll('#tip523').remove();
}
