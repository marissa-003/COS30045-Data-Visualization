d3.csv("../assets/data/Data_exercise_5.3.csv", d => {

  return {

    screensize: d.screensize,

    count: +d.count

  };

}).then(data => {

    console.log(data);

    console.log(data.length);

    drawDonutChart(data);

});

const drawDonutChart = data => {
  const width = 1000;
  const height = 500;
  const radius = Math.min(width, height) / 2 - 20;

const color = d3.scaleOrdinal()
.domain(data.map(d => d.screensize))
.range(d3.schemeSet2);

const pie = d3.pie()
.value(d => d.count)
.sort(null);

const arcGenerator = d3.arc()
.innerRadius(80)
.outerRadius(150)
.padAngle(0.02)
.cornerRadius(6);

const svg = d3.select("#donut-chart")
.append("svg")
.attr("viewBox", `0,0, ${width}, ${height}`)
.style("border", "1px solid black");

const innerChart = svg
.append("g")
.attr("transform", `translate(${width/2}, ${height/2})`)

innerChart
.selectAll("path")
.data(pie(data))
.join("path")
.attr("d", arcGenerator)
.attr("fill", d => color(d.data.screensize))
.attr("stroke", "white")
.attr("stroke-width", 2)

 .selectAll(`.arc-${d.data.screensize}`) 
 .data(annotatedData) 
 .join("g") 
 .attr("class", `arc-${d.data.screensize}`)
 arcs
 .append("path")
 .attr("d", arcGenerator)
 .attr("fill", d => colorScale(d.data.format)); 
 arcs
 .append("text")
 .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
 .attr("text-anchor", "middle")
 .attr("alignment-baseline", "middle")
 .text(d => d.data.count);

}