const drawScatterplot = (data) => {
    //Set the dimensions and margins of the chart area
    const svg = d3.select("#scatterplot")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`) //Responsive SVG

    //create an inner chart group with margins
    innerChartS = svg
    .append("g")
    .attr ("transform", `translate(${margin.left}, ${margin.top})`);

    // Set the domains and ranges for the x and y scales
xScale
.domain([minEng, maxEng])
.range([0, innerWidth]);

yScale
.domain([0, binsMaxLength])
.range([innerHeight, 0])
.nice(); // Use the nice() method to round the y-axis values to a more human-readable format

innerChartS
.append("g")
.attr("transform", `translate(0,${innerHeight})`)
.call(bottomAxis)

innerChartS
.append("g")
.call(leftAxis);

innerChartS
.selectAll("rect")
.data(bins)
.join("rect")
.attr("x", d => xScale (d.x0))
.attr("y", d => yScale (d.length))
.attr("width", d => xScale(d.x1) - xScale (d.x0))
.attr("height", d => innerHeight - yScale (d.length))
.attr("fill", barColor)
.attr("stroke", bodyBackgroundColor) // Set the stroke color gives appearance of gap between bars
.attr("stroke-width", 2);



innerChartS
.append("text")
.text("Labeled Energy Consumption (kWh/year)")
.attr("x", -margin.left)
.attr("y", -15)
.attr("text-anchor", "start");

innerChartS
.append("text")
.text("Star Rating")
.attr("x", 400)
.attr("y", 350)
.attr("text-anchor", "start");

innerChartS
svg.selectAll("myCircles")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "myCircles")
        .attr("stroke", "none")
        .attr("cx", d => xScale (d.year)+40)
        .attr("cy", d => yScale (d.averagePrice)+70)
        .attr("r", 3)
        .attr("fill", "green");

};

