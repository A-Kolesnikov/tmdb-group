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
        list1 = movList1.map((element) => (<Card h5={element.title} txt={element.overview} img={`https://image.tmdb.org/t/p/original`+element.poster_path} key={element.id}/>))
    }
    return (
        <div>
            <Navbar />
            <h2>{`Welcome ${currentUser.username}!`}</h2>
            {list1}

        </div>
    );
}

export default HomePage