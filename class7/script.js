let main = document.querySelector(".mainn")

const user = [
  {
    image: "./om",
    name: "Aarav Sharma",
    profession: "Web Developer",
    description: "Specializes in building responsive websites using HTML, CSS, and JavaScript."
  },
  {
    image: "https://example.com/images/person2.jpg",
    name: "Priya Mehta",
    profession: "Graphic Designer",
    description: "Creative designer skilled in Adobe Photoshop and Illustrator."
  },
  {
    image: "https://example.com/images/person3.jpg",
    name: "Rohan Patil",
    profession: "Cybersecurity Analyst",
    description: "Focuses on IDS/IPS systems and network security monitoring."
  },
  {
    image: "https://example.com/images/person4.jpg",
    name: "Sneha Kulkarni",
    profession: "Data Scientist",
    description: "Works with Python, machine learning, and big data visualization."
  },
  {
    image: "https://example.com/images/person5.jpg",
    name: "Vikram Desai",
    profession: "Civil Engineer",
    description: "Experienced in structural design and project management."
  },
  {
    image: "https://example.com/images/person6.jpg",
    name: "Ananya Joshi",
    profession: "Mobile App Developer",
    description: "Develops cross-platform apps using Flutter and React Native."
  }
];


let sum = '';
user.forEach(function(elem){

    sum += `
    <div class="card">
            <img src="./om-bhau.jpg" alt="">
            <h1>${elem.name}</h1>
            <h2>${elem.profession}</h2>
            <h3>${elem.description}</h3>
        </div>`
})

main.innerHTML += sum; // apply not override