const dB = localStorage

const tmdbInitData = {      //initial static data for testing
    loggedUser: 2,          //suppose, that user 2 is logged in
    users: [
        {
            id: 1,
            username: 'Bret',
            password: '0000',
            favLang: 'ru',
            favGenre: '',
            favGallery: 1,
            voice: '',
            viewedMovies: []
        },
        {
            id: 2,
            username: 'Antonette',
            password: '1234',
            favLang: 'he',
            favGenre: 27,
            favGallery: 2,
            voice: '',
            viewedMovies: []
        }
    ],
    languages: [
        {code: 'de', name: 'german'},
        {code: 'en', name: 'english'},
        {code: 'es', name:'spanish'},
        {code: 'he', name: 'hebrew'},
        {code: 'ru', name: 'russian'}
    ]
}

export function initStorage() {  //if there is no data about prject in local storage - create object with default data
    if (!dB.getItem('tmdbData')) {
        dB.setItem('tmdbData', JSON.stringify(tmdbInitData))
    }
}
initStorage()

export function clearStorage() {
    dB.removeItem('tmdbData')
}

export function updStorage(newDdata){  //update localStorage if some data was changed
    dB.setItem('tmdbData', JSON.stringify(newDdata))
}

export function allData() {     //read data from localStorage as single object
    return (JSON.parse(dB.getItem('tmdbData')))
}

export function setUserPassword(id, password) {     //test function to manipulate user data
    const data = allData()
    const user = data.users.find(user => user.id === id);
    if(user){
        user.password = password
        updStorage(data)
    } else {
        console.log("No such user found")
    }
}

export function logOut(){
    const data = allData();
    data.loggedUser = '';
    updStorage(data);
}

function setLoggedUser(id){     //Call, when LogIn successfully 
    const data = allData();
    data.loggedUser = id;
    updStorage(data);
}

//setLoggedUser('1')      //immitates, that user1 with id: 1 Logged in
export function saveMovieToUser(movie) {
    const data = allData();
    const user = data.users.find(user => user.id === data.loggedUser);
    if(user) {
        const isMovieSaved = user.viewedMovies.some(viewedMovie => viewedMovie.id === movie.id);

        if(!isMovieSaved) {
            user.viewedMovies.push(movie);
            updStorage(data);
        }
    } else {
        console.log("No such user found");
    }
}
export function removeMovieFromUser(movieId) {
    const data = allData();
    const user = data.users.find(user => user.id === data.loggedUser);
    if(user) {
        user.viewedMovies = user.viewedMovies.filter(movie => movie.id !== movieId);
        updStorage(data);
    } else {
        console.log("No such user found");
    }
}
