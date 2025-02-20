
import { auth } from '../emailAndPassword/Firebase/firebaseConfig.js';
import {
    signOut,
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'


const displayImages = document.getElementById('displayImages');
const parts = document.getElementById('part');
const movieContainer = document.getElementById('movieContainer');
const comedyBox = document.getElementById('comedyBox');
const disneyWorld = document.getElementById('disneyWorld');
const marvelFilmStudio = document.getElementById('marvelFilmStudio');
const moviez = document.getElementById('topRated');
const upComingMoviez = document.getElementById('upComingMoviez');
const logOutHandle = document.getElementById('logOutHandle');
console.log(logOutHandle);


// const images = [
//     {
//         img: '../HomePage/images/174e276e-7409-476a-9a0a-91ca634de247.jpg',
//         words: ['YOUR MOVIES IN ONE PLACE', 'Welcome to Movies Anywhere', 'Learn More']
//     },
//     {
//         img: '../HomePage/images/81782ca8-1dee-425d-8043-bcfbfb9a9499.jpg',
//         words: ['YOUR MOVIES IN ONE PLACE', 'Welcome to Movies Anywhere', 'Learn More']
//     },
//     {
//         img: '../HomePage/images/a6493e24-eced-46a7-a738-d09f54eb35b7.jpg',
//         words: ['YOUR MOVIES IN ONE PLACE', 'Welcome to Movies Anywhere', 'Learn More']
//     },
//     {
//         img: '../HomePage/images/da43ddca-a5b5-4dcc-bed3-34c39b356247.jpg',
//         words: ['YOUR MOVIES IN ONE PLACE', 'Welcome to Movies Anywhere', 'Learn More']
//     },
//     {
//         img: '../HomePage/images/69331429-e5fe-45ce-b567-02057cacead7.jpg',
//         words: ['YOUR MOVIES IN ONE PLACE', 'Welcome to Movies Anywhere', 'Learn More']
//     }
// ];

// let index = 0;
// setInterval(() => {
//     if (index < images.length - 1) {
//         index++;
//     } else {
//         index = 0;
//     }

//     displayImages.innerHTML = `
//         <div class='heroPage'>
//             <img src="${images[index].img}" alt="Hero image">
//         </div>`;
//     parts.innerHTML = images[index].words
//         ? `<div class='text'>
//             <p>${images[index].words[0]}</p>
//             <p>${images[index].words[1]}</p>
//             <p>${images[index].words[2]}</p>
//            </div>`
//         : '';
// }, 4000);

let films = [];
let commdi = [];
let disnnycoll = [];
let marvels = [];
let rate = [];
let inMakingFilms = [];

async function data() {
    try {
        const response = await fetch('http://localhost:2000/api/v1/getAllMoviesInDataBase');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const net = await response.json();
        films = net.movies;

        movieContainer.innerHTML = films.map((el, i) => {
            movieContainer.innerHTML = ''
            return `
                <div onclick="handleGetId('${el._id}')" class="movie-card" id="allMovies">
                    <img src="${el.frontImg}" alt="${el.title}">
                    <p>${el.title}</p>
                </div>
            `;
        })
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

data();

function handleGetId(id) {
    console.log('film', films);
    const selectedMovieId = films.find((el) => el._id === id)
    // console.log('selectedMovieId', JSON.stringify(selectedMovieId.extra));
    localStorage.setItem('movieId', JSON.stringify(selectedMovieId.extra));

    window.location.href = `../moviePage/moviepage.html`;
}

window.handleGetId = handleGetId;


async function comedyTv() {
    try {
        const data = await fetch('http://localhost:2000/api/v2/getAllComedyMovies')
        const comedyMovies = await data.json();
        commdi = comedyMovies.comedies
        // console.log(commdi);
        comedyBox.innerHTML = commdi.map((elem, i) => {
            comedyBox.innerHTML = ''
            return `
               <div onclick="handleSelectComedy('${elem._id}')" class="movie-card">
                    <img src="${elem.frontImg}" alt="${elem.title}">
                    <p>${elem.title}</p>
                </div>
            `
        })
    } catch (error) {
        console.log(error);
    }
}

comedyTv();

function handleSelectComedy(id) {
    const selectedComedyId = commdi.find((el) => el._id === id);

    // console.log('selectedComedyId', JSON.stringify(selectedComedyId.extra));
    localStorage.setItem('comedyId', JSON.stringify(selectedComedyId.extra));
    window.location.href = `../comedy/comedyPage.html`;
}

window.handleSelectComedy = handleSelectComedy;

async function disneyEntertainment() {
    try {
        const res = await fetch('http://localhost:2000/api/v1/getAllDisneyMovies');
        const disneyMovies = await res.json();
        disnnycoll = disneyMovies.disney
        // console.log(disnnycoll);
        disneyWorld.innerHTML = disnnycoll.map((ele, i) => {
            disneyWorld.innerHTML = ''
            return `
                <div onclick="handleSelectDisney('${ele._id}')" class="movie-card">
                    <img src="${ele.frontImg}" alt="${ele.title}">
                    <p>${ele.title}</p>
                </div>
            `
        })
    } catch (error) {
        console.error('Fetch Error:', error.message);
    }
}

disneyEntertainment();

const handleSelectDisney = (id) => {

    const selectedDisneyId = disnnycoll.find((el) => el._id === id);
    if (selectedDisneyId) {
        // console.log('selectedDisneyId', JSON.stringify(selectedDisneyId.extra));
        localStorage.setItem('disneyId', JSON.stringify(selectedDisneyId.extra));
        console.log('Redirecting to Disney page...');
        window.location.href = `../disneyWorld/disney.html`;
        return;
    }
};

window.handleSelectDisney = handleSelectDisney;


async function marvelStudioCollections() {
    try {
        const resData = await fetch('http://localhost:2000/api/v2/getMarvelCollectionsInDataBase')
        const marvelData = await resData.json();
        marvels = marvelData.marvelStudio
        // console.log(marvels);
        marvelFilmStudio.innerHTML = marvels.map((elem, i) => {
            marvelFilmStudio.innerHTML = ''
            return `
                <div onclick="handleSelectMarvel('${elem._id}')" class="movie-card">
                    <img src="${elem.frontImg}" alt="${elem.title}">
                    <p>${elem.title}</p>
                </div>
            `
        });
    } catch (error) {
        console.log(error);
    }
}

marvelStudioCollections();

function handleSelectMarvel(id) {
    const selectedMarvelId = marvels.find((el) => el._id === id);
    if (selectedMarvelId) {
        // console.log('selectedMarvelId', JSON.stringify(selectedMarvelId.extra));
        localStorage.setItem('marvelId', JSON.stringify(selectedMarvelId.extra));
        console.log('Redirecting to Marvel page...');
        window.location.href = `../marvel/marvel.html`;
        return;
    }
};

window.handleSelectMarvel = handleSelectMarvel;


async function upComingRatedMovie() {
    const res = await fetch('http://localhost:2000/api/v3/getTopRatedFilms');
    const topRatedMovies = await res.json();
    rate = topRatedMovies.movieRate

    moviez.innerHTML = rate.map((elem, i) => {
        moviez.innerHTML = ''
        return `
                <div onclick="handleSelectRate('${elem._id}')" class="movie-cards">
                    <img src="${elem.frontImg}" alt="${elem.title}">
                    <p>${elem.title}</p>
                </div>
            `
    });
}

upComingRatedMovie();


function handleSelectRate(id) {
    const selectedRateId = rate.find((el) => el._id === id);
    if (selectedRateId) {
        // console.log('selectedRateId', JSON.stringify(selectedRateId.extra));
        localStorage.setItem('rateId', JSON.stringify(selectedRateId.extra));
        console.log('Redirecting to Rate page...');
        window.location.href = `../topRated/rated.html`;
        return;
    }
};

window.handleSelectRate = handleSelectRate;


async function inMakingFilmsList() {
    const res = await fetch('http://localhost:2000/api/v4/getUpAwaitingMovies');
    const moviesInMaking = await res.json();
    inMakingFilms = moviesInMaking.upcomingMovies
    console.log(inMakingFilms);
    inMakingFilms.forEach((el, i) => {
        upComingMoviez.innerHTML +=
            `
                <div onclick="handleSelectInMaking('${el._id}')" class="movie-cards">
                    <img src="${el.image}" alt="${el.title}">
                    <p>${el.title}</p>
                </div>
            `

    });
};

inMakingFilmsList();


function handleSelectInMaking(id) {
    const selectedInMakingId = inMakingFilms.find((el) => el._id === id);
    if (selectedInMakingId) {
        // console.log('selectedInMakingId', JSON.stringify(selectedInMakingId.extra));
        localStorage.setItem('inMakingId', JSON.stringify(selectedInMakingId.details));
        console.log('Redirecting to InMaking page...');
        window.location.href = `../upcomingFolder/upcomingMovies.html`;
        return;
    }
};

window.handleSelectInMaking = handleSelectInMaking;


async function logUserOut() {
    try {
        await signOut(auth);
        console.log("User signed out successfully!");
        window.location.href = '../Login/loginPage.html';
    } catch (error) {
        console.error("Error signing out:", error.message);
    }
}

logOutHandle.addEventListener('click', logUserOut);


onAuthStateChanged(auth, (user) => {
    console.log('user:', user);
    
    if (!user) {
        window.location.href = "../SignUpPage/signInWithEmailAndPaaword.html";
    }
});