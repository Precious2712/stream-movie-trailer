
const comedyFilms = localStorage.getItem('comedyId')
const comedy = JSON.parse(comedyFilms)
console.log(comedy);

const displayComedy = document.getElementById('displayComedy');
const summary = document.getElementById('summary');
const comedyCasts = document.getElementById('comedyCasts');
const playComedyTriller = document.getElementById('playComedyTriller');
const closeDiv = document.getElementById('close');

function comedyShow() {
    displayComedy.innerHTML = ''
    comedy.map((el, i) => {
        displayComedy.innerHTML += `<div class="box">
            <img src="${el.back_drop_img}" alt="${el.title}">
        </div>`;
    })
}

comedyShow();


function showDetails() {
    summary.innerHTML = ''
    comedy.map((el, i) => {
        summary.innerHTML += `
           <div class="sum">
               <p>${el.summary}</p>
           </div class>
        `
    });
}

showDetails();


function showComedyCastsAndImg() {
    comedyCasts.innerHTML = '';
    comedy.map((el, idx) => {
        if (el.actorImg && el.actorNames) {
            el.actorNames.forEach((element, index) => {
                const imgSrc = el.actorImg[index];
                comedyCasts.innerHTML += `
                   <div class="cast">
                        <img src="${imgSrc}" alt="${name}">
                        <p>${element}</p>
                   </div>
                `
            });
        }
    });
}

showComedyCastsAndImg();


function playTrailer() {
    playComedyTriller.innerHTML = '';
    comedy.map((lem, index) => {
        playComedyTriller.innerHTML += `
         <div class="backImg">
              <iframe width="560" height="315" src="${lem.imgToDisplay}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        `
    })
}

playTrailer();


function openModal() {
    closeDiv.hidden = false;
    closeDiv.style.transition = 'transform 0.5s ease-out';
    closeDiv.style.transform = 'translateY(-560%)';
}

function stay() {
    closeDiv.hidden = true;
}

function directHomePage() {
    window.location.href = `../index.html`;
}