import { allData } from './LocalStorageManager';

//const fetch = require('node-fetch')
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAwYTBmMWQ3ZjI4ZDcxOTFiOTFmZDczODdkMWE3ZCIsInN1YiI6IjY0OWFmYjFkN2UzNDgzMDBhY2MzOTdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.egwmn-oqHF-VC6_ifTiRFKpiiBvO0slCgTM8cotn3CY'
    }
};

const data = allData()
const currentUser = data.users.find(user => user.id == data.loggedUser)
const currentLanguage = currentUser ? (currentUser.favLang ? currentUser.favLang : "en") : "en" //if there is a logged user and he has favourite language, then use it. Otherwise - use English

export async function downloadGenres(setFunc){  //fetch list of genres in language of user, and use on that list any function, passed as setFunc
    const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?language=${currentLanguage}`
    try {
        let response = await fetch(urlGenres, options)
        let decode = await response.json()
        setFunc(decode.genres)
    } catch (err) {
        console.error('error' + err)
    }
}

export async function downloadMovieList(setFunc, listNumber){   //using example: downloadMovieList(setList, 2) - write top_rated list to your list wariable with useState hook
    const listNames = ['now_playing', 'popular', 'top_rated', 'upcoming']
    const urlList = `https://api.themoviedb.org/3/movie/${listNames[listNumber]}?language=${currentLanguage}`
    try {
        let response = await fetch(urlList, options)
        let decode = await response.json()
        setFunc(decode.results)
    } catch (err) {
        console.error('error' + err)
    }
}

export async function downloadMovie(setFunc, movID){   //using example: downloadMovie(setMovie, 278) - write top_rated list to your list wariable with useState hook
    const urlList = `https://api.themoviedb.org/3/movie/${movID}?language=${currentLanguage}`
    try {
        let response = await fetch(urlList, options)
        let decode = await response.json()
        setFunc(decode)
    } catch (err) {
        console.error('error' + err)
    }
}