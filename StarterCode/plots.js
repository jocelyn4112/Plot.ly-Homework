
d3.json("samples.json", function(data) {
    
    console.log(data);
 
  });

//d3.json("samples.json", function(data) {
  //console.log(data);
//});

// <script>
// d3.csv("samples.json", function(data) {
//     for (var i = 0; i < data.length; i++) {
//         console.log(data[i].id);
//         console.log(data[i].ethnicity);
//         console.log(data[i].gender);
//         console.log(data[i].age);
//         console.log(data[i].location);
//         console.log(data[i].bbtype);
//         console.log(data[i].wfreq);
//     }
// });
// </script>



// Create an array of each smaple value
var id = Object.values(data.id);
var ethnicity = Object.values(data.ethnicity);
var gender = Object.values(data.gender);
var age = Object.values(data.age);
var location = Object.values(data.location);
var bbtype = Object.values(data.bbtype);
var wfreq = Object.values(data.wfreq);

//DropDownLabels 
// Create an array of  labels
var sample_labels = Object.keys(data.us);

// Display the default plot
function init() {
  var data = [{
    values: us,
    labels: labels,
    type: "h-bar"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("h-bar", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset == 'us') {
      data = us;
  }
  else if (dataset == 'uk') {
      data = uk;
  }
  else if (dataset == 'canada') {
      data = canada;
  }
  // Call function to update the chart
  updatePlotly(data);
}

//Start Horz Chart 2  
// Sort the data by diversity search results
var sortedByDiversitySearch = data.sort((a, b) => b.DiversitySearchResults - a.DiversitySearchResults);

// Slice the first 10 types for plotting
slicedData = sortedByDiversitySearch.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the Greek Data
var trace1 = {
  x: reversedData.map(object => object.greekSearchResults),
  y: reversedData.map(object => object.greekName),
  text: reversedData.map(object => object.greekName),
  name: "Greek",
  type: "bar",
  orientation: "h"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
// End horizontal chart2


// H Chart 3
// Filter the data for movies with an IMDb rating greater than 8.9
//  and then graph each title on the x-axis and the respective metascore on the y-axis.

// 1. Use the filter method to create a custom filtering function
//  that returns the movies with a rating greater than 8.9

function filterMovieRatings(movie) {
  return movie.imdbRating > 8.9;
}

// 2. Use filter() to pass the function as its argument
var filteredMovies = topMovies.filter(filterMovieRatings);

//  Check to make sure your are filtering your movies.
console.log(filteredMovies);

// 3. Use the map method with the arrow function to return all the filtered movie titles.
var titles = filteredMovies.map(movies =>  movies.title);

//  Check your filtered movie titles
console.log(titles);

// 4. Use the map method with the arrow function to return all the filtered movie metascores.
var ratings = filteredMovies.map(movies => movies.metascore);

//  Check your filtered metascores.
console.log(ratings);

// 5. Create your trace.
var trace = {
  x: titles,
  y: ratings,
  type: "bar"
};

// 6. Create the data array for our plot
var data = [trace];

// 7. Define our plot layout
var layout = {
  title: "The highest critically acclaimed movies",
  xaxis: { title: "Title" },
  yaxis: { title: "Metascore (Critic) Rating"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);
//End H Chart 3

// Start Bubble Chart
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 11, 12, 13],
  text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
  mode: 'markers',
  marker: {
    color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    size: [40, 60, 80, 100]
  }
};

var data = [trace1];

var layout = {
  title: 'Bubble Chart Hover Text',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('myDiv', data, layout);
//End Bubble Chart

// Start Sample Meta
// Use D3 to create an event handler
d3.selectAll("body").on("change", updatePage);

function updatePage() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.selectAll("#selectOption").node();
  // Assign the dropdown menu item ID to a variable
  var dropdownMenuID = dropdownMenu.id;
  // Assign the dropdown menu option to a variable
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
}
// End Sample Meta

//Start Display Key Value
// End key Value 
