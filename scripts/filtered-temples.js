// Update footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const title = document.getElementById("title");
const header = document.querySelector("header");

const images = document.getElementById('temple-gallery');

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, ML, United St.",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Santo Domingo",
      location: "Santo Domingo, Rep. Dom.",
      dedicated: "2000, September, 17",
      area: 67000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-13016.jpg"
    },
    {
      templeName: "Madrid",
      location: "Madrid, Spain",
      dedicated: "1999, March, 19",
      area: 45800,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },
    {
      templeName: "Accra Ghanna",
      location: "Accra, Ghanna",
      dedicated: "1999, March, 19",
      area: 17500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
      templeName: "Asunción Paraguay",
      location: "Asunción Paraguay",
      dedicated: "1983, December, 2",
      area: 11906,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6969-main.jpg"
    },
    {
      templeName: "Manhattan",
      location: "Manhattan, New York",
      dedicated: "2004, June, 13",
      area: 20630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg"
    },
    // Add more temple objects here...
  ];

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menuToggle.textContent = menu.classList.contains("hidden") ? "☰" : "✖";

    // Hide the title (when button shows "✖")
    if (menuToggle.textContent === "✖") {
        title.style.display = "none";
        header.style.justifyContent = "center";
    } else {
        title.style.display = ""; // Restore default behavior
        header.style.justifyContent = "";
    }
});

// Select the gallery container
  
const gallery = document.getElementById('temple-gallery');

const home = document.querySelector("#home");
const old = document.querySelector("#old");
const bnew = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

home.addEventListener("click", ()=> {
  createTemplesCards(temples.filter(temple=> temple.templeName !== null));
});

old.addEventListener("click", ()=> {
  createTemplesCards(temples.filter(temple=> parseInt(temple.dedicated.slice(0, 4)) < 1900));
});

bnew.addEventListener("click", ()=> {
  createTemplesCards(temples.filter(temple=> parseInt(temple.dedicated.slice(0, 4)) > 2000));
  
});

large.addEventListener("click", ()=> {
  createTemplesCards(temples.filter(temple=> temple.area > 90000 ));
});

small.addEventListener("click", ()=> {
  createTemplesCards(temples.filter(temple=> temple.area < 10000 ));
});

function createTemplesCards(data) {
  gallery.innerHTML = ""
  if(data == []) {
    data = temples
  }
  // Use forEach to loop through each temple in the array
  data.forEach(temple => {
    // Create a div for each temple
    const templeDiv = document.createElement('div');
      templeDiv.className = 'temple';
      templeDiv.style.border = "1px solid #ccc";
      templeDiv.style.margin = "10px";
      templeDiv.style.padding = "20px";
      templeDiv.style.width = "310px";
      
      // Create the img element for the temple image
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = `${temple.templeName} Image`;
      img.style.width = "100%";
      img.style.margin = "10px 0";
      img.loading = "lazy";
      
      // Create the h2 element for the temple name
      const name = document.createElement('h2');
      name.textContent = temple.templeName;
      
      // Create the paragraph element for location
      const location = document.createElement('p');
      location.textContent = `Location: ${temple.location}`;
      
      // Create the paragraph element for dedication date
      const dedicated = document.createElement('p');
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
      
      // Create the paragraph element for the area
      const area = document.createElement('p');
      area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
      
      // Append all elements to the templeDiv
      templeDiv.appendChild(name);
      templeDiv.appendChild(location);
      templeDiv.appendChild(dedicated);
      templeDiv.appendChild(area);
      templeDiv.appendChild(img);
      
      // Append the templeDiv to the gallery container
      gallery.appendChild(templeDiv);
    });
}