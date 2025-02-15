const destinations = [
    {
        title: "CERN - The Large Hadron Collider",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "NASA Kennedy Space Center",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "MIT Media Lab",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "Silicon Valley Tech Hub",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "Fermilab - Particle Physics Laboratory",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "JPL - Jet Propulsion Laboratory",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "European Space Agency (ESA)",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "Max Planck Institute for Quantum Optics",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "Harvard Science Center",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg",
        title: "Stanford Linear Accelerator Center",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "Tokyo Institute of Technology",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "Indian Space Research Organisation (ISRO)",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "London Science Museum",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "National Geographic Explorers Hall",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    },
    {
        title: "Perimeter Institute for Theoretical Physics",
        image: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg"
    }
];




let sectionContent = document.querySelector(".section-content")
sectionContent.classList.add("row")

function createElement(item) {
    let card = document.createElement("div")
    let column = document.createElement("div")
    let img = document.createElement("img")
    let title = document.createElement('h3')

    // Append Element
    sectionContent.append(column)
    column.append(card)
    card.appendChild(img)
    card.append(title)

    // Add Class
    column.classList.add("col-lg-4", "col-md-6", "col-sm-12")
    card.className = "card"

    // Input Data
    img.src = item.image
    console.log(img)
    title.textContent = item.title;

    return card;
}

let view = destinations.map(item => createElement(item))
