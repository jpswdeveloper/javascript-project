const api_key = '271fad78dba25e0207fe675ccd6311cf'
const Base_Url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=271fad78dba25e0207fe675ccd6311cf';
const Image_path = 'https://image.tmdb.org/t/p/w1280'
const Search_Path = 'https://api.themoviedb.org/3/search/movie?api_key=271fad78dba25e0207fe675ccd6311cf&query="';
const form = document.getElementById('form');
const search = document.getElementById('search')
const movie_content = document.getElementById('movie_cntn')
// run the get Movies

getMovies(Base_Url)

// call asychronous function use it
async function getMovies(url) {
    const data = await fetch(url)
    const movies = await data.json()//convert the object into the json format
    // console.log(movies.results)
    showMovies(movies.results)
}

function showMovies(movies) {
    movies.forEach(movies => {
        const movieEl = document.createElement('div');
        movieEl.innerHTML = ''
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <div class="image-holder">
        <img src="${Image_path + movies.poster_path}" srcset="">
    </div>
    <div class="movie-header">
        <h3>${movies.title}</h3>
        <span class="${getClassByVote(movies.vote_average)}">
            ${movies.vote_average}
        </span>
    </div>
    <div class="movie-description">
        <h3 class="heading">OverView</h3>
        ${movies.overview}
    </div>
        `
        movie_content.appendChild(movieEl)
    });
}

function getClassByVote(vote) {
    if (vote >= 8) {
        return 'green'
    }
    else if (vote >= 5) {
        return 'yellow'
    }
    else {
        return 'red'
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = search.value
    if (searchValue && searchValue !== '') {
        getMovies(Search_Path + searchValue)

        search.value = ''
    }
    else {

        window.location.reload()
    }
})