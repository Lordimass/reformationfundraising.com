const spreadsheetId = '10ssx7zLGEJX1V77Whe-iyyw7jK6l791lgqJ8zg-iYNE';
const apiKey = 'AIzaSyBt9I-HKdyZ1uasiCfzwS_RGwzgOkbPpq8';

// Construct the URL for Google Sheets API v4
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Donation List?key=${apiKey}`;

async function update_quants() {
    try {
        // Fetch data from Google Sheets API
        const response = await fetch(url);
        const data = await response.json();
        
        // Extract rows from the data
        const rows = data.values;

        // Gather top donors
        let names = []
        let quants = []
        for (let i = 1; i <= 10; i++) {
            names.push(rows[i][10])
            quants.push(rows[i][11])
        }

        // Construct leaderboard
        const leaderboard_el = document.getElementById("leaderboard")
        const leaderboard = `
            <tr><td><b>1.</b> ${names[0]}</td><td>${quants[0]}</td></tr>
            <tr><td><b>2.</b> ${names[1]}</td><td>${quants[1]}</td></tr>
            <tr><td><b>3.</b> ${names[2]}</td><td>${quants[2]}</td></tr>
            <tr><td><b>4.</b> ${names[3]}</td><td>${quants[3]}</td></tr>
            <tr><td><b>5.</b> ${names[4]}</td><td>${quants[4]}</td></tr>
            <tr><td><b>6.</b> ${names[5]}</td><td>${quants[5]}</td></tr>
            <tr><td><b>7.</b> ${names[6]}</td><td>${quants[6]}</td></tr>
            <tr><td><b>8.</b> ${names[7]}</td><td>${quants[7]}</td></tr>
            <tr><td><b>9.</b> ${names[8]}</td><td>${quants[8]}</td></tr>
            <tr><td><b>10.</b> ${names[9]}</td><td>${quants[9]}</td></tr>
            `
        leaderboard_el.innerHTML = leaderboard

        // Update Total
        const total_el = document.getElementById("total-raised")
        const total = rows[0][3]
        total_el.innerText = `£ ${total}`
        
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
    }
}

document.addEventListener("DOMContentLoaded", update_quants)