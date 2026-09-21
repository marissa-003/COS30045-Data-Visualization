const svg = d3.select("#bar-chart")

    .append("svg")

    .attr("viewBox", `0, 0, ${width}, ${height}`)

    .style("border", "1px solid black");

d3.csv("../assets/data/Data_execrise 5.1-1.csv", d => {

  return {

    Screen_Tech: d.Screen_Tech,

    Energy_Consumption: +d.Energy_Consumption

  };

}).then(data => {

    console.log(data);

    console.log(data.length);

    console.log(d3.max(data, d => d.Energy_Consumption));

    console.log(d3.min(data, d => d.Energy_Consumption));

    data.sort((a, b) => b.Energy_Consumption - a.Energy_Consumption);

    drawBarChart(data);

});

const drawBarChart = data => {
  const margin = { top:40, right: 170, bottom: 25, left: 40};
  const width = 1000;
  const height = 500;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

};

const innerChart = svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`)


  const xScale = d3.scaleBand()
  .domain(data.map(d => d.Screen_Tech))
  .range([0, innerWisth])
  .padding(0,1);

  const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.Energy_Consumption)])
  .range([innerHeight, 0]);

const bottomAxis = d3.axisBottom(xScale)
const leftAxis = d3.axisLeft(yScale);

innerChart
.append("g")
.attr("transform", `translate(0,${innerHeight})`)
.call(bottomAxis)

innerChart
.append("g")
.call(leftAxis);

innerChart
.append("text")
.text("Energy Consumption (kWh)")
.attr("x", -margin.left)
.attr("y", -10)
.attr("text-anchor", "start");

innerChart
.selectAll(".bar")
.data(data)
.join("rect")
.attr("class", "bar")
.attr("width", xScale.bandwith())
.attr("height", d => innerHeight - yScale(d.Energy_Consumption))
.attr("x", d => xScale(d.Screen_Tech))
.attr("y", d => yScale(d.Energy_Consumption))
.attr("fill", "green");

