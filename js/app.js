// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function to build the table
function buildTable(data) {
    // Clear out any existing data
    tbody.html("");

    // Loop through each object (dict) in data
    // and append a row & cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table
        let row = tbody.append("tr");

        // Loop through each field (key:value) in dataRow
        // and add each value as a call (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Function to handle button click (to filter table)
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // Set default table data to be raw data
    let filteredData = tableData;

    // Check if a date was entered and filter the data using that date
    if (date) {
        // Apply filter to the table data to only keep rows where
        // 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData
    // will just be the original tableData
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handClick);

// Build the table when the page loads
buildTable(tableData);