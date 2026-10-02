const drawScatterplot = (data) => {

const bottomAxis = d3.axisBottom(xScale)
const leftAxis = d3.axisLeft(yScale)

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

innerChartS
svg.selectAll("myCircles")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "myCircles")
        .attr("stroke", "none")
        .attr("cx", d => xScale (d.star) + 100)
        .attr("cy", d => yScale (d.energyConsumption) + 50)
        .attr("r", 3)
        .attr("fill", "green")
        .attr("opacity", 0.5);




innerChartS
.append("text")
.text("Labeled Energy Consumption (kWh/year)")
.attr("x", -margin.left)
.attr("y", -15)
.attr("text-anchor", "start");

innerChartS
.append("text")
.text("Star Rating")
.attr("x", 600)
.attr("y", 350)
.attr("text-anchor", "start");



};

