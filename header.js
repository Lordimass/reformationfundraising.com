const homePageURL = "https://reformationfundraising.com"

// Load favicon
const favicon = document.createElement("link")
favicon.setAttribute("rel", "icon")
favicon.setAttribute("type","image/x-icon")
favicon.setAttribute("href","https://reformationfundraising.com/images/favicon.ico")
document.head.appendChild(favicon)

// Set page title
const title = document.createElement("title")
title.innerText = "Reformation Fundraising"
document.head.appendChild(title)

// Initialise Google Analytics
const script = document.createElement("script")
script.setAttribute("async", "")
script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-WED19TWS98")
document.body.appendChild(script)

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-WED19TWS98');

// Create header element
const header = document.createElement("div")
header.setAttribute("class", "header")

// Create elements and set attributes for logo
const logo = document.createElement("a")
logo.setAttribute("class", "logo")
logo.setAttribute("href", homePageURL)

const logoImg = document.createElement("img")
logoImg.setAttribute("src", `${homePageURL}/images/logosmol.png`)

const logoH1 = document.createElement("h1")
logoH1.innerText = "REFORMATION FUNDRAISING"

// Create spacer
const spacer = document.createElement("div")
spacer.setAttribute("class", "spacer")

// Create Archive
const archive = document.createElement("div")
archive.setAttribute("class", "nav")
archive.setAttribute("id", "archive")

const archiveP = document.createElement("p")
archiveP.innerText = "Archive"

const dropdown = document.createElement("div")
dropdown.setAttribute("class", "dropdown")

const latestYear = 2024
for (let i = 2020; i <= latestYear; i++) {
    const year = document.createElement("a")
    year.setAttribute("href", homePageURL+`/archive/${i}`)
    year.setAttribute("id", `s${i}`)
    year.setAttribute("class", "year")
    year.innerText = i
    dropdown.appendChild(year)
}

// Create Members
const members = document.createElement("a")
members.setAttribute("class", "nav")
members.setAttribute("id", "members")
members.setAttribute("href", `${homePageURL}/members`)

const membersP = document.createElement("p")
membersP.innerText = "Members"

// Nest elements
document.body.appendChild(header)
header.appendChild(logo)
logo.appendChild(logoImg)
logo.appendChild(logoH1)
header.appendChild(spacer)
header.appendChild(archive)
archive.appendChild(archiveP)
archive.appendChild(dropdown)
header.appendChild(members)
members.appendChild(membersP)

