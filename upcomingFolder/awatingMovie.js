
const looming = localStorage.getItem('inMakingId');
const upcoming = JSON.parse(looming);
console.log(upcoming, 'inmaking');

const backgroundImg = document.getElementById('backgroundImg');
const pathImg = document.getElementById('pathImg');
const detail = document.getElementById('detail');
const castAndCrew = document.getElementById('castAndCrew');
const iframe = document.getElementById('iframe');
const closeDiv = document.getElementById('close');


function setBackgroundImage() {
    upcoming.map((el, i) => {
        backgroundImg.style.backgroundImage = `
            linear-gradient(to bottom, rgba(0, 0, 50, 0.5), rgba(0, 0, 0, 0.1)), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), 
            url(${el.background_img})
        `;
        backgroundImg.style.backgroundSize = 'cover';
        backgroundImg.style.backgroundRepeat = 'no-repeat';
        backgroundImg.style.height = '100vh';
        backgroundImg.style.backgroundPosition = 'center';
        backgroundImg.style.backgroundBlendMode = 'multiply';
        // backgroundImg.classList.add('background-container')
    });
}

setBackgroundImage();


function imag() {
    pathImg.innerHTML = '';

    pathImg.innerHTML = upcoming.map((el) => {
        return `
        <div class='off'>
            <img src="${el.path_img}" alt="">
        </div>`;
    })
}

imag();


function showDetails() {
    detail.innerHTML = '';
    upcoming.forEach((el, i) => {
        el.overview.forEach((elem, ix) => {
            const movieGenres = elem.genre
            detail.innerHTML += `
                <div class="details">
                    <h1>${elem.title}</h1>
                    <h5>${movieGenres}</h5>
                    <h1>${elem.headtags}</h1>
                    <p>${elem.summary}</p>
                </div>
            `;
        });
    });
}

showDetails();


function showCast() {
    castAndCrew.innerHTML = '';
    upcoming.forEach((el, i) => {
        if (el.actors && el.crew) {
            el.actors.forEach((elem, index) => {
                const names = el.crew[index] || "";
                castAndCrew.innerHTML += `
                <div class="cast">
                  <img src="${elem}" alt="">
                  <p>${names}</p>
                </div>
                `
            });

        }
    });
};

showCast();


function playTrailer() {
    iframe.innerHTML = ''
    upcoming.forEach((e, i) => {
        iframe.innerHTML += `
        <div class="backImg">
            <iframe width="560" height="315" src="${e.iframes}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        `
    });
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
    window.location.href = `../HomePage/home.html`;
}