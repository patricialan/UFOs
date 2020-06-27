// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {
  datetime: "",
  city: "",
  state: "",
  country: "",
  shape: ""
};

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  let dateFilter = d3.select("#datetime").property("value");
  let cityFilter = d3.select("#city").property("value");
  let stateFilter = d3.select("#state").property("value");
  let countryFilter = d3.select("#country").property("value");
  let shapeFilter = d3.select("#shape").property("value");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (dateFilter) {
    filters.datetime = dateFilter;
  } else {
    delete filters.datetime;
  }
  if (cityFilter) {
    filters.city = cityFilter;
  } else {
    delete filters.city;
  }
  if (stateFilter) {
    filters.state = stateFilter;
  } else {
    delete filters.state;
  }
  if (countryFilter) {
    filters.country = countryFilter;
  } else {
    delete filters.country;
  }
  if (shapeFilter) {
    filters.shape = shapeFilter;
  } else {
    delete filters.shape;
  }
  // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {
  // Set the filteredData to the tableData
  var filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.keys(filters).forEach((key) => {

        if (key === "datetime") {
          filteredData = filteredData.filter(row => row.datetime === filters[key]);
        }
        if (key === "city") {
          filteredData = filteredData.filter(row => row.city === filters[key]);
        }
        if (key === "state") {
          filteredData = filteredData.filter(row => row.state === filters[key]);
        }
        if (key === "country") {
          filteredData = filteredData.filter(row => row.country === filters[key]);
        }
        if (key === "shape") {
          filteredData = filteredData.filter(row => row.shape === filters[key]);
        }
  });

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);