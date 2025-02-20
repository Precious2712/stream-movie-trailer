
const ratingFilms = localStorage.getItem('rateId');
const rated = JSON.parse(ratingFilms);
console.log('rating', rated);

const ratedMovies = document.getElementById('ratedMovies');
const summary = document.getElementById('summary');
const acts = document.getElementById('acts');
const ratedTrailerMovies = document.getElementById('ratedTrailerMovies');
const closeDiv = document.getElementById('close');


function showBackDropImg() {
    ratedMovies.innerHTML = '';
    rated.map((el, i) => {
        ratedMovies.innerHTML += `<div class="box">
            <img src="${el.back_drop_img}" alt="${el.title}">
        </div>`;
    });
}

showBackDropImg();


function showDetails() {
    summary.innerHTML = ''
    rated.map((el, i) => {
        summary.innerHTML += `
           <div class="sum">
               <p>${el.summary}</p>
           </div class>
        `
    });
}

showDetails();


function showNameAndImg() {
    rated.map((e) => {
        e.actorNamesAndImages.map((elem) => {
            if (elem.actorName && elem.actorImage) {
                elem.actorName.forEach((name, index) => {
                    const imgSrc = elem.actorImage[index] || "";
                    acts.innerHTML += `
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


function playRatedTrailler() {
    ratedTrailerMovies.innerHTML = '';
    rated.map((lem, index) => {
        ratedTrailerMovies.innerHTML += `
        <div class="backImg">
            <iframe width="560" height="315" src="${lem.imgToDisplay}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        `
    })
}

playRatedTrailler();


function openModal() {
    closeDiv.hidden = false;
    closeDiv.style.transition = 'transform 0.5s ease-out'; 
    closeDiv.style.transform = 'translateY(60%)'; 
}

function directHomePage() {
    window.location.href = `../index.html`;
}

function stay() {
    closeDiv.hidden = true;
}