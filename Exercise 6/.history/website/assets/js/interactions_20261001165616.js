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

})

const updateHistogram = (filterId, data) => {
    const updatedData = filterId === "all"
    ? data
    : data.filter(tv => tv.screenTech === filterId);

    const updatedBins = binGenerator(updatedData);
    

   // 1. Update the vertical scale to match the new highest bin
yScale.domain([0, d3.max(updatedBins, d => d.length)]);

// 2. Bind and join the data
d3.select("#histogram").selectAll("rect") // Select via parent to allow joining
    .data(updatedBins)
    .join("rect") // <-- The critical fix: automatically adds/removes rects
    .transition()
    .duration(500)
    .ease(d3.easeCubicInOut)
    .attr("x", d => xScale(d.x0)) // Updates positions if bin widths shifted
    .attr("width", d => Math.max(0, xScale(d.x1) - xScale(d.x0) - 1))
    .attr("y", d => yScale(d.length))
    .attr("height", d => innerHeight - yScale(d.length));
};

};

