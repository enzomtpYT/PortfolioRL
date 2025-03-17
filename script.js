projects = [
        {
            "title": "Hotel Neptune",
            "dates": "2023",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam dolor nesciunt harum, enim repudiandae laborum voluptatum.",
            "image": "assets/project/neptune.webp",
            "source": "https://github.com/thaliumFr/HotelNeptune"
        },
        {
            "title": "Travelly",
            "dates": "2023",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam dolor nesciunt harum, enim repudiandae laborum voluptatum.",
            "image": "assets/project/travelly.webp",
            "source": "https://github.com/enzomtpYT/Travelly"
        }
    ]

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
    const divprojects = newElement('div', 'projects');
    const divproject = newElement('div', 'project');
    const aimg = newElement('a', '');
    const img = newElement('img', 'projimg');
    const divprojdesctitle = newElement('div', 'projdesctitl');
    const aprojecttitl = newElement('a', 'projecttitl');
    const pprojectdesc = newElement('p', 'projectdesc');

    aprojecttitl.href = proj.source;
    aprojecttitl.target = "_blank";
    aprojecttitl.textContent = `${proj.title} (${proj.dates})`;
    pprojectdesc.textContent = proj.description;
    divprojdesctitle.appendChild(aprojecttitl);
    divprojdesctitle.appendChild(pprojectdesc);

    aimg.href = proj.source;
    aimg.target = "_blank";
    img.src = proj.image;
    aimg.appendChild(img);

    if (index % 2 !== 0) {
        divproject.appendChild(divprojdesctitle);
        divproject.appendChild(aimg);
    } else {
        divproject.appendChild(aimg);
        divproject.appendChild(divprojdesctitle);
    }

    divprojects.appendChild(divproject);
    document.getElementById('projects').appendChild(divprojects);
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