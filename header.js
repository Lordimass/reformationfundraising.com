const homePageURL = "https://reformationfundraising.com"

// Load favicon
const favicon = document.createElement("link")
favicon.setAttribute("rel", "icon")
favicon.setAttribute("type","image/x-icon")
favicon.setAttribute("href","https://cdn.reformationfundraising.com/rffcom/favicon.ico")
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
logoImg.setAttribute("src", `https://cdn.reformationfundraising.com/rffcom/logosmol.png`)

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
archive.addEventListener("click", maybe_redirect_to_archive_page)

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

// Create Footer
const footer = document.createElement("div")
footer.setAttribute("class", "footer")

const p1 = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")
const p4 = document.createElement("p")
const p5 = document.createElement("p")

p2.innerText = "Contact lordimass@lordimass.net for support"
p2.setAttribute("class", "left-footer-el")
p3.innerText = "This site is licensed under Creative Commons BY-NC-ND 4.0"
p3.setAttribute("class", "middle-footer-el")
p4.innerHTML = "Website programmed by <a target=\"_blank\" href=\"https://lordimass.net\">Lordimass</a>!"
p4.setAttribute("class", "right-footer-el")

async function nest_footer() {
    // Nest footer elements
    position_footer()
    document.body.appendChild(footer)
    footer.appendChild(p1)
    footer.appendChild(p2)
    footer.appendChild(p3)
    footer.appendChild(p4)
    footer.appendChild(p5)
}

async function position_footer() {
    // Set footer display mode to position it correctly to the bottom of the page
    client_rect = document.body.getBoundingClientRect()
    if (window.innerHeight < client_rect.height) {
        footer.style.position = "relative";
    } else {
        footer.style.position = "absolute";
    }
}

async function update_archive_dropdown() {
    // If user is on mobile, don't show dropdown
    client_rect = document.body.getBoundingClientRect()
    if (client_rect.width < 1100) {
        const root_style = document.documentElement.style
        root_style.setProperty("--archiveDropdownMode", "none")
        root_style.setProperty("--archiveCursor", "pointer")
    } else {
        const root_style = document.documentElement.style
        root_style.setProperty("--archiveDropdownMode", "block")
        root_style.setProperty("--archiveCursor", "default")
    }

}

async function maybe_redirect_to_archive_page() {
    // If user is on mobile, send them to the dedicated archive page
    client_rect = document.body.getBoundingClientRect()
    if (client_rect.width < 1100) {
        const newURL = `https://reformationfundraising.com/archive`;
        window.location.replace(newURL);
    }
}

document.addEventListener('DOMContentLoaded', nest_footer);
document.addEventListener('DOMContentLoaded', update_archive_dropdown);
window.addEventListener("resize", update_archive_dropdown);
window.addEventListener("resize", nest_footer);

