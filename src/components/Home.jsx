import React, { useState, useEffect} from 'react'
import axios from 'axios';

const Home = () => {
    const [hero, setHero] = useState([]);
    const ACCESS_TOKEN= 10227175874088628;
    const BASE_URL= "https://superheroapi.com/api.php/";
    const URL = `${BASE_URL}${ACCESS_TOKEN}`;
    console.log(URL);

    const apiCall = async () => {
    const api = await axios.get(`${BASE_URL}${ACCESS_TOKEN}/1`);
    const response = api.data;
    if(response && response.data) {
        const newHero = [...hero, ...response.data];
        setHero(newHero);
    }
    // console.log(Object.values(response.powerstats.intelligence));
    // console.log(response);
    }
    // const searchSuperHeros = async () => {
    //     const response = await axios.get(`http://localhost:5000/${term}`);
    //     if (response && response.data && response.data.results) {
    //       const newHeros = [...heros, ...response.data.results].reverse();
    //       setHeros(newHeros);
    //     }
    //   };
    useEffect(() => {
        apiCall();
    }, [])
    
    return (
        <div>
            {
             hero.length > 0 && <span>{hero.name}</span>
                    
                

            }
            
        </div>
    )
}

export default Home
