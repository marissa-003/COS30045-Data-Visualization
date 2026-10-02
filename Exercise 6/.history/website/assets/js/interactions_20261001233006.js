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

yScale.domain([0, d3.max(updatedBins, d => d.length)]).nice();
d3.select("#histogram svg > g > g:nth-of-type(2)").call(leftAxis);
    
//Line 32 to 33 assisted by AI

    d3.selectAll("#histogram rect")
    .data(updatedBins)
    .transition()
    .duration(500)
    .ease(d3.easeCubicInOut)
    .attr("y", d => yScale(d.length))
    .attr("height", d => innerHeight - yScale(d.length));



}

updateHistogram(d.id, data); //line 49 assisted by AI
}

);



};

