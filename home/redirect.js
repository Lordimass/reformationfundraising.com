const currentPath = window.location.pathname;
const newURL = `https://reformationfundraising.com`;
console.log(`redirecting to ${newURL}`)
window.location.replace(newURL);

const body = document.getElementById("redirect-info")
const link = document.createElement("a")
link.innerText = "here"
link.setAttribute("href", newURL)

body.innerText = `Redirecting to ${newURL}, if you are not redirected, click `
body.appendChild(link)