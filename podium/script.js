// ./node_modules/.bin/http-server -a localhost -p 8000 -c-1

// Replace with your actual Spreadsheet ID
const spreadsheetId = '10ssx7zLGEJX1V77Whe-iyyw7jK6l791lgqJ8zg-iYNE';

// Replace with your API Key
const apiKey = 'AIzaSyBt9I-HKdyZ1uasiCfzwS_RGwzgOkbPpq8';

// Construct the URL for Google Sheets API v4
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Donation List?key=${apiKey}`;

async function fetchGoogleSheetData() {
    try {
        // Fetch data from Google Sheets API
        const response = await fetch(url);
        const data = await response.json();
        
        // Extract rows from the data
        const rows = data.values;

        // Go through rows 1-4 and take columns 10 and 11 to find the top three donors names and quantitites

        const quant1 = rows[1][11]
        const quant2 = rows[2][11]
        const quant3 = rows[3][11]

        document.getElementById("quant1").innerHTML = quant1.slice(1, quant1.length-4)
        document.getElementById("quant2").innerHTML = quant2.slice(1, quant2.length-4)
        document.getElementById("quant3").innerHTML = quant3.slice(1, quant3.length-4)

        document.getElementById("first").innerHTML = rows[1][10]
        document.getElementById("second").innerHTML = rows[2][10]
        document.getElementById("third").innerHTML = rows[3][10]
        
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
    }


}

// Call the function to fetch and display data once the page content is loaded
document.addEventListener('DOMContentLoaded', fetchGoogleSheetData);