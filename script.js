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

J'ai 20 ans et je suis actuellement étudiant, je fais un **BTS SIO** (Services Informatiques aux Organisations) à l'EPSI de montpellier et j'en suis a ma **deuxieme année**, j'ai pris l'option **SLAM** (Solutions Logicielles et Applications Métier) qui s'apparente à l'option des développeurs informatique.

J'ai fait ce choix car depuis que je suis petit j'ai toujours eu une certaine aisance avec l'informatique et la programmation, je suis très curieux et toujours pret à apprendre de nouvelles choses et technologies, ce qui m'a permis d'avancer plutot rapidement dans l'apprentissage de la programmation.

Après mon BTS SIO mon but serait de continuer ma formation à l'EPSI encore 3 ans pour au final avoir un master en Informatique
`

document.getElementById('abtme').innerHTML = marked.parse(desc);

// BTS SIO explanations
const btsExplanations = {
    slam: `
# BTS SIO - Option SLAM

## **Solutions Logicielles et Applications Métier**

Le **BTS SIO option SLAM** est une formation de 2 ans qui forme des **développeurs informatiques** spécialisés dans la création d'applications.

### **Compétences développées :**
- **Développement d'applications** (web, mobile, desktop)
- **Programmation** dans différents langages (Python, PHP, JavaScript, Java, C#...)
- **Conception de bases de données** (MySQL, PostgreSQL, MongoDB...)
- **Frameworks et technologies modernes** (React, Node.js, Laravel, Django...)
- **Gestion de projet** et méthodes agiles
- **Tests et débogage** d'applications

### **Débouchés professionnels :**
- Développeur d'applications
- Développeur web/mobile
- Analyste programmeur
- Concepteur d'applications
- Chef de projet junior

*Cette option correspond parfaitement à mon profil car j'ai toujours eu une passion pour la programmation et la création d'applications.*
`,
    sisr: `
# BTS SIO - Option SISR

## **Solutions d'Infrastructure, Systèmes et Réseaux**

Le **BTS SIO option SISR** est une formation de 2 ans qui forme des **administrateurs systèmes et réseaux**.

### **Compétences développées :**
- **Administration de systèmes** (Windows Server, Linux, virtualisation)
- **Gestion de réseaux** (configuration, sécurité, surveillance)
- **Cybersécurité** et protection des données
- **Support technique** et maintenance informatique
- **Cloud computing** et services en ligne
- **Supervision d'infrastructure** informatique

### **Débouchés professionnels :**
- Administrateur systèmes et réseaux
- Technicien support informatique
- Gestionnaire de parc informatique
- Responsable sécurité informatique
- Technicien cloud et virtualisation

*Cette option est idéale pour ceux qui préfèrent l'aspect infrastructure et sécurité informatique plutôt que le développement.*
`
};

// Generate dual BTS layout
function generateBTSLayout() {
    const btsContainer = document.getElementById('btsedxplain');
    
    // Create the dual-bts container
    const dualBTSContainer = newElement('div', 'dual-bts-container');
    
    // Create section titles
    const btsSectionTitles = newElement('div', 'bts-section-titles');
    
    const slamTitle = newElement('h3', 'bts-section-title slam');
    slamTitle.textContent = 'BTS SIO - SLAM';
    
    const sisrTitle = newElement('h3', 'bts-section-title sisr');
    sisrTitle.textContent = 'BTS SIO - SISR';
    
    btsSectionTitles.appendChild(slamTitle);
    btsSectionTitles.appendChild(sisrTitle);
    
    // Add separator
    const btsSeparator = newElement('div', 'bts-separator');
    
    // Create containers for each section
    const slamContainer = newElement('div', 'bts-container slam');
    const sisrContainer = newElement('div', 'bts-container sisr');
    
    // Create SLAM content
    const slamContent = newElement('div', 'bts-content');
    slamContent.innerHTML = marked.parse(btsExplanations.slam);
    slamContainer.appendChild(slamContent);
    
    // Create SISR content
    const sisrContent = newElement('div', 'bts-content');
    sisrContent.innerHTML = marked.parse(btsExplanations.sisr);
    sisrContainer.appendChild(sisrContent);
    
    // Append everything to the dual container
    dualBTSContainer.appendChild(btsSectionTitles);
    dualBTSContainer.appendChild(slamContainer);
    dualBTSContainer.appendChild(btsSeparator);
    dualBTSContainer.appendChild(sisrContainer);
    
    // Append dual container to the BTS section
    btsContainer.appendChild(dualBTSContainer);
}

// Education data
const educationData = [
    {
        "title": "Lycée Jean François Champollion",
        "degree": "Baccalauréat Technologique STI2D option SIN",
        "dates": "2020 - 2023",
        "description": "Baccalauréat Technologique en Sciences et Technologies de l'Industrie et du Développement Durable, spécialité Systèmes d'Information et Numérique."
    },
    {
        "title": "EPSI Montpellier",
        "degree": "BTS SIO option SLAM",
        "dates": "2023 - 2025",
        "description": "Formation en Services Informatiques aux Organisations avec spécialisation en Solutions Logicielles et Applications Métier (SLAM) pour devenir développeur informatique."
    },
    {
        "title": "EPSI Montpellier",
        "degree": "Master en Ingénierie Informatique",
        "dates": "2025 - 2028",
        "description": "Formation d'ingénieurie en informatique avec spécialisation en développement logiciel."
    }
];

// Professional data
const professionalData = [
    {
        "title": "Entreprise Joré Jardin",
        "position": "Développeur Web CMS",
        "dates": "2024",
        "description": "Stage de fin d'études BTS. Développement d'applications web avec CMS (WordPress et oodo) pour la création de sites vitrines et ventes en ligne. Utilisation des technologies HTML/CSS/JS"
    },
    {
        "title": "Entreprise EPSI Montpellier",
        "position": "Développeur Full Stack",
        "dates": "2025",
        "description": "Création de liste d'attente pour les étudiants de l'EPSI Montpellier. Développement d'une application web en Python avec PostgreSQL, Twig, HTML, CSS et JavaScript."
    }
];

// Generate dual timelines for school and professional careers
function generateDualTimelines() {
    const parcoursContainer = document.getElementById('parcours');
    
    // Create the dual-timeline container
    const dualContainer = newElement('div', 'dual-timeline-container');
    
    // Create section titles
    const sectionTitles = newElement('div', 'section-titles');
    
    const educationTitle = newElement('h3', 'section-title education');
    educationTitle.textContent = 'Parcours Scolaire';
    
    const professionalTitle = newElement('h3', 'section-title professional');
    professionalTitle.textContent = 'Parcours Professionnel';
    
    sectionTitles.appendChild(educationTitle);
    sectionTitles.appendChild(professionalTitle);
    
    // Add separator
    const separator = newElement('div', 'timeline-separator');
    
    // Create containers for each timeline
    const educationContainer = newElement('div', 'timeline-container education');
    const professionalContainer = newElement('div', 'timeline-container professional');
    
    // Add education items
    educationData.forEach((edu, index) => {
        // Create education card
        const educationCard = newElement('div', 'education-card');
        
        // Create card content
        const cardHeader = newElement('div', 'education-header');
        
        const cardTitle = newElement('h3', 'education-title');
        cardTitle.textContent = edu.title;
        
        const cardDegree = newElement('h4', 'education-degree');
        cardDegree.textContent = edu.degree;
        
        const cardDate = newElement('div', 'education-date');
        cardDate.textContent = edu.dates;
        
        const cardDesc = newElement('p', 'education-desc');
        cardDesc.textContent = edu.description;
        
        // Append elements to card
        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(cardDegree);
        
        educationCard.appendChild(cardHeader);
        educationCard.appendChild(cardDate);
        educationCard.appendChild(cardDesc);
        
        // Create dot for timeline
        const timelineDot = newElement('div', 'timeline-dot');
        
        // Create the item container (all on same side for single column)
        const timelineItem = newElement('div', 'timeline-item');
        
        timelineItem.appendChild(educationCard);
        timelineItem.appendChild(timelineDot);
        
        // Append to education timeline container
        educationContainer.appendChild(timelineItem);
    });
    
    // Add professional items
    professionalData.forEach((prof, index) => {
        // Create professional card
        const professionalCard = newElement('div', 'education-card professional-card');
        
        // Create card content
        const cardHeader = newElement('div', 'education-header');
        
        const cardTitle = newElement('h3', 'education-title');
        cardTitle.textContent = prof.title;
        
        const cardPosition = newElement('h4', 'education-degree');
        cardPosition.textContent = prof.position;
        
        const cardDate = newElement('div', 'education-date');
        cardDate.textContent = prof.dates;
        
        const cardDesc = newElement('p', 'education-desc');
        cardDesc.textContent = prof.description;
        
        // Append elements to card
        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(cardPosition);
        
        professionalCard.appendChild(cardHeader);
        professionalCard.appendChild(cardDate);
        professionalCard.appendChild(cardDesc);
        
        // Create dot for timeline
        const timelineDot = newElement('div', 'timeline-dot professional-dot');
        
        // Create the item container (all on same side for single column)
        const timelineItem = newElement('div', 'timeline-item');
        
        timelineItem.appendChild(professionalCard);
        timelineItem.appendChild(timelineDot);
        
        // Append to professional timeline container
        professionalContainer.appendChild(timelineItem);
    });
    
    // Create center lines for timelines
    const educationLine = newElement('div', 'timeline-line');
    educationContainer.appendChild(educationLine);
    
    const professionalLine = newElement('div', 'timeline-line');
    professionalContainer.appendChild(professionalLine);
    
    // Append everything to the dual container
    dualContainer.appendChild(sectionTitles);
    dualContainer.appendChild(educationContainer);
    dualContainer.appendChild(separator);
    dualContainer.appendChild(professionalContainer);
    
    // Append dual container to the parcours section
    parcoursContainer.appendChild(dualContainer);
}

// Call the functions to generate the dual timelines and BTS layout
document.addEventListener('DOMContentLoaded', function() {
    generateDualTimelines();
    generateBTSLayout();
    
    // Initialize PDFObject for the skills chart PDF
    const pdfUrl = "assets/pdfs/Joré Enzo - BTS SIO - 2025 - Annexe 8-1 - Epreuve E5 - Tableau de synthese.pdf";
    const options = {
        width: "75%",
        page: "1",
        pdfOpenParams: {
            view: "FitH",
            pagemode: "none",
            toolbar: "1",
            statusbar: "0",
            messages: "0",
            navpanes: "0"
        },
        fallbackLink: `<p style="padding: 20px; text-align: center; background: #f5f5f5; border: 1px solid #ddd; border-radius: 5px;">Ce navigateur ne prend pas en charge l'affichage des PDFs intégrés. <a href="${pdfUrl}" target="_blank" style="color: #007bff; text-decoration: none;">Cliquez ici pour ouvrir le PDF dans un nouvel onglet</a>.</p>`
    };
    
    if (typeof PDFObject !== 'undefined') {
        const success = PDFObject.embed(pdfUrl, "#pdf-viewer", options);
        if (!success) {
            console.log("PDFObject embed failed, trying alternative approach");
            // If PDFObject fails, create an iframe as fallback
            document.getElementById("pdf-viewer").innerHTML = `
                <iframe src="${pdfUrl}" width="100%" height="600px" style="border: none;">
                    <p>Ce navigateur ne prend pas en charge l'affichage des PDFs. <a href="${pdfUrl}" target="_blank">Cliquez ici pour télécharger le PDF</a>.</p>
                </iframe>
            `;
        }
    } else {
        console.log("PDFObject not loaded, using iframe");
        // Fallback to iframe if PDFObject is not available
        document.getElementById("pdf-viewer").innerHTML = `
            <iframe src="${pdfUrl}" width="100%" height="600px" style="border: none;">
                <p>Ce navigateur ne prend pas en charge l'affichage des PDFs. <a href="${pdfUrl}" target="_blank">Cliquez ici pour télécharger le PDF</a>.</p>
            </iframe>
        `;
    }
});

window.addEventListener("load", function(){ 
    isPageLoaded = true;
    disableLoading();
});

// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to current section
    function updateActiveNav() {
        const sections = document.querySelectorAll('.sections, #home');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
});