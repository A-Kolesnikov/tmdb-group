import React, { useEffect, useState } from "react";

import { allData } from "../Service/LocalStorageManager";
import { downloadMovieList, downloadMovieListByGenre } from "../Service/TMDBManager";

import Card from "./Card";

const HomePage = ({loggedUserID}) => {
    const [movList1, setMovList1] = useState()
    const [movList2, setMovList2] = useState()

    const data = allData()
    const currentUser = data.users.find(user => user.id == loggedUserID)
    let favGallery = 3;
    let favGenre = '';
    if (loggedUserID) {
        favGallery = currentUser.favGallery ? currentUser.favGallery : 3;
        favGenre = currentUser.favGenre ? currentUser.favGenre : '';
    }

    useEffect(() => {
        downloadMovieList(setMovList1, favGallery, loggedUserID)
    }, [loggedUserID])

    useEffect(() => {
        if (favGenre !== '') {
            downloadMovieListByGenre(setMovList2, favGenre, loggedUserID)
        } else {
            setMovList2('')
        }
    }, [loggedUserID])

    let list1 = 'Loading movie gallery'
    let list2 = ''
    if (movList1) {
        if(!favGenre){
        list1 = movList1.map((movie) => (
            <div className="col-sm-3 mb-4" key={'m1'+movie.id}>
                <Card
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    h5={movie.title}
                    txt={movie.overview}
                    movie={movie}  />
            </div>
        ))
    } else {
        list1 = <div className='row d-flex justify-content-center'>
        <div className='col-12'>
            <h2 className='text-center'>Favorite movie gallery</h2>
            <div className='d-flex p-3 text-center' style={{ overflowX: "auto" }}>
                <div className='d-flex flex-row'>
                    {movList1.map((movie) => (
                    <Card
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    h5={movie.title}
                    txt={movie.overview}
                    key={'m1'+movie.id} 
                    movie={movie} />
                    
                    ))}
                </div>
            </div>
        </div>
    </div>
    }
    }
    if (movList2) {
        

        list2 = <div className='row d-flex justify-content-center'>
            <div className='col-12'>
                <h2 className='text-center'>Movies of favorite genre</h2>
                <div className='d-flex p-3 text-center' style={{ overflowX: "auto" }}>
                    <div className='d-flex flex-row'>
                        {movList2.map((movie) => (
                        <Card
                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        h5={movie.title}
                        txt={movie.overview}
                        key={'m2'+movie.id}
                        movie={movie}  />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    }
    return (
        <div className="container">
            <h2>{`Welcome${loggedUserID ? ', '+currentUser.username : ' to TMDB'}!`}</h2>
            <div className="row">
                {list1}
            </div>
            <div className="row ">
                {list2}
            </div>

        </div>
    );
}

export default HomePage