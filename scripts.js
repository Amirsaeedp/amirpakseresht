// JavaScript for Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// JavaScript for Modal and Project Details
function openModal(project) {
    let projectTitle = '';
    let projectDescription = '';
    let images = [];

    switch (project) {
        case 'project1':
            projectTitle = 'Editorial for New Scientist | 2024';
            projectDescription = 'One of the most fascinating projects I have worked on was Editorial for New Scientist. It involved editorial an intriguing article about the bizarre realm of sleep for publication in New Scientist magazine, encompassing everything from design and typography to cover design and illustrations. Thus, I crafted typography, cover design, and illustrations with the same concept for this project, creating a surreal space aiming to narrate a peculiar tale of sleep, narcolepsy, and wakefulness.';
            images = ['PA06.jpg', 'PA05.jpg', 'PA04.jpg'];
            break;
        case 'project2':
            projectTitle = 'Amir Saeed Pakseresht Personal Branding | 2018';
            projectDescription = 'For my personal branding design, I chose to create an iconic logo rather than using the initials of my name. I believe an iconic logo will better align with my future career development. I selected two simple abstractions from my fields of interest: a curve to symbolize architecture and tradition, and a rectangle to represent the modern world and graphic design. By combining these elements, I crafted a shape that reflects my design philosophy and the fusion of architectural and graphic design.';
            images = ['PB03.jpg', 'PB02.jpg', 'PB04.jpg'];
            break;
        case 'project3':
            projectTitle = 'Aurelia Restaurant Branding | 2024';
            projectDescription = 'This is a visual identity design project and restaurant menu for Aurelia. Aurelia is a luxurious French restaurant located in the heart of Toronto. The design aims to capture the essence of French elegance and sophistication, using luxurious colors that evoke the golden nights of Paris.';
            images = ['PC02.jpg', 'PC03.jpg', 'PC04.jpg'];
            break;
        case 'project4':
            projectTitle = 'Davam Studio | 2019';
            projectDescription = 'The Maryam Mahdaviyeh Architecture and Construction Office has decided to undergo a complete rebranding in late 2023. This decision reflects the company s expansion and the addition of various areas within the construction industry to its portfolio. The first step in this rebranding initiative is changing the company s name to DAVAM, a Persian word meaning durability, fixity, permanence, strength, and staying power. This name embodies the company s resilience and dedication, as it has strived for progress over its approximately 15-year existence and aims to be among the best in the field of architecture.';
            images = ['PD02.jpg', 'PD03.jpg', 'PD04.jpg'];
            break;
        case 'project5':
            projectTitle = 'The Winds of Winter | 2024';
            projectDescription = 'Designing the cover for "The Winds of Winter" by George R.R. Martin was one of those projects where I endeavored to encapsulate the essence of each episode of the “Game of Thrones” series in a single cover. The cold spirit of Winterfell, the presence of beloved main characters, all within one frame, a confrontation, and an epic battle! I hope that you feel the same passion and excitement while viewing this cover as I did while designing it. Enjoy!';
            images = ['PE02.jpg', 'PE03.jpg', 'PE04.jpg'];
            break;
        case 'project6':
            projectTitle = 'Patio Studio';
            projectDescription = 'The Pazio Architecture Group decided to consult me for their visual identity design. Given my academic background in architecture, I understood the significance of the Pazio space in architectural design and defined it as an intermediate space between the interior and exterior of a building. Therefore, I aimed to reflect this spatial fluidity in the design of the letters "P" and "A".';
            images = ['PF01.jpg', 'PF02.jpg', 'PF03.jpg'];
            break;
        
        default:
            break;
    }

    document.getElementById('projectTitle').innerText = projectTitle;
    document.getElementById('projectDescription').innerText = projectDescription;

    
    for (let i = 0; i < images.length; i++) {
        document.getElementById(`slideImage${i+1}`).src = images[i];
        document.getElementById(`slideImage${i+1}`).style.display = 'block';
    }

    document.getElementById('projectModal').style.display = "block";
    showSlidesModal(1);
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}

// Slideshow logic inside modal
let slideModalIndex = 1;

function plusSlides(n) {
    showSlidesModal(slideModalIndex += n);
}

function showSlidesModal(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideModalIndex = 1 }
    if (n < 1) { slideModalIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideModalIndex - 1].style.display = "block";
}

var modal = document.getElementById("projectModal");

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
}

// JavaScript for Navigation Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    fullscreenMenu.style.display = (fullscreenMenu.style.display === 'block') ? 'none' : 'block';
}
