d3.csv("../assets/data/ARE_Spot_Prices_dataset.csv", d => {

  return {

    year: d.year,

    averagePrice: +d.averagePrice

  };

}).then(data => {

    console.log(data);

    console.log(data.length);

    console.log(d3.max(data, d => d.averagePrice));

    console.log(d3.min(data, d => d.averagePrice));

    data.sort((a, b) => b.averagePrice - a.averagePrice);

    drawLineChart(data);

});

const drawLineChart = data => {
  const margin = { top:40, right: 170, bottom: 25, left: 40};
  const width = 1000;
  const height = 500;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;



const svg = d3.select("#line-chart")

    .append("svg")

    .attr("viewBox", `0, 0, ${width}, ${height}`)

    .style("border", "1px solid black");

const innerChart = svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`)


  const xScale = d3.scaleLinear()
  .domain(d3.extent(data, d => d.year))
  .range([0, innerWidth])

  const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.averagePrice)])
  .range([innerHeight, 0]);

const bottomAxis = d3.axisBottom(xScale)
.tickFormat(d3.format("d"));
const leftAxis = d3.axisLeft(yScale);

const lineGenerator = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.averagePrice));


innerChart
    .append("path")
    .attr("d", lineGenerator(data))
    .attr("fill", "none")
    .attr("stroke", "green");

innerChart
.append("g")
.attr("transform", `translate(0,${innerHeight})`)
.call(bottomAxis)

innerChart
.append("g")
.call(leftAxis);

innerChart
.append("text")
.text("Average Price ($ per mWh)")
.attr("x", -margin.left)
.attr("y", -15)
.attr("text-anchor", "start");


};