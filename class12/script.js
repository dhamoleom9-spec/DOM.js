const people = [
  {
    image: "./om-bhau.jpg",
    name: "om dhamole",
    description: "Loves coding and debugging web apps.",
    favColor: "orange"
  },
  {
    image: "./aditya_dho.jpeg",
    name: "aditya dhotre",
    description: "Creative designer with a passion for UI/UX.",
    favColor: "pink"
  },
  {
    image: "https://example.com/img3.jpg",
    name: "Rohan",
    description: "Cybersecurity enthusiast exploring IDS/IPS systems.",
    favColor: "Black"
  },
  {
    image: "https://example.com/img4.jpg",
    name: "Meera",
    description: "Enjoys writing blogs about frontend frameworks.",
    favColor: "Purple"
  },
  {
    image: "https://example.com/img5.jpg",
    name: "Kunal",
    description: "Backend developer experimenting with Node.js.",
    favColor: "Green"
  },
  {
    image: "https://example.com/img6.jpg",
    name: "Priya",
    description: "Data scientist who loves visualizations.",
    favColor: "Orange"
  }
];

let content = ""
people.forEach((elem)=>{
    content += `<figure>
                <img src="${elem.image}" alt="">
                <h2>${elem.name}</h2>
                <p>${elem.description}</p>
            </figure>`
})

document.querySelector("section").innerHTML = content