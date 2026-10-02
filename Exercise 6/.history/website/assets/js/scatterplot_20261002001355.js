const drawScatterplot = (data) => {

const bottomAxis = d3.axisBottom(xScaleS)
const leftAxis = d3.axisLeft(yScaleS)

    //Set the dimensions and margins of the chart area
    const svg = d3.select("#scatterplot")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`) //Responsive SVG

    //create an inner chart group with margins
    innerChartS = svg
    .append("g")
    .attr ("transform", `translate(${margin.left}, ${margin.top})`);

    // Set the domains and ranges for the x and y scales
xScaleS
.domain([0, 8])
.range([0, innerWidth]);

innerChartS
.append("g")
.attr("transform", `translate(0,${innerHeight})`)
.call(bottomAxis);

yScaleS
.domain([0, 2600])
.range([innerHeight, 0])
.nice(); // Use the nice() method to round the y-axis values to a more human-readable format

innerChartS
.append("g")
.call(leftAxis);

colorScale
.domain(data.map(d=> d.screenTech))
.range(d3.schemeCategory10);

innerChartS
 svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return xScaleS(d.star) + 70; } )
      .attr("cy", function (d) { return yScaleS(d.energyConsumption) + 30; } )
      .attr("r", 5)
      .style("fill", function (d) { return colorScale(d.screenTech);})
    .attr("opacity", 0.5);

    //line 36 to line 44 took reference from https://d3-graph-gallery.com/graph/scatter_basic.html
innerChartS
.append("text")
.text("Labeled Energy Consumption (kWh/year)")
.attr("x", -margin.left)
.attr("y", -28)
.attr("text-anchor", "start");

innerChartS
.append("text")
.text("Star Rating")
.attr("x", 650)
.attr("y", 350)
.attr("text-anchor", "start");

const legend = svg
.append("g")
.attr("transform", `translate(${width - 100}, ${margin.top}))`);

colorScale.domain().forEach((screenTech, i) => {
    const legendRow = legend
    .append("g")
    .attr("transform", `translate(0, ${i * 20})`);

    legendRow.append("rect")
        .attr("x", 600)
    .attr("y", 10)
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", colorScale(screenTech));

    legendRow.append("text")
    .attr("x", 700)
    .attr("y", 10)
    .attr("text-anchor", "start")
    .style("alignment-baseline", "middle")
    .text(screenTech);
})

};

