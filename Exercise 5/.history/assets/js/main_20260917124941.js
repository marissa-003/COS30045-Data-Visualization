const svg = d3.select("#bar-chart")

    .append("svg")

    .attr("viewBox", `0, 0, ${width}, ${height}`)

    .style("border", "1px solid black");

d3.csv("../assets/data/Data_execrise 5.1-1.csv", d => {

  return {

    brand: d.brand,

    count: +d.count

  };

}).then(data => {

    console.log(data);

    console.log(data.length);

    console.log(d3.max(data, d => d.count));

    console.log(d3.min(data, d => d.count));

    data.sort((a, b) => b.count - a.count);

    drawBarChart(data);

});

const drawBarChart = data => {
  const margin = { top:40, right: 170, bottom: 25, left: 40};
  const width = 1000;
  const height = 500;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

};