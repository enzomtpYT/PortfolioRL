projects = [
        {
            "title": "Hotel Neptune",
            "dates": "2024",
            "description": "**Système de gestion hôtelière** avec une interface épurée.",
            "image": "assets/project/neptune.webp",
            "links": {"source": "https://github.com/thaliumFr/HotelNeptune"},
            "tags": ["HTML", "SCSS", "JavaScript", "PHP", "MySQL", "Twig"]
        },
        {
            "title": "Travelly",
            "dates": "2024",
            "description": "**Application de planification de voyages** pour organiser des séjours efficacement.",
            "image": "assets/project/travelly.webp",
            "links": {"source": "https://github.com/enzomtpYT/Travelly"},
            "tags": ["HTML", "CSS", "JavaScript"]
        },
        {
            "title": "Portfolio",
            "dates": "2024-2025",
            "description": "**Mon portfolio personnel** pour présenter mes projets et compétences.",
            "image": "assets/project/portfolio.webp",
            "links": {"source": "https://github.com/enzomtpYT/PortfolioRL"},
            "tags": ["HTML", "CSS", "JavaScript"]
        },
        {
            "title": "SportsApp",
            "dates": "2025",
            "description": "**Application de commande de materiel sportif** pour les clubs et associations.",
            "image": "assets/project/sportsapp.webp",
            "links": {"source": "https://github.com/thaliumFr/sportshop2"},
            "tags": ["React", "Node.js", "Express", "MariaDB", "Bun"]
        },
        {
            "title": "EPSI Waitlist",
            "dates": "2025",
            "description": "**Application de gestion de liste d'attente** pour l'EPSI Montpellier.",
            "image": "assets/project/epsiwaitlist.webp",
            "links": {"source": "https://github.com/enzomtpYT/EPSI-Waitlist"},
            "tags": ["Python", "PostgreSQL", "Twig", "HTML", "CSS", "JavaScript"]
        }
];

function newElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function disableLoading() {
    if (isPageLoaded) {
        loadinganim.style.opacity = "0";
        // wait 1s
        setTimeout(() => {
        loadinganim.style.display = "none";
        }, 1050);
    }
}

projects.forEach((proj, index) => {
    // Get the cardcontainer element
    const cardContainer = document.querySelector('.cardcontainer');
    
    // Create card element
    const card = newElement('div', 'card');
    card.id = `card${index + 1}`;
    
    // Create card title
    const cardTitle = newElement('h3', 'cardtitle');
    cardTitle.textContent = proj.title + ` (${proj.dates})`;
    
    // Create card image
    const cardImg = newElement('img', 'cardimg');
    cardImg.src = proj.image;
    cardImg.alt = `${proj.title} Image`;
    
    // Create card description
    const cardDesc = newElement('p', 'carddesc');
    cardDesc.innerHTML = marked.parse(proj.description);
    
    // Create card tags container
    const cardTags = newElement('div', 'cardtags');
    
    // Add tags to container
    proj.tags.forEach(tag => {
        const tagElement = newElement('div', 'tag');
        tagElement.textContent = tag;
        cardTags.appendChild(tagElement);
    });
    
    // Create card links container
    const cardLinks = newElement('div', 'cardlinks');
    
    // Add GitHub link if available
    if (proj.links && proj.links.source) {
        const githubLink = document.createElement('a');
        githubLink.href = proj.links.source;
        githubLink.id = `card${index + 1}git`;
        githubLink.className = 'cardlink';
        
        const githubIcon = document.createElement('i');
        githubIcon.className = 'fa-brands fa-github';
        
        githubLink.appendChild(githubIcon);
        cardLinks.appendChild(githubLink);
    }
    
    // Append all elements to the card
    card.appendChild(cardTitle);
    card.appendChild(cardImg);
    card.appendChild(cardDesc);
    card.appendChild(cardTags);
    card.appendChild(cardLinks);
    
    // Append the card to the container
    cardContainer.appendChild(card);
});

// Marked

desc = `
# Hello!

## Je m'appelle **Enzo Joré**.

J'ai 20 ans et je suis actuellement étudiant, je fais un **BTS SIO** (Services Informatiques aux Organisations) à l'EPSI de montpellier et j'en suis a ma **deuxieme année**, j'ai pris l'option **SLAM** (Solutions Logicielles et Applications Métier) qui s'apparente à l'option des developpeur informatique.

J'ai fait ce choix car depuis que je suis petit j'ai toujours eu une certaine aisance avec l'infomartique et la programmation, je suis très curieux et toujours pret à apprendre de nouvelles choses et technologies, ce qui m'a permis d'avancer plutot rapidement dans l'apprentissage de la programmation.

Après mon BTS SIO mon but serait de continuer ma formation à l'EPSI encore 3 ans pour au final avoir un master en Informatique
`

document.getElementById('abtme').innerHTML = marked.parse(desc);

window.addEventListener("load", function(){ 
    isPageLoaded = true;
    disableLoading();
});