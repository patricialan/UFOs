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
};

