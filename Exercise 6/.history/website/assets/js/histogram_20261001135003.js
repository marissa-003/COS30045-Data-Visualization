const drawHistogram = (data) => {
// Implementation for drawing the histogram

// Set the dimensions and margins of the chart area
const svg = d3.select("#histogram")
.append("svg")
.attr("viewBox", `0 0 ${width} ${height}`) // Responsive SVG

// Create an inner chart group with margins
const innerChart = svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);


// Get the bins for our data set using the bin generator
const bins = binGenerator(data); //save the bins into an array

console.log(bins); // Log the bins to the console for debugging


// calculate the minimum and maximum energy consumption values from the bins to set the xScale domain
const minEng = bins [0].x0; //lower bound of the first bin
const maxEng = bins [bins.length-1].x1; //upper bound of the last bin

// calculate the maximum length of the bins to set the yScale domain
const binsMaxLength = d3.max(bins, d => d.length); // Get the maximum length of the bins

console.log("minEng:", minEng, "maxEng:", maxEng, "binsMaxLength:", binsMaxLength); // Log the min, max, and max length of bins


// Set the domains and ranges for the x and y scales
xScale
.domain([minEng, maxEng])
.range([0, innerWidth]);

yScale
.domain([0, binsMaxLength])
.range([innerHeight, 0])
.nice(); // Use the nice() method to round the y-axis values to a more human-readable format


innerChart
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


innerChart
.append("text")
.text("Labeled Energy Consumption (kWh/year)")
.attr("x", -margin.left)
.attr("y", -15)
.attr("text-anchor", "start");

innerChart
.append("text")
.text("Frequency")
.attr("x", 600)
.attr("y", 350)
.attr("text-anchor", "start");

};