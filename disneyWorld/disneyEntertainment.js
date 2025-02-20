
const disneyCinema = localStorage.getItem('disneyId');
const disneyFilms = JSON.parse(disneyCinema);
console.log('disney', disneyFilms);

const displayDisneyContent = document.getElementById('displayDisneyContent');
const summary = document.getElementById('summary');
const disneyCasts = document.getElementById('disneyCasts');
const playDisneyTriller = document.getElementById('playDisneyTriller');
const closeDiv = document.getElementById('close');

function showDisneyContent() {
    displayDisneyContent.innerHTML = ''
    disneyFilms.map((el, i) => {
        displayDisneyContent.innerHTML += `<div class="box">
            <img src="${el.back_drop_img}" alt="${el.title}">
        </div>`;
    })
}

showDisneyContent();


function showDetails() {
    summary.innerHTML = ''
    disneyFilms.map((el, i) => {
        summary.innerHTML += `
           <div class="sum">
               <p>${el.summary}</p>
           </div class>
        `
    });
}

showDetails();


function showDisneyCastsAndImg() {
    disneyCasts.innerHTML = ''
    disneyFilms.map((el, idx) => {
        el.actorNamesAndImages.map((elem) => {
            if (elem.actorName && elem.actorImage) {
                elem.actorName.forEach((name, index) => {
                    const imgSrc = elem.actorImage[index] || "";
                    disneyCasts.innerHTML += `
                        <div class="cast">
                            <img src="${imgSrc}" alt="${name}">
                            <p>${name}</p>
                        </div>`;
                });
            }
        });
    });
}

showDisneyCastsAndImg();


function playDisneyMovieTrailler() {
    playDisneyTriller.innerHTML = '';
    disneyFilms.map((lem, index) => {
        playDisneyTriller.innerHTML += `
        <div class="backImg">
            <iframe width="560" height="315" src="${lem.imgToDisplay}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        `
    })
}

playDisneyMovieTrailler();


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