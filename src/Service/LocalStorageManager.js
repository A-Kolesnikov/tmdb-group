const dB = localStorage

const tmdbInitData = {      //initial static data for testing
    loggedUser: '',
    users: [
        {
            id: 1,
            username: 'Bret',
            password: '0000',
            favLang: '',
            favGenre: '',
            voice: '',
            viewedMovies: []
        },
        {
            id: 2,
            username: 'Antonette',
            password: '1234',
            favLang: 'en',
            favGenre: 1,
            voice: '',
            viewedMovies: []
        }
    ],
    languages: {
        "de": "german",
        "en": "english",
        "es": "spanish",
        "he": "hebrew",
        "ru": "russian"
    }
}

export function initStorage() {  //if there is no data about prject in local storage - create object with default data
    if (!dB.getItem('tmdbData')) {
        dB.setItem('tmdbData', JSON.stringify(tmdbInitData))
    }
}

export function clearStorage() {
    dB.removeItem('tmdbData')
}

function updStorage(newDdata){  //update localStorage if some data was changed
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