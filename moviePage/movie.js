
const movieDetails = localStorage.getItem('movieId')

const movies = JSON.parse(movieDetails)
console.log('change', movies);

const displayMovieContent = document.getElementById('displayMovieContent');
const list = document.getElementById('acts');
const summary = document.getElementById('summary');
const movieTrailler = document.getElementById('playTrailler');
const closeDiv = document.getElementById('close');

function showMoviePage() {
    displayMovieContent.innerHTML = ''
    movies.map((el, i) => {
        displayMovieContent.innerHTML += `<div class="box">
            <img src="${el.back_drop_img}" alt="${el.title}">
        </div>`;
    })
}

showMoviePage();


function showDetails() {
    summary.innerHTML = ''
    movies.map((el, i) => {
        summary.innerHTML += `
           <div class="sum">
               <p>${el.summary}</p>
           </div class>
        `
    });
}

showDetails();

function showMovieCast() {
    list.innerHTML = '';
    movies.map((el, idx) => {
        if (el.actorImg && el.actorNames) {
            el.actorNames.forEach((element, index) => {
                const imgSrc = el.actorImg[index];
                list.innerHTML += `
                   <div class="cast">
                        <img src="${imgSrc}" alt="${null}">
                        <p>${element}</p>
                   </div>
                `
            });
        }
    });
}

showMovieCast();


function traillers() {
    movieTrailler.innerHTML = '';
    movies.map((lem, index) => {
        movieTrailler.innerHTML += `
        <div class="backImg">
              <iframe width="560" height="315" src="${lem.imgToDisplay}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        `
    })
}

traillers();


function openModal() {
    closeDiv.hidden = false;
    closeDiv.style.transition = 'transform 0.5s ease-out';
    closeDiv.style.transform = 'translateY(-560%)';
}

function stay() {
    closeDiv.hidden = true;
}

function directHomePage() {
    window.location.href = `../home.html`;
}