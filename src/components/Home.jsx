import React, { useState, useEffect} from 'react'
import axios from 'axios';

const Home = () => {
    const [hero, setHero] = useState([]);
    const ACCESS_TOKEN= 10227175874088628;
    const BASE_URL= "https://superheroapi.com/api.php/";
    // const URL = `${BASE_URL}${ACCESS_TOKEN}`;



    useEffect(() => {
        async function apiCall() {
            const api = await axios.get(`${BASE_URL}${ACCESS_TOKEN}/1`);
            const response = api.data;
            console.log(response);
            if(response) {
                const newHero = [...hero, response];
                setHero(newHero);
            }
            }
            apiCall();
    }, [])
    





    return (
        <div>
            {
             hero?.length > 0 && hero.map((el) => <ul>
                 <li>Name: {el.name}</li>
                 <li>Gender: {el.appearance.gender}</li>
                 <li>Id:{el.id}</li>
                 <li>Race: {el.appearance.race}</li>
                 <li>Eye Color: {el.appearance["eye-color"]}</li>
                 <li>Alignment: {el.biography.alignment}</li>
                 <img src={el.image.url} alt="not found" width="350px" height="240px" /> 
                 </ul>
                 
                 ) 
                    
                

            }
            
        </div>
    )
}

export default Home
