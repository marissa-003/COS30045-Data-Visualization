// Set up dimensions and margins
const margin = { top: 40, right: 30, bottom: 50, left: 70 }; 
const width = 800; // Total width of the chart
const height = 400; // Total height of the chart
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Set up colors accessible globally
const barColor = "#81663E"
const bodyBackgroundColor = "#fffaf0";

// Set up the scales
const xScale = d3.scaleLinear()
  .range([0, innerWidth])
  .padding(0.1);

const yScale = d3.scaleLinear()
  .domain([0, 400])
  .range([innerHeight, 0]);

const bottomAxis = d3.axisBottom(xScale)
const leftAxis = d3.axisLeft(yScale);

// Create a bin generator using d3.bin
const binGenerator = d3.bin()
.value(d => d.energyConsumption) //Accessor for energyConsumption
