import React, { useEffect, useState } from "react";

import { allData } from "../Service/LocalStorageManager";
import { downloadMovieList } from "../Service/TMDBManager";

import Navbar from "./NavBar";
import Card from "./Card";

const HomePage = () => {
    const [movList1, setMovList1] = useState()
    const [movList2, setMovList2] = useState()

    const data = allData()
    const currentUser = data.users.find(user => user.id == data.loggedUser)

    useEffect(() => {
        downloadMovieList(setMovList1, 3)
    }, [])
    
    let list1 = ''
    if(movList1){
        list1 = movList1.map((movie) => (
            <div className="col-sm-3 mb-4" key={movie.id}>
                <Card
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                h5={movie.title}
                txt={movie.overview}/>
            </div>
        
        ))
    }
    return (
        <div className="container">
            <h2>{`Welcome ${currentUser.username}!`}</h2>
            <div className="row">
            {list1}
            </div>
            
        </div>
    );
}

export default HomePage