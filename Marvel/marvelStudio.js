
const getMarvel = localStorage.getItem('marvelId');
const marvelFilms = JSON.parse(getMarvel);

console.log('marvel', marvelFilms);

const marvelFilmsStudio = document.getElementById('marvelFilmsStudio');
const summary = document.getElementById('summary');
const marvelCasts = document.getElementById('marvelCasts');
const playMarvelTriller = document.getElementById('playMarvelTriller')
const closeDiv = document.getElementById('close');

function showMarvelFilms() {
    marvelFilmsStudio.innerHTML = '';
    marvelFilms.map((el, i) => {
        marvelFilmsStudio.innerHTML += `<div class="box">
            <img src="${el.back_drop_img}" alt="${el.title}">
        </div>`;
    });
};

showMarvelFilms();


function showDetails() {
    summary.innerHTML = ''
    marvelFilms.map((el, i) => {
        summary.innerHTML += `
           <div class="sum">
               <p>${el.summary}</p>
           </div class>
        `
    });
}

showDetails();

function showNameAndImg() {
    marvelFilms.map((e) => {
        e.actorNamesAndImages.map((elem) => {
            if (elem.actorName && elem.actorImage) {
                elem.actorName.forEach((name, index) => {
                    const imgSrc = elem.actorImage[index] || "";
                    marvelCasts.innerHTML += `
                        <div class="cast">
                            <img src="${imgSrc}" alt="${name}">
                            <p>${name}</p>
                        </div>`;
                });
            }
        });
    });
}

showNameAndImg();

function playVideoTrailler() {
    playMarvelTriller.innerHTML = '';
    marvelFilms.map((lem, index) => {
        playMarvelTriller.innerHTML += `
        <div class="backImg">
            <iframe width="560" height="315" src="${lem.imgToDisplay}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        `
    })
}

playVideoTrailler();


function openModal() {
    closeDiv.hidden = false;
    closeDiv.style.transition = 'transform 0.5s ease-out';
    closeDiv.style.transform = 'translateY(-560%)';
}

function stay() {
    closeDiv.hidden = true;
}

function directHomePage() {
    window.location.href = `../HomePage/home.html`;
}