const populateFilters = (data) => {

d3.select("#filters_screen")
.selectAll(".filter")
.data(filters_screen)
.join("button")
.attr("class", d => `filter ${d.isActive ? "active" : ""}`)
.text(d => d.label)

.on("click", (e,d)=> {
    console.log("Clicked filter:", e);
    console.log("Clicked filter data:", d);


if (!d.isActive) {
    filters_screen.forEach(filter => {
        filter.isActive = d.id === filter.id ? true : false;
    });

    d3.selectAll("#filters_screen .filter")
    .classed("active", filter => filter.id === d.id ? true : false);

    
} 
const updateHistogram = (filterId, data) => {
    const updatedData = filterId === "all"
    ? data
    : data.filter(tv => tv.screenTech === filterId);

    const updatedBins = binGenerator(updatedData);

    d3.selectAll("#histogram rect")
    .data(updatedBins)
    .transition()
    .duration(500)
    .ease(d3.easeCubicInOut)
    .attr("y", d => yScale(d.length))
    .attr("height", d => innerHeight - yScale(d.length));

    // X axis
    x.domain(data.map(d => d.group));
    xAxis.transition().duration(1000).call(d3.axisBottom(x));

    // Add Y axis
    y.domain([0, d3.max(data, d => +d[length]) ]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y));

}

updateHistogram(d.Id, data); //line 41 assisted by AI
}

);



};

